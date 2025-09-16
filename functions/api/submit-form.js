// Simple form submission handler that works with Cloudflare Email Routing
export async function onRequestPost(context) {
  const corsHeaders = {
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "POST, OPTIONS",
    "Access-Control-Allow-Headers": "Content-Type",
  };

  try {
    const formData = await context.request.formData();

    // Check for honeypot field (spam protection)
    if (formData.get("_gotcha")) {
      return new Response(
        JSON.stringify({ success: false, error: "Spam detected" }),
        {
          status: 400,
          headers: { "Content-Type": "application/json", ...corsHeaders },
        }
      );
    }

    const data = {
      firstname: formData.get("firstname"),
      lastname: formData.get("lastname"),
      email: formData.get("email"),
      phone: formData.get("phone"),
      subject: formData.get("subject") || "Website Contact",
      message: formData.get("message"),
      timestamp: new Date().toISOString(),
      userAgent: context.request.headers.get("User-Agent"),
      ip: context.request.headers.get("CF-Connecting-IP"),
    };

    // Validate required fields
    if (!data.firstname || !data.lastname || !data.email || !data.phone || !data.message) {
      return new Response(
        JSON.stringify({ success: false, error: "Missing required fields" }),
        {
          status: 400,
          headers: { "Content-Type": "application/json", ...corsHeaders },
        }
      );
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(data.email)) {
      return new Response(
        JSON.stringify({ success: false, error: "Invalid email address" }),
        {
          status: 400,
          headers: { "Content-Type": "application/json", ...corsHeaders },
        }
      );
    }

    // Log the submission (this will appear in Cloudflare Pages Functions logs)
    console.log("📧 New form submission:", {
      name: `${data.firstname} ${data.lastname}`,
      email: data.email,
      subject: data.subject,
      timestamp: data.timestamp
    });

    // Format email for forwarding
    const emailSubject = `[BooIsha Website] ${data.subject}`;
    const emailBody = `
NEW ENQUIRY FROM BOOISHA WEBSITE
================================

Customer Information:
👤 Name: ${data.firstname} ${data.lastname}
📧 Email: ${data.email}
📱 Phone: ${data.phone}

Enquiry Details:
📝 Subject: ${data.subject}

💬 Message:
${data.message}

Technical Information:
🕐 Submitted: ${new Date(data.timestamp).toLocaleString('en-AU', { timeZone: 'Australia/Sydney' })}
🌐 IP Address: ${data.ip || 'Not available'}
🖥️ User Agent: ${data.userAgent || 'Not available'}

---
This email was automatically generated from the BooIsha website contact form.
Please reply directly to the customer's email: ${data.email}
    `;

    // Send email using Resend API
    try {
      const resendApiKey = context.env.RESEND_API_KEY;

      if (resendApiKey) {
        const resendResponse = await fetch("https://api.resend.com/emails", {
          method: "POST",
          headers: {
            "Authorization": `Bearer ${resendApiKey}`,
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            from: "BooIsha Website <noreply@booisha.com>",
            to: ["info@booisha.com"],
            subject: emailSubject,
            text: emailBody,
            reply_to: data.email, // Customer can reply directly to the enquiry
          }),
        });

        const resendResult = await resendResponse.json();

        if (resendResponse.ok) {
          console.log("✅ Email sent successfully via Resend:", resendResult.id);
        } else {
          console.error("❌ Resend API error:", resendResult);
          throw new Error(`Resend API error: ${resendResult.message || 'Unknown error'}`);
        }
      } else {
        console.warn("⚠️ RESEND_API_KEY not found, email not sent");
        // Fallback: Log detailed information for manual processing
        console.log("📧 EMAIL TO SEND:", {
          to: "info@booisha.com",
          from: "noreply@booisha.com",
          subject: emailSubject,
          body: emailBody
        });
      }
    } catch (emailError) {
      console.error("Email sending failed:", emailError);
      // Continue anyway - the submission is still logged
    }

    // Store submission in KV storage if available (optional)
    try {
      if (context.env.FORM_SUBMISSIONS) {
        const submissionKey = `submission_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
        await context.env.FORM_SUBMISSIONS.put(submissionKey, JSON.stringify(data), {
          expirationTtl: 7776000, // 90 days
        });
        console.log("✅ Submission stored in KV storage");
      }
    } catch (kvError) {
      console.error("KV storage failed:", kvError);
      // Continue anyway
    }

    // Always return success response
    return new Response(
      JSON.stringify({
        success: true,
        message: "Thank you for your enquiry! We'll get back to you within 24 hours.",
        submissionId: `${Date.now()}_${Math.random().toString(36).substr(2, 5)}`,
        timestamp: data.timestamp
      }),
      {
        status: 200,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      }
    );

  } catch (error) {
    console.error("Form submission error:", error);

    return new Response(
      JSON.stringify({
        success: false,
        error: "Unable to process your submission. Please email us directly at info@booisha.com",
        timestamp: new Date().toISOString()
      }),
      {
        status: 500,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      }
    );
  }
}

// Handle OPTIONS requests for CORS
export async function onRequestOptions() {
  return new Response(null, {
    status: 200,
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "POST, OPTIONS",
      "Access-Control-Allow-Headers": "Content-Type",
    },
  });
}
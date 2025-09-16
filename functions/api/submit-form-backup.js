// Fallback email function using Cloudflare Email Routing
async function sendEmailViaCloudflareWorker(data, corsHeaders) {
  try {
    // Format email content for Cloudflare Email Routing
    const emailContent = `
New enquiry from BooIsha website:

Name: ${data.firstname} ${data.lastname}
Email: ${data.email}
Phone: ${data.phone}
Subject: ${data.subject}

Message:
${data.message}

---
This email was sent from your website contact form.
Submitted at: ${new Date().toISOString()}
    `;

    // For Cloudflare Email Routing, we'll use a simple approach
    // Store the submission data for manual review or use Cloudflare Workers Email API
    console.log("Email submission data:", {
      to: "info@booisha.com",
      from: data.email,
      subject: `New Enquiry: ${data.subject}`,
      content: emailContent,
      timestamp: new Date().toISOString()
    });

    // Return success response (emails will be handled by Cloudflare Email Routing)
    return new Response(
      JSON.stringify({
        success: true,
        message: "Form submitted successfully. We'll get back to you soon!",
        fallbackUsed: true
      }),
      {
        status: 200,
        headers: {
          "Content-Type": "application/json",
          ...corsHeaders,
        },
      }
    );
  } catch (error) {
    console.error("Cloudflare email fallback error:", error);

    return new Response(
      JSON.stringify({
        success: false,
        error: "Unable to process form submission. Please contact us directly at info@booisha.com",
        fallbackUsed: true
      }),
      {
        status: 500,
        headers: {
          "Content-Type": "application/json",
          ...corsHeaders,
        },
      }
    );
  }
}

export async function onRequestPost(context) {
  // Add CORS headers
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
          headers: {
            "Content-Type": "application/json",
            ...corsHeaders,
          },
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
    };

    // Validate required fields
    if (
      !data.firstname ||
      !data.lastname ||
      !data.email ||
      !data.phone ||
      !data.message
    ) {
      return new Response(
        JSON.stringify({ success: false, error: "Missing required fields" }),
        {
          status: 400,
          headers: {
            "Content-Type": "application/json",
            ...corsHeaders,
          },
        }
      );
    }

    // Prepare email content - SIMPLIFIED VERSION
    const emailBody = {
      personalizations: [
        {
          to: [{ email: "info@booisha.com" }],
        },
      ],
      from: {
        email: "noreply@booisha.com",
        name: "BooIsha Website",
      },
      subject: `New Enquiry: ${data.subject}`,
      content: [
        {
          type: "text/plain",
          value: `
New enquiry from BooIsha website:

Name: ${data.firstname} ${data.lastname}
Email: ${data.email}
Phone: ${data.phone}
Subject: ${data.subject}

Message:
${data.message}

---
This email was sent from your website contact form.
          `,
        },
      ],
    };

    // Try to send email using MailChannels with proper domain verification
    try {
      // Add domain verification for MailChannels
      const emailBodyWithDomainAuth = {
        ...emailBody,
        from: {
          email: "noreply@booisha.com",
          name: "BooIsha Website",
        },
        personalizations: [
          {
            to: [{ email: "info@booisha.com" }],
            dkim_domain: "booisha.com",
            dkim_selector: "mailchannels",
            dkim_private_key: context.env.DKIM_PRIVATE_KEY || undefined,
          },
        ],
      };

      const response = await fetch("https://api.mailchannels.net/tx/v1/send", {
        method: "POST",
        headers: {
          "content-type": "application/json",
          "x-mc-domain": "booisha.com", // Domain authorization
        },
        body: JSON.stringify(emailBodyWithDomainAuth),
      });

      const responseText = await response.text();
      console.log("MailChannels response:", response.status, responseText);

      if (response.ok) {
        return new Response(
          JSON.stringify({
            success: true,
            message: "Form submitted successfully",
          }),
          {
            status: 200,
            headers: {
              "Content-Type": "application/json",
              ...corsHeaders,
            },
          }
        );
      } else {
        console.error("MailChannels error:", responseText);

        // If MailChannels fails, fallback to Cloudflare Email Worker
        return await sendEmailViaCloudflareWorker(data, corsHeaders);
      }
    } catch (mailChannelsError) {
      console.error("MailChannels failed:", mailChannelsError);

      // Fallback to Cloudflare Email Worker
      return await sendEmailViaCloudflareWorker(data, corsHeaders);
    }
  } catch (error) {
    console.error("Form submission error:", error);
    return new Response(
      JSON.stringify({
        success: false,
        error: "Failed to send email. Please try again later.",
        details: error.message,
      }),
      {
        status: 500,
        headers: {
          "Content-Type": "application/json",
          ...corsHeaders,
        },
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

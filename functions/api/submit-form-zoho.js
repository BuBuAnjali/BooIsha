// Direct Zoho API integration for form submission
export async function onRequestPost(context) {
  console.log("🚀 ZOHO API INTEGRATION - VERSION 2025-09-19 🚀");

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
      firstname: formData.get("firstname") || formData.get("name") || "",
      lastname: formData.get("lastname") || "",
      email: formData.get("email"),
      phone: formData.get("phone"),
      subject: formData.get("subject") || "Website Contact",
      message: formData.get("message"),
      timestamp: new Date().toISOString(),
      userAgent: context.request.headers.get("User-Agent"),
      ip: context.request.headers.get("CF-Connecting-IP") || context.request.headers.get("X-Forwarded-For"),
    };

    // Validate required fields
    if (!data.firstname || !data.email || !data.message) {
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

    // Log the submission
    console.log("📧 New form submission:", {
      name: `${data.firstname} ${data.lastname}`,
      email: data.email,
      subject: data.subject,
      timestamp: data.timestamp
    });

    // Format email content
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

    // Send email using Zoho Mail API
    try {
      const zohoAccessToken = context.env.ZOHO_ACCESS_TOKEN;
      const zohoRefreshToken = context.env.ZOHO_REFRESH_TOKEN;
      const zohoClientId = context.env.ZOHO_CLIENT_ID;
      const zohoClientSecret = context.env.ZOHO_CLIENT_SECRET;

      console.log("🔍 Checking Zoho credentials...");
      console.log("Access Token:", zohoAccessToken ? "EXISTS" : "MISSING");
      console.log("Refresh Token:", zohoRefreshToken ? "EXISTS" : "MISSING");
      console.log("Client ID:", zohoClientId ? "EXISTS" : "MISSING");
      console.log("Client Secret:", zohoClientSecret ? "EXISTS" : "MISSING");

      if (!zohoAccessToken && !zohoRefreshToken) {
        throw new Error("Zoho API credentials not configured");
      }

      let accessToken = zohoAccessToken;

      // If no access token but have refresh token, get new access token
      if (!accessToken && zohoRefreshToken) {
        console.log("🔄 Refreshing Zoho access token...");

        const refreshResponse = await fetch("https://accounts.zoho.com.au/oauth/v2/token", {
          method: "POST",
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
          },
          body: new URLSearchParams({
            refresh_token: zohoRefreshToken,
            client_id: zohoClientId,
            client_secret: zohoClientSecret,
            grant_type: "refresh_token",
          }),
        });

        const refreshData = await refreshResponse.json();

        if (refreshResponse.ok) {
          accessToken = refreshData.access_token;
          console.log("✅ New access token obtained");
        } else {
          console.error("❌ Failed to refresh token:", refreshData);
          throw new Error(`Token refresh failed: ${refreshData.error}`);
        }
      }

      // Send email via Zoho Mail API
      console.log("📤 Sending email via Zoho Mail API...");

      const zohoAccountId = context.env.ZOHO_ACCOUNT_ID || "810502852";

      const zohoResponse = await fetch(`https://mail.zoho.com.au/api/accounts/${zohoAccountId}/messages`, {
        method: "POST",
        headers: {
          "Authorization": `Zoho-oauthtoken ${accessToken}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          fromAddress: "info@booisha.com.au",
          toAddress: "info@booisha.com.au",
          subject: emailSubject,
          content: emailBody,
          mailFormat: "plaintext",
          replyTo: data.email,
        }),
      });

      const zohoResult = await zohoResponse.json();

      console.log("📨 Zoho API Response Status:", zohoResponse.status);
      console.log("📨 Zoho API Response:", zohoResult);

      if (!zohoResponse.ok) {
        console.error("❌ Zoho Mail API Error:", zohoResult);
        throw new Error(`Zoho Mail failed: ${zohoResult.message || zohoResponse.status}`);
      }

      console.log("✅ Email sent successfully via Zoho Mail API");

    } catch (emailError) {
      console.error("❌ Email sending failed:", emailError);

      // Return detailed error for debugging
      return new Response(
        JSON.stringify({
          success: false,
          error: `Email failed: ${emailError.message}`,
          details: emailError.toString(),
          timestamp: new Date().toISOString()
        }),
        {
          status: 500,
          headers: { "Content-Type": "application/json", ...corsHeaders },
        }
      );
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

    // Return success response
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
        error: "Unable to process your submission. Please email us directly at info@booisha.com.au",
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
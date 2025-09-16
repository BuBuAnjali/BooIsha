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

    // Send email using MailChannels
    const response = await fetch("https://api.mailchannels.net/tx/v1/send", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(emailBody),
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
      // Return more specific error info
      return new Response(
        JSON.stringify({
          success: false,
          error: `Email service error: ${response.status}`,
          details: responseText,
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

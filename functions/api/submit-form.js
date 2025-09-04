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

    // Prepare email content
    const emailBody = {
      personalizations: [
        {
          to: [{ email: "info@booshiv.com", name: "BooShiv" }],
        },
      ],
      from: {
        email: "noreply@booshiv.com",
        name: "BooShiv Website",
      },
      reply_to: {
        email: data.email,
        name: `${data.firstname} ${data.lastname}`,
      },
      subject: `New Enquiry: ${data.subject}`,
      content: [
        {
          type: "text/plain",
          value: `
New enquiry from BooShiv website:

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
        {
          type: "text/html",
          value: `
            <!DOCTYPE html>
            <html>
            <head>
              <meta charset="UTF-8">
            </head>
            <body style="font-family: Arial, sans-serif; line-height: 1.6; color: #333;">
              <div style="max-width: 600px; margin: 0 auto; padding: 20px;">
                <div style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; padding: 20px; border-radius: 10px 10px 0 0;">
                  <h2 style="margin: 0; font-size: 24px;">New Enquiry from BooShiv Website</h2>
                </div>
                
                <div style="background: #f8f9fa; padding: 30px; border-radius: 0 0 10px 10px; border: 1px solid #e9ecef; border-top: none;">
                  <table style="width: 100%; border-collapse: collapse;">
                    <tr>
                      <td style="padding: 10px 0; border-bottom: 1px solid #dee2e6;">
                        <strong style="color: #495057;">Name:</strong>
                      </td>
                      <td style="padding: 10px 0; border-bottom: 1px solid #dee2e6;">
                        ${data.firstname} ${data.lastname}
                      </td>
                    </tr>
                    <tr>
                      <td style="padding: 10px 0; border-bottom: 1px solid #dee2e6;">
                        <strong style="color: #495057;">Email:</strong>
                      </td>
                      <td style="padding: 10px 0; border-bottom: 1px solid #dee2e6;">
                        <a href="mailto:${data.email}" style="color: #667eea; text-decoration: none;">${data.email}</a>
                      </td>
                    </tr>
                    <tr>
                      <td style="padding: 10px 0; border-bottom: 1px solid #dee2e6;">
                        <strong style="color: #495057;">Phone:</strong>
                      </td>
                      <td style="padding: 10px 0; border-bottom: 1px solid #dee2e6;">
                        <a href="tel:${data.phone}" style="color: #667eea; text-decoration: none;">${data.phone}</a>
                      </td>
                    </tr>
                    <tr>
                      <td style="padding: 10px 0; border-bottom: 1px solid #dee2e6;">
                        <strong style="color: #495057;">Subject:</strong>
                      </td>
                      <td style="padding: 10px 0; border-bottom: 1px solid #dee2e6;">
                        ${data.subject}
                      </td>
                    </tr>
                  </table>
                  
                  <div style="margin-top: 20px; padding: 20px; background: white; border-radius: 5px; border-left: 4px solid #667eea;">
                    <h3 style="margin-top: 0; color: #495057;">Message:</h3>
                    <p style="white-space: pre-wrap; color: #212529;">${data.message}</p>
                  </div>
                </div>
                
                <div style="text-align: center; margin-top: 20px; padding: 20px; color: #6c757d; font-size: 12px;">
                  <p>This email was automatically sent from your website contact form.</p>
                  <p>© 2024 BooShiv. All rights reserved.</p>
                </div>
              </div>
            </body>
            </html>
          `,
        },
      ],
    };

    // Only add DKIM if the environment variable exists
    if (context.env.DKIM_PRIVATE_KEY) {
      emailBody.personalizations[0].dkim_domain = "booshiv.com";
      emailBody.personalizations[0].dkim_selector = "mailchannels";
      emailBody.personalizations[0].dkim_private_key =
        context.env.DKIM_PRIVATE_KEY;
    }

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
      throw new Error(`MailChannels API error: ${response.status}`);
    }
  } catch (error) {
    console.error("Form submission error:", error);
    return new Response(
      JSON.stringify({
        success: false,
        error: "Failed to send email. Please try again later.",
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

// Handle OPTIONS requests for CORS - THIS WAS MISSING
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

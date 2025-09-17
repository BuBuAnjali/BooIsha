// Simple email notification using mailto links or webhook
export async function onRequestPost(context) {
  const corsHeaders = {
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "POST, OPTIONS",
    "Access-Control-Allow-Headers": "Content-Type",
  };

  try {
    const data = await context.request.json();

    // Send to a webhook service like Zapier, IFTTT, or similar
    const webhookUrl = context.env.WEBHOOK_URL; // Optional webhook URL

    if (webhookUrl) {
      await fetch(webhookUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          text: `New BooIsha enquiry from ${data.name}`,
          email: data.email,
          message: data.message,
          phone: data.phone
        })
      });
    }

    // Log for manual processing
    console.log("📧 Email notification triggered:", {
      name: data.name,
      email: data.email,
      phone: data.phone,
      message: data.message
    });

    return new Response(
      JSON.stringify({ success: true, message: "Notification sent" }),
      { status: 200, headers: { "Content-Type": "application/json", ...corsHeaders }}
    );

  } catch (error) {
    console.error("Notification error:", error);
    return new Response(
      JSON.stringify({ success: false, error: "Notification failed" }),
      { status: 500, headers: { "Content-Type": "application/json", ...corsHeaders }}
    );
  }
}
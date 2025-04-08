async function handler({ name, email, message }) {
  if (!name || !email || !message) {
    return {
      error: "Please provide name, email, and message",
    };
  }

  try {
    const response = await fetch(
      "https://formspree.io/f/webdevstrategist46@gmail.com",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          email,
          message,
          _subject: `New Contact Form Submission from ${name}`,
        }),
      }
    );

    if (!response.ok) {
      throw new Error("Failed to submit form");
    }

    return {
      success: true,
      message: "Message sent successfully",
    };
  } catch (error) {
    return {
      error: error.message || "Failed to send message",
    };
  }
}
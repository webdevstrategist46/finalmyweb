async function handler({
  name,
  email,
  projectType,
  budget,
  timeline,
  description,
  requirements,
}) {
  if (!name || !email || !projectType || !description) {
    return {
      error: "Please provide all required fields",
    };
  }

  try {
    const response = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${process.env.RESEND_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: "projects@writewebmedia.com",
        to: "webdevstrategist46@gmail.com",
        subject: `New Project Requirements from ${name}`,
        html: `
          <h2>New Project Requirements Submission</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Project Type:</strong> ${projectType}</p>
          <p><strong>Budget:</strong> ${budget || "Not specified"}</p>
          <p><strong>Timeline:</strong> ${timeline || "Not specified"}</p>
          <p><strong>Project Description:</strong></p>
          <p>${description}</p>
          ${
            requirements
              ? `
          <p><strong>Additional Requirements:</strong></p>
          <p>${requirements}</p>
          `
              : ""
          }
        `,
      }),
    });

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.message || "Failed to send project requirements");
    }

    return {
      success: true,
      message: "Project requirements sent successfully",
    };
  } catch (error) {
    return {
      error: error.message || "Failed to send project requirements",
    };
  }
}
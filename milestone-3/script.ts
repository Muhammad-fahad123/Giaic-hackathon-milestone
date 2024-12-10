// Get references to the form and display area
const form = document.getElementById("resume-form") as HTMLFormElement;
const resumeDisplayElement = document.getElementById(
  "resume-display"
) as HTMLDivElement;

// Handle form submission
form.addEventListener("submit", (event: Event) => {
  event.preventDefault(); // Prevent the page from reloading

  // Collect input values with type assertions for safety
  const name = (
    document.getElementById("name") as HTMLInputElement
  ).value.trim();
  const email = (
    document.getElementById("email") as HTMLInputElement
  ).value.trim();
  const phone = (
    document.getElementById("phone") as HTMLInputElement
  ).value.trim();
  const education = (
    document.getElementById("education") as HTMLTextAreaElement
  ).value.trim();
  const experience = (
    document.getElementById("experience") as HTMLTextAreaElement
  ).value.trim();
  const skills = (
    document.getElementById("skills") as HTMLTextAreaElement
  ).value.trim();

  // Validate that required fields are not empty
  if (!name || !email || !phone || !education || !experience || !skills) {
    alert("Please fill in all fields before submitting.");
    return;
  }

  // Generating the Resume content dynamically
  const resumeHTML = `
        <h2><b>Dynamic Resume</b></h2>
        <h3>Personal Information</h3>
        <p><b>Name:</b> ${name}</p>
        <p><b>Email:</b> ${email}</p>
        <p><b>Phone:</b> ${phone}</p>

        <h3>Education</h3>
        <p>${education}</p>

        <h3>Experience</h3>
        <p>${experience}</p>

        <h3>Skills</h3>
        <p>${skills}</p>
    `;

  // Display the generated resume
  if (resumeDisplayElement) {
    resumeDisplayElement.innerHTML = resumeHTML;
  } else {
    console.error("The resume display element is missing in the DOM.");
  }
});

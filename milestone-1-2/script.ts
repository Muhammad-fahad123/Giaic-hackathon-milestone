// script.ts

const toggleSkillsButton = document.getElementById(
  "toggle-skills"
) as HTMLButtonElement;
const skillsList = document.getElementById("skills-list") as HTMLUListElement;

// Add event listener to toggle skills visibility
toggleSkillsButton.addEventListener("click", () => {
  if (skillsList.classList.contains("hidden")) {
    skillsList.classList.remove("hidden");
    toggleSkillsButton.textContent = "Hide Skills";
  } else {
    skillsList.classList.add("hidden");
    toggleSkillsButton.textContent = "View Skills";
  }
});

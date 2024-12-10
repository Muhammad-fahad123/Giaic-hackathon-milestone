// script.ts
var toggleSkillsButton = document.getElementById("toggle-skills");
var skillsList = document.getElementById("skills-list");
// Add event listener to toggle skills visibility
toggleSkillsButton.addEventListener("click", function () {
    if (skillsList.classList.contains("hidden")) {
        skillsList.classList.remove("hidden");
        toggleSkillsButton.textContent = "Hide Skills";
    }
    else {
        skillsList.classList.add("hidden");
        toggleSkillsButton.textContent = "View Skills";
    }
});

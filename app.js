document.addEventListener('DOMContentLoaded', function () {
    var skillsSection = document.getElementById('skills');
    var toggleSkillsButton = document.getElementById('toggle-skills-btn');
    if (skillsSection && toggleSkillsButton) {
        toggleSkillsButton.addEventListener('click', function () {
            if (skillsSection.style.display === 'none') {
                skillsSection.style.display = 'block';
                toggleSkillsButton.textContent = 'Hide Skills Section';
            }
            else {
                skillsSection.style.display = 'none';
                toggleSkillsButton.textContent = 'Show Skills Section';
            }
        });
    }
});

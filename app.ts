document.addEventListener('DOMContentLoaded', () => {
    const skillsSection = document.getElementById('skills');
    const toggleSkillsButton = document.getElementById('toggle-skills-btn');
  
    if (skillsSection && toggleSkillsButton) {
      toggleSkillsButton.addEventListener('click', () => {
        if (skillsSection.style.display === 'none') {
          skillsSection.style.display = 'block';
          toggleSkillsButton.textContent = 'Hide Skills Section';
        } else {
          skillsSection.style.display = 'none';
          toggleSkillsButton.textContent = 'Show Skills Section';
        }
      });
    }
  });
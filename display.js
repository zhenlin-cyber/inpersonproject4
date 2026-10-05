// Week 4 JavaScript Portfolio Project - Display Generation
// Students will learn to generate HTML using JavaScript template literals

// Generate Header Section
let headerHTML = `
    <header>
        <h1>${portfolio.owner.name}</h1>
        <p class="tagline">${portfolio.owner.title}</p>
        <p class="location">📍 ${portfolio.owner.location}</p>
        <p class="bio">${portfolio.owner.bio}</p>
    </header>
`;
document.getElementById('generated-header').innerHTML = headerHTML;

// Generate Skills Section
let skillsHTML = '<section id="skills"><h2>My Skills</h2><ul class="skills-list">';
const skillLevels = [90, 85, 80, 88, 75];

for (let i = 0; i < portfolio.skills.length; i++) {
    const skillLevel = skillLevels[i] || 80;
    skillsHTML = skillsHTML + `
        <li class="skill-item">
            <div class="skill-label-row">
                <span>${portfolio.skills[i]}</span>
                <span>${skillLevel}%</span>
            </div>
            <div class="skill-progress" style="--skill-level: ${skillLevel}%"></div>
        </li>
    `;
}

skillsHTML = skillsHTML + '</ul></section>';
document.getElementById('generated-skills').innerHTML = skillsHTML;

// Projects section intentionally left out so the static HTML in index.html controls the project layout.
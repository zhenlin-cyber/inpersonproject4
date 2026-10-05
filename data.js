// Week 4 JavaScript Portfolio Project - Data Organization
// Students will learn to organize their portfolio data using JavaScript objects and arrays

// TODO: Fill in your personal information
const portfolio = {
    // Personal information object
    owner: {
        name: "Zhen Lin",        // TODO: Add your name
        title: "MIMS 2027",      // TODO: Add your professional title
        email: "zhen_lin@berkeley.edu", // TODO: Add your email
        location: "Berkeley, CA",  // TODO: Add your location
        bio: "I am an interdisciplinary professional with a track record of orchestrating process improvement initiatives and leading cross-functional projects. Currently pursuing my M.S. at UC Berkeley, I combine hands-on experience in logistics with advanced coursework in AI Product Management and Programming." // TODO: Add your bio
    },
    
    // Skills as an array
    skills: [
        "Data Analysis",   // TODO: Replace with your actual skills
        "Project Management",  // TODO: Add more skills
        "Communication"    // TODO: Students should have at least 5 skills
        // TODO: Add more skills - aim for 5-7 skills total
    ],
    
    // Projects as array of objects
    projects: [
        {
            title: "Rescue match",
            description: "Web application that connects users with potential rescue animal matches based on birth dates.",
            technologies: ["HTML", "CSS"], // Array of technologies used
            completionDate: "2026-08-15",   // When you completed it
            featured: true,                  // Is this a featured project?
            category: "frontend"             // Matches the filter button category
        },
        {
            title: "Raw Material Batchboard", 
            description: "Dashboard for tracking raw material batches in a manufacturing process, providing real-time updates and analytics.",
            technologies: ["dax, Power BI", "SQL"], // Array of technologies used
            completionDate: "2026-08-01",
            featured: false,
            category: "fullstack"            // Matches the filter button category
        }
        // TODO: Add more projects during class
    ],
    
    // Contact and availability information
    availability: {
        freelance: true,    // TODO: Set to true if available for freelance work
        fullTime: false,     // TODO: Set to true if seeking full-time position
        partTime: true       // TODO: Set to true if available for part-time work
    }
};

// Let's explore our data structure in the console
console.log("=== PORTFOLIO DATA EXPLORER ===");
console.log("Full portfolio object:", portfolio);
console.log("My name:", portfolio.owner.name);
console.log("Total skills:", portfolio.skills.length);
console.log("First project:", portfolio.projects[0]);

// TODO: During class, we'll add more console.log() statements to explore the data
// Examples students will try:
// console.log("Owner name:", portfolio.owner.name);
// console.log("First skill:", portfolio.skills[0]);
// console.log("Number of projects:", portfolio.projects.length);

// TODO: Students will learn to access nested properties
// console.log("Email:", portfolio.owner.email);
// console.log("Second project:", portfolio.projects[1]);
// console.log("Available for freelance?", portfolio.availability.freelance);

// TODO: Students will create summary strings using template literals
// let summary = `${portfolio.owner.name} is a ${portfolio.owner.title} with ${portfolio.skills.length} skills.`;
// console.log("Summary:", summary);
//  objects basicss

console.log("------Object Basics ----------");

const developer = {
    brandname: "NASCodeVerse",
    firstName: "Muhammad",
    lastName: "Aleee",
    role: "Full Stack Developer",
    experience: 6,
    skills: ["JavaScript", "React", "Node.js", "Python"],
};

// 1. Accessing Data (Dot Notation - Most Common)
console.log("Role :", developer.role);

// 2. Accessing Data (Bracket Notation - For dynamic keys)
console.log("Your Last Name:", developer["lastName"]);

// 3. Adding New Properties
developer.location = "Pakistan";
developer.experience = 6;
console.log("Updated files:", developer);

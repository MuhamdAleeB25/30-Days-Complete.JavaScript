//nested objects

console.log("-----------Nested Objectss------");

const NASCodeVerse = {
    profession : "Full Stack Developer",
    founder : {
        name : "Muhammad Alee",
        experience : 6,
        skills : ["JavaScript", "React", "Node.js", "Python"],

    }, 
       located : {
        city : "Karachi",
        Country : "Pakistan",
       }
}

console.log("Here is the Profile of NASCodeVerse :", NASCodeVerse);

console.log("Founder name: ", NASCodeVerse.founder.name);
console.log('His Expertise :', NASCodeVerse.founder.skills);
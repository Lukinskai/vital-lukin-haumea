

//creating a footer
const footer = document.createElement("footer");
//footer.textContent = "My Footer";

//get the body element

const body = document.body;

// Append the footer to the body

body.appendChild(footer);

//-----

// Date 
const today = new Date();

//year
const thisYear = today.getFullYear();

//footer from DOM
const footer2 = document.querySelector('footer');

//copyright
const copyright = document.createElement('p');

//name and year

copyright.innerHTML = "Vital Lukin &copy;" + thisYear;

//append the copy to the footer

footer.appendChild(copyright);

///skills 

const skills =["JavaScript","HTML","CSS","Java","Git"];

const skillsSection = document.getElementById('skills');

const skillsList = skillsSection.querySelector('ul');

for (let i=0; i < skills.length; i++){
    const skill = document.createElement('li');

skill.innerText = skills[i];

skillsList.appendChild(skill);

}

// Get references to the form display area.

const form = document.getElementById('Resumeform') as HTMLFormElement;
const resumeDisplayElement = document.getElementById('resume-display') as HTMLDivElement;

// handle form submission

form.addEventListener('submit',(event:Event) => {
    event.preventDefault(); // prevent page reload

    //Collect input values

    const name =(document.getElementById('name')as HTMLInputElement).value
    const email =(document.getElementById('email')as HTMLInputElement).value
    const phone =(document.getElementById('Phone')as HTMLInputElement).value
    const education =(document.getElementById('education')as HTMLInputElement).value
    const experience =(document.getElementById('experience')as HTMLInputElement).value
    const Skills =(document.getElementById('Skills')as HTMLInputElement).value

    //Genrate resume content dynamically

    const resumeHTML = `
    <h2><b>Resume</b></h2>
    <h3>Personal Information</h3>
    <p><b>Name:</b>${name}</p>
    <p><b>Email:</b>${email}</p>
    <p><b>Phone:</b>${phone}</p>

    <h3>Education</h3>
    <p>${education}</p>

     <h3>Experience</h3>
    <p>${experience}</p>

     <h3>Skills</h3>
    <p>${Skills}</p>

    `;

    // Display the genrated resume
    if(resumeDisplayElement){
        resumeDisplayElement.innerHTML = resumeHTML;
    }
    else{
        console.error('the resume element is missing');
    }
});
document.addEventListener('DOMContentLoaded', () => {
    const addEducationBtn = document.getElementById('add-education');
    const educationSection = document.getElementById('education-section');
    const addExperienceBtn = document.getElementById('add-experience');
    const experienceSection = document.getElementById('experience-section');

    addEducationBtn.addEventListener('click', () => {
        const newEducation = document.createElement('div');
        newEducation.classList.add('education-entry');
        newEducation.innerHTML = `
            <div class="education-entry">
                <div class="form-group">
                    <label for="institution">Institution:</label>
                    <input type="text" name="institution[]">
                    
                    <label for="degree">Degree:</label>
                    <input type="text" name="degree[]">
                    
                    <label for="gpa">GPA (Optional):</label>
                    <input type="text" name="gpa[]">
                    
                    <label for="graduation-date">Graduation date:</label>
                    <input type="date" name="graduation-date[]">
                    <br/>
                    <br/>
                    <div class="remove">
                    <button class="remove-education">Delete</button>
                    </div>
                    <hr/>
                </div>
               
                
            </div>
            
            
        `;
        educationSection.appendChild(newEducation);

        // Add event listener for the remove button
        newEducation.querySelector('.remove-education').addEventListener('click', () => {
            newEducation.remove();
        });
    });



    addExperienceBtn.addEventListener('click', () => {
        const newExperience = document.createElement('div');
        newExperience.innerHTML = `
            <label for="organization">Organization:</label>
            <input type="text" id="organization" name="organization">
            
            <label for="position-title">Position title:</label>
            <input type="text" id="position-title" name="position-title">
            
            <label for="start-date">Start date:</label>
            <input type="date" id="start-date" name="start-date">
            
            <label for="end-date">End date:</label>
            <input type="date" id="end-date" name="end-date">
            
            <label for="description">Description:</label>
            <textarea id="description" name="description"></textarea>
        `;
        experienceSection.appendChild(newExperience);
    });
});

"use strict";
const form = document.getElementById('resume-form');
const resumeDisplay = document.getElementById('resume-display');
const resumeContent = document.getElementById('resume-content');
form.addEventListener('submit', (event) => {
    event.preventDefault();
    const formData = {
        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        education: document.getElementById('education').value,
        workExperience: document.getElementById('workExperience').value,
        skills: document.getElementById('skills').value,
        append: function (name, value) {
            throw new Error("Function not implemented.");
        },
        delete: function (name) {
            throw new Error("Function not implemented.");
        },
        get: function (name) {
            throw new Error("Function not implemented.");
        },
        getAll: function (name) {
            throw new Error("Function not implemented.");
        },
        has: function (name) {
            throw new Error("Function not implemented.");
        },
        set: function (name, value) {
            throw new Error("Function not implemented.");
        },
        forEach: function (callbackfn, thisArg) {
            throw new Error("Function not implemented.");
        },
        entries: function () {
            throw new Error("Function not implemented.");
        },
        keys: function () {
            throw new Error("Function not implemented.");
        },
        values: function () {
            throw new Error("Function not implemented.");
        },
        [Symbol.iterator]: function () {
            throw new Error("Function not implemented.");
        }
    };
    displayResume(formData);
});
function displayResume(data) {
    resumeContent.innerHTML = `
      <h3>Name: ${data.name}</h3>
      <p>Email: ${data.email}</p>
      <p><strong>Education:</strong> ${data.education}</p>
      <p><strong>Work Experience:</strong> ${data.workExperience}</p>
      <p><strong>Skills:</strong> ${data.skills}</p>
    `;
    resumeDisplay.classList.remove('hidden');
}
// Editable feature
resumeContent.addEventListener('click', (event) => {
    const target = event.target;
    if (target.tagName === 'P' || target.tagName === 'H3') {
        const currentText = target.innerText;
        const input = document.createElement('textarea');
        input.value = currentText;
        target.innerHTML = '';
        target.appendChild(input);
        input.addEventListener('blur', () => {
            target.innerHTML = input.value;
        });
    }
});

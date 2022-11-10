let passwordForm = document.getElementById('password');
let confirmationForm = document.getElementById('confirm-password');
let passwordForms = [passwordForm, confirmationForm]
let comparison = document.getElementById('password-check');
let photoCredits = document.querySelector('.photo-credits');

let mobile = (/iphone|ipod|android|blackberry|mini|windows\sce|palm/i.test(navigator.userAgent.toLowerCase())); 

passwordForms.forEach((el) =>
    el.addEventListener('input', () => {
        let password = passwordForm.value;
        let confirmation = confirmationForm.value;

        if (password.length < 8) {
            comparison.innerHTML = "* Password must be at least 8 characters long";
            comparison.style.color = "red";
        } else if (password != confirmation) {
            comparison.innerHTML = "* Passwords do not match";
            comparison.style.color = "red";
        } else if (password == confirmation) {
            comparison.innerHTML = "* Passwords is correct";
            comparison.style.color = "blue";
        }
}));

if (mobile) {
    photoCredits.style.display = "none";
}
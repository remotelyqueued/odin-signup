// const form = document.querySelector('form'); // todo: handle form submit

const passwordInput = document.getElementById('password');
const passWordInputConfirm = document.getElementById('confirm-password');

const passwordShow = document.querySelectorAll('.password-show');
const passwordHide = document.querySelectorAll('.password-hide');

passwordShow.forEach(button => {
    button.addEventListener('pointerdown', togglePassword);
});

passwordHide.forEach(button => {
    button.addEventListener('pointerdown', togglePassword);
});

function togglePassword(event) {
    // console.log(event.target.closest('input')); // null
    // might need to adjust html or choose closes based on click
    if (event.target.type === 'password') {
        event.target.type = 'text';
        // todo: change svg
    } else {
        event.target.type = 'password';
        // todo: change svg
    }
}

passwordInput.addEventListener('input', validatePassword);
passWordInputConfirm.addEventListener('submit', validatePassword);

function validatePassword(event) {
    if (passwordInput.value !== passWordInputConfirm.value) {
        passWordInputConfirm.setCustomValidity('Passwords do not match!');
    } else {
        passWordInputConfirm.setCustomValidity('');
    }
}

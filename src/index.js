const form = document.forms.form;

const password = form.elements['password'];
const passwordShow = document.querySelector('.password-show');
const passwordConfirm = form.elements['password-confirm'];
const passwordConfirmShow = document.querySelector('.password-confirm-show');

password.addEventListener('input', validatePassword);
passwordConfirm.addEventListener('input', validatePassword);

function validatePassword(event) {
    if (password.value === passwordConfirm.value) {
        passwordConfirm.setCustomValidity('');
    } else {
        passwordConfirm.setCustomValidity('Passwords do not match!');
    }
}

// invalid doesn't bubble - use capturing phase
// form.addEventListener('invalid', event => {}, true);
const passwordSVG = document.querySelectorAll('.password-show > svg');

passwordShow.addEventListener('pointerdown', event => {
    passwordSVG.forEach(button => button.classList.toggle('hidden'));
    if (password.type === 'password') {
        password.type = 'text';
    } else {
        password.type = 'password';
    }
    event.preventDefault(); // prevents double click selecting page
});

const passwordConfirmSVG = document.querySelectorAll(
    '.password-confirm-show > svg'
);
passwordConfirmShow.addEventListener('pointerdown', event => {
    passwordConfirmSVG.forEach(button => button.classList.toggle('hidden'));
    if (passwordConfirm.type === 'password') {
        passwordConfirm.type = 'text';
    } else {
        passwordConfirm.type = 'password';
    }
    event.preventDefault();
});

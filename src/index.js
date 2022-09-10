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
passwordShow.addEventListener('pointerdown', event => {
    if (password.type === 'password') {
        password.type = 'text';
    } else {
        password.type = 'password';
    }
    event.preventDefault();
});

passwordConfirmShow.addEventListener('pointerdown', event => {
    if (passwordConfirm.type === 'password') {
        passwordConfirm.type = 'text';
    } else {
        passwordConfirm.type = 'password';
    }
    event.preventDefault();
});

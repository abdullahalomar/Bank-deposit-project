document.getElementById('login-submit').addEventListener('click', function () {
    // user eamil
    const emailField = document.getElementById('user-email');
    const userEmail =  emailField.value;
    // user password
    const passwordField = document.getElementById('user-password');
    const userPassword = passwordField.value;
    // check email password
    if (userEmail == 'omar@gmail.com' && userPassword == 123456789) {
        window.location.href = 'banking.html';
    }
 })


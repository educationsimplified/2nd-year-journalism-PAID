// Verify email/phone/username
function verifyUser() {
    var username = document.getElementById('username').value;
    var message = document.getElementById('message');
    
    // Replace with the correct email/phone/username
    var correctUsername = 'aj0985114@gmail.com';
    
    if (username === correctUsername) {
        message.textContent = '';
        // Show the subjects after successful verification
        document.getElementById('subject1').style.display = 'block';
        document.getElementById('subject2').style.display = 'block';
        document.getElementById('subject3').style.display = 'block';
        document.getElementById('subject4').style.display = 'block';
        document.getElementById('email-verification').style.display = 'none';
    } else {
        message.textContent = 'Invalid email/phone/username.';
    }
}

// Check password and redirect
function checkPassword(subjectId, correctPassword, redirectUrl) {
    var inputId = 'password' + subjectId.replace('subject', '');
    var password = document.getElementById(inputId).value;
    var message = document.getElementById('message');
    
    if (password === correctPassword) {
        openFullscreenPage(redirectUrl);
    } else {
        message.textContent = 'Wrong password. If you don’t have the password and want to access the files, contact the owner, Uzair.';
        setTimeout(function() {
            window.location.href = 'https://www.instagram.com/uzairvibes?igshid=MXEwczdtd290aXl0Zw==';
        }, 3000);
    }
}

// Open the page in fullscreen to prevent URL sharing
function openFullscreenPage(url) {
    var newWindow = window.open(url, '_blank', 'fullscreen=yes');
    newWindow.focus();
    newWindow.document.body.style.margin = '0';
    newWindow.document.body.style.padding = '0';
    newWindow.document.body.style.overflow = 'hidden';
    newWindow.document.body.innerHTML = `<iframe src="${url}" frameborder="0" style="width:100%; height:100vh;"></iframe>`;
}

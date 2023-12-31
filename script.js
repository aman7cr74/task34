document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
     
    var email = document.getElementById('email').value;
    var password = document.getElementById('pwd').value;
     
    var emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    var passwordPattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%&*?]).{8,}$/;
     
    if (!emailPattern.test(email)) {
       alert('Please enter a valid email address');
       return;
    }
     
    if (!passwordPattern.test(password)) {
       alert('Password should contain at least 8 characters, including at least one uppercase letter, one lowercase letter, one number, and one special character (@,#,$,%,&,*,?)');
       return;
    }
     
    if (password !== 'SmartServTest@123') {
       alert('Incorrect username or password');
       return;
    }
     
    window.location.href = 'dashboard2.png';
   });
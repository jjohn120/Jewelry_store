
  function emailSend(){

    var userName = document.getElementById('name').value;
    var phone = document.getElementById('phone').value;
    var email = document.getElementById('email').value;
  
    var messageBody = "Name " + userName +
    "<br/> Phone " + phone +
    "<br/> Email " + email;
    Email.send({
      Host : "smtp.elasticemail.com",
      Username : "gerejohns10@gmail.com",
      Password : "1271D3A01200DF252D9C88F5B82EE48B4386Password",
      To : 'gerejohns10@gmail.com',
      From : "gerejohns10@gmail.com",
      Subject : "This is the subject",
      Body : "And this is the body"
  }).then(
    message => {
      if(message=='OK'){
        swal("Secussful", "You clicked the button!", "success");
      }
      else{
        swal("Error", "You clicked the button!", "error");
      }
    }
  );
  }
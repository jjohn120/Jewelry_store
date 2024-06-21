
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
      Password : "96301AC1DF9FF3955494B258C2999D196394",
      To : 'jj.johnson@valpo.edu',
      From : "gerejohns10@gmail.com",
      Subject : "This is the subject",
      Body : "And this is the body"
  }).then(
    message => {
      if(message=='OK'){
        swal("Sucussful", "Email Sent", "success");
      }
      else{
        swal("Error", "You clicked the button!", "error");
      }
    }
  );
  }

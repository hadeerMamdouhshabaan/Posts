let form = document.querySelector("form");
let Email = document.querySelector(".email");
let password = document.querySelector(".password")
let fname = document.querySelector(".fname")
  
let fnameRegex = /^[A-Z][\w]{2,}$/
let passwordRegex=/^[\w][\w]{5,}$/
let emailRegex = /^[a-z][\w\d]*(@gmail.com)$/

form.addEventListener("submit", (e) => {
    e.preventDefault();
    let name = fname.value;
    let validfname=  fnameRegex.test(name)
    let email = Email.value;
    let validEmail = emailRegex.test(email);

    let  passwordvalue = password.value;
    let validpassword = passwordRegex.test(passwordvalue);

   

    if (!validEmail)
      {
          Swal.fire({
              title: 'Oops..',
              text: 'InValid Email',
              icon: 'error',
              confirmButtonText: 'OK'
            })
      }
    else if(! validpassword)
    {
        Swal.fire({
            title: 'Oops..',
            text: 'InValid password',
            icon: 'error',
            confirmButtonText: 'OK'
          })
    }
    else if(! validfname)
      {
          Swal.fire({
              title: 'Oops..',
              text: 'InValid name',
              icon: 'error',
              confirmButtonText: 'OK'
            })
      }
  
    else {
     
      Swal.fire({
          title: 'Success!',
          text: 'You are now signed in!',
          icon: 'success',
          confirmButtonText: 'OK',
          timer: 2000
      });

      setTimeout(() => {
          window.location.href = '../index.html'; 
      }, 2000);
  }
})

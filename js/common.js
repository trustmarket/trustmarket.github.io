function welcomeMsg() {
   console.log('Welcome!  Fetching your information.... ');
   FB.api('/me', function(response) {
     alert("Yes!!!");
     console.log('Successful login for: ' + response.name);
     document.getElementById('status').innerHTML =
       'Thanks for logging in, ' + response.name + '!';
   });
 }
 function loginFailedMsg() {
   document.getElementById('status').innerHTML =
   'Please try login again later ' + '!';
  }

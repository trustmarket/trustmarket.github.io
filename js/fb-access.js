window.fbAsyncInit = function() {
  FB.init({
    appId      : '1899743770243996',
    xfbml      : true,
    version    : 'v2.8'
  });
  FB.getLoginStatus(function(response) {
    if (response.status === 'connected') {
      console.log('Logged in.');
      welcomeMsg();
    } else {
      console.log('Logged in failed...');
      loginFailedMsg();
    }
  });
  FB.AppEvents.logPageView();
};

(function(d, s, id){
   var js, fjs = d.getElementsByTagName(s)[0];
   if (d.getElementById(id)) {return;}
   js = d.createElement(s); js.id = id;
   js.src = "https://connect.facebook.net/en_US/sdk.js";
   fjs.parentNode.insertBefore(js, fjs);
 }(document, 'script', 'facebook-jssdk'));

<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<title>Nettuts JQuery</title>
<link rel="stylesheet" href="../css/LoginStyle.css">
<g:javascript src="../js/jquery.js"/>
<script>
$(document).ready(function() {
   $("#login_btn").click(function(){
    window.location.href = '/rapper/PageDetails/showAllProjects' ;
   });

  $("div.panel_button").click(function(){
    $("div#panel").animate({
      height: "500px"
    })
    .animate({
      height: "400px"
    }, "fast");
    $("div.panel_button").toggle();
  }); 
  
   $("div#hide_button").click(function(){
    $("div#panel").animate({
      height: "0px"
    }, "fast");    
   }); 
     $("#signup").click(function(){
      alert('signup');
      var uname=$("#username").val();
      var pass=$("#password").val();
      alert(uname +' '+ pass);
         $.ajax({
             type: "POST",
             url: "/rapper/login/signup",
             data: {uname:uname,password:pass},            
             async : false
           }).done(function(data) {                            
                   alert('done');                                                                                       
            });
   });    
});
</script>
</head>
<body>
<div id="header">
  <h1>Sliding Panel</h1>
  <br />
  <h2>jQuery Sliding Panel Demonstration for NETTUTS</h2>
</div>

  <hr id="header_stripe"/>
  <div id="page_container">
  <div id="toppanel">
    <div id="panel">
      <div id="panel_contents"> </div>
      <h1>Animated Top Panel</h1>
      <h2> By Connor for Nettuts</h2>
       <input type='button' accesskey="l" id="signup"  value='sign up'/>
      <img class="border_pic" src="../images/img/app/tutsplus.jpg" alt="Screenshot" />
      <div class="border" id="login">
        <p>Username:
          <input type="text" size="15" name="username" id="username" />
          <br />
          Password:
          <input type="password" size="15" name="password" id="password" />
          <br />
          <input type="button" accesskey="l" id="login_btn" name="login" value="Login" />
        </p>
      </div>
    </div>
    <div class="panel_button" style="display: visible;"><img src="../images/img/app/expand.png"  alt="expand"/> <a href="#">Login Here</a> </div>
    <div class="panel_button" id="hide_button" style="display: none;"><img src="../images/img/app/collapse.png" alt="collapse" /> <a href="#">Hide</a> </div>
  </div>
  <div id="content">
    <p>Click the Top Panel button for more content. You can put anything you want in the panel. It is great for making content accessible on every page, but not take up the space usually required.</p>
    <p> Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Praesent scelerisque commodo massa. Ut volutpat. Maecenas luctus augue quis velit. Nulla tincidunt pede in erat. Vivamus tellus. Maecenas lacinia, arcu sed scelerisque posuere, dui massa gravida enim, a vehicula erat quam et risus. Etiam scelerisque. Vivamus et ipsum. Nulla facilisi. Nullam elementum fringilla enim. Nulla facilisi. Praesent sem arcu, porttitor ac, cursus sed, fringilla vitae, nisi. Nam sollicitudin eros id ante. Nunc nisi augue, lobortis a, rhoncus quis, gravida nec, tortor. Sed sollicitudin. Nulla facilisi.</p>
  </div>
  <div id="footer">
    <p>Tutorial created by Connor for Nettuts</p>
  </div>
</div>
</body>
</html>

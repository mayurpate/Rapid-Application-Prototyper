    <!DOCTYPE html>
    
    <html class="wf-omnespro-n7-active wf-prestigeelitestd-n7-active wf-lettergothicstd-n4-active wf-omnespro-n4-active wf-omnespro-n5-active wf-omnespro-n6-active wf-active">
    <head>
      <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
      <meta charset="utf-8">
      <meta name="SKYPE_TOOLBAR" content="SKYPE_TOOLBAR_PARSER_COMPATIBLE">
      <title>Rapper - A Rapid Application Prototyper</title>
      <meta property="og:image" content="https://www.postable.com/application/skins/default/icon-facebook.png">
      
      <meta name="description" content="Easily gather mailing addresses for wedding invitations, birth announcements, holiday cards, or just because it&#39;s nice to have them. Postable is free.">
      <meta name="keywords" content="get mailing addresses,getting addresses,wedding invitations,sending invitations,free,wedding address list,online address book,address book,address list,guest list,save the date">
      

        <script type="text/javascript" async="" src="../js/ga.js"></script><script type="text/javascript">var _sf_startpt=(new Date()).getTime()</script>

        <script type="text/javascript" src="../js/ahu5nxd.js"></script>
        <style type="text/css">.tk-omnes-pro{font-family:"omnes-pro",sans-serif;}.tk-letter-gothic-std{font-family:"letter-gothic-std",sans-serif;}.tk-prestige-elite-std{font-family:"prestige-elite-std",monospace;}</style><link rel="stylesheet" href="https://use.typekit.com/c/e4caf3/letter-gothic-std:n4,omnes-pro:n4:n5:n6:n7,prestige-elite-std:n7.XbL:F:2,X37:F:1,X39:F:1,X3C:F:1,X3F:F:1,Xrv:F:2/d?3bb2a6e53c9684ffdc9a98f41e5b2a62e5aa32ea395d977a52ef7d9dcb4c4d3e3883683c0f9453f223b3959f88e9b26529c5a8f4a2c32c29e27446ffb368ff2870f5bb4535c1184821d0b4d907a65e9f6e318c4b3afc3e85cf7f80b6a3577681894ee8e765c25e39d69c2b4abd31660002b05a3387d2ec2998e64140624485f09c576b4781718131adabfaba4153d7c317d5ddcab0e1027b3b6a87258238b94dfbd4490348af1884dbb39329af8012631f55d86706deda0b1efd2bc84fac15319cf90f9dba52bbeb99001f9018a269d3589fa81645462ba617b1d185728c0bda"><script type="text/javascript">try{Typekit.load();}catch(e){}</script>
        <style type="text/css">
        .wf-loading h1, .wf-loading h2, .wf-loading h3, .wf-loading h4, .wf-loading a, .wf-loading p, .wf-loading label, .wf-loading table{ visibility: hidden; }
        .chk {
          height: 12px;
        }
        </style>

        <link type="text/css" rel="stylesheet" href="../css/reset_login.css" media="all">
        <link type="text/css" rel="stylesheet" href="../css/main_login.css" media="all">
        <link type="text/css" rel="stylesheet" href="../css/jqmodal.css" media="all">
        <link type="text/css" rel="stylesheet" href="../css/queries.css" media="all">
       <!-- <link rel="stylesheet" href="../css/jquery.fancybox-1.3.1.css" type="text/css" media="screen">-->
        

    

        <script type="text/javascript" src="../js/jquery.js"></script>
        <script type="text/javascript" src="../js/jquery.cycle.all.js"></script>
        <script type="text/javascript" src="../js/jquery.transform-0.9.3.min.js"></script>
        <script type="text/javascript" src="../js/jquery.color.js"></script>
        <script type="text/javascript" src="../js/jquery.form.js"></script>
        <script type="text/javascript" src="../js/jquery.zclip.min.js"></script>
        <script type="text/javascript" src="../js/jquery.scrollto.min.js"></script>
        <script type="text/javascript" src="../js/jquery.maskedinput.min.js"></script>
        <script type="text/javascript" src="../js/jqmodal.js"></script>
        <script type="text/javascript" src="../js/ajax.js"></script>
        <script type="text/javascript" src="../js/main.js"></script>

    

        <script type="text/javascript">
        var _gaq = _gaq || [];
        _gaq.push(['_setAccount', 'UA-29467896-1']);
        _gaq.push(['_trackPageview']);
        
        (function() {
          var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true;
          ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';
          var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s);
        })();


        $(document).ready(function() {
          $("#signup").click(function(){          
            var uname=$("#username").val();
            var pass=$("#password").val();
            var email=$("#email").val();

            $.ajax({
             type: "POST",
             url: "/rapper/Login/signup",
             data: {uname:uname,password:pass,email:email},            
             async : false
           }).done(function(data) {                                       
             alert('done'); 
           });
         });

          $("#signupView,#login_button,#logout_button").hide();

          $("#login_button").click(function(){  
            $('#signupView').animate({opacity:'toggle'},'fast',function (){$('#loginView').animate({opacity:'toggle'},'fast');$("#login_button,#signup_button").toggle(); });

          });
          $("#signup_button").click(function(){
            $('#loginView').animate({opacity:'toggle'},'fast',function (){$('#signupView').animate({opacity:'toggle'},'fast');$("#login_button,#signup_button").toggle();});
          });

        });




    </script>
    <script type="text/javascript" src="chrome-extension://dlnembnfbcpjnepmfjmngjenhhajpdfd/resources/LocalScript.js"></script>
    <!--<script type="text/javascript" src="chrome-extension://dlnembnfbcpjnepmfjmngjenhhajpdfd/libraries/DataExchangeScript.js"></script>-->



  </head>

  <body>


    <div id="Body" style="height: auto;">
      <div id="Messages">
        <div id="message">
        </div>
        <div id="error">

        </div>
      </div><!--end #Messages-->
      <div id="Main">       
        <header id="Header" class="home">
          <h1 class="logo">Postable</h1>       
          <div class="social">
            <ul>
              <li class="follow"><p></p></li>
              <li><a href="http://twitter.com/postable" class="twitter" target="_blank" title="Twitter">Twitter</a></li>
              <li><a href="https://www.facebook.com/postable" class="facebook" target="_blank" title="Facebook">Facebook</a></li>
              <li><a href="http://www.pinterest.com/postable" class="pintrest" target="_blank" title="Pintrest">Pintrest</a></li>
            </ul>
          </div>
          <nav style="top: -5px;">
            <div class="account">
              <div id="login_button" class="login"><a href="#" title="Login">Login</a></div>            
            </div>
            <div class="account">
              <div id="signup_button" class="login"><a href="#" title="SignUp">SignUp</a></div>     
            </div>
             <div class="account">
              <div id="logout_button" class="login"><a href="#" title="LogOut">Log Out</a></div>     
            </div>
          </nav>
        </header><!--end #Header-->




        <div id="Home">
          <div class="home_header">
            <header>
              <h2 class="heading">Want Your Idea<br> ALIVE..?</h2>
              <p class="description">Create a prototype of your idea<br> in a quick time.</p>
            </header>

            <div  class="post register">
              <div class="post_block post_register">
                <div id="signupView">
                 <form action='${postUrl}' method='POST'  class='cssform' autocomplete='off'  >
                  <p class="sell"><strong>Sign up &nbsp;&nbsp;<span class="green">It's free</span></strong></p>

                  <ul>

                    <li>
                      <label for="lastname" style="" class="">Username</label>         <input type="text" name="j_username" value="" id="username" maxlength="30" size="30">         <div class="error"></div>
                    </li>
                    <li>
                      <label for="email" style="" class="">Email</label>          <input type="text" name="email"  value="" id="email" maxlength="80" size="30">         <div class="error"></div>
                    </li>
                    <li class="last">
                      <label for="password" style="" class="">Make up a password</label>          <input type="password" name="j_password" value="" id="password" maxlength="20" size="30">         <div class="error"></div>
                    </li> 



                  </ul>
                  <div class="post_confirm confirm_home">
                    <input type='submit'  class="btn_next form_submit" id="signup"  title="SignUp Here" value="SignUp Here" />        
                  </div>
                  <p>
                    <g:if test='${flash.message}'>
                    <div class='login_message'>${flash.message}</div>
                  </g:if>
                </p>
              </form>
            </div>

            <div id="loginView">
             <form action='${postUrl}' method='POST'  class='cssform' autocomplete='off'  >
               <p class="sell"><strong>Get Started &nbsp;&nbsp;</strong></p>   
               <ul>

                <li>
                  <label for="usernamelogin" style="" class="">Username</label>         <input type="text" name="j_username" value="" id="usernamelogin" maxlength="30" size="30">         <div class="error"></div>
                </li>

                <li class="last">
                  <label for="password" style="" class="">Make Up a Password</label>          <input type="password" name="j_password" value="" id="passwordlogin" maxlength="20" size="30">         <div class="error"></div>
                </li>       

              </ul>
              <div class="post_confirm confirm_home">           
                  <input type='submit'  class="btn_next form_submit" id="login"  title="Login Here" value="Login Here" />        
             </div>
             <p>
              <g:if test='${flash.message}'>
              <div class='login_message'>${flash.message}</div>
            </g:if>
          </p>

        </form> </div> </div>
      </div>

    </div>







    <section class="home_steps">
      <ul>
        <li class="step_one">
          <img src="../images/img/app/step_01.png" alt="Step One">
          <h3>Draw Class Diagram</h3>
          <p class="body"></p>
        </li>
        <li class="step_over"></li>
        <li class="step_two">
          <img src="../images/img/app/step_02.png" alt="Step Two">
          <h3>Create your UI pages</h3>
          <p class="body"><br> </p>
        </li>
        <li class="step_under"></li>
        <li class="step_three">
          <div class="flare" data-transform="rotate(813.6375deg)" style="-webkit-transform: rotate(813.6375deg);"></div>
          <img src="../images/img/app/step_03.png" alt="Step Three">
          <h3>App is ready to use</h3>
          <p class="body"><br></p>
        </li>
      </ul>
    </section>

    <div class="clear"></div>

    <section class="home_done">
      <div class="done_tip"></div>
      <div class="done_body">
        <h3>It's really that easy.</h3>
        <p class="description">Great for weddings, baby showers, birth announcements, holiday cards &amp; even just knowing where your friends live.</p>
        <div class="done_promo">
          <ul>
            <li class="one">
              <img src="../images/sample/quote_01.png" alt="">
              <p class="body">"Postable makes collecting mailing addresses from a big group incredibly simple."</p>
            </li>
            <li class="two">
              <img src="../images/sample/quote_02.png" alt="">
              <p class="body">"Postable is a dead simple and secure address book."</p>
            </li>
            <li class="three">
              <img src="../images/sample/quote_03.png" alt="">
              <p class="body">"Use Postable to gather everyone's address in one spot."</p>
            </li>
            <li class="four">
              <img src="../images/sample/quote_04.png" alt="">
              <p class="body">"One-click address labels? Yes, please!"</p>
            </li>
          </ul>
        </div>
      </div>
    </section>

    <section class="home_book">
      <header class="dashed">
        <h3>The Rapper</h3>
      </header>
      <div class="book_slide">
       <!-- <img src="../images/sample/sample.png" alt="">-->
       <img src="../images/img/app/rapperui.jpg" alt="">
      </div>
        
      </section>
      
      <section class="home_benefits">
        <header class="dashed">
          <h3>The Benefits</h3>
        </header>
        <ul>
          <li class="benefit_01">
            <img src="../images/img/app/benefit_01.png" alt="A Fresh Start">
            <h4>Cross Platform</h4>
            <p class="body">Responsive design<br> supported for<br> Desktop,Tablet,Laptop and Mobile View.<br><br></p>
          </li>
          <li class="benefit_02">
            <img src="../images/img/app/benefit_02.png" alt="Never Lose Your Contacts">
            <h4>Injection  Point</h4>
            <p class="body">Customize the Rapper&amp; </p>
          </li>
          <li class="benefit_03">
            <img src="../images/img/app/benefit_03.png" alt="Great For Events">
            <h4>Saves LOTS of Time</h4>
            <p class="body">Reduce your time for web application development<br> <br> <span class="linefix"><br></span></p>
          </li>
          <li class="benefit_04">
            <img src="../images/img/app/benefit_04.png" alt="Export To Anywhere">
            <h4>Time To  Market</h4>
            <p class="body">Build your application quickly and launch it in quick time.</p>
          </li>
        </ul>
      </section>

    </div><!--end #Home-->    <div class="clear"></div>
  </div><!--end #Main-->
       <div class="book_slide">
       <!-- <img src="../images/sample/sample.png" alt="">-->
       
      </div>
  <div class="clear"></div>
  </div><!--end #Body-->
  <!--<footer id="Footer">
    <div class="footer_block">
      <nav>
        <ul>
          <li><a href="../images/sample/Postable - The easiest way to get people's mailing addresses.htm" title="Home">Home</a></li>
          <li><a href="https://www.postable.com/about" title="About">About</a></li>
          <li><a href="https://www.postable.com/faq" title="FAQ">FAQ</a></li>
          <li><a href="https://www.postable.com/terms" title="Terms">Terms</a></li>
          <li><a href="https://www.postable.com/privacy" title="Terms">Privacy</a></li>
        </ul>
      </nav>
      <div class="copyright">Totally <a href="http://nytm.org/made-in-nyc/" target="_blank" title="Made In NY">Made In NY</a>&nbsp; © 2013 Postable</div>
      <a href="javascript:void(0)" id="BackTop"></a>
    </div>
  </footer>--><!--end #Footer-->
  <script type="text/javascript">
  var _sf_async_config = { uid: 39464, domain: 'postable.com' };
  (function() {
    function loadChartbeat() {
      window._sf_endpt = (new Date()).getTime();
      var e = document.createElement('script');
      e.setAttribute('language', 'javascript');
      e.setAttribute('type', 'text/javascript');
      e.setAttribute('src',
        (("https:" == document.location.protocol) ? "https://a248.e.akamai.net/chartbeat.download.akamai.com/102508/" : "http://static.chartbeat.com/") +
        "js/chartbeat.js");
      document.body.appendChild(e);
    };
    var oldonload = window.onload;
    window.onload = (typeof window.onload != 'function') ?
    loadChartbeat : function() { oldonload(); loadChartbeat(); };
  })();
  </script>



  <div id="LCS_FE1DEEEA_DB6D_44b8_83F0_34FC0F9D1052_communicationDiv"></div><script language="javascript" type="text/javascript" src="../js/chartbeat.js"></script></body></html>
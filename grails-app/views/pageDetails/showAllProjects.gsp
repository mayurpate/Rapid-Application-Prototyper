<!DOCTYPE html>
<html lang="en">
    <head>
        <title>Grid Navigation Effects with jQuery</title>
		<meta charset="UTF-8" />
        <meta name="description" content="Grid Navigation Effects with jQuery" />
        <meta name="keywords" content="jquery, effects, grid, animation, css3, images, thumbnails, slide, animate, fade, disperse, random" />
		<meta name="author" content="Codrops" />
        <link rel="stylesheet" type="text/css" href="../css/AllProjectsStyle.css" />
		<link rel="stylesheet" type="text/css" href="../css/gridNavigation.css" />

	<!--	<link href='http://fonts.googleapis.com/css?family=PT+Sans+Narrow' rel='stylesheet' type='text/css' />
		<link href='http://fonts.googleapis.com/css?family=Oswald' rel='stylesheet' type='text/css' />-->

		<script type="text/javascript" src="../js/jquery.js"></script>
		<script type="text/javascript" src="../js/jquery.easing.1.3.js"></script>
		<script type="text/javascript" src="../js/jquery.mousewheel.js"></script>
		<script type="text/javascript" src="../js/jquery.gridnav.js"></script>
		<script type="text/javascript" src="../js/handlebars-1.0.0.beta.6.js" ></script>

		<script type="text/javascript">			

			$(document).ready(function() {
				var projectTemplate = Handlebars.compile($("#showAllProjects").html()); 
				$.ajax({
			             type: "GET",
			             url: "/rapper/PageDetails/getAllProjects",               
			             async:false
			         }).done(function(data) { 
			               
			                 jQuery.each(data.projectNames,function(index,value){			                
					                var temp = projectTemplate({ project_name : value , project_id : data.projectIds[index]}); 
					                $(".tj_gallery").append(temp);  				               
		            		});  
		            		if((data.projectNames.length+1) > 6){
		            			$(".tj_nav").show();
		            		}  
		            		else{
		            			$(".tj_nav").hide();
		            		}  
			         });			    			 
			  	$('#tj_container').gridnav({				
					type	: {
						mode		: 'sequpdown', 		// use def | fade | seqfade | updown | sequpdown | showhide | disperse | rows
						speed		: 500,				// for fade, seqfade, updown, sequpdown, showhide, disperse, rows
						easing		: '',				// for fade, seqfade, updown, sequpdown, showhide, disperse, rows	
						factor		: 50,				// for seqfade, sequpdown, rows
						reverse		: true				// for sequpdown
					}				
				});		
				$("ul.tj_gallery li").click(function(){
					var projectId = $(this).find("#hiddenProjectId").val();
					
					$.ajax({
			             type: "GET",
			             url: "/rapper/PageDetails/setProjectId",
			             data: {projectId : projectId},               
			             async:false
			         }).done(function(data) { 			               			                   
			         });		
				});

				
			});
				
		</script>
    </head>
    <body >
    	
		<hr id="header_stripe"/>

		 <nav style="top: -5px;">     
		 <form action="${resource(file: 'j_spring_security_logout')}" method='POST'  autocomplete='off'  >    
          <div class="account">         
            <input type='submit'  class="login" id="logout"  title="LogOut Here" value="LogOut" />        
          </div>
          </form> 
        </nav>


		<div class="container">
			<div class="content example10">
				<div id="tj_container" class="tj_container">
					<div class="tj_nav">
						<span id="tj_prev" class="tj_prev">Previous</span>
						<span id="tj_next" class="tj_next">Next</span>
					</div>
				

				  <script id="showAllProjects" type="text/x-handlebars-template">
				 		<li><a href="/rapper/PageDetails/PageDesign"><img src="../images/images/folder.ico" alt="image01" /><h3>{{project_name}}</h3></a>
				 		<g:hiddenField name="hiddenProjectId" value="{{project_id}}" /></li>
				  </script> 

    			  

					<div class="tj_wrapper">
						<ul class="tj_gallery">
						<li><a href="/rapper/PageDetails/DrawClass"><img src="../images/images/folder.png" alt="image01" /><h3>Create New Project</h3></a></li>		
						
						</ul>
					</div>
				</div>
			</div>			
		
		</div>
		
    </body>
</html>
    <html >
        <head>
        <meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1">

        <title>UML Diagram</title>
        
        

        <g:javascript src="UDCore.js" />
        <g:javascript src="UDModules.js" />
        <g:javascript src="UDApplication.js" />


        <!--<link type="text/css" rel="stylesheet" href="../css/UDStyle.css" media="screen">-->
    
        <link type="text/css" rel="stylesheet" href="../css/drawclassUDStyle.css" media="screen">
        <link href="../css/bootstrap.css" rel="stylesheet">
        <link href="../css/bootstrap-responsive.css" rel="stylesheet">
        

        <link rel="stylesheet" href="../css/drawclassjquery-ui.css" />
       
           

        <g:javascript src="jquery.js"/>
        <g:javascript src="makisu.js"/>
        <g:javascript src="ace.js" />
        <g:javascript src="mode-javascript.js" />
        <g:javascript src="mode-css.js" />
        <g:javascript src="mode-html.js" />
        <g:javascript src="bootstrap.js" />
        <g:javascript src="underscore-min.js" />
        <g:javascript src="backbone-min.js" />
        <!--<g:javascript src="jquery-ui-1.8.22.custom.min.js" />-->

        <g:javascript src="jquery-ui.js" />     


        <g:javascript src="handlebars-1.0.0.beta.6.js" />
        <g:javascript src="Markdown.Converter.js" />
        <g:javascript src="keymaster.js" />
        <g:javascript src="beautify.js" />
        <g:javascript src="beautify-html.js" />


        <style>
        .progress-label {
            float: left;
            margin-left: 50%;
            margin-top: 5px;
            font-weight: bold;
            text-shadow: 1px 1px 0 #fff;
        }
        </style>

        <script>
        function waitForParsing() {
            var progressbar = $( "#progressbar" ),
            progressLabel = $( ".progress-label" );

            progressbar.progressbar({
              value: false,
              change: function() {
                progressLabel.text( progressbar.progressbar( "value" ) + "%" );
            },
            complete: function() {
                progressLabel.text( "Complete!" );
                window.location.href = '/rapper/PageDetails/PageDesign' ;                                                            
            }
        });

            function progress() {
              var val = progressbar.progressbar( "value" ) || 0;

              progressbar.progressbar( "value", val + 1 );

              if ( val < 99 ) {
                setTimeout( progress, 100 );
            }
        }

        setTimeout( progress, 3000 );

        }
        </script>


        <script type="text/javascript">
        window.onload = function() {

            var width = window.innerWidth - 250;

                if(width < 400)  width = 400;
                if(width > 1000) width = 1000;

        var app = new Application( { id: 'umldiagram', width: width, height: 580 } );  
        _createNewProject();        
        }
        </script>

        <style type="text/css"></style></head>

        <script>

        function sendDataTOParse( XMLdata)
        {            
                this.createloadingView = new F({
                  el: $("#loadingView")
                });
                this.createloadingView.showloadingView();
                waitForParsing();                     
                $.ajax({
                     type: "POST",
                     url: "/rapper/PageDetails/parsing",
                     data: {  XMLdata : XMLdata , projectName :  $("#hiddenProjectName").val() }            
                 }).done(function() {                       
                      
                 });                    
        }

        </script>

        <script>

        var Tc = {}.hasOwnProperty;

        var _createNewProject = function(){     
                this.createNewProjectView = new F({
                  el: $("#createNewProject")
                });
                return this.createNewProjectView.showView()
        }


        var f = function (a, b) {
                function c() {
                  this.constructor = a
                }
                for (var d in b) Tc.call(b, d) && (a[d] = b[d]);
                c.prototype = b.prototype;
                a.prototype = new c;
                a.__super__ = b.prototype;
                return a
        }


        var F = function (a) {
        _.extend(this, Backbone.Events);

        F.__super__.constructor.call(this, a)
        };
        f(F, Backbone.View);
        F.prototype.events = {    
        'click [data-action="createNewProject"]' : "createNewProject",   
        "submit form": "createNewProject"   
        };

        F.prototype.showView = function (a) {
        $("#createNewProject").modal({
          keyboard: !1,
          backdrop: "static"
        });
        return $("#createNewProject").modal("show")
        };

        F.prototype.showloadingView = function (a) {
        $("#loadingView").modal({
          keyboard: !1,
          backdrop: "static"
        });
        return $("#loadingView").modal("show")
        };

        F.prototype.hideView = function () {
        return $("#createNewProject").modal("hide")
        };

        F.prototype.createNewProject = function () {
             var a, projectName;
            if ((a = this.$el.find('[name="name"]').val()) && "" !== $.trim(a)) 
            {
                 projectName =  $.trim(this.$el.find('[name="name"]').val());
                 $("#hiddenProjectName").val(projectName);
                 this.hideView();
            }
            return !1                 
        };





        </script>


        <body>
        
        <g:hiddenField name="hiddenProjectName"/>

        <div class="modal hide" id="createNewProject" style="display: none;" aria-hidden="true">
        <div class="modal-header">
          <h3><div class="logo-red"></div> Start a new Project</h3>
        </div>
        <div class="modal-body relative">
          <form>
            <label>Name</label>
            <input type="text" name="name">        
            <div class="btn-group template-selection" data-toggle="buttons-radio">
              <a data-template="none" class="active template-none"> <div class="image"></div> </a>         
            </div>
          </form>
        </div>
        <div class="modal-footer">      
          <a href="#"  class="btn btn-success create" data-action="createNewProject"><div class="green-icon check"></div> Create</a>
        </div>
        </div>


        <div class="modal hide" id="loadingView" style="display: none;" aria-hidden="true">
        <div class="modal-header">
          <h3><div class="logo-red"></div> Loading....</h3>
        </div>
        <div class="modal-body relative">
          <form>
             <div id="progressbar"><div class="progress-label">Loading...</div></div>
          </form>
        </div>       
        </div>

       
 
         <form action="${resource(file: 'j_spring_security_logout')}" method='POST'  autocomplete='off'  >    
          <div class="account">         
            <input type='submit'  class="login" id="logout"  title="LogOut Here" value="LogOut" />        
          </div>
          </form> 
          
        <div id="umldiagram">
        </div>
        </body></html>
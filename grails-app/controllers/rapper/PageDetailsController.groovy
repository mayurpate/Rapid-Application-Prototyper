		package rapper
		import grails.converters.JSON		

		import grails.plugins.springsecurity.Secured

		@Secured(['ROLE_USER'])
		class PageDetailsController {

			def scaffold = true
			static projectId
			static projectNameStored
			def springSecurityService

			def index = {   
				redirect (action:"LoginPage")
			}

			def LoginPage = {

			}

			def sample = {
				println 'hello'
			}

			def showAllProjects = {
				
			

		   }

		def getAllProjects = {
			def allProjects = Application.list();
			println allProjects.projectName
			println allProjects.id
			def projectNames = [projectNames : allProjects.projectName , projectIds : allProjects.id]
			render projectNames  as JSON
		}	

		def setProjectId = {
			projectId = params.projectId
			render null as JSON
		}

		def DrawClass = {

		}

		def parsing = {

					def ProjectName = params.projectName  
					projectNameStored = params.projectName  
					println projectNameStored
                   // Creation of Application Folder
                 
                   println "start"

                   def process  =  "cmd /c grails create-application $ProjectName ".execute()                   

                   def out = new StringBuilder()

                   process.waitForProcessOutput(out, new StringBuilder())

                   println "$out"

                   println"DONE"	

                   println "chnaging image...."

                   new AntBuilder().delete( file:"E:/test/$ProjectName/web-app/images/grails_logo.png" )

                    new AntBuilder().copy( todir:"E:/test/$ProjectName/web-app/images" ) {
                       	fileset( dir:"C:/grails/grails_images" ) 
                       	{ 
                       	}
                       }	



                  //Parsing of Domain Classes from Class Diagram

                  def XmlInput = params.XMLdata

                  println "$XmlInput"

                  def config = new XmlSlurper().parseText(XmlInput)

                  def engine = new groovy.text.SimpleTemplateEngine()

                  def associations = []
                  def aggregations = []
                  def classNameMapping = [:]
                  def HasMany = [:]
                  def BelongsTo = [:]

                  config?.UMLClassDiagram?.UMLClass.each
                  {
                  	classNameMapping[it.@id.text()] = it.item?.@value.text()
                  }

                  config?.UMLClassDiagram?.UMLAssociation.each
                  {
                  	def side_A_className =  it.'@side_A'
                  	def side_B_className =  it.'@side_B'

                  	associations << [
                  	"side_A": side_A_className,
                  	"side_B": side_B_className,
                  	"multiplicityA": it.item[3].'@value',
                  	"multiplicityB": it.item[4].'@value',
                  	]


                  	if(it.item[3].'@value'=='1')
                  	{
                  		def keyList  = BelongsTo[(classNameMapping."$side_B_className")]
                  		if(keyList == null)
                  		{
                  			keyList =[]
                  		}

                  		def containsClassName =keyList.contains((classNameMapping."$side_A_className"))
                  		if(!containsClassName)
                  		keyList << classNameMapping."$side_A_className"

                  		BelongsTo.put((classNameMapping."$side_B_className"),keyList)

                  	}

                  	if(it.item[3].'@value'=='1..')
                  	{

                  		def keyList  = HasMany[(classNameMapping."$side_B_className")]
                  		if(keyList == null)
                  		{
                  			keyList =[]
                  		}

                  		def containsClassName =keyList.contains((classNameMapping."$side_A_className"))
                  		if(!containsClassName)
                  		keyList << classNameMapping."$side_A_className"



                  		HasMany.put((classNameMapping."$side_B_className"),keyList)



                  	}

                  	if(it.item[4].'@value'=='1')
                  	{

                  		def keyList  = BelongsTo[(classNameMapping."$side_A_className")]
                  		if(keyList == null)
                  		{
                  			keyList =[]
                  		}

                  		def containsClassName =keyList.contains((classNameMapping."$side_B_className"))
                  		if(!containsClassName)
                  		keyList << classNameMapping."$side_B_className"

                  		BelongsTo.put((classNameMapping."$side_A_className"),keyList)



                  	}

                  	if(it.item[4].'@value'=='1..')
                  	{
                  		def keyList  = HasMany[(classNameMapping."$side_A_className")]
                  		if(keyList == null)
                  		{
                  			keyList =[]
                  		}

                  		def containsClassName =keyList.contains((classNameMapping."$side_B_className"))
                  		if(!containsClassName)
                  		keyList << classNameMapping."$side_B_className"



                  		HasMany.put((classNameMapping."$side_A_className"),keyList)



                  	}

                  	println "association : "+  it.'@side_A'+ " "+it.'@side_B'+  " "+  it.item[3].'@value' + " "+  it.item[4].'@value'
						} //END:loop for associations
						
						println "HASMANY:-"+HasMany
						println "BELONGSTO:-"+BelongsTo
						println classNameMapping
						
						config?.UMLClassDiagram?.UMLAggregation.each
						{

							aggregations << [
							"side_A": it.'@side_A',
							"side_B": it.'@side_B',
							"multiplicityA": it.item[3].'@value',
							"multiplicityB": it.item[4].'@value',
							]
							println "aggregation : "+  it.'@side_A'+ " "+it.'@side_B'+  " "+  it.item[3].'@value' + " "+  it.item[4].'@value'
						}
						
						
						def templateContent = """
						package <%print ProjectName %>

						class <% print classConfigurationNode?.item?.'@value' %>
						{
							<%   
							def attributes  =   classConfigurationNode.superitem[1].item
							def constraints =   [:]

							def currentClassName =  classConfigurationNode?.item?.'@value'   

							attributes.each 
							{ nextAttributeNode ->

								def attributeConfig = nextAttributeNode.'@value'
								def attributeExtractionRegEx = /(\\+|\\-|\\#|\\~| )([a-zA-Z0-9]+| )\\:([a-zA-Z0-9]+| )(\\{[a-zA-Z\\s\\,]+\\}| )?/
								def matches = (attributeConfig=~attributeExtractionRegEx)            

								if(matches)
								{
									def fieldType = matches[0][3]
									def fieldName = matches[0][2]    

									def constraintName = matches[0][2]
									def constraintValue = matches[0][4]   

									if(constraintValue)
									{
										constraintValue = constraintValue.replaceAll(' ',':')                           
										constraintValue = constraintValue.replace('{','(') 
											constraints[constraintName] = constraintValue.replace('}',')')                            
					}

					println fieldType + " "+  fieldName 

					} // END:  if(matches)

					} // END: attributes.each 

					if(constraints)
					{
						%>
						static constraints = 
						{
							<% 
							constraints.each
							{ constraintName, constraintValue ->

								println constraintName +  constraintValue

								}// END: constraints.each
								%>
								}  // END: static constraints  

								<%
								}// END: if(constraints)
						else
						{%>
							static constraints = {

												}
<%

						}

								if(HasMany.containsKey(currentClassName.toString()))
								{
									def tempList = HasMany[currentClassName.toString()]
									def count = 1
									%>
									static hasMany = [<%tempList.each
									{   nextClass ->
										if(count<tempList.size())
										{
											print nextClass.toString().toLowerCase()+":"+nextClass.toString()+","
											count++
										}
										else
										{
											print nextClass.toString().toLowerCase()+":"+nextClass.toString()
										}

										}%>]
										<% }

										if(BelongsTo.containsKey(currentClassName.toString()))
										{
											def tempList1 = BelongsTo[currentClassName.toString()]
											def count1 = 1
											%>
											static belongsTo = [<%tempList1.each
											{   nextClass ->
												if(count1<tempList1.size())
												{
													print nextClass.toString().toLowerCase()+":"+nextClass.toString()+","
													count1++
												}
												else
												{
													print nextClass.toString().toLowerCase()+":"+nextClass.toString()
												}

											}
																		

												%>]
											<%
											}%>


											}// END: Class file content
											"""

							try
							{
								config?.UMLClassDiagram?.UMLClass.each
								{ 

									classConfigurationNode->

									def binding = ["classConfigurationNode" : classConfigurationNode, "HasMany" : HasMany , "BelongsTo" : BelongsTo , "ProjectName" : ProjectName]

									def template = engine.createTemplate( templateContent ).make(binding)

									new File ("E:/test/$ProjectName/grails-app/domain/$ProjectName").mkdir()

									new File("E:/test/$ProjectName/grails-app/domain/$ProjectName\\${classConfigurationNode?.item?.'@value'}.groovy").write (template.toString())

								//def DomainName = "${classConfigurationNode?.item?.'@value'}"

								//Process batchFileProc = Runtime.getRuntime().exec("cmd /c start c:\\CreateCRUD.bat $ProjectName $DomainName")

								//def process1  =  "cmd /c start /b c:\\CreateCRUD.bat $ProjectName $DomainName".execute()

                			    //def out1 = new StringBuilder()

  		           				//process1.waitForProcessOutput(out1, new StringBuilder())
  		           				//process1.consumeProcessOutput()


  		           				println "Crud Created....."
  		           			}

  		           		}
  		           		catch(Exception e)
  		           		{
  		           			println e.printStackTrace()
  		           		}

					// Storing ProjectName in Db

					Process batchFileProc = Runtime.getRuntime().exec("cmd /c start c:\\CreateCRUD.bat $ProjectName")

		     	   Application appObject = new Application(projectName : params.projectName) //Stores projectname in Application object	          		     	
		     		appObject.save()
		     		projectId = appObject.id
		     }

		     def PageDesign = { 
		     	println projectId
		     	def projetNameFromDB = Application.get(projectId)
		     	projectNameStored = projetNameFromDB.projectName 
		     	println projectNameStored
		     }

		     def getnewprojectid={                  
		     	def dataFromApp = Application.get(projectId)              
		     	def sendDataBack = [proIdFromController : projectId , pageIdFromController : dataFromApp.pagedetails.id]
		     	render sendDataBack as JSON            
		     }

		     def getPages = {    

		     	if(params.projectId)
		     	{   	
		     	
		     		def allPagesOfAnyProject = Application.get(params.projectId)            
		     		def allPages = [ pageNames : allPagesOfAnyProject.pagedetails.name, pageIds : allPagesOfAnyProject.pagedetails.id]		     		
		     		render allPages as JSON
		     	}   
		     	else
		     	{		     			
		     		render null as JSON
		     	}

		     }

		     def loadPage={
		     	if(params.pageId)
		     	{
		     		def dataFromDB=PageDetails.get(params.pageId)
		     		def dataTOSend=[keyValue : dataFromDB.tree , fullHTML : dataFromDB.html , pageName : dataFromDB.name]
		     		render dataTOSend as JSON
		     	}
		     	else
		     	{
		     		render null as JSON
		     	}
		     } 

		     def savePages={

		     	def dataFromApp = Application.get(params.projectId)

		     	if(!params.pageId)
		     	{    

		     		PageDetails pObject = new PageDetails(
		     			name: params.name ?: "",
		     			tree: params.tree ?: "",
		     			html: params.html ?: ""
		     			)       

		     		dataFromApp.addToPagedetails(pObject)   
		     		dataFromApp.save()   
		     		render params.pageId
		     	}
		     	else
		     	{

		     		def dataFromDB = PageDetails.get( params.pageId);
		     		dataFromDB.properties=params
		     		dataFromApp.addToPagedetails(dataFromDB)
		     		dataFromApp.save()
		     		render params.pageId
		     	}

		     }

		     def deletepages = {
		     	def dataFromDB = PageDetails.get( params.pageId);	
		     	println "pageid:" + params.pageId	     					     			
		     	dataFromDB.delete()
		     }

		     def getnewpageid = {	        	
		     	def allPagesOfAnyProject = Application.get(params.projectId)            
		     	def allPages = allPagesOfAnyProject.pagedetails.id.max()	           	           
		     	def dataTOSend = [idFromController : allPages]
		     	render dataTOSend as JSON
		     }

		     def exportPage = {

		     	println params.fullHtml;
		     	println params.pageName;
		     	println projectNameStored;
		     	def projectName = projectNameStored;
		     	def pageName = params.pageName;		     		
		     	def htmlInput = params.fullHtml;
		     	def engine = new groovy.text.SimpleTemplateEngine()
		     	def templateContent = """<%println htmlInput%>"""
		     	try
		     	{
		     		def binding = ["htmlInput" : htmlInput , "projectName" : projectName , "pageName" : pageName]
		     		def template = engine.createTemplate( templateContent ).make(binding)
		     		new File("E:/test/$projectName/grails-app/views/\\${pageName}.gsp").write (template.toString())
		     	}
		     	catch(Exception e)
		     	{
						
						println "error"
					}
					

				}

				def writeJSCodeToFile = {
					println params.injectedJSCode;
					println params.jsFileName;
					def projectName = projectNameStored;
					new File("E:/test/$projectName/web-app/js\\${params.jsFileName}.js").append(params.injectedJSCode);		     		
				}

				def createControllerActions = {
					println params.actionNames		     		
					def jsonArray = JSON.parse(params.actionNames)					
					jsonArray.each { println "Value: ${it}" }
					def ProjectName = projectNameStored;
					def NewControllerOther = new File("E:/Test/${ProjectName}/grails-app/views/rapper").mkdir()

					def engine = new groovy.text.SimpleTemplateEngine()
					def templateContent = """
					package ${ProjectName}
					class rapperController {
						def index(){ }

						"""
						try
						{
							def binding = ["ProjectName" : ProjectName ]

							def template = engine.createTemplate( templateContent ).make(binding)
                           // def NewController1 = new File("E:/Test/${ProjectName}/grails-app/views/${ProjectName}").mkdir() 

                           def NewController = new File("E:/Test/${ProjectName}/grails-app/controllers/${ProjectName}/rapperController.groovy").write (templateContent.toString())

                       }
                       catch(Exception e)
                       {
                       	println e.printStackTrace()
                       }
                       def GspNames = [] 
                       GspNames = jsonArray
                       GspNames.each{
                       	currentName ->
                       	def NewControllerAdded = new File("E:/Test/${ProjectName}/grails-app/controllers/${ProjectName}/rapperController.groovy").append("\n\t\tdef ${currentName}(){ }\n")
                       }
                       def NewControllerAdded = new File("E:/Test/${ProjectName}/grails-app/controllers/${ProjectName}/rapperController.groovy").append("}")

                       println "moving files..."
                       println "$ProjectName"

                       new AntBuilder().copy( todir:"E:/test/$ProjectName/grails-app/views/rapper" ) {
                       	fileset( dir:"E:/test/$ProjectName/grails-app/views" ) 
                       	{ 
                       		exclude(name:"error.gsp")
                       		exclude(name:"index.gsp")
                       		exclude(name:"**/layouts/**")
                       		exclude(name:"**/rapper/**")

                       	}
                       }	

                   }

                   def createWarFile = {


                   	def projectName = projectNameStored;

                   	println "war button clicked...."

                   	new File ("E:/test/$projectName/grails-app/migrations").mkdir()

                   	println "Coping file ........"

                   	println "$projectName"

                   	new AntBuilder().copy( todir:"E:/test/$projectName/scripts" ) {
                   		fileset( dir:'C:/grails/rapperResources' ) 
                   		{ 
                   			exclude(name:"build.gradle")
                   		}
                   	}

                   	new AntBuilder().copy( todir:"E:/test/$projectName" ) {
                   		fileset( dir:'C:/grails/rapperResources' ) 
                   		{ 
                   			exclude(name:"Events.groovy")
                   		}
                   	}




                   	println "file cppppp..."
		     	//	def process1  =  "cmd /c start /b c:\\war.bat $projectName".execute()

		     	//	process1.consumeProcessOutput()

		     	Process batchFileProc = Runtime.getRuntime().exec("cmd /c start c:\\war.bat $projectName")

		     	println "War Created....."
					//redirect (action:"downloadwarfile")

				}

				def InjectionofPlugins = {
		     		
		     		def projectName = projectNameStored
		     		println "in cont   :  " + params.pluginnames		     		
		     		new File("E:/test/$projectName/application.properties").append(params.pluginnames+"\n");		     				     		

		     	}
		     	
		     	def downloadwarfile = {
		     		println "in downloadwarfile"
		     	}

		     }
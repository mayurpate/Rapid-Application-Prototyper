import org.codehaus.gant.*


includeTargets << grailsScript("_GrailsInit")
includeTargets << grailsScript("_GrailsCreateProject")

basedir = "e:/Test"
grailsAppName = "MyApp"
projectType = "app"


target(main: "The description of the script goes here!") {
	// TODO: Implement script here
	
	createApp()
	println "$grailsAppName"
	println "$basedir"
	
}

setDefaultTarget(main)

package rapper

class PageDetails {
    String name
	String tree
	String html
    static constraints = {		
		tree (nullable: true, maxSize:10000)
		html (nullable: true, maxSize:10000)
    }
		
	static belongsTo = [application : Application]
    
}

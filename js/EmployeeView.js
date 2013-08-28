// EmployeeView.js
var EmployeeView = function(employee) {
	
	// Initialize function
	this.initialize = function() {
        this.el = $('<div/>');
    };

    // Render function
    this.render = function() {
    	this.el.html(EmployeeView.template(employee));
    	return this;
	};	

 	
 	//
    this.initialize();
 
 
} //EmployeeView
 
EmployeeView.template = Handlebars.compile($("#employee-tpl").html());
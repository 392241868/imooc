var student=require('./student1');//当前目录下的student.js
var teacher=require('./teacher');//当前目录下的student.js
function add(teacherName,students){
	teacher.add(teacherName);
	students.forEach(function(item,index){
		student.add(item);
	})
}
//add('老师',['sally','tom']);
exports.add=add;
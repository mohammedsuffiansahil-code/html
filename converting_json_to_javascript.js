var studentStr = '{"name":"sahil","age":19,"courses":["Node.js","MongoDB"],"rollno":306,"college":"kits"}';
var studentObj = JSON.parse(studentStr);
console.log(studentObj.name);
console.log(studentObj.courses);
console.log(studentObj.rollno);
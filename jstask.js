 const myName = 'johnbosco'
 const courses = ['javascripts','nodejs','html','css']
 
 console.log(myName)
 console.log(courses)
 
 let numOfCourses = courses.length
 
 if(numOfCourses%2 == 0){
	 for(let i =1; i < 201; i++){
		if(i%2 == 0) console.log(i)
	 }
 }else{
	 for(let i =1; i < 201; i++){
		 if(i%2 != 0) console.log(i)
	 }
		 
 }
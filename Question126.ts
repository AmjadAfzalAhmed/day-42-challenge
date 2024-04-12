const newObj2 = {
    name:"Amjad",
    course: "GIAIC",
    rollNo: 181989,
    baseFunc: function(){
      console.log("\n the result of base function:\n", this);
      //the use of this keyword in the above line refers to the parent object and its keys and values
  
            function nestedFunc() {
                console.log("\n the result of calling the nested funciton:\n ", this);
            }
            // while using this keyword in the nested function, it will loose its relation to the parent object
            // and behave to its global functioning that is for browser or window 
            nestedFunc(); //the nested function has to be invoked inside the base structure
            }
    };
  
    newObj2.baseFunc(); // the baseFunc() is called here with its parent object
                   


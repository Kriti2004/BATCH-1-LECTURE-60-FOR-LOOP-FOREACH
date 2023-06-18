let s={
    name:"Kriti",
    surname:"jha",
    myFuncA:function(){
        // Function Defination
        // Function body
        // console.log(this.); //this=self=current object
        console.log(" My name is "+this.name); 
    },
    myFuncB:()=>{

    },
    myFuncC:function(){

    },
};
console.log(s.myFuncA());
// 
//console.log(s.name);
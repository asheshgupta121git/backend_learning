let arr = [1,2,3];

arr.sayHello = ()=>{
    console.log("hi! im js oops learner ");
}

arr.__proto__.push = (n)=> {console.log("pushing number : ", n)};
/**
 *  Below are the primitive types of TS
 * 
 * string -> store text
 * number -> integers , real
 * boolean
 * undefined
 * null
 * bigint
 * symbol
 * 
 *  var <variable_name> : <type> = <value> ; // type annotations,type signature
 */ 
   var id : number = 14;
   var Name : string = 'Krityan';

   // Union types 
  let userId : number | string = "26";
  userId = 10;
  
  /**
   * 
   * array
   * 
   * let <variable_name> : type[] = [val1 , val2 , val3 ,...]
   */

  let ids : number[] = [1,2,3,4]; // Homogeneous array only integer values will store
  let hetro : any[] = [1,'e' ,false] // heterogeneous array
  let data : (number | boolean | string)[] = [2,true , "krityan"]; // you can also avoid using types as well 

  let ds = [2,true,'Krityan'];

  // Array in the form of typed tupled
  let data1 : [number , string , boolean] = [12 , "krityan" , false];

  /**
   * How to define types for objects
   * -classes
   * -interface -> its a contract
   */
  
  class car { // classes contains implementations of member functions as well like display()
   name : string

   constructor(name : string){
    this.name = name;
   }

   display(){
      console.log(this.name);
   }
  };

  interface Product { // interface don't provides any kind of member function implementations,interfaces in TS are used to define the structure of the object,the desc the contract that an object should adhere all of the props and methods but don't provides implementations
    name : string,
    price : number,
    brand : string,

    display() : void
  }


  // let p1 = new Product("") this will throw error
  let p1 : Product = {
     name : "iphone",
     price : 100000,
     brand : "Apple",
     display : ()=>{
      console.log("display");
     }
  };
  console.log(p1);

  let c1 = new car("santro")

  /**
   * functions in TS
   */

  function sum(a:number , b:number) : number { // this function will return number
    return a+b;
  }
  console.log(sum(20,30));

  // how to make optional parameter

  function prod(a:number , b?:number) : number {
    return a*(b || 1);
  }
  console.log(prod(2));
  console.log(prod(2,3));

  // Date object in TypeScript
  const dob = new Date(2003 , 10 , 27);
  console.log(dob);

  /**
   * any type -> your free ticket to get rid of TS type checking
   * 
   * if u want to define a variable with type any, then either mention ":any" while declaring the variable 
   * or don't assign a value while declaring a variable
   */

  let x ; // this variable has a type "any"
  x = 10;
  x = "10";


  
  


 


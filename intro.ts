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

  function fun() : void { // when u don't need to return 
    
  }
  console.log(fun());

  /**
   * Enums or Enumerations
   * const INITIALISED = "initialised"
   * Ticket status ["initialised" , "cancelled" , "resolved" , "pending"];
   * 
   * ti.status == "resolved"
   */

  enum TicketStatus { // gives us set of constants that we can use directly which is internally mapped to a bunch of integers
    INITIALISED,
    CANCELLED,
    RESOLVED,
    PENDING
  }
  console.log(TicketStatus.INITIALISED);
  console.log(TicketStatus.CANCELLED);

  const ticket ={
  id:1,
  title : "ticketStatus",
  status : TicketStatus.INITIALISED
  };
  console.log(ticket);
  if(ticket.status == TicketStatus.INITIALISED){
    console.log("done");
  }

  enum StatusCodes {
    NOTFOUND = 404,
    SUCCESS = 200,
    BADREQUEST = 400

  }
  const response = {
    url : "www.something.com",
    type : "GET",
    data : "Some string value",
    status : StatusCodes.SUCCESS
  }

  console.log(response);

  const result : {name : string , marks : number , address? : string} = {
    name : "Krityan",
    marks : 88,
    
  }

  // updating a old key-value pair
  result.marks = 93;  //TS will allow this
   
  // adding a new key-value pair
  result.address = "XYZ" // TS will allow this? => No , u have to make it optional



  
  


 


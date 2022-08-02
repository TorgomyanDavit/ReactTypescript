import { hashFormatter } from "./interfaceFormat";
import { Invoice } from "./invoice";
import { Payment } from "./payment";


export function typeScriptFile() {

    /** function declaration type  */
    // let greet:(Function | number);
    // greet = () => {
    //     console.log("h");
    // }
    // greet()
    // greet = 55

    // const add = (a:number,b?:number,c:number | string = "armen") => {
    //     console.log(a,b,c);
    // }
    // add(77,44)

    // function minus(a:number,b:string) {
    //     console.log(a + b);
    // }
    // minus(77,"44")

    
    // function add(a:number,b:number): number {
    //     const value = a + b
    //     return value
    // }
    // console.log(add(77,5));


    // function logDetaild(uid:string | number,item:string): number {
    //     console.log(`${uid} has a uid of ${item}}`);
    //     // return 5
    // }
    // console.log(logDetaild(77,"5"));


    /**preliminary type declaration  */
    // type stringOrNumber = string | number
    // type objWithName = {name:string,uid:stringOrNumber}
    // function logDetaild(user:objWithName): number {
    //     console.log(`${user.name} has a uid of ${user.uid}`);
    //     return 5
    // }

    // console.log(logDetaild({name:"armen",uid:"ghh"}));


    /**TypeScript Tutorial #10 - Function Signatures */

    // let greet:Function;


    // function greet(name:string,age:number): void {
    //     console.log("fsfgs");
    // };
    // greet("dsdfs",5)


    // let greet = (name:string,age:number):void =>  {
    //     console.log("fsfgs")
    // }   
    // greet("anun",5)


    // let greet:(a:string,b:number) => void ;
    // greet = (name,age) => {
    //     console.log("fsfgs")
    // }   
    // greet("anun",5)


    // this case we may return value void 
    // let calc:(a:number,b:number,c:string) => void;
    // calc = (numOne:number,numTwo:number,action:string) => {
    //     if(action === "add") {
    //         return numOne + numTwo
    //     }
    // };
    // alert(calc(1,2,"add"))


    // this case we should return value for func calc
    // let calc:(a:number,b:number,c:string) => number;
    // calc = (numOne:number,numTwo:number,action:string) => {
    //     if(action === "add") {
    //         return numOne + numTwo
    //     }
    //     return -1
    // };

    // alert(calc(1,2,"add"))

    // type person = {name:string,age:number,male?:boolean}
    // let showUserName:(obj:person) => void;

    // showUserName = (Person) => {
    //     console.log(`Name => ${Person.name}, age => ${Person.age}, male => ${Person.male || "No Assigned value"}`);
    // }

    // showUserName({name:"Davit",age:26})

    /**Dom in TypeScript */
    // const archor = document.getElementById("root2")!;
    // const form = document.getElementById("form") as HTMLFormElement;
    // const select = document.getElementById("select") as HTMLSelectElement;
    // const input = document.getElementById("input") as HTMLInputElement;
    // form.addEventListener((e:Event) => {
    //     e.preventDefault()
    //     console.log(e.target.value);
    // })



    /**typeScript Classes */
    // class Invoice {
    //     // readonly client:string;
    //     // private detail:string;
    //     // public amount:number;
    //     // constructor(a:string,b:string,c:number) {
    //     //     this.client = a
    //     //     this.detail = b
    //     //     this.amount = c
    //     // }

        
    //     constructor(
    //         readonly client:string,
    //         private detail:string,
    //         public amount:number,
    //     ){}


    //     format(arg:number){
    //         return `${this.client} ownes ${this.amount} for ${this.detail} + ${arg}` 
    //     }
    // }

    // const invOne = new Invoice("Armen","Sharyan",55)
    // const invTwo = new Invoice("Davit","Torgomyan",55)
    // let invoices:Invoice[] = [];
    // invoices.push(invOne)
    // invoices.push(invTwo)
    // invOne.amount = 1500 
    // console.log(invoices);

    /** TypeScript Tutorial #13 - Public, Private & Readonly*/
    // private only uses inside classes Invoice
    // invOne.client = "gexam" // Readonly not let you to change value ,Only read it
    // invoices.forEach((val) => {
    //     console.log(val.amount,val.client,val.detail);//error detail
    // })


    /**TypeScript Tutorial #14 - Modules */
    // change tsConfig esModule version 6 becouse module can be use in es6 module


    /**TypeScript Tutorial #15 - Interfaces */

    // type isPersn = string | number
    // let y:isPersn = "armen"

    // interface isPerson {
    //     name:string;
    //     age:number;
    //     speake(a:string):void;
    //     spend(a:number):number
    // }


    // const me:isPerson = {
    //     name:"Armen",
    //     age:25,
    //     speake(text:string):void {
    //         console.log(text);
    //     },
    //     spend(amount:number):number {
    //         console.log("i spent",amount);
    //         return 55
    //     }
    // }
    // console.log(me);

    
    // function greetPeople(greetPerson:isPerson) {
    //     console.log(greetPerson)
    // }

    // greetPeople({
    //     name:"Gevor",
    //     age:78,
    //     speake:function(text:string):void  {
    //         console.log(text);
    //     },
    //     spend(amount:number):number {
    //         console.log("i spent",amount);
    //         return 55
    //     }
    // })
    
    // let docOne:hashFormatter;
    // let docTwo:hashFormatter;
    // docOne = new Invoice("Armen","ashxatum e artashatun","vastakum e amsekat 150000 dram");
    // docTwo = new Payment("Davit","ashxatum e kaktusumm","vastakum e amsekat 220000 dram");

    // let docs:hashFormatter[] = [];
    // docs.push(docOne);
    // docs.push(docTwo);
    // const d = docs[0]
    // console.log(docs[0]);

    // let invOne = new Invoice("Armen","ashxatum e artashatun","vastakum e amsekat 150000 dram");
    // let invTwo = new Payment("Davit","ashxatum e kaktusumm","vastakum e amsekat 220000 dram");
    // console.log(invOne.client);
    // console.log(invTwo.recipient);


    // TypeScript Tutorial #18 - Generics

    // const addUID = (obj:object) => {
    //     let uid = Math.floor(Math.random() *100)
    //     return {...obj,uid};
    // }
    // let docOne = addUID({name:'yoshi',age:40})
    // console.log(docOne.name);//error


    // const addUID1 = <T>(obj:T) => {
    //     let uid = Math.floor(Math.random() *100)
    //     return {...obj,uid};
    // }
    // let invOne = addUID1("hello") // or     let invOne = addUID1({name:'yoshi',age:40})
    // console.log(invOne);

    // const addUID1 = <T extends object>(obj:T) => { //specify only object and can read its value
    //     let uid = Math.floor(Math.random() *100)
    //     return {...obj,uid};
    // }
    // let invOne = addUID1({name:'yoshi',age:40})
    // console.log(invOne.name);

    
    // const addUID1 = <T extends {name:string}>(obj:T) => { //specify only object and can read its value
    //     let uid = Math.floor(Math.random() *100)
    //     return {...obj,uid};
    // }
    // let invOne = addUID1({name:'yoshi'})
    // console.log(invOne.name);
    


    // interface Resource<T> {
    //     uid:number;
    //     resourceName:string;
    //     data:T
    // }

    // const docThree:Resource<string> = {
    //     uid:1,
    //     resourceName:"persona",
    //     data:"shaun"
    // }

    // const docThree:Resource<string[]> = {
    //     uid:1,
    //     resourceName:"persona",
    //     data:["shaun"]
    // }

    
    // TypeScript Tutorial #19 - Enums

    // enum Resource {book,author,film,direction,person}

    // interface Machine<T> {
    //     name:string,
    //     date:Resource,
    //     Character:T
    // }

    // let Lamborjini:Machine<object> = {
    //     name:"Lambo",
    //     date:Resource.film,
    //     Character:{name:"joe"}
    // }

    // console.log(Lamborjini);

    // TypeScript Tutorial #20 - Tuples

    // let tup:[string,number,Boolean] = ["Rui",55,true]
    // tup[0] = "Ken"
    // tup[1] = 62  


    // interface User {
    //     name: string;
    //     id: number;
    // }
       
    // class UserAccount {
    //     name: string;
    //     id: number;
        
    //     constructor(name: string, id: number) {
    //         this.name = name;
    //         this.id = id;
    //     }
    // }
       
    // const user: User = new UserAccount("Murphy", 1);


}



    










    

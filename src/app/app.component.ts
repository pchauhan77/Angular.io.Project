import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {

// name:string;
// age:number;
//Address:any;
mynuber:any;
carobject:any={};

studentobj:any={};

myarrayobj:any=[];
 constructor()
 {
//test ko call karne ke liye
this.test();  
 }

myfunction()
{
console.log("inside the function");
// this.name="Pradeep";
// this.age=20
// this.Address="Delhi"
// console.log("my details",this.name)

this.carobject={
	carname:"BMW",
	modelno: "125G7",
	mycarcolor:"Orange",
	price:"12344555555$",	
}

console.log(this.carobject);
console.log("car name",this.carobject.carname)
let x=1234;

this.studentobj={
	"stuname": "Pradeep",
	"rollno":x,
	"college":"Xyzz"
}

console.log("hii",this.studentobj);



// Array with object example


this.myarrayobj= [
  { id: 11, name: 'Mr. Nice' },
  { id: 12, name: 'Narco' },
  { id: 13, name: 'Bombasto' },
  { id: 14, name: 'Celeritas' },
  { id: 15, name: 'Magneta' },
  { id: 16, name: 'RubberMan' },
  { id: 17, name: 'Dynama' },
  { id: 18, name: 'Dr IQ' },
  { id: 19, name: 'Magma' },
  { id: 20, name: 'Tornado' }
];


//ek tarika hua
console.log("myarray>>>>>"+this.myarrayobj)

//dusra tarika
console.log("myarray>>>>>",this.myarrayobj)
// for(let i=0;i<this.myarrayobj.length;i++)
// {
// 	console.log(this.myarrayobj[i].id)
// }



for(let xyz of this.myarrayobj)
{
	console.log(">>233>>>>",xyz)
}













}


test() { 
   var num = 100 ;
   this.mynuber=num;
   console.warn("value of num in test() "+num) 
} 



}

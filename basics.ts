//primitives

let age:number;
age=23;
let ages:number[];
ages=[23,43,23];

for(let i:number=0;i<ages.length;i++){
    console.log(ages[i]);
}

let fname:string;
fname='Mynul';

let isAkash:boolean;
isAkash=true;
type Person={
name:string;
    age:number;
}

let person:Person

person={
    name:'mynul',
    age:23
}

let people:Person[];

//type inference

let course:string|number='Assalamualikum vai....';

course=123;


//generics
function generics<T>(array:T[],value :T){
    const abc=[value,...array];
    return abc;
}

const demoArray=[1,23,45];
const insertArray=generics(demoArray,-1);



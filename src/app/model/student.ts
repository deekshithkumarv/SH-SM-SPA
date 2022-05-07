export class student{
    id:number;
    name:string;
    age:number;
    stream:string;
    isReadOnly:boolean;
    constructor(id:number,name: string, age: number,stream: string,isReadOnly:boolean) { 
        this.id = id;
        this.name = name;
        this.age = age;
        this.stream =stream;
       this.isReadOnly=isReadOnly;
    }
        
    
}

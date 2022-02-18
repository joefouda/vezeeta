export class UserData {
    constructor(private name:string,private email:string,private address:string,private tel:number){}

    // get data to use in auth
    get data(){
        return {name:this.name,email:this.email,address:this.address,tel:this.tel}
    }
}
export class DoctorData {
    constructor(private name:string,private email:string,private specialization:string,private address:string,private tel:number,private fees:string){}

    // get data to use in auth
    get data(){
        return {name:this.name,email:this.email,specialization:this.specialization,address:this.address,tel:this.tel,fees:this.fees}
    }
}
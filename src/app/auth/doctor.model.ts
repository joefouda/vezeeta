export class Doctor {
    constructor(private _token:string ){}

    // get token to use in auth
    get token(){
        return this._token
    }
}
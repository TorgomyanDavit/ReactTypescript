import { hashFormatter } from "./interfaceFormat";


export class Payment implements hashFormatter<string> {
    constructor(
        public recipient:string,
        public detail:string,
        public amount:string,
    ){
        
    }


    format() {
        return `${this.recipient} Payment $${this.detail} for ${this.amount}`
    }
}
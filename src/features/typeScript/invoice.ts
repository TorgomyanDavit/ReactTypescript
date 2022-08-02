import { hashFormatter } from "./interfaceFormat";


export class Invoice implements hashFormatter<string> {
    constructor(
        public client:string,
        public detail:string,
        public amount:string,
    ){}


    format() {
        return `${this.client} Invoice $${this.detail} for ${this.amount}`
    }
}
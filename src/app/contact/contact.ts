import { Department } from "./department";

export interface Contact {
  _id : string,
  firstname : string,
  lastname : string,
  gender : 'M' | 'F',
  phoneNumber : string,
  email : string,
  birthDate : string,
  departments : Array<string>
}


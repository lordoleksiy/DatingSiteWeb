import {IKeyword} from "../IKeyword";

export interface IProfile {
  age: number,
  gender: string,
  city: string,
  keywords: IKeyword[],
  description: string,
  firstName: string,
  lastName: string,
  contact?: string,
  username?: string
}

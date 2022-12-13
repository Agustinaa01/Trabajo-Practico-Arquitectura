import { ContactJsonPlaceHolder } from "./contacts";

export interface iGroup{
  Id: number;
  GroupName:string;
  Description:string;
  Contacts: ContactJsonPlaceHolder[]
}
export interface iGroupandContact{
  GroupId: number;
  ContactId: number;
}
export interface iCreateGroup{
  GroupName: string;
  Description: string;
}


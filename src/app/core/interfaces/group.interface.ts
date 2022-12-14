import { ContactJsonPlaceHolder } from "./contacts";

export interface iGroup{
  id: number;
  groupName:string;
  description:string;
  contacts: ContactJsonPlaceHolder;
}
export interface iGroupandContact{
  groupId: number;
  contactId: number;
}
export interface iCreateGroup{
  groupName: string;
  description: string;
}



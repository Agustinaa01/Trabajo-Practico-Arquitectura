export interface IUser{
  name?: string;
  lastName?: string;
  password?: string;
  userName: string;
}

export const defaultUser = {
  id: "User ID",
  username: "Username",
  role: "CLIENT"
}

type User = {
  id: string;
  name: string;
  email: string;
  rol: string;
  token: string;
  domicile:string;
};

interface LoginStore {
  auth: boolean;
  user: User;
  setAuth: (user: User) => void;
  logout: () => void;
  setUser: (user: User) => void;

}

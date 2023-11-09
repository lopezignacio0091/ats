type User = {
    id: string;
    name: string;
    email: string;
    rol:string;
    token: string;
  };
  
  interface LoginStore {
    auth: boolean;
    user: User;
    setAuth: (user: User) => void;
    logout: () => void;
  }
  
import { useMutation } from "@tanstack/react-query";
import useStore from "../../components/Login/store/useStore";
import { useHistory } from 'react-router';

type UserType = {
  email: string;
  password: string;
};

const login = async ({ email, password }: UserType): Promise<User | null> => {
 
  const res = await fetch(`${import.meta.env.VITE_URL_APP}/api/users/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ password, email }),
  });
  if (!res.ok) {
    const message = `An error has occured: ${res.status}`;
    throw new Error(message);
  }
  return res.json();
};

const useLogin = () => {
  const history = useHistory();
  const setAuth = useStore((state) => state.setAuth);
  const mutation = useMutation({
    mutationFn: login,
    onMutate: (variables) => {
      return { user: variables };
    },
    onError: (error, variables, context) => {
      // An error happened!
      console.log(`rolling back optimistic update with id ${variables.email}`);
    },
    onSuccess: (data: any, variables, context) => {
      setAuth(data);
      history.push("/home")
    },
  });
  return mutation;
};

export default useLogin;

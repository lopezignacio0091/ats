import { useMutation } from "@tanstack/react-query";
import useStore from "../../components/Register/store/useStore";
import { delay } from "../../components/commons/utils/delay";

type RegisterUserType = {
  email: string;
  password: string;
  name: string;
  domicile: string;

};

const register = async ({
  email,
  password,
  name,
  domicile
}: RegisterUserType): Promise<any> => {
  const res = await fetch(`${import.meta.env.VITE_URL_APP}/api/users/create`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ password, email, name, rol: "user" , domicile }),
  });
  if (!res.ok) {
    const message = `An error has occured: ${res.status}`;
    throw new Error(message);
  }
  return res.json();
};

const useRegister = () => {
  const mutation = useMutation({
    mutationFn: (user: RegisterUserType) => delay(register(user), 3000),
  });
  return mutation;
};

export default useRegister;

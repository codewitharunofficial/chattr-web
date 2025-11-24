import { User } from "@/types/User";
import axios from "axios";

export const login = async (
  phone: number,
  password: string,
  setUser: React.Dispatch<React.SetStateAction<User | null>>
) => {
  try {
    const { data } = await axios.post(
      `${process.env.NEXT_PUBLIC_BASE_URL}/api/v1/users/login`,
      { phone, password }
    );
    console.log(data);
    if (data?.success) {
      localStorage.setItem("user", JSON.stringify(data?.user));
      localStorage.setItem("token", JSON.stringify(data?.token));
      setUser(data.user);
    }
  } catch (error) {
    console.log(error);
  }
};

export const signup = async (
  phone: number,
  email: string,
  password: string,
  setUser: React.Dispatch<React.SetStateAction<User | null>>
) => {
  try {
    const { data } = await axios.post(
      `${process.env.NEXT_PUBLIC_BASE_URL}/api/v1/users/create-user`,
      { phone, email, password }
    );
    if (data?.success) {
      localStorage.setItem("user", JSON.stringify(data?.user));
      localStorage.setItem("token", JSON.stringify(data?.token));
      setUser(data.user);
    } else {
      console.log(false);
    }
  } catch (error) {
    console.log(error);
  }
};

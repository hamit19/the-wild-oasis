import { useMutation } from "@tanstack/react-query";
import { login as loginAPI } from "../../../services/apiAuth";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

function useLogin() {
  const navigate = useNavigate();

  const { mutate: login, isPending: isLogging } = useMutation({
    mutationFn: ({ email, password }) => loginAPI({ email, password }),
    onSuccess: () => {
      toast.success("Welcome back!");
      navigate("/dashboard");
    },
    onError: (error) => {
      console.error("LoginError:", error);
      toast.error("Provided Email or Password is incorrect!");
    },
  });

  return { login, isLogging };
}

export default useLogin;

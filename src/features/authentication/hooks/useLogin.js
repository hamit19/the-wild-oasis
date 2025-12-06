import { useMutation, useQueryClient } from "@tanstack/react-query";
import { login as loginAPI } from "../../../services/apiAuth";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

function useLogin() {
  const navigate = useNavigate();
  //   const queryClient = useQueryClient();

  const { mutate: login, isPending: isLogging } = useMutation({
    mutationFn: ({ email, password }) => loginAPI({ email, password }),
    onSuccess: () => {
      //   queryClient.setQueryData(["user"], user);
      toast.success("Welcome back!");
      navigate("/dashboard", { replace: true });
    },
    onError: (error) => {
      console.error("LoginError:", error);
      toast.error("Provided Email or Password is incorrect!");
    },
  });

  return { login, isLogging };
}

export default useLogin;

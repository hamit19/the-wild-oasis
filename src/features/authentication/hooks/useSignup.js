import { useMutation } from "@tanstack/react-query";
import { signup as signupAPI } from "../../../services/apiAuth";
import toast from "react-hot-toast";

function useSignup() {
  const { mutate: signup, isPending: isSigningUp } = useMutation({
    mutationFn: ({ fullName, email, password }) =>
      signupAPI({ fullName, email, password }),

    onSuccess: () => {
      toast.success(
        "Account successfully created! Please verify the new account from user's email address."
      );
    },

    onError: (err) => {
      console.error("SignUp error", err);
      toast.error(err.message);
    },
  });

  return {
    signup,
    isSigningUp,
  };
}

export default useSignup;

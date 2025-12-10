import { useMutation, useQueryClient } from "@tanstack/react-query";
import { updateCurrentUser } from "../../../services/apiAuth";
import toast from "react-hot-toast";

function useUpdateUser() {
  const queryClient = useQueryClient();

  const { mutate: updateUser, isPending: isUpdating } = useMutation({
    mutationFn: ({ fullName, password, avatar }) =>
      updateCurrentUser({ fullName, password, avatar }),

    onSuccess: ({ user }) => {
      toast.success("User account updated successfully!");
      queryClient.setQueryData({ queryKey: ["user"] }, user);
    },
    onError: (err) => {
      toast.error(err.message);
    },
  });

  return {
    updateUser,
    isUpdating,
  };
}

export default useUpdateUser;

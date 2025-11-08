import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createCabin } from "../../../services/apiCabins";
import toast from "react-hot-toast";

export default function useCreateCabin() {
  const queryClient = useQueryClient();
  const { isPending: isCreating, mutate: createNewCabin } = useMutation({
    mutationFn: (data) => createCabin(data),
    onSuccess: () => {
      toast.success("The Cabin added successfully!");
      queryClient.invalidateQueries({ queryKey: ["cabins"] });
    },
    onError: (error) => {
      toast.error(error.message);
    },
  });

  return { isCreating, createNewCabin };
}

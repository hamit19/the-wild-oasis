import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { editCabin } from "../../../services/apiCabins";

export default function useEditCabin() {
  const queryClient = useQueryClient();

  const { isPending: isEditing, mutate: updateCabin } = useMutation({
    mutationFn: (data) => editCabin(data),
    onSuccess: () => {
      toast.success("The Cabin edited successfully!");
      queryClient.invalidateQueries({ queryKey: ["cabins"] });
    },
    onError: (error) => toast.error(error),
  });

  return { isEditing, updateCabin };
}

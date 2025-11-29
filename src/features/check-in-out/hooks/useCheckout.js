import { useMutation, useQueryClient } from "@tanstack/react-query";
import { updateBooking } from "../../../services/apiBookings";
import toast from "react-hot-toast";

function useCheckout() {
  const queryClient = useQueryClient();

  const { mutate: checkingOut, isPending: isCheckingOut } = useMutation({
    mutationKey: ["checkout"],
    mutationFn: (bookingId) =>
      updateBooking(bookingId, {
        status: "checked-out",
      }),
    onSuccess: (data) => {
      toast.success(`Booking #${data.id} successfully checked in!`);

      queryClient.invalidateQueries({ active: true });
    },
    onError: (error) => {
      toast.error(error);
    },
  });

  return { checkingOut, isCheckingOut };
}

export default useCheckout;

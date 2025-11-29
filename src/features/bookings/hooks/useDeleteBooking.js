import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteBooking } from "../../../services/apiBookings";
import toast from "react-hot-toast";

function useDeleteBooking() {
  const queryClient = useQueryClient();

  const { mutate: removeBooking, isPending: isDeletingBooking } = useMutation({
    mutationFn: (bookingId) => deleteBooking(bookingId),
    onSuccess: () => {
      toast.success("Booking successfully deleted!");
      queryClient.invalidateQueries({ queryKey: ["bookings"] });
    },
    onError: (error) => {
      toast.error(error);
    },
  });

  return { removeBooking, isDeletingBooking };
}

export default useDeleteBooking;

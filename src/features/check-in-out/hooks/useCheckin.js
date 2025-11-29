import { useMutation, useQueryClient } from "@tanstack/react-query";
import { updateBooking } from "../../../services/apiBookings";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

function useCheckin() {
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  const { mutate: checkinBooking, isPending: isChecking } = useMutation({
    mutationKey: ["checkin"],
    mutationFn: ({ bookingId, breakfast }) =>
      updateBooking(bookingId, {
        status: "checked-in",
        isPaid: true,
        ...breakfast,
      }),
    onSuccess: (data) => {
      toast.success(`Booking #${data.id} successfully checked in!`);

      queryClient.invalidateQueries({ active: true });

      navigate("/");
    },
    onError: (error) => {
      toast.error(error);
    },
  });

  return { checkinBooking, isChecking };
}

export default useCheckin;

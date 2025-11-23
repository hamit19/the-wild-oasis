import { useQuery } from "@tanstack/react-query";
import { getBookings } from "../../../services/apiBookings";
import { useSearchParams } from "react-router-dom";

function useBookings() {
  const [searchParams] = useSearchParams();

  const filterValue = searchParams.get("status");

  const filter =
    !filterValue || filterValue === "all"
      ? null
      : { filed: "status", value: filterValue };

  const {
    data: bookings,
    error,
    isLoading,
  } = useQuery({
    queryKey: ["bookings", filter],
    queryFn: () => getBookings({ filter }),
  });

  return { bookings, error, isLoading };
}

export default useBookings;

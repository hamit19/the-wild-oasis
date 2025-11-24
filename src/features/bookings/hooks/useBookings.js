import { useQuery } from "@tanstack/react-query";
import { getBookings } from "../../../services/apiBookings";
import { useSearchParams } from "react-router-dom";

function useBookings() {
  const [searchParams] = useSearchParams();

  const filterValue = searchParams.get("status");
  const sortValue = searchParams.get("sortBy") || "startDate-desc";
  const page = !searchParams.get("page") ? 1 : Number(searchParams.get("page"));

  const filter =
    !filterValue || filterValue === "all"
      ? null
      : { filed: "status", value: filterValue };

  const [filed, direction] = sortValue.split("-");

  const sortBy = { filed, direction };

  const {
    isLoading,
    data: { data: bookings, count } = {},
    error,
  } = useQuery({
    queryKey: ["bookings", filter, sortBy, page],
    queryFn: () => getBookings({ filter, sortBy, page }),
  });

  return { bookings, isLoading, error, count };
}

export default useBookings;

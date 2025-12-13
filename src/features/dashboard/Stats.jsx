import { HiOutlineBriefcase, HiOutlineChartBar } from "react-icons/hi";
import Stat from "./Stat";
import {
  HiOutlineBanknotes,
  HiOutlineCalendarDateRange,
} from "react-icons/hi2";
import { formatCurrency } from "../../utils/helpers";

function Stats({ bookings, confirmedStays, cabinsCount, numDays }) {
  const bookingsNum = bookings.length;

  const sales = bookings.reduce((acc, cur) => acc + cur.totalPrice, 0);

  const staysNum = confirmedStays.length;

  const occupancyRate =
    confirmedStays.reduce((acc, cur) => acc + cur.numNights, 0) /
    (numDays * cabinsCount);

  return (
    <>
      <Stat
        icon={<HiOutlineBriefcase />}
        color={"blue"}
        title='Bookings'
        value={bookingsNum}
      />
      <Stat
        icon={<HiOutlineBanknotes />}
        color={"green"}
        title='Sales'
        value={formatCurrency(sales)}
      />
      <Stat
        icon={<HiOutlineCalendarDateRange />}
        color={"indigo"}
        title='Check ins'
        value={staysNum}
      />
      <Stat
        icon={<HiOutlineChartBar />}
        color={"yellow"}
        title='Occupancy rate'
        value={Math.round(occupancyRate * 100) + "%"}
      />
    </>
  );
}

export default Stats;

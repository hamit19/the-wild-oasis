import Spinner from "../../ui/Spinner";
import CabinRow from "./CabinRow";
import useCabins from "./hooks/useCabins";
import Table from "../../ui/Table";
import Menus from "../../ui/Menus";
import Empty from "../../ui/Empty";
import { useSearchParams } from "react-router-dom";

export default function CabinTable() {
  const { isLoading, error, cabins } = useCabins();
  const [searchParams] = useSearchParams();

  if (isLoading) return <Spinner />;
  if (error) return <div>Error: {error.message}</div>;

  if (!cabins.length) return <Empty resourceName={"Cabins"} />;

  // 1) Filtering cabins based on discount status
  const filteredValue = searchParams.get("discount") || "all";

  let filteredCabins;

  if (filteredValue === "all") filteredCabins = cabins;

  if (filteredValue === "no-discount")
    filteredCabins = cabins.filter((cabin) => cabin.discount === 0);

  if (filteredValue === "with-discount")
    filteredCabins = cabins.filter((cabin) => cabin.discount > 0);

  // 2) Sorting cabins based on selected criteria
  const sortBy = searchParams.get("sortBy") || "startDate-asc";

  const [filed, direction] = sortBy.split("-");
  const modifier = direction === "asc" ? 1 : -1;
  let sortedCabins = filteredCabins.sort(
    (a, b) => (a[filed] - b[filed]) * modifier
  );

  return (
    <Menus>
      <Table columns={"0.6fr 1.8fr 2.2fr 1fr 1fr 1fr"}>
        <Table.Header>
          <div></div>
          <div>Cabin</div>
          <div>Capacity</div>
          <div>Price</div>
          <div>Discount</div>
        </Table.Header>
        <Table.Body
          // data={cabins}
          data={sortedCabins}
          render={(cabin) => <CabinRow cabin={cabin} key={cabin.id} />}
        />
      </Table>
    </Menus>
  );
}

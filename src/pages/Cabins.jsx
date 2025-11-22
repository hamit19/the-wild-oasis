import AddCabin from "../features/cabins/AddCabin";
import CabinTable from "../features/cabins/CabinTable";
import Filter from "../ui/Filter";
import Heading from "../ui/Heading";
import Row from "../ui/Row";
import SortBy from "../ui/SortBy";
import TableOperations from "../ui/TableOperations";

function Cabins() {
  return (
    <Row type='vertical'>
      <Row type='horizontal'>
        <Heading as='h1'>All cabins</Heading>
        <TableOperations>
          <Filter
            filterFiled={"discount"}
            options={[
              { value: "all", label: "All" },
              { value: "no-discount", label: "No discount" },
              { value: "with-discount", label: "With discount" },
            ]}
          />

          <SortBy
            options={[
              { value: "name-asc", label: "Sort by name(A-Z)" },
              { value: "name-desc", label: "Sort by name(Z-A)" },
              { value: "regularPrice-asc", label: "Sort by Price (low first)" },
              {
                value: "regularPrice-desc",
                label: "Sort by Price (high first)",
              },
              {
                value: "maxCapacity-asc",
                label: "Sort by capacity (low first)",
              },
              {
                value: "maxCapacity-desc",
                label: "Sort by capacity (high first)",
              },
            ]}
          />
        </TableOperations>
      </Row>

      <CabinTable />
      <AddCabin />
    </Row>
  );
}

export default Cabins;

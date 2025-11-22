import AddCabin from "../features/cabins/AddCabin";
import CabinTable from "../features/cabins/CabinTable";
import Filter from "../ui/Filter";
import Heading from "../ui/Heading";
import Row from "../ui/Row";
import TableOperations from "../ui/TableOperations";

function Cabins() {
  return (
    <Row type='vertical'>
      <Row type='horizontal'>
        <Heading as='h1'>All cabins</Heading>
        <TableOperations>
          <Filter />
        </TableOperations>
      </Row>

      <CabinTable />
      <AddCabin />
    </Row>
  );
}

export default Cabins;

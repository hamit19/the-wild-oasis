import CabinTable from "../features/cabins/CabinTable";
import Heading from "../ui/Heading";
import Row from "../ui/Row";

function Cabins() {
  return (
    <Row type='vertical'>
      <Row type='horizontal'>
        <Heading as='h1'>All cabins</Heading>
        <span>Sort/Filter</span>
      </Row>

      <Row>
        <CabinTable />
      </Row>
    </Row>
  );
}

export default Cabins;

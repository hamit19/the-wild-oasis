import { useEffect, useState } from "react";
import Heading from "../ui/Heading";
import Row from "../ui/Row";
import { getCabins } from "../services/apiCabins";

function Cabins() {
  const [cabins, setCabins] = useState([]);

  useEffect(() => {
    getCabins().then((data) => setCabins([...data]));
  }, []);

  if (!cabins.length) return <p>Loading...</p>;

  return (
    <Row type='horizontal'>
      <img src={cabins[0]?.image} alt='tres' />
      <Heading as='h1'>All cabins</Heading>
      <p>TEST</p>
    </Row>
  );
}

export default Cabins;

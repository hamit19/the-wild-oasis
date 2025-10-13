import GlobalStyles from "./styles/GlobalStyles";
import Button from "./ui/Button";
import Heading from "./ui/Heading";
import Raw from "./ui/Row";

function App() {
  return (
    <>
      <GlobalStyles />

      <Raw>
        <Heading as='h1'>Hello World!</Heading>
        <Heading as='h2'>Hello World!</Heading>
      </Raw>

      <Raw type='vertical'>
        <Heading as='h3'>Hello World!</Heading>
        <Button variations='primary' sizes='large'>
          Click on me
        </Button>
      </Raw>
    </>
  );
}

export default App;

import { Button, ButtonLabel } from "./Components/Stylecomponents/Button.style";
import { AppContainer } from "./Components/Stylecomponents/Container.style" 
function App() {
  return (
    <AppContainer>
      <Button backgroundColor="red">Click Button</Button>
      <Button backgroundColor="green">Click Button</Button>
      <Button backgroundColor="yellow">Click Button</Button>
      <br />
      <Button backgroundColor="green">
        <ButtonLabel>Click Here</ButtonLabel>
      </Button>
    </AppContainer>
  );
}

export default App;

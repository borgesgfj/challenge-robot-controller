import { Grid, Stack, Button, Heading } from "@chakra-ui/react";
import { useState } from "react/cjs/react.development";
import InputField from "./InputField";
import Square from "./Square";

export default function App(props) {
  const [squares, setSquares] = useState(props.squares);
  const grid = squares.map((square) => (
    <Square
      key={square.id}
      row={square.yPosition}
      col={square.xPosition}
      occupied={square.occupied}
      direction={square.direction}
    />
  ));
  return (
    <Grid templateColumns={{ base: "auto", lg: "1fr 1fr" }} gap="5" my="5rem">
      <InputField isSintaxValid={true} isPositionValid={true} />
      <Stack direction="column" w="80%" mx="auto" py="5rem" spacing="5">
        <Heading as="h3" fontFamily="Roboto" size="lg">
          {" "}
          Grade de posições{" "}
        </Heading>
        <Grid templateColumns="repeat(5, 1fr)" gap="1">
          {grid}
        </Grid>
        <Button colorScheme="black" variant="outline" size="md">
          Resetar
        </Button>
      </Stack>
    </Grid>
  );
}

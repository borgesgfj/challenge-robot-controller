import { Grid, Stack, Button, Heading } from "@chakra-ui/react";
import { useLogic } from "./useLogic";
import InputField from "./InputField";
import Square from "./Square";
import StatusError from "./StatusError";

export default function App(props) {
  const {
    squares,
    sintaxErr,
    positionErr,
    roverDirection,
    calculateCommand,
    reset,
  } = useLogic(props.squares);

  const grid = squares.map((square) => (
    <Square
      key={square.id}
      occupied={square.occupied}
      direction={roverDirection}
      coordinates={square.coordinates}
    />
  ));
  return (
    <Grid templateColumns={{ base: "auto", lg: "1fr 1fr" }} gap="5" my="5rem">
      <Stack
        direction="column"
        w="80%"
        mx="auto"
        mt="-1rem"
        py="2rem"
        spacing="5"
      >
        <InputField calculateCommand={calculateCommand} mt="auto" />
        <StatusError
          isSintaxValid={!sintaxErr}
          isPositionValid={!positionErr}
        />
      </Stack>
      <Stack direction="column" w="80%" mx="auto" py="5rem" spacing="5">
        <Heading as="h3" fontFamily="Roboto" size="lg">
          {" "}
          Grade de posições{" "}
        </Heading>
        <Grid templateColumns="repeat(5, 1fr)" gap="1">
          {grid}
        </Grid>
        <Button
          colorScheme="black"
          variant="outline"
          size="lg"
          fontFamily="Roboto"
          fontSize="2xl"
          _hover={{
            transform: "translateY(-1px)",
            boxShadow: "xl",
          }}
          onClick={reset}
        >
          Resetar
        </Button>
      </Stack>
    </Grid>
  );
}

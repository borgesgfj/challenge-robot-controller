import { Box, Center } from "@chakra-ui/react";
import Rover from "./Rover";

export default function Square(props) {

  const notOccupiedTemplate = "";
  const occupiedTemplate = (
    <Rover direction={props.direction} />
  );
  return (
    <Box
      bg="red.500"
      color="white"
      h="5rem"
      w="full"
      p="2"
    >
      <Center w="full" h="full">
        {props.occupied ? occupiedTemplate : notOccupiedTemplate}
      </Center>
    </Box>
  );
}

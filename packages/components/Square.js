import { Box, Center, Tooltip } from "@chakra-ui/react";
import Rover from "./Rover";

export default function Square(props) {
  const notOccupiedTemplate = "";
  const occupiedTemplate = <Rover direction={props.direction} />;
  return (
    <Tooltip
      hasArrow
      arrowSize={15}
      label={`(x, y) = (${props.coordinates[0]}, ${props.coordinates[1]})`}
      fontFamily="Roboto"
      fontSize="xl"
    >
      <Box
        bg="red.500"
        color="white"
        h="5rem"
        w="full"
        p="2"
        _hover={{
          transform: "translateY(-2px)",
          boxShadow: "2xl",
        }}
      >
        <Center w="full" h="full">
          {props.occupied ? occupiedTemplate : notOccupiedTemplate}
        </Center>
      </Box>
    </Tooltip>
  );
}

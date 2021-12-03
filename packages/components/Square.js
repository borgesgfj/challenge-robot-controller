import { Box, Icon, Center } from "@chakra-ui/react";
import {
  FaAngleDoubleUp,
  FaAngleDoubleDown,
  FaAngleDoubleLeft,
  FaAngleDoubleRight,
} from "react-icons/fa";

export default function Square(props) {
  function determineArrowIcon(direction) {
    let icon = FaAngleDoubleUp
    if (direction === "S") {
      icon = FaAngleDoubleDown
    } else if( direction === "E") {
      icon = FaAngleDoubleRight
    } else if (direction === "W" ) {
      icon = FaAngleDoubleLeft
    }
    return icon
  }

  const notOccupiedTemplate = "";
  const occupiedTemplate = (
    <Icon as={determineArrowIcon(props.direction)} fontSize="5xl" color="white" />
  );
  return (
    <Box
      key={props.col + props.row * 5}
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

import { Box } from "@chakra-ui/react";
export default function Square(props) {
  return (
    <Box key={props.col + props.row * 5} bg="red.500" color="white" h="5rem" w="full" p={4}>
      {`(${props.col}, ${props.row})`}
    </Box>
  );
}

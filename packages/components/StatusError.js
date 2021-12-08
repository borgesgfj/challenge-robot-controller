import {
  Stack,
  Icon,
  Badge,
  Box,
  Text,
  Heading,
} from "@chakra-ui/react";
import { FaExclamationTriangle } from "react-icons/fa";

export default function StatusError(props) {
  if (props.isSintaxValid && props.isPositionValid) {
    return (
      <Box
        w="full"
        fontFamily="Roboto"
        border="2px"
        borderColor="green.500"
        boxShadow='lg'
        _hover={{
          transform: "translateY(-2px)",
          boxShadow: "2xl",
        }}
      >
        <Stack direction="column" p="6">
          <Heading as="h6" fontSize="2xl" alignSelf="center">
            Comandos válidos
          </Heading>
          <Text fontSize="xl" pl="2rem">
            L - Virar para a esquerda
          </Text>
          <Text fontSize="xl" pl="2rem">
            R - Virar para a direita
          </Text>
          <Text fontSize="xl" pl="2rem">
            M - Mover
          </Text>
        </Stack>
      </Box>
    );
  }
  if (!props.isSintaxValid) {
    return (
      <Stack
        w="full"
        h="40%"
        direction="row"
        justifyContent="center"
        alignItems="center"
        my="5"
      >
        <Icon
          as={FaExclamationTriangle}
          fontSize="xl"
          alignSelf="center"
          color="red"
        />
        <Badge fontSize="xl" colorScheme="red">
          Sintaxe inválida! Não foi possível executar o comando.
        </Badge>
      </Stack>
    );
  }
  if (!props.isPositionValid) {
    return (
      <Stack
        w="full"
        h="40%"
        direction="row"
        justifyContent="center"
        alignItems="center"
        my="5"
      >
        <Icon
          as={FaExclamationTriangle}
          fontSize="xl"
          alignSelf="center"
          color="red"
        />
        <Badge fontSize="xl" colorScheme="red" objectFit="fill">
          Este comando levará o robô para fora da área permitida. <br />
          Não foi possível executar a solicitação.
        </Badge>
      </Stack>
    );
  }
}

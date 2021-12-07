import { Stack, Icon, Badge } from "@chakra-ui/react";
import { FaExclamationTriangle } from "react-icons/fa";

export default function StatusError(props) {
  if (props.isSintaxValid && props.isPositionValid) {
    return <Stack w="80%"></Stack>;
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

import { Stack, Input, Button, Heading, Icon, Badge } from "@chakra-ui/react";
import { FaExclamationTriangle } from "react-icons/fa";
import { useState } from "react";

export default function InputField(props) {
  const [command, setCommand] = useState("");
  function handleChange(e) {
    setCommand(e.target.value.toUpperCase());
  }
  function handleSubmit(e) {
    e.preventDefault();
    props.calculateCommand(command);
    setCommand("");
  }

  function StatusField() {
    if (props.isSintaxValid && props.isPositionValid) {
      return (<Stack bg="gray.200" w="80%"></Stack>);
    }
    if (!props.isSintaxValid) {
      return (
        <Stack bg="gray.200" w="80%" direction="row" my="5">
          <Icon as={FaExclamationTriangle} fontSize="xl" color="red" />
          <Badge fontSize="xl" colorScheme="red">
            Sintaxe inválida! Não foi possível executar o comando.
          </Badge>
        </Stack>
      );
    }
    if (!props.isPositionValid) {
      return (
        <Stack bg="gray.200" w="80%" direction="row" my="5">
          <Icon as={FaExclamationTriangle} fontSize="xl" color="red" />
          <Badge fontSize="xl" colorScheme="red">
            Posição inválida! Não foi possível executar o comando.
          </Badge>
        </Stack>
      );
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <Stack direction="column" spacing="5">
        <Heading as="h3" fontFamily="Roboto" size="lg">
          {" "}
          Entre o comando{" "}
        </Heading>
        <Input
          type="text"
          size="lg"
          placeholder="Ex: MMR"
          value={command}
          onChange={handleChange}
        ></Input>
        <Button type="submit" colorScheme="green" size="md">
          Submeter
        </Button>
        <StatusField/>
      </Stack>
    </form>
  );
}

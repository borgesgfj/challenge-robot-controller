import { Stack, Input, Button, Heading } from "@chakra-ui/react";
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
      </Stack>
    </form>
  );
}

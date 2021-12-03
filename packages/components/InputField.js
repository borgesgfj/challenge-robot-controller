import { Stack, Input, Button, Heading } from "@chakra-ui/react";

export default function InputField() {
  return (
    <Stack direction="column" spacing="5">
      <Heading as="h3" fontFamily="Roboto" size="lg"> Entre o comando </Heading>
      <Input size="lg" placeholder="Ex: MMR">
      </Input>
      <Button colorScheme="green" size="md">
        Submeter
      </Button>
    </Stack>
  );
}
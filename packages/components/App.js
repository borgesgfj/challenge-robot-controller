import {Grid } from "@chakra-ui/react";
import InputField from "./InputField";
export default function App(props) {
  return (
    <Grid
    templateColumns={{ base: "auto", lg: "1fr 1fr" }}
    gap="5"
    mt="5rem"
  >
    <InputField />
  </Grid>
  );
}
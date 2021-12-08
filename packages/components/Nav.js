import {
  Box,
  Heading,
  Flex,
  Button,
  Image,
  AspectRatio,
  useColorModeValue,
  useColorMode,
} from "@chakra-ui/react";
import { MoonIcon, SunIcon } from "@chakra-ui/icons";

export default function Nav() {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <>
      <Box as="nav" bg={useColorModeValue("black", "gray.500")} mt="1" px={4}>
        <Flex h="8rem" alignItems={"center"} justifyContent={"space-between"}>
          <Box boxSize="6rem" alignItems="center" justifyContent="center">
            <AspectRatio ratio="1">
              <Image
                src={"/images/rover.gif"}
                borderRadius="full"
                objectFit="cover"
                alt="rover-gif"
              />
            </AspectRatio>
          </Box>


            <Button
              onClick={toggleColorMode}
              variant="ghost"
              color="white"
              alignSelf="flex-start"
              _hover={{ bg: "none" }}
              _focus={{ bg: "none" }}
            >
              {colorMode === "light" ? <MoonIcon /> : <SunIcon />}
            </Button>

        </Flex>
          <Heading
            as="h1"
            size="2xl"
            py="1rem"
            fontFamily="Roboto"
            textAlign="center"
            color={useColorModeValue("white", "black")}
          >
            Controlador do Rover Marciano
          </Heading>

      </Box>
    </>
  );
}

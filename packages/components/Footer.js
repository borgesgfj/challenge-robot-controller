import { Text, Stack, IconButton, Link } from "@chakra-ui/react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import styles from "../../styles/Home.module.css";
export default function Footer() {
  return (
    <footer className={styles.footer}>
    <Stack direction="row" spacing="5rem" alignItems="center">
      <Text fontFamily="Roboto" fontSize="1.5rem">
        {" "}
        Developed by Gilberto Borges{" "}
      </Text>
      <Stack direction={"row"} justifyContent="center" spacing={3}>
        <IconButton
          as={Link}
          href="https://www.linkedin.com/in/gilberto-borges-a048439a/"
          variant="ghost"
          size="lg"
          isRound={false}
          aria-label="Author LinkedIn"
          icon={<FaLinkedin size="2rem" />}
          _hover={{
            transform: "translateY(-2px)",
            boxShadow: "xl",
          }}
          isExternal
        />
        <IconButton
          as={Link}
          href="https://github.com/borgesgfj"
          variant="ghost"
          size="lg"
          isRound={true}
          aria-label="Author github"
          icon={<FaGithub size="2rem" />}
          _hover={{
            transform: "translateY(-2px)",
            boxShadow: "lg",
          }}
          isExternal
        />
      </Stack>
    </Stack>
  </footer>
  )
}
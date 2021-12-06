import { Grid, Stack, Button, Heading } from "@chakra-ui/react";
import { useState } from "react/cjs/react.development";
import InputField from "./InputField";
import Square from "./Square";

export default function App(props) {
  const [squares, setSquares] = useState(props.squares);
  const [positionErr, setPositionErr] = useState(false)
  const [sintaxErr, setSintaxErr] = useState(false)
  function calculateRotation(currentDirection, rotationCommand) {
    let finalDirection = 0;
    const directionToNumber = {
      N: 0,
      W: 1,
      S: 2,
      E: 3,
    };
    const numberToDirection = {
      0: "N",
      1: "W",
      2: "S",
      3: "E",
    };
    if (rotationCommand === "L") {
      finalDirection =
        directionToNumber[currentDirection] + 1 >= 4
          ? directionToNumber[currentDirection] + 1 - 4
          : directionToNumber[currentDirection] + 1;
    }
    if (rotationCommand === "R") {
      finalDirection =
        directionToNumber[currentDirection] - 1 < 0
          ? directionToNumber[currentDirection] - 1 + 4
          : directionToNumber[currentDirection] - 1;
    }
    return numberToDirection[finalDirection];
  }

  function determineFinalSquare(initialSquare, commandString) {
    let currentSquare = initialSquare;
    let nextSquareIndex = currentSquare.index;
    let moveDirection = currentSquare.direction;
    for (let i = 0; i < commandString.length; i++) {
      if (commandString[i] == "L" || commandString[i] == "R") {
        moveDirection = calculateRotation(moveDirection, commandString[i]);
        currentSquare.direction = moveDirection;
      }
      if (commandString[i] == "M") {
        if (currentSquare.neighborsIndex[moveDirection] === "") {
          setPositionErr(true)
          return (currentSquare = initialSquare)
        }
        nextSquareIndex = currentSquare.neighborsIndex[moveDirection];
        currentSquare = {...squares[nextSquareIndex], direction: moveDirection};
      }
    }
    currentSquare.occupied = true
    return currentSquare;
  }

  function setFinalSquare(initialSquare,finalSquare) {
    const updatedSquares = squares.map((square) => {
      if (square.id === finalSquare.id) {
        return {...square, occupied: true, direction: finalSquare.direction}
      }
      if (square.id === initialSquare.id) {
        return {...square, occupied: false}
      }
      return square
    })
    setSquares(updatedSquares)
  }
  function isCommandSitaxCorrect(commandString) {
    const validChars = ['M', 'L', 'R']
    for (const char of commandString ) {
      if (!validChars.includes(char)) {
        setSintaxErr(true)
        return false
      }
    }
    return true
  }

  function calculateCommand(command) {
    setPositionErr(false)
    setSintaxErr(false)
    if (!isCommandSitaxCorrect(command)) {
      return
    }
    let startSquare = {};
    for (let i = 0; i < squares.length; i++) {
      if (squares[i].occupied) {
        startSquare = squares[i];
        break;
      }
    }
    const finalSquare = determineFinalSquare(startSquare, command);
    const finalSquareIndex = finalSquare.index;
    setFinalSquare(startSquare, finalSquare)
  }

  const grid = squares.map((square) => (
    <Square
      key={square.id}
      occupied={square.occupied}
      direction={square.direction}
    />
  ));
  return (
    <Grid templateColumns={{ base: "auto", lg: "1fr 1fr" }} gap="5" my="5rem">
      <InputField
        isSintaxValid={!sintaxErr}
        isPositionValid={!positionErr}
        calculateCommand={calculateCommand}
      />
      <Stack direction="column" w="80%" mx="auto" py="5rem" spacing="5">
        <Heading as="h3" fontFamily="Roboto" size="lg">
          {" "}
          Grade de posições{" "}
        </Heading>
        <Grid templateColumns="repeat(5, 1fr)" gap="1">
          {grid}
        </Grid>
        <Button colorScheme="black" variant="outline" size="md">
          Resetar
        </Button>
      </Stack>
    </Grid>
  );
}

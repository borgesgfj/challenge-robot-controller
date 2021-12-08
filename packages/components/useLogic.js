import { useState } from "react";
export function useLogic(squaresMatrix) {
  const [squares, setSquares] = useState(squaresMatrix);
  const [roverDirection, setRoverDirection] = useState("N");
  const [positionErr, setPositionErr] = useState(false);
  const [sintaxErr, setSintaxErr] = useState(false);

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
  function determineFinalDirection(commandString, initialDirection) {
    let currentDirection = initialDirection;
    let finalDirection = "";
    for (let i = 0; i < commandString.length; i++) {
      if (commandString[i] === "L" || commandString[i] === "R") {
        finalDirection = calculateRotation(currentDirection, commandString[i]);
        currentDirection = finalDirection;
      }
    }
    return finalDirection;
  }
  function determineFinalSquare(initialSquare, commandString) {
    const currentSquare = { ...initialSquare };
    const nextSquareIndex = initialSquare.index;
    const moveDirection = roverDirection;
    for (let i = 0; i < commandString.length; i++) {
      if (commandString[i] == "L" || commandString[i] == "R") {
        moveDirection = calculateRotation(moveDirection, commandString[i]);
      }
      if (commandString[i] == "M") {
        if (currentSquare.neighborsIndex[moveDirection] === "") {
          return {};
        }
        nextSquareIndex = currentSquare.neighborsIndex[moveDirection];
        currentSquare = { ...squares[nextSquareIndex] };
      }
    }
    currentSquare.occupied = true;
    return currentSquare;
  }
  function reset() {
    const updatedSquares = squares.map((square) => {
      if (square.occupied === true && square.index != 20) {
        return { ...square, occupied: false };
      }
      if (square.index == 20) {
        return { ...square, occupied: true };
      }
      return { ...square };
    });
    setSquares(updatedSquares);
    setRoverDirection("N");
  }

  function setFinalSquare(initialSquare, finalSquare) {
    const updatedSquares = squares.map((square) => {
      if (square.id === finalSquare.id) {
        return { ...square, occupied: true };
      }
      if (square.id === initialSquare.id) {
        return { ...square, occupied: false };
      }
      return square;
    });
    setSquares(updatedSquares);
  }
  function isCommandSitaxCorrect(commandString) {
    const validChars = ["M", "L", "R"];
    for (const char of commandString) {
      if (!validChars.includes(char)) {
        setSintaxErr(true);
        return false;
      }
    }
    return true;
  }

  function calculateCommand(command) {
    setPositionErr(false);
    setSintaxErr(false);
    const initialDirection = roverDirection;
    if (!isCommandSitaxCorrect(command)) {
      return;
    }
    let startSquare = {};
    for (let i = 0; i < squares.length; i++) {
      if (squares[i].occupied) {
        startSquare = { ...squares[i] };
        break;
      }
    }
    const finalSquare = determineFinalSquare(startSquare, command);
    if (Object.keys(finalSquare).length == 0) {
      // in this case rover reach an invalid position
      setPositionErr(true);
      return;
    }
    setFinalSquare(startSquare, finalSquare);
    if (command.includes("L") || command.includes("R")) {
      setRoverDirection(() =>
        determineFinalDirection(command, initialDirection)
      );
    }
  }
  return {
    sintaxErr,
    positionErr,
    squares,
    roverDirection,
    calculateCommand,
    reset,
  };
}

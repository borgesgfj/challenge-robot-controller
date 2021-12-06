import { Icon } from "@chakra-ui/react";
import {
  FaAngleDoubleUp,
  FaAngleDoubleDown,
  FaAngleDoubleLeft,
  FaAngleDoubleRight,
} from "react-icons/fa";

export default function Rover(props) {
  function determineArrowIcon() {
    let icon = FaAngleDoubleUp
    if (props.direction === "S") {
      icon = FaAngleDoubleDown
    } else if( props.direction === "E") {
      icon = FaAngleDoubleRight
    } else if (props.direction === "W" ) {
      icon = FaAngleDoubleLeft
    }
    return icon
  }
  return (
    <Icon as={determineArrowIcon()} fontSize="5xl" color="white" />
  )
}
import React from "react";
import styled from "styled-components";
import { color, type ColorProps } from "styled-system";

interface Props extends ColorProps {
  children: React.ReactNode;
}

const Button = styled.button<Props>`
  ${color}
`;

export default Button;

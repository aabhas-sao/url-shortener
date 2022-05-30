import React from "react";
import styled from "styled-components";
import { space } from "styled-system";
import type {
  ColorProps,
  ShadowProps,
  LayoutProps,
  SpaceProps,
} from "styled-system";

interface Props extends ColorProps, ShadowProps, LayoutProps, SpaceProps {}

const Input = styled.input<Props>`
  ${space}
  border: none;
`;

export default Input;

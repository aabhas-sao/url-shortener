import styled from "styled-components";
import { color, shadow, layout, space } from "styled-system";
import type {
  ColorProps,
  ShadowProps,
  LayoutProps,
  SpaceProps,
} from "styled-system";

interface Props extends ColorProps, ShadowProps, LayoutProps, SpaceProps {
  children: React.ReactNode;
}

const Box = styled.div<Props>`
  ${color}
  ${shadow}
  ${layout}
  ${space}
`;

export default Box;

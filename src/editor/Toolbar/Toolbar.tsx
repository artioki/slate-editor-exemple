import { FC, ReactNode } from "react";
import { Box, Divider } from "@mui/material";
import {
  BoldButton,
  StrikethroughButton,
  SubscriptButton,
  SuperscriptButton,
  UnderlineButton,
  ItalicButton,
} from "./Buttons/ButtonsMarks";
import {
  AlignCenterButton,
  AlignLeftButton,
  AlignRightButton,
  CodeButton,
} from "./Buttons/ButtonsBlock";

interface ToolbarProps {
  children?: ReactNode;
}

const ToolDivider = () => (
  <Divider
    sx={{
      display: "inline",
    }}
    orientation="vertical"
    variant="middle"
  />
);

const Toolbar: FC<ToolbarProps> = ({ children }) => (
  <Box borderRadius="borderRadius">
    {!children && (
      <>
        <BoldButton type="mark" format="bold" />
        <ItalicButton type="mark" format="italic" />
        <UnderlineButton type="mark" format="underline" />
        <StrikethroughButton type="mark" format="strikethrough" />
        <ToolDivider />
        <SubscriptButton type="mark" format="subscript" />
        <SuperscriptButton type="mark" format="superscript" />
        <ToolDivider />
        <CodeButton type="mark" format="code" />
        <ToolDivider />
        <AlignLeftButton type="block" format="align-left" />
        <AlignCenterButton type="block" format="align-center" />
        <AlignRightButton type="block" format="align-right" />
      </>
    )}
    {children && <>{children}</>}
  </Box>
);

export default Toolbar;

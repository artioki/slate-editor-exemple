import React, { ForwardedRef, ReactNode } from "react";
import ToolbarButton, { ToolbarButtonProps } from "../ToolbarButton";
import FormatItalicIcon from "@mui/icons-material/FormatItalic";

const ItalicButtonBase = <T extends "mark" | "block">(
  props: ToolbarButtonProps<T>,
  ref: ForwardedRef<HTMLButtonElement>,
) => <ToolbarButton icon={<FormatItalicIcon />} ref={ref} {...props} />;

const ItalicButton = React.forwardRef(ItalicButtonBase) as <
  T extends "mark" | "block",
>(
  props: ToolbarButtonProps<T>,
  ref: ForwardedRef<HTMLButtonElement>,
) => ReactNode;

export default ItalicButton;

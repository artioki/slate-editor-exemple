import React, { ForwardedRef, ReactNode } from "react";
import ToolbarButton, { ToolbarButtonProps } from "../ToolbarButton";
import SuperscriptIcon from "@mui/icons-material/Superscript";

const SuperscriptButtonBase = <T extends "mark" | "block">(
  props: ToolbarButtonProps<T>,
  ref: ForwardedRef<HTMLButtonElement>,
) => <ToolbarButton icon={<SuperscriptIcon />} ref={ref} {...props} />;

const SuperscriptButton = React.forwardRef(SuperscriptButtonBase) as <
  T extends "mark" | "block",
>(
  props: ToolbarButtonProps<T>,
  ref: ForwardedRef<HTMLButtonElement>,
) => ReactNode;

export default SuperscriptButton;

import React, { ForwardedRef, ReactNode } from "react";
import ToolbarButton, { ToolbarButtonProps } from "../ToolbarButton";
import FormatUnderlinedIcon from "@mui/icons-material/FormatUnderlined";

const UnderlineButtonBase = <T extends "mark" | "block">(
  props: ToolbarButtonProps<T>,
  ref: ForwardedRef<HTMLButtonElement>,
) => <ToolbarButton icon={<FormatUnderlinedIcon />} ref={ref} {...props} />;

const UnderlineButton = React.forwardRef(UnderlineButtonBase) as <
  T extends "mark" | "block",
>(
  props: ToolbarButtonProps<T>,
  ref: ForwardedRef<HTMLButtonElement>,
) => ReactNode;

export default UnderlineButton;

import React, { ForwardedRef, ReactNode } from "react";
import ToolbarButton, { ToolbarButtonProps } from "../ToolbarButton";
import FormatBoldIcon from "@mui/icons-material/FormatBold";

const BoldButtonBase = <T extends "mark" | "block">(
  props: ToolbarButtonProps<T>,
  ref: ForwardedRef<HTMLButtonElement>,
) => <ToolbarButton icon={<FormatBoldIcon />} ref={ref} {...props} />;

const BoldButton = React.forwardRef(BoldButtonBase) as <
  T extends "mark" | "block",
>(
  props: ToolbarButtonProps<T>,
  ref: ForwardedRef<HTMLButtonElement>,
) => ReactNode;

export default BoldButton;

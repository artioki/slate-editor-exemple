import React, { ForwardedRef, ReactNode } from "react";
import ToolbarButton, { ToolbarButtonProps } from "../ToolbarButton";
import StrikethroughSIcon from "@mui/icons-material/StrikethroughS";

const StrikethroughButtonBase = <T extends "mark" | "block">(
  props: ToolbarButtonProps<T>,
  ref: ForwardedRef<HTMLButtonElement>,
) => <ToolbarButton icon={<StrikethroughSIcon />} ref={ref} {...props} />;

const StrikethroughButton = React.forwardRef(StrikethroughButtonBase) as <
  T extends "mark" | "block",
>(
  props: ToolbarButtonProps<T>,
  ref: ForwardedRef<HTMLButtonElement>,
) => ReactNode;

export default StrikethroughButton;

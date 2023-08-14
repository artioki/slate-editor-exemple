import React, { ForwardedRef, ReactNode } from "react";
import ToolbarButton, { ToolbarButtonProps } from "../ToolbarButton";
import SubscriptIcon from "@mui/icons-material/Subscript";

const SubscriptButtonBase = <T extends "mark" | "block">(
  props: ToolbarButtonProps<T>,
  ref: ForwardedRef<HTMLButtonElement>,
) => <ToolbarButton icon={<SubscriptIcon />} ref={ref} {...props} />;

const SubscriptButton = React.forwardRef(SubscriptButtonBase) as <
  T extends "mark" | "block",
>(
  props: ToolbarButtonProps<T>,
  ref: ForwardedRef<HTMLButtonElement>,
) => ReactNode;

export default SubscriptButton;

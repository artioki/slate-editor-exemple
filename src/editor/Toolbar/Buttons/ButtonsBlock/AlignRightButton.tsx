import React, { ForwardedRef, ReactNode } from "react";
import ToolbarButton, { ToolbarButtonProps } from "../ToolbarButton";
import AlignHorizontalRightIcon from "@mui/icons-material/AlignHorizontalRight";

const AlignRightButtonBase = <T extends "mark" | "block">(
  props: ToolbarButtonProps<T>,
  ref: ForwardedRef<HTMLButtonElement>,
) => <ToolbarButton icon={<AlignHorizontalRightIcon />} ref={ref} {...props} />;

const AlignRightButton = React.forwardRef(AlignRightButtonBase) as <
  T extends "mark" | "block",
>(
  props: ToolbarButtonProps<T>,
  ref: ForwardedRef<HTMLButtonElement>,
) => ReactNode;

export default AlignRightButton;

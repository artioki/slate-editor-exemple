import React, { ForwardedRef, ReactNode } from "react";
import ToolbarButton, { ToolbarButtonProps } from "../ToolbarButton";
import AlignHorizontalLeftIcon from "@mui/icons-material/AlignHorizontalLeft";

const AlignLeftButtonBase = <T extends "mark" | "block">(
  props: ToolbarButtonProps<T>,
  ref: ForwardedRef<HTMLButtonElement>,
) => <ToolbarButton icon={<AlignHorizontalLeftIcon />} ref={ref} {...props} />;

const AlignLeftButton = React.forwardRef(AlignLeftButtonBase) as <
  T extends "mark" | "block",
>(
  props: ToolbarButtonProps<T>,
  ref: ForwardedRef<HTMLButtonElement>,
) => ReactNode;

export default AlignLeftButton;

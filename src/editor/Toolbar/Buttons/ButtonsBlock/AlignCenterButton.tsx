import React, { ForwardedRef, ReactNode } from "react";
import ToolbarButton, { ToolbarButtonProps } from "../ToolbarButton";
import AlignHorizontalCenterIcon from "@mui/icons-material/AlignHorizontalCenter";

const AlignCenterButtonBase = <T extends "mark" | "block">(
  props: ToolbarButtonProps<T>,
  ref: ForwardedRef<HTMLButtonElement>,
) => (
  <ToolbarButton icon={<AlignHorizontalCenterIcon />} ref={ref} {...props} />
);

const AlignCenterButton = React.forwardRef(AlignCenterButtonBase) as <
  T extends "mark" | "block",
>(
  props: ToolbarButtonProps<T>,
  ref: ForwardedRef<HTMLButtonElement>,
) => ReactNode;

export default AlignCenterButton;

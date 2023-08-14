import React, { ForwardedRef, ReactNode } from "react";
import { useSlate } from "slate-react";
import {
  IconButton,
  IconButtonProps,
  Tooltip,
  TooltipProps,
} from "@mui/material";
import CropSquareOutlined from "@mui/icons-material/CropSquare";
import {
  TypesToolBlock,
  TypesToolMarks,
} from "~/editor/constants/toolbarConst";
import { CustomEditorType } from "~/editor/CustomTypesSlate";

export interface ToolbarButtonProps<T extends "mark" | "block">
  extends Omit<IconButtonProps, "type" | "onMouseDown"> {
  type: T;
  format: T extends "mark" ? TypesToolMarks : TypesToolBlock;
  icon?: ReactNode;
  tooltip?: string;
  placement?: TooltipProps["placement"];
  disabled?: true;
  disableOnSelection?: true;
  disableOnCollapse?: true;
  onMouseDown?: (props: {
    editor: CustomEditorType;
    format: T extends "mark" ? TypesToolMarks : TypesToolBlock;
    type: T;
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-expect-error
    event: MouseEvent<HTMLButtonElement, MouseEvent>;
  }) => void;
  isActive?: () => boolean;
}

const ToolbarButtonBase = <T extends "mark" | "block">(
  {
    placement = "top",
    icon = <CropSquareOutlined />,
    tooltip,
    type,
    disabled,
    disableOnSelection,
    disableOnCollapse,
    format,
    onMouseDown,
    isActive,
    ...rest
  }: ToolbarButtonProps<T>,
  ref: ForwardedRef<HTMLButtonElement>,
) => {
  const editor = useSlate();

  const defaultTooltip = () => {
    return (format.charAt(0).toUpperCase() + format.substring(1)).replace(
      "-",
      " ",
    );
  };

  const handleOnMouseDown = (
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-expect-error
    event: MouseEvent<HTMLButtonElement, MouseEvent>,
  ) => {
    event.preventDefault();
    switch (type) {
      case "mark":
        editor.toggleMark(format as TypesToolMarks);
        break;
      case "block":
        editor.toggleBlock(format as TypesToolBlock);
    }
    onMouseDown && onMouseDown({ editor, format, type, event });
  };

  const checkIsActive = () => {
    if (isActive) {
      return isActive();
    }

    switch (type) {
      case "mark":
        return editor.isMarkActive(format as TypesToolMarks);
      case "block":
        return editor.isBlockActiveTool(format as TypesToolBlock);
    }
    return;
  };

  /**
   * Conditionally disables the button
   */
  const isDisabled = () => {
    let disabled = false;
    disabled = disableOnSelection ? editor.isSelectionExpanded() : false;
    disabled = disableOnCollapse ? editor.isSelectionCollapsed() : disabled;
    return disabled;
  };

  return disabled || isDisabled() ? (
    <IconButton
      aria-label={tooltip ? tooltip : defaultTooltip()}
      ref={ref}
      color={checkIsActive() ? "secondary" : "default"}
      onMouseDown={(event) => handleOnMouseDown(event)}
      disabled={disabled || isDisabled()}
      {...rest}
    >
      {icon}
    </IconButton>
  ) : (
    <Tooltip title={tooltip ? tooltip : defaultTooltip()} placement={placement}>
      <IconButton
        aria-label={tooltip ? tooltip : defaultTooltip()}
        ref={ref}
        color={checkIsActive() ? "secondary" : "default"}
        onMouseDown={(event) => handleOnMouseDown(event)}
        disabled={disabled || isDisabled()}
        {...rest}
      >
        {icon}
      </IconButton>
    </Tooltip>
  );
};

const ToolbarButton = React.forwardRef(ToolbarButtonBase) as <
  T extends "mark" | "block",
>(
  props: ToolbarButtonProps<T>,
  ref: ForwardedRef<HTMLButtonElement>,
) => ReactNode;

export default ToolbarButton;

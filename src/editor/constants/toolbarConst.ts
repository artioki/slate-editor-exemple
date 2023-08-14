import { TypesElementBlock } from "./elementsConst";

export type TypesToolMarks =
  | "bold"
  | "italic"
  | "underline"
  | "strikethrough"
  | "superscript"
  | "subscript"
  | "code";

export type ListsTypes = "ordered" | "unordered";
export type AlignTypes = "left" | "center" | "right";

export type TypesToolBlock =
  | `${Extract<TypesElementBlock, "align">}-${AlignTypes}`
  | `${Extract<TypesElementBlock, "list">}-${ListsTypes}`;

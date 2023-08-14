import { BaseEditor, Node, Element } from "slate";
import { ReactEditor } from "slate-react";
import { TypesElementBlock } from "./constants/elementsConst";
import { AlignTypes, TypesToolMarks } from "./constants/toolbarConst";
import { MarksEditor } from "./Utils/withMarks";
import { BlocksEditor } from "./Utils/withBlocks";
import { BaseEditorCustom } from "./Utils/withBase";

export interface BaseElementBlock {
  type: TypesElementBlock;
}

export const IsElementParagraph = (node: Node) => {
  return Element.isElement(node) && node.type === "paragraph";
};
export interface ElementParagraph extends BaseElementBlock {
  type: "paragraph";
  children: CustomText[];
}

export const IsElementPage = (node: Node): node is ElementPage => {
  return Element.isElement(node) && node.type === "page";
};
export interface ElementPage extends BaseElementBlock {
  type: "page";
  height?: string;
  width?: string;
  children: (CustomText | ElementParagraph)[]; // ????
}

export const IsElementAlign = (node: Node): node is ElementAlign => {
  return Element.isElement(node) && node.type === "align";
};
export interface ElementAlign extends BaseElementBlock {
  type: "align";
  align: AlignTypes;
  children: (CustomText | ElementParagraph)[]; // ????
}

// export const IsElementList = (node: Node): node is ElementList => {
//   return Element.isElement(node) && node.type === "list";
// };
// export interface ElementList extends BaseElementBlock {
//   type: "list";
//   listType: ListsTypes;
//   children: (CustomText | ElementParagraph)[]; // ????
// }

export type ElementBloks = ElementParagraph | ElementPage | ElementAlign;
// | ElementList;

export interface CustomText extends Partial<Record<TypesToolMarks, true>> {
  text: string;
}

export type CustomEditorType = BaseEditor &
  ReactEditor &
  MarksEditor &
  BlocksEditor &
  BaseEditorCustom;

export interface onKeyProps {
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  event: KeyboardEvent<HTMLDivElement>;
  editor: CustomEditorType;
}
declare module "slate" {
  interface CustomTypes {
    Editor: CustomEditorType;
    Element: ElementBloks;
    Text: CustomText;
  }
}

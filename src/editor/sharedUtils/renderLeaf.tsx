import {
  BoldLeaf,
  UnderlineLeaf,
  StrikethroughLeaf,
  ItalicLeaf,
  SubscriptLeaf,
  SuperscriptLeaf,
  CodeLeaf,
} from "./Leafs/Leafs";
import { RenderLeafProps } from "slate-react";

export const renderLeaf = (props: RenderLeafProps) => {
  if (props.leaf.bold) BoldLeaf(props);
  if (props.leaf.underline) UnderlineLeaf(props);
  if (props.leaf.strikethrough) StrikethroughLeaf(props);
  if (props.leaf.italic) ItalicLeaf(props);
  if (props.leaf.subscript) SubscriptLeaf(props);
  if (props.leaf.superscript) SuperscriptLeaf(props);
  if (props.leaf.code) CodeLeaf(props);

  return <span {...props.attributes}>{props.children}</span>;
};

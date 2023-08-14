import { RenderLeafProps } from "slate-react";

export const BoldLeaf = (props: RenderLeafProps) => {
  props.children = <strong>{props.children}</strong>;
};
export const ItalicLeaf = (props: RenderLeafProps) => {
  props.children = <em>{props.children}</em>;
};
export const UnderlineLeaf = (props: RenderLeafProps) => {
  props.children = (
    <span style={{ textDecoration: "underline" }}>{props.children}</span>
  );
};
export const StrikethroughLeaf = (props: RenderLeafProps) => {
  props.children = (
    <span style={{ textDecoration: "line-through" }}>{props.children}</span>
  );
};
export const SuperscriptLeaf = (props: RenderLeafProps) => {
  props.children = <sup>{props.children}</sup>;
};
export const SubscriptLeaf = (props: RenderLeafProps) => {
  props.children = <sub>{props.children}</sub>;
};
export const CodeLeaf = (props: RenderLeafProps) => {
  props.children = <code>{props.children}</code>;
};

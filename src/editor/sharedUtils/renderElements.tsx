import { RenderElementProps } from "slate-react";
import { AlignElement, DefaultElement, PageElement } from "./Elements/Elements";

export const renderElement = (props: RenderElementProps) => {
  switch (props.element.type) {
    case "page":
      return <PageElement {...props} />;
    case "align":
      return <AlignElement {...props} />;
    // case "list":
    //   return <ListElement {...props} />;
    default:
      return <DefaultElement {...props} />;
  }
};

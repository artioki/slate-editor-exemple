import { Editor, Element, Transforms } from "slate";
import { AlignTypes, TypesToolBlock } from "../constants/toolbarConst";
import {
  CustomEditorType,
  ElementBloks,
  IsElementAlign,
} from "../CustomTypesSlate";
import { TypesElementBlock } from "../constants/elementsConst";

export interface BlocksEditor {
  isBlockActiveTool: (format: TypesToolBlock) => boolean;
  isBlockActive: (format: TypesElementBlock) => boolean;
  toggleBlock: (fromat: TypesToolBlock) => void;
  isAlignTool: (
    node: ElementBloks,
    format: TypesToolBlock | TypesElementBlock,
  ) => boolean;
}

const withBlocks = (editor: CustomEditorType) => {
  editor.isAlignTool = (node, format) =>
    node.type === "align" && node.align === format.split("-")[1];

  editor.isBlockActiveTool = (format) => {
    const [match] = editor.nodes({
      match: (n) =>
        !Editor.isEditor(n) &&
        Element.isElement(n) &&
        editor.isAlignTool(n, format),
    });
    return !!match;
  };
  editor.isBlockActive = (format) => {
    const [match] = editor.nodes({
      match: (n) =>
        !Editor.isEditor(n) && Element.isElement(n) && n.type === format,
    });
    return !!match;
  };

  editor.toggleBlock = (format) => {
    // @NOTE добавть поддержку последовательности для page => alighn => lists => code
    // @TODO порядок
    switch (format) {
      case "align-right":
      case "align-left":
      case "align-center":
        {
          const align = format.split("-")[1] as AlignTypes;
          if (align) {
            const [match] = editor.nodes({ match: (n) => IsElementAlign(n) });
            if (match) {
              const [same] = editor.nodes({
                match: (n) => IsElementAlign(n) && n.align === align,
              });
              if (same)
                Transforms.unwrapNodes(editor, {
                  match: (n) => IsElementAlign(n),
                });
              else
                Transforms.setNodes(
                  editor,
                  { align },
                  { match: (n) => IsElementAlign(n) },
                );
            }
            // @TODO ограничить уровнь по последовательности
            else
              Transforms.wrapNodes(editor, {
                type: "align",
                align,
                children: [],
              });
          }
        }
        break;
    }

    // if(format ==="")

    // const isActive = editor.isBlockActive(format);
    // const isList = editor.isListType(format);
    // Transforms.unwrapNodes(editor, {
    //   match: (n) =>
    // !Editor.isEditor(n) &&
    // Element.isElement(n) &&
    //     editor.isListType(n.type),
    //   split: true,
    // });
    // //TODO cannot this be generalized??
    // Transforms.setNodes(editor, {
    //   type: isActive ? "paragraph" : isList ? "list-item" : format,
    // });
    // if (!isActive && isList) {
    //   const selected = { type: format, children: [] };
    //   Transforms.wrapNodes(editor, selected);
    // }
  };

  return editor;
};

export default withBlocks;

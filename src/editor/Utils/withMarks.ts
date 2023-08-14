import { Editor, Element, Text, Transforms } from "slate";
import { TypesToolMarks } from "../constants/toolbarConst";
import { CustomEditorType } from "../CustomTypesSlate";

export interface MarksEditor {
  isMarkActive: (format: TypesToolMarks) => boolean;
  toggleMark: (format: TypesToolMarks) => void;
  cleanMarks: () => void;
}

const withMarks = (editor: CustomEditorType) => {
  editor.isMarkActive = (format) => {
    const match = editor.nodes({
      match: (n) => {
        return Text.isText(n) && !!n[format];
      },
    });

    return !!match.next().value;
  };

  editor.toggleMark = (format) => {
    const isActive = editor.isMarkActive(format);

    if (isActive) {
      editor.removeMark(format);
    } else {
      editor.addMark(format, true);
    }
  };

  editor.cleanMarks = () => {
    Transforms.setNodes(
      editor,
      // @TODO добваить очистку всех параметров
      { bold: undefined },
      {
        match: (n) => Text.isText(n),
      },
    );
  };

  editor.isBlockActive = (format) => {
    const [match] = editor.nodes({
      match: (n) =>
        !Editor.isEditor(n) && Element.isElement(n) && n.type === format,
    });

    return !!match;
  };

  return editor;
};

export default withMarks;

import { CustomEditorType } from "../CustomTypesSlate";

export const withCustomText = (editor: CustomEditorType) => {
  const { isInline } = editor;

  editor.isInline = (element) => {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-expect-error
    return typeof element.text === "string" ? true : isInline(element);
  };

  return editor;
};

import { KeyboardEventHandler, useCallback } from "react";
import { useState } from "react";
import { Descendant, createEditor } from "slate";
import { Editable, Slate, withReact } from "slate-react";
import styled from "styled-components";
import { renderElement } from "./sharedUtils/renderElements";
import { renderLeaf } from "./sharedUtils/renderLeaf";
import { onKeyDown } from "./sharedUtils/onKeyDown";
import { withCustomText } from "./Utils/withText";
import Toolbar from "./Toolbar/Toolbar";
import withMarks from "./Utils/withMarks";
import withBlocks from "./Utils/withBlocks";
import withBase from "./Utils/withBase";

const ContainerEditable = styled.div`
  padding: 2rem;
  border: 1px solid #fff;
  border-radius: 1rem;
  & select {
    height: 30px;
    border: none;
    width: 6.9rem;
  }
`;

const initialValue: Descendant[] = [
  {
    type: "page",
    width: "500px",
    height: "300px",
    children: [
      {
        type: "paragraph",
        children: [{ text: "A line of text in a paragraph." }],
      },
    ],
  },
];

const CustormEditor = () => {
  const [editor] = useState(() =>
    withBase(withCustomText(withBlocks(withMarks(withReact(createEditor()))))),
  );
  const [value, setValue] = useState(initialValue);

  const onKeyDownHandeler = useCallback(
    (event: KeyboardEventHandler<HTMLDivElement>) =>
      onKeyDown({ event, editor }),
    [editor],
  );

  // Render the Slate context.
  return (
    <>
      <Slate
        editor={editor}
        initialValue={value}
        onChange={(newValue) => setValue(newValue)}
      >
        <Toolbar />
        <ContainerEditable>
          <Editable
            renderElement={renderElement}
            renderLeaf={renderLeaf}
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            //@ts-ignore
            onKeyDown={onKeyDownHandeler}
          />
        </ContainerEditable>
      </Slate>
      <pre>{JSON.stringify(value, null, 2)}</pre>
    </>
  );
};
export default CustormEditor;

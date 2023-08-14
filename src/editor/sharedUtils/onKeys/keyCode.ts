// import { Editor, Transforms, Element } from "slate";
// import {
//   onKeyProps,
//   IsElementParagraph,
// } from "../../CustomTypesSlate";

// export const keyCode = ({ event, editor }: onKeyProps) => {
//   event.preventDefault();

//   const [match] = Editor.nodes(editor, {
//     match: (n) => {
//       return Element.isElement(n) && n.type === "code";
//     },
//   });

//   if (match) {
//     Transforms.setNodes(
//       editor,
//       { type: "paragraph" },
//       { match: (n) => IsElementCode(n) },
//     );
//   } else {
//     Transforms.setNodes(
//       editor,
//       { type: "code" },
//       {
//         match: (n) => IsElementParagraph(n),
//       },
//     );
//   }
// };

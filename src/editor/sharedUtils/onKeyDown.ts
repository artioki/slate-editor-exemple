import { onKeyProps } from "../CustomTypesSlate";
import { TypesToolMarks } from "../constants/toolbarConst";
// import { keyCode } from "./OnKeys/keyCode";

const shortcut: Record<string, TypesToolMarks> = {
  b: "bold",
  i: "italic",
  u: "underline",
};

export const onKeyDown = ({ event, editor }: onKeyProps) => {
  if (!event.ctrlKey) {
    return;
  }
  console.log(event.key);

  switch (event.key) {
    // @NOTE нажатие "`" иногда расценивается как Dead
    // case "Dead":
    // case "`": {
    //   if (event.code !== "Backquote") return;
    //   keyCode({ event, editor });
    //   break;
    // }
    case "b":
    case "i":
    case "u": {
      editor.toggleMark(shortcut[event.key]);
      break;
    }
    case `\\`: {
      editor.cleanMarks();
      break;
    }
  }
};

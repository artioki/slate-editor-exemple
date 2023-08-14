import { Box } from "@mui/material";
import { RenderElementProps } from "slate-react";
import { IsElementAlign, IsElementPage } from "~/editor/CustomTypesSlate";

export const PageElement = (props: RenderElementProps) => {
  if (IsElementPage(props.element))
    return (
      <Box
        sx={{
          width: props.element.width ?? "3px",
          height: props.element.height ?? "8px",
        }}
      >
        {props.children}
      </Box>
    );
  else return <>{props.children}</>;
};

// export const ListElement = (props: RenderElementProps) => {
//   if (IsElementList(props.element))
//     return (
//       <div
//         style={{
//           display: "flex",
//           justifyContent: "flex-end",
//           listStylePosition: "inside",
//         }}
//       >
//         {props.children}
//       </div>
//     );
//   else return <>{props.children}</>;
// };

export const AlignElement = (props: RenderElementProps) => {
  if (IsElementAlign(props.element)) {
    return (
      <div
        style={{
          width: "100%",
          display: "flex",
          justifyContent: props.element.align,
          listStylePosition: "inside",
        }}
      >
        {props.children}
      </div>
    );
  } else return <>{props.children}</>;
};

export const DefaultElement = (props: RenderElementProps) => {
  return <p {...props.attributes}>{props.children}</p>;
};

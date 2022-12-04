import { ApiParamsV1 } from "./lib";

export type Variant = {
  name: string;
  preview: string[];
  params: Partial<ApiParamsV1>;
};

export const variants: Variant[] = [
  {
    name: "green",
    preview: ["#113F3D", "#2CD197"],
    params: {
      showBorder: true,
      borderColor: "#113F3D",
      borderWidth: 4,
      startBg: "#FAF3DA",
      startText: "#113F3D",
      endText: "#113F3D",
      endBg: "#2CD197",
    },
  },
  {
    name: "orange",
    preview: ["#002E33", "#FD3C00"],
    params: {
      showBorder: false,
      borderWidth: 4,
      startBg: "#002E33",
      startText: "#EFE0CA",
      endText: "#EFE0CA",
      endBg: "#FD3C00",
    },
  },
  {
    name: "blue",
    preview: ["#141E42", "#EAAB10"],
    params: {
      showBorder: true,
      borderColor: "#141E42",
      borderWidth: 4,
      startBg: "#141E42",
      startText: "#F2EEE3",
      endText: "#141E42",
      endBg: "#EAAB10",
    },
  },
];

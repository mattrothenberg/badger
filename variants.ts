import { ApiParamsV1 } from "./lib";

type Variant = {
  name: string;
  params: Partial<ApiParamsV1>;
};

export const variants: Variant[] = [
  {
    name: "vert",
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
];

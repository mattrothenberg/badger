export type ApiParamsV1 = {
  showBorder: boolean;
  borderColor?: string;
  borderWidth?: number;
  startBg: string;
  startText: string;
  startLabel: string;
  endBg: string;
  endText: string;
  endLabel: string;
  rtl: boolean;
};

export type ApiParamsV1Serialized = Omit<
  ApiParamsV1,
  "rtl" | "showBorder" | "borderWidth"
> & {
  borderWidth?: string;
  rtl: "1" | "0";
};

export function constructBadgeUrl(params: ApiParamsV1) {
  const urlParams = new URLSearchParams({
    ...(params.showBorder && {
      borderColor: params.borderColor,
      borderWidth: String(params.borderWidth),
    }),
    startBg: params.startBg,
    startText: params.startText,
    startLabel: params.startLabel,
    endBg: params.endBg,
    endText: params.endText,
    endLabel: params.endLabel,
    rtl: params.rtl ? "1" : "0",
  });
  return `api/v1/image?${urlParams.toString()}`;
}

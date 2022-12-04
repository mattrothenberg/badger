import type { NextApiRequest, NextApiResponse } from "next";

import satori from "satori";
import fs from "fs";
import path from "path";
import { ApiParamsV1Serialized } from "../../../lib";

const font = {
  data: fs.readFileSync(
    path.join(
      process.cwd(),
      "public",
      "fonts",
      "inter",
      "desktop",
      "Inter-Black.otf"
    )
  ),
  name: "Inter",
  weight: 900,
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const {
    borderColor,
    rtl,
    startBg,
    startText,
    startLabel,
    endBg,
    endText,
    endLabel,
  } = req.query as ApiParamsV1Serialized;

  const primary = (
    <div
      style={{
        fontSize: 20,
        // background: primaryBgColor,
        color: startText,
        height: "100%",
        flex: "1",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        textTransform: "uppercase",
        background: startBg,
        backgroundSize: "auto",
        backgroundBlendMode: "normal",
        backgroundRepeat: "repeat",
        padding: 12,
      }}
    >
      {startLabel}
    </div>
  );

  const secondary = (
    <div
      style={{
        fontSize: 20,
        background: endBg,
        backgroundSize: "auto",
        backgroundBlendMode: "normal",
        backgroundRepeat: "repeat",
        color: endText,
        flex: "1",
        height: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        textTransform: "uppercase",
        padding: 12,
      }}
    >
      {endLabel.trim()}
    </div>
  );

  let spacer = (
    <div
      style={{
        width: 4,
        height: "100%",
        display: "flex",
        flexShrink: 0,
      }}
    ></div>
  );

  let items = [primary, borderColor ? spacer : null, secondary].filter(Boolean);

  if (rtl === "1") {
    items = items.reverse();
  }

  const svg = await satori(
    <div
      style={{
        background: borderColor ? borderColor : "transparent",
        display: "flex",
        alignItems: "center",
        height: "100%",
        width: "100%",
        padding: borderColor ? 4 : 0,
      }}
    >
      {items.map((item) => item)}
    </div>,
    // @ts-ignore
    {
      fonts: [
        {
          name: font.name,
          data: font.data,
          // @ts-ignore
          weight: font.weight,
        },
      ],
    }
  );
  res.setHeader("Content-Type", "image/svg+xml");
  res.setHeader(
    "Cache-Control",
    "public, immutable, no-transform, s-maxage=31536000, max-age=31536000"
  );

  return res.end(svg);
}

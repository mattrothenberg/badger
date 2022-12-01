// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";

import satori from "satori";
import fs from "fs";
import path from "path";

const inter = fs.readFileSync(
  path.join(process.cwd(), "public", "desktop", "Inter-Black.otf")
);

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const {
    rtl,
    baseBgColor,
    primaryLabel,
    primaryBgColor,
    primaryTextColor,
    secondaryLabel,
    secondaryBgColor,
    secondaryTextColor,
  } = req.query as Record<string, string>;

  const primary = (
    <div
      style={{
        fontSize: 20,
        background: primaryBgColor,
        color: primaryTextColor,
        height: "100%",
        flex: "1",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        textTransform: "uppercase",
        padding: 12,
      }}
    >
      {primaryLabel}
    </div>
  );

  const secondary = (
    <div
      style={{
        fontSize: 20,
        background: secondaryBgColor,
        color: secondaryTextColor,
        flex: "1",
        height: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        textTransform: "uppercase",
        padding: 12,
      }}
    >
      {secondaryLabel}
    </div>
  );

  let items = [primary, secondary];

  if (rtl === "true") {
    items = items.reverse();
  }

  console.log(rtl);

  const svg = await satori(
    <div
      style={{
        background: baseBgColor,
        display: "flex",
        alignItems: "center",
        height: "100%",
        width: "100%",
        padding: 4,
      }}
    >
      {items.map((item) => item)}
    </div>,
    // @ts-ignore
    {
      fonts: [
        {
          name: "Inter",
          data: inter,
          weight: 900,
          style: "normal",
        },
      ],
    }
  );

  // let buffer = await sharp(Buffer.from(svg)).png({ quality: 100 }).toBuffer();

  // send buffer as mime type image/png
  res.setHeader("Content-Type", "image/svg+xml");

  // res.setHeader(
  //   "Cache-Control",
  //   "public, immutable, no-transform, s-maxage=31536000, max-age=31536000"
  // );

  return res.end(svg);
}

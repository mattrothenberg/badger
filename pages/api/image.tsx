// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";

import satori from "satori";
import fs from "fs";
import path from "path";

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
  name: "Fooo",
  weight: 900,
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const {
    rtl,
    baseBgColor,
    primaryLabel,
    baseBorderColor,
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
        // background: primaryBgColor,
        color: primaryTextColor,
        height: "100%",
        flex: "1",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        textTransform: "uppercase",
        background: `${primaryBgColor} url('https://grainy-gradients.vercel.app/noise.svg')`,
        backgroundSize: "auto",
        backgroundBlendMode: "normal",
        backgroundRepeat: "repeat",
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
        background: `${primaryBgColor} url('data:image/png;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI1MDAiIGhlaWdodD0iNTAwIj4KICAgIDxmaWx0ZXIgaWQ9Im5vaXNlIiB4PSIwIiB5PSIwIj4KICAgICAgPGZlVHVyYnVsZW5jZSB0eXBlPSJmcmFjdGFsTm9pc2UiIGJhc2VGcmVxdWVuY3k9IjAuNjUiIG51bU9jdGF2ZXM9IjMiIHN0aXRjaFRpbGVzPSJzdGl0Y2giLz4KICAgICAgPGZlQmxlbmQgbW9kZT0ic2NyZWVuIi8+CiAgICA8L2ZpbHRlcj4KICAgIDxyZWN0IHdpZHRoPSI1MDAiIGhlaWdodD0iNTAwIiBmaWx0ZXI9InVybCgjbm9pc2UpIiBvcGFjaXR5PSIwLjUiLz4KPC9zdmc+')`,
        backgroundSize: "auto",
        backgroundBlendMode: "normal",
        backgroundRepeat: "repeat",
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
      {secondaryLabel.trim()}
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

  let items = [primary, spacer, secondary];

  if (rtl === "true") {
    items = items.reverse();
  }

  const svg = await satori(
    <div
      style={{
        background: baseBorderColor,
        display: "flex",
        alignItems: "center",
        height: "100%",
        width: "100%",
        padding: 4,
      }}
    >
      <div
        style={{
          background: baseBgColor,
          padding: 4,
          display: "flex",
          alignItems: "center",
          height: "100%",
          width: "100%",
        }}
      >
        {items.map((item) => item)}
      </div>
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

  // let buffer = await sharp(Buffer.from(svg)).png({ quality: 100 }).toBuffer();

  // send buffer as mime type image/png
  res.setHeader("Content-Type", "image/svg+xml");

  // res.setHeader(
  //   "Cache-Control",
  //   "public, immutable, no-transform, s-maxage=31536000, max-age=31536000"
  // );

  return res.end(svg);
}

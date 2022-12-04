import { useControls, folder } from "leva";
import { RiImageFill, RiMarkdownFill } from "react-icons/ri";
import { LinkPreview } from "../components/link-preview";

import { ApiParamsV1, constructBadgeUrl } from "../lib";
import { variants } from "../variants";

export default function Home() {
  const [params, set] = useControls(() => ({
    Start: folder({
      startBg: {
        label: "Background",
        value: "#fff",
      },
      startText: {
        label: "Text",
        value: "black",
      },
      startLabel: {
        label: "Text",
        value: "works on",
      },
    }),
    End: folder({
      endBg: {
        label: "Background",
        value: "#fff",
      },
      endText: {
        label: "Text",
        value: "black",
      },
      endLabel: {
        label: "Text",
        value: "my machine",
      },
    }),
    showBorder: {
      value: true,
    },
    Border: folder({
      borderColor: {
        label: "Border",
        value: "black",
        render: (get) => {
          return get("showBorder");
        },
      },
      borderWidth: {
        label: "Width",
        value: 4,
        min: 1,
        max: 8,
        step: 1,
        render: (get) => {
          return get("showBorder");
        },
      },
    }),
    rtl: {
      value: false,
    },
  }));

  const badgeUrl = constructBadgeUrl(params);

  const setParams = (variant: Partial<ApiParamsV1>) => {
    set(variant);
  };

  let markdownLabel = params.rtl
    ? `${params.endLabel} ${params.startLabel}`
    : `${params.startLabel} ${params.endLabel}`;

  return (
    <div className="h-screen w-full flex items-center justify-center flex-col">
      <div className="absolute top-0 left-0 p-4">
        <div className="space-y-2">
          <p className="text-xs uppercase tracking-wider font-semibold">
            Examples
          </p>
          <ul className="space-x-2 inline-flex items-center">
            {variants.map((variant) => {
              return (
                <li>
                  <button
                    className="w-8 h-8 rounded-full overflow-hidden relative"
                    onClick={() => setParams(variant.params)}
                    key={variant.name}
                  >
                    <div className="absolute inset-0 flex">
                      {variant.preview.map((color) => {
                        return (
                          <div
                            style={{ background: color }}
                            className="flex-1"
                          ></div>
                        );
                      })}
                    </div>
                    {variant.name}
                  </button>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
      <div>
        <img src={`/` + badgeUrl} />
      </div>
      <div className="container px-4">
        <div className="max-w-xl mx-auto mt-8 space-y-4">
          <LinkPreview
            startIcon={RiMarkdownFill}
            url={badgeUrl}
            renderText={(url) => {
              return `![${markdownLabel}](${url})`;
            }}
          />
          <LinkPreview
            startIcon={RiImageFill}
            url={badgeUrl}
            renderText={(url) => {
              return `<img alt="Badge displaying the text ${markdownLabel}" src="${url}" />`;
            }}
          />
        </div>
      </div>
    </div>
  );
}

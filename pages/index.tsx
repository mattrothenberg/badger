import { useControls, folder } from "leva";
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

  return (
    <div className="h-screen w-full flex items-center justify-center flex-col">
      <ul>
        {variants.map((variant) => {
          return (
            <li>
              <button
                onClick={() => setParams(variant.params)}
                key={variant.name}
              >
                {variant.name}
              </button>
            </li>
          );
        })}
      </ul>
      <div>
        <img src={`/` + badgeUrl} />
      </div>
      <div className="container px-4">
        <div className="max-w-xl mx-auto mt-8">
          <LinkPreview url={badgeUrl} params={params} />
        </div>
      </div>
    </div>
  );
}

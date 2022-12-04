import { useControls, folder } from "leva";
import { LinkPreview } from "../components/link-preview";

import { constructBadgeUrl } from "../lib";

export default function Home() {
  const params = useControls({
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
  });

  const badgeUrl = constructBadgeUrl(params);

  return (
    <div className="h-screen w-full flex items-center justify-center flex-col">
      <div>
        <img src={`/` + badgeUrl} />
      </div>
      <div className="container px-4">
        <div className="max-w-xl mx-auto mt-8">
          <LinkPreview url={badgeUrl} params={params} />
        </div>
      </div>
      {/* <div className="flex items-center py-24 justify-center bg-[#141E42]">
        <img
          src={makeBadgeUrl({
            base: {
              color: {
                bg: "#EAAB10",
              },
            },
            primary: {
              label: "Fueled by",
              color: {
                bg: "#EAAB10",
                text: "#F1EBD3",
              },
            },
            secondary: {
              label: "Beer",
              color: {
                text: "#EAAB10",
                bg: "#F2EEE3",
              },
            },
          })}
          alt=""
        />
      </div>
      <div className="flex items-center py-24 justify-center bg-[#FEC600]">
        <img
          src={makeBadgeUrl({
            base: {
              color: {
                bg: "#231E1F",
              },
            },
            primary: {
              label: "Made with",
              color: {
                bg: "#32DAC4",
                text: "#FFF",
              },
            },
            secondary: {
              label: "❤ ",
              color: {
                text: "#F8485D",
                bg: "#F2EEE3",
              },
            },
          })}
          alt=""
        />
      </div>
      <div className="flex items-center py-24 flex-col space-y-16 justify-center bg-[#113F3D]">
        <div>
          <img
            className="mx-auto"
            src={makeBadgeUrl({
              base: {
                border: {
                  color: "#2CD197",
                },
                color: {
                  bg: "#113F3D",
                },
              },
              primary: {
                label: "I love",
                color: {
                  bg: "#FAF3DA",
                  text: "#113F3D",
                },
              },
              secondary: {
                label: "TYPES",
                color: {
                  text: "#113F3D",
                  bg: "#2CD197",
                },
              },
            })}
            alt=""
          />
          <div className="text-center mt-8 bg-black/10 p-2 rounded border border-black/10 flex items-center space-x-2">
            <SiMarkdown className="text-[#2CD197]" />
            <pre className="text-[#2CD197] text-sm">
              ![i love types](...?start=I+love&end=types)
            </pre>
          </div>
        </div>
        <div>
          <img
            className="mx-auto"
            src={makeBadgeUrl({
              base: {
                border: {
                  color: "#2CD197",
                },
                color: {
                  bg: "#113F3D",
                },
              },
              primary: {
                label: "Works on",
                color: {
                  bg: "#FAF3DA",
                  text: "#113F3D",
                },
              },
              secondary: {
                label: "my machine",
                color: {
                  text: "#113F3D",
                  bg: "#2CD197",
                },
              },
            })}
            alt=""
          />
          <div className="text-center mt-8 bg-black/10 p-2 rounded border border-black/10 flex items-center space-x-2">
            <SiMarkdown className="text-[#2CD197]" />
            <pre className="text-[#2CD197] text-sm">
              ![works on my machine](...?start=works+on&end=my+machine)
            </pre>
          </div>
        </div>
      </div>
      <div className="flex items-center py-24 flex-col space-y-16 justify-center bg-[#286072]">
        <div>
          <img
            className="mx-auto"
            src={makeBadgeUrl({
              base: {
                border: {
                  color: "#69C6DC",
                },
                color: {
                  bg: "#286072",
                },
              },
              primary: {
                label: "contains",
                color: {
                  text: "#286072",
                  bg: "#F7F3E2",
                },
              },
              secondary: {
                label: "bugs",
                color: {
                  text: "#286072",
                  bg: "#69C6DC",
                },
              },
            })}
            alt=""
          />
          <div className="text-center mt-8 bg-black/10 p-2 rounded border border-black/10 flex items-center space-x-2">
            <SiMarkdown className="text-[#69C6DC]" />
            <pre className="text-[#69C6DC] text-sm">
              ![contains bugs](...?start=contains&end=bugs)
            </pre>
          </div>
        </div>
        <div>
          <img
            className="mx-auto"
            src={makeBadgeUrl({
              base: {
                border: {
                  color: "#2CD197",
                },
                color: {
                  bg: "#9E1F65",
                },
              },
              primary: {
                label: "Works on",
                color: {
                  bg: "#FAF3DA",
                  text: "#9E1F65",
                },
              },
              secondary: {
                label: "my machine",
                color: {
                  text: "#9E1F65",
                  bg: "#2CD197",
                },
              },
            })}
            alt=""
          />
          <div className="text-center mt-8 bg-black/10 p-2 rounded border border-black/10 flex items-center space-x-2">
            <SiMarkdown className="text-[#2CD197]" />
            <pre className="text-[#2CD197] text-sm">
              ![works on my machine](...?start=works+on&end=my+machine)
            </pre>
          </div>
        </div>
      </div> */}
    </div>
  );
}

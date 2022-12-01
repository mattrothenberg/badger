type BadgeParams = {
  rtl?: boolean;
  base: {
    border?: {
      color: string;
    };
    color: {
      bg: string;
    };
  };
  primary: {
    label: string;
    color: {
      bg: string;
      text: string;
    };
  };
  secondary: {
    label: string;
    color: {
      bg: string;
      text: string;
    };
  };
};

function makeBadgeUrl(params: BadgeParams) {
  const urlParams = new URLSearchParams();
  urlParams.set("rtl", params.rtl ? "true" : "false");
  // @ts-ignore
  urlParams.set(
    "baseBorderColor",
    params["base"]["border"]?.color || "transparent"
  );
  urlParams.set("baseBgColor", params.base.color.bg);
  urlParams.set("primaryLabel", params.primary.label);
  urlParams.set("primaryBgColor", params.primary.color.bg);
  urlParams.set("primaryTextColor", params.primary.color.text);
  urlParams.set("secondaryLabel", params.secondary.label);
  urlParams.set("secondaryBgColor", params.secondary.color.bg);
  urlParams.set("secondaryTextColor", params.secondary.color.text);
  return `/api/image?${urlParams.toString()}`;
}

export default function Home() {
  return (
    <>
      <div className="flex items-center py-24 justify-center bg-[#F1EBD3]">
        <img
          src={makeBadgeUrl({
            base: {
              color: {
                bg: "#1E270A",
              },
            },
            primary: {
              label: "Works on",
              color: {
                bg: "#07A0C2",
                text: "#F1EBD3",
              },
            },
            secondary: {
              label: "My Machine",
              color: {
                bg: "#F05633",
                text: "#F1EBD3",
              },
            },
          })}
          alt=""
        />
      </div>
      <div className="flex items-center py-24 justify-center bg-[#141E42]">
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
      <div className="flex items-center py-24 justify-center bg-[#113F3D]">
        <img
          src={makeBadgeUrl({
            base: {
              border: {
                color: "#1EBC82",
              },
              color: {
                bg: "#113F3D",
              },
            },
            primary: {
              label: "Tastes like",
              color: {
                bg: "#FAF3DA",
                text: "#113F3D",
              },
            },
            secondary: {
              label: "JS",
              color: {
                text: "#113F3D",
                bg: "#1EBC82",
              },
            },
          })}
          alt=""
        />
      </div>
    </>
  );
}

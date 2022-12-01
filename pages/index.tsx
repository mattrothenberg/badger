type BadgeParams = {
  rtl?: boolean;
  base: {
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
  );
}

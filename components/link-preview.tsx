import { useEffect, useState } from "react";
import {
  RiCheckboxCircleFill,
  RiFileCopyFill,
  RiMarkdownFill,
} from "react-icons/ri";

import useClipboard from "react-use-clipboard";
import { ApiParamsV1 } from "../lib";

export function LinkPreview({
  params,
  url,
}: {
  params: ApiParamsV1;
  url: string;
}) {
  const [imageUrl, setImageUrl] = useState("");
  useEffect(() => {
    setImageUrl(window.location.href + url);
  }, []);

  const label = params.rtl
    ? `${params.endLabel} ${params.startLabel}`
    : `${params.startLabel} ${params.endLabel}`;

  const value = `![${label}](${imageUrl})`;

  const [isCopied, setCopied] = useClipboard(value, {
    successDuration: 2000,
  });

  return (
    <div className="border border-black/10 w-full relative overflow-ellipsis truncate focus-within:ring focus-within:ring-black">
      <div className="bg-transparent flex shrink-0 absolute left-0 top-0 bottom-0 w-10 h-full items-center justify-center">
        <RiMarkdownFill title="Markdown logo" className="text-black" />
      </div>
      <input
        className="w-full focus:outline-none bg-transparent pl-8 pr-8 font-mono text-sm appearance-none p-2 border-none overflow-ellipsis truncate"
        value={value}
        readOnly
        type="text"
      />
      <div className="absolute right-0 top-0 bottom-0 flex items-center px-2">
        <button
          onClick={setCopied}
          className="rounded-full w-6 h-6 flex items-center justify-center"
        >
          {isCopied ? (
            <RiCheckboxCircleFill
              title="Succesfully copied image"
              className="text-green-600"
            />
          ) : (
            <RiFileCopyFill title="Copy image URL" />
          )}
        </button>
      </div>
    </div>
  );
}

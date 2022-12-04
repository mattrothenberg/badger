import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import { IconType } from "react-icons";
import { RiCheckboxCircleFill, RiFileCopyFill } from "react-icons/ri";

import useClipboard from "react-use-clipboard";

export function LinkPreview({
  startIcon,
  renderText,
}: {
  startIcon: IconType;
  renderText: (url: string) => string;
}) {
  const [imageUrl, setImageUrl] = useState("");

  useEffect(() => {
    setImageUrl(window.location.href);
  }, []);

  const text = renderText(imageUrl);

  const [isCopied, setCopied] = useClipboard(text, {
    successDuration: 2000,
  });

  let StartIcon = startIcon;

  return (
    <div className="border border-black/10 w-full relative overflow-ellipsis truncate focus-within:ring focus-within:ring-black">
      <div className="bg-transparent flex shrink-0 absolute left-0 top-0 bottom-0 w-10 h-full items-center justify-center">
        <StartIcon title="Markdown logo" className="text-black" />
      </div>
      <input
        className="w-full focus:outline-none bg-transparent pl-8 pr-8 font-mono text-sm appearance-none p-2 border-none overflow-ellipsis truncate"
        onFocus={(e) => {
          e.target.select();
        }}
        value={text}
        readOnly
        type="text"
      />
      <div className="absolute right-0 top-0 bottom-0 flex items-center px-2">
        <button
          onClick={setCopied}
          className="rounded-full w-6 h-6 flex items-center justify-center"
        >
          <AnimatePresence mode="popLayout">
            {isCopied ? (
              <motion.div
                key="copied"
                initial={{ opacity: 0, y: 0 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -4 }}
              >
                <RiCheckboxCircleFill
                  title="Succesfully copied image"
                  className="text-green-600"
                />
              </motion.div>
            ) : (
              <motion.div
                initial={{ opacity: 0, y: 0 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -4 }}
                key="copy"
              >
                <RiFileCopyFill title="Copy image URL" />
              </motion.div>
            )}
          </AnimatePresence>
        </button>
      </div>
    </div>
  );
}

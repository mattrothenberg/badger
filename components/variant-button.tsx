import { Variant } from "../variants";
import { motion } from "framer-motion";

export function VariantButton({
  variant,
  onClick,
}: {
  variant: Variant;
  onClick: () => void;
}) {
  return (
    <button
      className="w-8 h-8 rounded-full overflow-hidden relative bg-[#f5f2ed] transform active:translate-y-px transition-transform"
      onClick={() => onClick()}
      key={variant.name}
    >
      <motion.div
        className="absolute inset-0 flex"
        whileHover={{
          rotate: 360,
        }}
        transition={{
          duration: 0.85,
        }}
      >
        {variant.preview.map((color, index) => {
          return (
            <div
              key={index}
              style={{ background: color }}
              className="flex-1"
            ></div>
          );
        })}
      </motion.div>
      {variant.name}
    </button>
  );
}

import { ApiParamsV1 } from "../lib";

export function BadgePreview({
  params,
  url,
}: {
  url: string;
  params: ApiParamsV1;
}) {
  let labels = [params.startLabel, params.endLabel];
  if (params.rtl) {
    labels = labels.reverse();
  }

  return (
    <div className="relative">
      <img
        alt={`Preview of badge that reads ${labels.join(" ")}`}
        src={`/` + url}
      />
    </div>
  );
}

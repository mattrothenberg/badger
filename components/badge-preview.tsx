import { ApiParamsV1 } from "../lib";

export function BadgePreview({
  params,
  url,
}: {
  url: string;
  params: ApiParamsV1;
}) {
  return (
    <div className="relative">
      <img src={`/` + url} />
    </div>
  );
}

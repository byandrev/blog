import type { VFileCompatible } from "vfile";
import { remark } from "remark";

export default async function markdownToHtml(markdown: VFileCompatible) {
  const result = await remark().process(markdown);
  return result.toString();
}
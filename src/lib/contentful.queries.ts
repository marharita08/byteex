import type { PageSkeleton } from "@/types/types";

import { contentfulClient } from "./contentful";

export async function getPageBySlug(slug: string) {
  const entries =
    await contentfulClient.withoutUnresolvableLinks.getEntries<PageSkeleton>({
      content_type: "page",
      "fields.slug": slug,
      include: 3,
      limit: 1,
    });

  return entries.items[0] ?? null;
}

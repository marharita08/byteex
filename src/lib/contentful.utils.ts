import type { Asset, Entry, EntrySkeletonType } from "contentful";

export function assetUrl(asset: Asset | undefined): string {
  return asset?.fields?.file ? "https:" + asset.fields.file.url : "";
}

export function assetTitle(asset: Asset | undefined): string {
  return (asset?.fields?.title as string | undefined) ?? "";
}

export function resolveAssets(
  assets: (Asset | undefined)[] | undefined,
): string[] {
  return (
    assets?.flatMap((a) => {
      const url = assetUrl(a);
      return url ? [url] : [];
    }) ?? []
  );
}

export function resolveEntries<T extends EntrySkeletonType>(
  entries: (Entry<T, "WITHOUT_UNRESOLVABLE_LINKS"> | undefined)[] | undefined,
): Entry<T, "WITHOUT_UNRESOLVABLE_LINKS">[] {
  return (
    entries?.filter(
      (e): e is Entry<T, "WITHOUT_UNRESOLVABLE_LINKS"> => e !== undefined,
    ) ?? []
  );
}

import type { Entry, EntryFieldTypes, EntrySkeletonType } from "contentful";

type Resolved<T extends EntrySkeletonType> = Entry<
  T,
  "WITHOUT_UNRESOLVABLE_LINKS"
>;

// ─── Item types ───────────────────────────────────────────────────────────────

export type FeatureItemSkeleton = EntrySkeletonType<
  {
    internalName: EntryFieldTypes.Text;
    text: EntryFieldTypes.Text;
    icon?: EntryFieldTypes.AssetLink;
    description?: EntryFieldTypes.RichText;
  },
  "featureItem"
>;
export type FeatureItem = Resolved<FeatureItemSkeleton>;

export type StatItemSkeleton = EntrySkeletonType<
  {
    internalName: EntryFieldTypes.Text;
    value: EntryFieldTypes.Text;
    label: EntryFieldTypes.Text;
    icon?: EntryFieldTypes.AssetLink;
  },
  "statItem"
>;
export type StatItem = Resolved<StatItemSkeleton>;

export type GalleryItemSkeleton = EntrySkeletonType<
  {
    internalName: EntryFieldTypes.Text;
    name: EntryFieldTypes.Text;
    mainImage: EntryFieldTypes.AssetLink;
    thumbImage: EntryFieldTypes.AssetLink;
  },
  "galleryItem"
>;
export type GalleryItem = Resolved<GalleryItemSkeleton>;

export type ReviewItemSkeleton = EntrySkeletonType<
  {
    internalName: EntryFieldTypes.Text;
    author: EntryFieldTypes.Text;
    text: EntryFieldTypes.Text;
    avatar?: EntryFieldTypes.AssetLink;
  },
  "reviewItem"
>;
export type ReviewItem = Resolved<ReviewItemSkeleton>;

export type FaqItemSkeleton = EntrySkeletonType<
  {
    internalName: EntryFieldTypes.Text;
    question: EntryFieldTypes.Text;
    answer: EntryFieldTypes.Text;
  },
  "faqItem"
>;
export type FaqItem = Resolved<FaqItemSkeleton>;

// ─── Section types ────────────────────────────────────────────────────────────

export type SectionHeroSkeleton = EntrySkeletonType<
  {
    internalName: EntryFieldTypes.Text;
    title: EntryFieldTypes.Text;
    bannerText?: EntryFieldTypes.Text;
    heroGallery?: EntryFieldTypes.Array<EntryFieldTypes.AssetLink>;
    review?: EntryFieldTypes.EntryLink<ReviewItemSkeleton>;
    features?: EntryFieldTypes.Array<
      EntryFieldTypes.EntryLink<FeatureItemSkeleton>
    >;
  },
  "section-Hero"
>;
export type SectionHero = Resolved<SectionHeroSkeleton>;

export type SectionInfoBannerSkeleton = EntrySkeletonType<
  {
    internalName: EntryFieldTypes.Text;
    title: EntryFieldTypes.Text;
    stats?: EntryFieldTypes.Array<EntryFieldTypes.EntryLink<StatItemSkeleton>>;
  },
  "section-InfoBanner"
>;
export type SectionInfoBanner = Resolved<SectionInfoBannerSkeleton>;

export type SectionPartnersAndPropertiesSkeleton = EntrySkeletonType<
  {
    internalName: EntryFieldTypes.Text;
    asSeenInTitle?: EntryFieldTypes.Text;
    partnersLabels?: EntryFieldTypes.Array<EntryFieldTypes.AssetLink>;
    title: EntryFieldTypes.Text;
    properties?: EntryFieldTypes.Array<
      EntryFieldTypes.EntryLink<FeatureItemSkeleton>
    >;
    galleryItems?: EntryFieldTypes.Array<
      EntryFieldTypes.EntryLink<GalleryItemSkeleton>
    >;
  },
  "section-PartnersAndProperties"
>;
export type SectionPartnersAndProperties =
  Resolved<SectionPartnersAndPropertiesSkeleton>;

export type SectionHowToOrderSkeleton = EntrySkeletonType<
  {
    internalName: EntryFieldTypes.Text;
    title: EntryFieldTypes.Text;
    steps?: EntryFieldTypes.Array<
      EntryFieldTypes.EntryLink<FeatureItemSkeleton>
    >;
  },
  "section-HowToOrder"
>;
export type SectionHowToOrder = Resolved<SectionHowToOrderSkeleton>;

export type SectionBuildConnectionSkeleton = EntrySkeletonType<
  {
    internalName: EntryFieldTypes.Text;
    title: EntryFieldTypes.Text;
    mainImage: EntryFieldTypes.AssetLink;
    topLeftImage?: EntryFieldTypes.AssetLink;
    bottomRightImage?: EntryFieldTypes.AssetLink;
    description?: EntryFieldTypes.Text;
    buttonText?: EntryFieldTypes.Text;
  },
  "section-BuildConnection"
>;
export type SectionBuildConnection = Resolved<SectionBuildConnectionSkeleton>;

export type SectionReviewsSkeleton = EntrySkeletonType<
  {
    internalName: EntryFieldTypes.Text;
    title: EntryFieldTypes.Text;
    description?: EntryFieldTypes.Text;
    marqueeImagesRow1?: EntryFieldTypes.Array<EntryFieldTypes.AssetLink>;
    marqueeImagesRow2?: EntryFieldTypes.Array<EntryFieldTypes.AssetLink>;
    reviewsList?: EntryFieldTypes.Array<
      EntryFieldTypes.EntryLink<ReviewItemSkeleton>
    >;
  },
  "section-Reviews"
>;
export type SectionReviews = Resolved<SectionReviewsSkeleton>;

export type SectionFaqSkeleton = EntrySkeletonType<
  {
    internalName: EntryFieldTypes.Text;
    title: EntryFieldTypes.Text;
    faqItemsList?: EntryFieldTypes.Array<
      EntryFieldTypes.EntryLink<FaqItemSkeleton>
    >;
    galleryImages?: EntryFieldTypes.Array<EntryFieldTypes.AssetLink>;
  },
  "sectionFaq"
>;
export type SectionFaq = Resolved<SectionFaqSkeleton>;

export type SectionFinalCtaSkeleton = EntrySkeletonType<
  {
    internalName: EntryFieldTypes.Text;
    title: EntryFieldTypes.Text;
    descriptionMobile?: EntryFieldTypes.Text;
    descriptionDesktop?: EntryFieldTypes.Text;
    galleryImages?: EntryFieldTypes.Array<EntryFieldTypes.AssetLink>;
    buttonText?: EntryFieldTypes.Text;
    footerFeatures?: EntryFieldTypes.Array<
      EntryFieldTypes.EntryLink<FeatureItemSkeleton>
    >;
  },
  "sectionFinalCta"
>;
export type SectionFinalCta = Resolved<SectionFinalCtaSkeleton>;

// ─── Page ─────────────────────────────────────────────────────────────────────

export type PageSection = NonNullable<
  NonNullable<Page["fields"]["sectionsVillage"]>[number]
>;

export type PageSkeleton = EntrySkeletonType<
  {
    title: EntryFieldTypes.Text;
    slug: EntryFieldTypes.Text;
    sectionsVillage?: EntryFieldTypes.Array<
      | EntryFieldTypes.EntryLink<SectionHeroSkeleton>
      | EntryFieldTypes.EntryLink<SectionInfoBannerSkeleton>
      | EntryFieldTypes.EntryLink<SectionPartnersAndPropertiesSkeleton>
      | EntryFieldTypes.EntryLink<SectionHowToOrderSkeleton>
      | EntryFieldTypes.EntryLink<SectionBuildConnectionSkeleton>
      | EntryFieldTypes.EntryLink<SectionReviewsSkeleton>
      | EntryFieldTypes.EntryLink<SectionFaqSkeleton>
      | EntryFieldTypes.EntryLink<SectionFinalCtaSkeleton>
    >;
  },
  "page"
>;
export type Page = Resolved<PageSkeleton>;

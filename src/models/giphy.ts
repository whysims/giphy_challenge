export interface GiphyImage {
  height: string;
  width: string;
  size?: string;
  url: string;
  mp4_size?: string;
  mp4?: string;
  webp_size?: string;
  webp?: string;
  frames?: string;
  hash?: string;
}

export interface GiphyUser {
  avatar_url: string;
  banner_image: string;
  banner_url: string;
  profile_url: string;
  username: string;
  display_name: string;
  description: string;
  instagram_url: string;
  website_url: string;
  is_verified: boolean;
}

export interface GiphyAnalytics {
  url: string;
}

export interface GiphyAnalyticsData {
  onload: GiphyAnalytics;
  onclick: GiphyAnalytics;
  onsent: GiphyAnalytics;
}

export interface GiphyData {
  type: string;
  id: string;
  url: string;
  slug: string;
  bitly_gif_url: string;
  bitly_url: string;
  embed_url: string;
  username: string;
  source: string;
  title: string;
  rating: string;
  content_url: string;
  source_tld: string;
  source_post_url: string;
  is_sticker: number;
  import_datetime: string;
  trending_datetime: string;
  images: {
    original: GiphyImage;
    downsized: GiphyImage;
    downsized_large: GiphyImage;
    downsized_medium: GiphyImage;
    downsized_small: GiphyImage;
    downsized_still: GiphyImage;
    fixed_height: GiphyImage;
    fixed_height_downsampled: GiphyImage;
    fixed_height_small: GiphyImage;
    fixed_height_small_still: GiphyImage;
    fixed_height_still: GiphyImage;
    fixed_width: GiphyImage;
    fixed_width_downsampled: GiphyImage;
    fixed_width_small: GiphyImage;
    fixed_width_small_still: GiphyImage;
    fixed_width_still: GiphyImage;
    looping: GiphyImage;
    original_still: GiphyImage;
    original_mp4: GiphyImage;
    preview: GiphyImage;
    preview_gif: GiphyImage;
    preview_webp: GiphyImage;
    hd: GiphyImage;
    "480w_still": GiphyImage;
  };
  user: GiphyUser;
  analytics_response_payload: string;
  analytics: GiphyAnalyticsData;
  alt_text: string;
}

export interface GiphyTrendsResponse {
  data: GiphyData[];
}

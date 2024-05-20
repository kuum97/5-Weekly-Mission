export interface SampleLink {
  id: number;
  createdAt: string;
  url: string;
  title: string;
  description: string;
  imageSource: string;
}

export interface LinkData {
  id: number;
  created_at: string;
  updated_at?: string;
  url: string;
  title: string;
  description?: string;
  image_source?: string;
  folder_id: number;
}

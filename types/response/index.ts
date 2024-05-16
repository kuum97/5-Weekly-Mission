import { SampleFolder } from "@/types/folder";

export interface SampleFolderResponse {
  folder: SampleFolder;
}

export interface Response<Data> {
  data: Data[];
}

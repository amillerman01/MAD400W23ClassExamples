export interface IContent {
  id: number;
  title: string;
  description?: string;
  author: string;
  imgSrc?: string;
  type: string;
  tags?: string[];
}

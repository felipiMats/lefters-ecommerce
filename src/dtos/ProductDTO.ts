interface ColorDTO {
  name: string;
  color_code: string;
}

interface MediaDTO {
  url: string;
  thumbnail: boolean;
}

export interface ProductDTO {
  id: string;
  title: string;
  price: string;
  description: string;
  category: string;
  colors: ColorDTO[];
  sizes: string[];
  medias: MediaDTO[];
  selectedSize?: string;
  selectedColor?: string;
}
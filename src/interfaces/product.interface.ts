export interface Product {
  _id: string;
  name: string;
  slug: string;
  brand: string;
  category: string;
  description: string;
  features: Feature[];
  specs: Spec[];
  reviews: Review[];
  averageRating: number;
  colors: ProductColor[];
  variations: ProductVariation[];
}

export interface Feature {
  key: string;
  value: string;
}

export interface Spec {
  key: string;
  value: string[];
}

export interface Review {
  user: string;
  comment: string;
  rating: number; // Assuming 1 to 5
  createdAt: string; // ISO date string
}

export interface ProductColor {
  name: string;
  hexCode: string;
  images: ProductImage[];
}

export interface ProductImage {
  public_id: string;
  url: string;
}

export interface ProductVariation {
  _id: string;
  name: string;
  slug: string;
  color: string; // Match with ProductColor.name
  memory: string; // e.g., '256GB', '512GB'
  price: number; // In cents or local currency smallest unit
  stock: number;
  sku: string;
  available: boolean;
}

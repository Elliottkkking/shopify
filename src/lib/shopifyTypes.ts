export type MoneyV2 = {
  amount: string;
  currencyCode: 'USD' | 'EUR' | 'GBP' | 'CAD';
};

export type ImageNode = {
  url: string;
  altText: string;
  width?: number;
  height?: number;
};

export type ProductVariant = {
  id: string;
  title: string;
  availableForSale: boolean;
  price: MoneyV2;
  compareAtPrice: MoneyV2 | null;
  image?: ImageNode;
  selectedOptions: {
    name: string;
    value: string;
  }[];
};

export type ShopifyProduct = {
  id: string;
  handle: string;
  title: string;
  description: string;
  vendor: string;
  productType: string;
  tags: string[];
  availableForSale: boolean;
  priceRange: {
    minVariantPrice: MoneyV2;
    maxVariantPrice: MoneyV2;
  };
  images: {
    edges: {
      node: ImageNode;
    }[];
  };
  variants: {
    edges: {
      node: ProductVariant;
    }[];
  };
};

export type ShopifyCollection = {
  id: string;
  handle: string;
  title: string;
  description: string;
  image: ImageNode | null;
  products: {
    edges: {
      node: ShopifyProduct;
    }[];
  };
};

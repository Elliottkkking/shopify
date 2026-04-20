import { ShopifyProduct, ShopifyCollection } from './shopifyTypes';

const createShopifyProduct = (
  handle: string,
  title: string,
  price: string,
  productType: string,
  imgUrl: string,
  description: string
): ShopifyProduct => ({
  id: `gid://shopify/Product/${handle}`,
  handle,
  title,
  description,
  vendor: 'TMWINGS',
  productType,
  tags: [productType.toLowerCase()],
  availableForSale: true,
  priceRange: {
    minVariantPrice: { amount: price, currencyCode: 'USD' },
    maxVariantPrice: { amount: price, currencyCode: 'USD' }
  },
  images: {
    edges: [
      {
        node: {
          url: imgUrl,
          altText: title
        }
      }
    ]
  },
  variants: {
    edges: [
      {
        node: {
          id: `gid://shopify/ProductVariant/${handle}-default`,
          title: 'Default Title',
          availableForSale: true,
          price: { amount: price, currencyCode: 'USD' },
          compareAtPrice: null,
          selectedOptions: [{ name: 'Title', value: 'Default Title' }]
        }
      }
    ]
  }
});

export const mockShopifyProducts: Record<string, ShopifyProduct> = {
  'wall-mounted-ac': createShopifyProduct('wall-mounted-ac', 'Aero Series Wall-Mounted AC', '899.00', 'Cooling', 'https://images.unsplash.com/photo-1620601344400-9972b9a7dfaa?q=80&w=800&auto=format&fit=crop', 'Ultra-quiet wall-mounted air conditioner with precise temperature control.'),
  'portable-ac': createShopifyProduct('portable-ac', 'Polaris Portable Unit', '450.00', 'Cooling', 'https://images.unsplash.com/photo-1623863458428-c1f01da0012f?q=80&w=800&auto=format&fit=crop', 'Moveable cooling power perfect for individual rooms and apartments.'),
  'industrial-fans': createShopifyProduct('industrial-fans', 'Heavy Duty Industrial Fan', '299.00', 'Fans', 'https://images.unsplash.com/photo-1618220179428-22790b46a0eb?q=80&w=800&auto=format&fit=crop', 'High-velocity airflow built for workshops and large spaces.'),
  'towel-warmers': createShopifyProduct('towel-warmers', 'Luxe Towel Warmer Rail', '210.00', 'Heating', 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?q=80&w=800&auto=format&fit=crop', 'Keep your towels spa-warm every day of the week.'),
  'smart-air-fryers': createShopifyProduct('smart-air-fryers', 'Pro Air Fryer 5qt', '189.00', 'Kitchen', 'https://images.unsplash.com/photo-1626880054770-ae060a0b6863?q=80&w=800&auto=format&fit=crop', 'Rapid Crisp Technology for the crunchiest healthy meals.'),
  'fire-pit-grills': createShopifyProduct('fire-pit-grills', 'Smokeless Fire Pit', '349.00', 'Outdoor', 'https://images.unsplash.com/photo-1504383181829-37f2ee6aecee?q=80&w=800&auto=format&fit=crop', 'Enjoy the warmth of a fire without the scent of campfire smoke.')
};

export const getMockShopifyProduct = (handle: string): ShopifyProduct | null => {
  return mockShopifyProducts[handle] || mockShopifyProducts['smart-air-fryers'];
};

export const getMockShopifyCollection = (handle: string): ShopifyCollection => {
  const allProducts = Object.values(mockShopifyProducts);
  const products = handle === 'all' 
    ? allProducts 
    : allProducts.filter(p => p.productType.toLowerCase() === handle.toLowerCase());

  return {
    id: `gid://shopify/Collection/${handle}`,
    handle,
    title: handle.charAt(0).toUpperCase() + handle.slice(1),
    description: `Shop the latest ${handle} products`,
    image: null,
    products: {
      edges: (products.length ? products : allProducts).map(p => ({ node: p }))
    }
  };
};

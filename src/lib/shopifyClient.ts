import { ShopifyProduct, ShopifyCollection } from './shopifyTypes';
import { getMockShopifyProduct, getMockShopifyCollection } from './shopifyMocks';

// In a real application, this would use fetch() with the Storefront API
// e.g., fetch(`https://${domain}/api/2024-01/graphql.json`, { headers: { 'X-Shopify-Storefront-Access-Token': token } })

export const storefrontAPI = {
  async getProduct(handle: string): Promise<ShopifyProduct | null> {
    // Simulate network delay
    // await new Promise(resolve => setTimeout(resolve, 300));
    return getMockShopifyProduct(handle);
  },
  
  async getCollection(handle: string): Promise<ShopifyCollection | null> {
    return getMockShopifyCollection(handle);
  }
};

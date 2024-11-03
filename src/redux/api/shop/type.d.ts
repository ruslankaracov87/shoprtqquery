namespace SHOP {
  interface IShopProduct {
    _id?: number;
    title: string;
    price: number;
    description: string;
    category: string;
    image: string;
    count: number;
    rating: {
      rate: number;
      countRating: number;
    };
  }

  type postShopResponse = IShopProduct[];
  type postShopRequest = IShopProduct;

  type getShopResponse = IShopProduct[];
  type getShopRequest = void;

  type delShopResponse = IShopProduct[];
  type delShopRequest = number;
}

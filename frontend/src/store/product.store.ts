import { create } from "zustand";

// Define interfaces
interface Product {
  _id: string;
  name: string;
  price: number;
  image: string;
  createdAt: string;
  updatedAt: string;
  __v: number;
}

export interface ProductPayload {
  name: string;
  price: number;
  image: string;
}

interface ApiResponse {
  success: boolean;
  message: string;
  data?: Product[] | Product;
}

interface ProductStore {
  products: Product[];
  getProducts: () => Promise<void>;
  // addProduct: (product: ProductPayload) => Promise<void>;
  addProduct: (product: ProductPayload) => Promise<ApiResponse>;
  //   deleteProduct: (id: string) => Promise<void>;
}

export const useProductStore = create<ProductStore>((set) => ({
  products: [],

  getProducts: async () => {
    try {
      const res = await fetch("/api/products");
      const data: ApiResponse = await res.json();
      if (data.success) {
        set({ products: data.data as Product[] });
      }
    } catch (error) {
      console.error(error);
    }
  },

  addProduct: async (product: ProductPayload) => {
    if (!product.name || !product.price || !product.image) {
      return {
        success: false,
        message: "Please fill in all fields.",
        data: undefined,
      };
    }

    try {
      const res = await fetch("/api/products", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(product),
      });

      const data: ApiResponse = await res.json();

      if (data.success && data.data) {
        set((state) => ({
          products: [...state.products, data.data as Product],
        }));
        return {
          success: true,
          message: "Product created successfully",
          data: data.data,
        };
      }

      return {
        success: false,
        message: data.message || "Failed to create product",
        data: undefined,
      };
    } catch (error) {
      console.error(error);
      return {
        success: false,
        message: "Error creating product",
        data: undefined,
      };
    }
  },
}));

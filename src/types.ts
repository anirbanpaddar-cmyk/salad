export interface SaladItem {
  id: string;
  name: string;
  banglaName: string;
  ingredients: string;
  price: number;
  calories: number;
  protein: string;
  category: 'green' | 'protein' | 'fruit' | 'special';
  categoryLabel: string;
  image: string;
  isPopular?: boolean;
}

export interface ServiceItem {
  id: string;
  icon: string;
  title: string;
  banglaTitle: string;
  description: string;
  tagline: string;
}

export interface FeatureItem {
  icon: string;
  title: string;
  banglaTitle: string;
  description: string;
}

export interface OrderCustomization {
  salad: SaladItem;
  quantity: number;
  dressing: string;
  toppings: string[];
  customerName: string;
  customerPhone: string;
  deliveryAddress: string;
  notes?: string;
}

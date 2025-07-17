export type Cabin = {
    id: string;
    name: string;
    image: string;
    max_capacity: number;
    regular_price: number;
    description?: string;
    discount: number;
    discountType: 'price' | 'percentage';
};

export type Cabin = {
    id: string;
    name: string;
    image: string;
    max_capacity: number;
    regular_price: number;
    discount: number;
    discountType: 'price' | 'percentage';
};

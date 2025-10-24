export interface Product {
  id: string;
  name: string;
  price: number;
  image: string;
  description: string;
  category: string;
  courierCharge: number;
  material: string;
  dimensions: string;
  weight: string;
}

export interface Review {
  id: string;
  customerName: string;
  rating: number;
  comment: string;
  date: string;
}

export const products: Product[] = [
  { id: '1', name: '4x6 inches', price: 149, image: '4x6.jpg', description: 'Perfect for small photos and memories', category: 'small', courierCharge: 50, material: 'Wooden Frame', dimensions: '4" x 6"', weight: '200g' },
  { id: '2', name: '5x7 inches', price: 199, image: '5x7.jpg', description: 'Ideal for portraits and family photos', category: 'small', courierCharge: 60, material: 'Wooden Frame', dimensions: '5" x 7"', weight: '250g' },
  { id: '3', name: '6x8 inches', price: 249, image: '6x8.jpg', description: 'Classic size for standard photos', category: 'medium', courierCharge: 70, material: 'Wooden Frame', dimensions: '6" x 8"', weight: '300g' },
  { id: '4', name: '8x10 inches', price: 299, image: '8x10.jpg', description: 'Popular choice for wall display', category: 'medium', courierCharge: 80, material: 'Wooden Frame', dimensions: '8" x 10"', weight: '400g' },
  { id: '5', name: '8x12 inches', price: 349, image: '8x12.jpg', description: 'Great for landscape photos', category: 'medium', courierCharge: 90, material: 'Wooden Frame', dimensions: '8" x 12"', weight: '450g' },
  { id: '6', name: '10x12 inches', price: 399, image: '10x12.jpg', description: 'Elegant medium-large frame', category: 'medium', courierCharge: 100, material: 'Wooden Frame', dimensions: '10" x 12"', weight: '500g' },
  { id: '7', name: '10x15 inches', price: 449, image: '10x15.jpg', description: 'Perfect for poster prints', category: 'large', courierCharge: 120, material: 'Wooden Frame', dimensions: '10" x 15"', weight: '600g' },
  { id: '8', name: '11x14 inches', price: 499, image: '11x14.jpg', description: 'Premium quality large frame', category: 'large', courierCharge: 130, material: 'Wooden Frame', dimensions: '11" x 14"', weight: '650g' },
  { id: '9', name: '12x16 inches', price: 549, image: '12x16.jpg', description: 'Stunning large format display', category: 'large', courierCharge: 140, material: 'Wooden Frame', dimensions: '12" x 16"', weight: '700g' },
  { id: '10', name: '12x18 inches', price: 599, image: '12x18.jpg', description: 'Wide frame for panoramic shots', category: 'large', courierCharge: 150, material: 'Wooden Frame', dimensions: '12" x 18"', weight: '750g' },
  { id: '11', name: '16x20 inches', price: 1299, image: '16x20.jpg', description: 'Statement piece for any room', category: 'large', courierCharge: 180, material: 'Wooden Frame', dimensions: '16" x 20"', weight: '900g' },
  { id: '12', name: '16x24 inches', price: 1499, image: '16x24.jpg', description: 'Extra large panoramic frame', category: 'xlarge', courierCharge: 200, material: 'Wooden Frame', dimensions: '16" x 24"', weight: '1000g' },
  { id: '13', name: '18x24 inches', price: 1699, image: '18x24.jpg', description: 'Professional display size', category: 'xlarge', courierCharge: 220, material: 'Wooden Frame', dimensions: '18" x 24"', weight: '1100g' },
  { id: '14', name: '20x24 inches', price: 1899, image: '20x24.jpg', description: 'Gallery-worthy large frame', category: 'xlarge', courierCharge: 250, material: 'Wooden Frame', dimensions: '20" x 24"', weight: '1200g' },
  { id: '15', name: '20x30 inches', price: 2099, image: '20x30.jpg', description: 'Impressive wall centerpiece', category: 'xlarge', courierCharge: 280, material: 'Wooden Frame', dimensions: '20" x 30"', weight: '1400g' },
  { id: '16', name: '24x30 inches', price: 2299, image: '24x30.jpg', description: 'Extra large premium frame', category: 'xlarge', courierCharge: 300, material: 'Wooden Frame', dimensions: '24" x 30"', weight: '1600g' },
  { id: '17', name: '24x36 inches', price: 2499, image: '24x36.jpg', description: 'Movie poster size frame', category: 'xlarge', courierCharge: 350, material: 'Wooden Frame', dimensions: '24" x 36"', weight: '1800g' },
  { id: '18', name: 'A4 Size', price: 300, image: 'a3.jpg', description: 'Standard document frame (8.3x11.7")', category: 'standard', courierCharge: 60, material: 'Wooden Frame', dimensions: '8.3" x 11.7"', weight: '300g' },
  { id: '19', name: 'A3 Size', price: 600, image: 'a3.jpg', description: 'Large document frame (11.7x16.5")', category: 'standard', courierCharge: 120, material: 'Wooden Frame', dimensions: '11.7" x 16.5"', weight: '600g' },
  { id: '20', name: 'Square 6x6 inches', price: 280, image: '6x6.jpg', description: 'Perfect square format', category: 'square', courierCharge: 60, material: 'Wooden Frame', dimensions: '6" x 6"', weight: '280g' },
  { id: '21', name: 'Square 8x8 inches', price: 380, image: '8x8.jpg', description: 'Instagram-style square frame', category: 'square', courierCharge: 80, material: 'Wooden Frame', dimensions: '8" x 8"', weight: '380g' },
  { id: '22', name: 'Square 10x10 inches', price: 520, image: '10x10.jpg', description: 'Medium square display', category: 'square', courierCharge: 100, material: 'Wooden Frame', dimensions: '10" x 10"', weight: '520g' },
  { id: '23', name: 'Square 12x12 inches', price: 650, image: '12x12.jpg', description: 'Large square format', category: 'square', courierCharge: 130, material: 'Wooden Frame', dimensions: '12" x 12"', weight: '650g' },
  { id: '24', name: 'Collage 4-Photo', price: 499, image: 'collage4.jpg', description: '4 openings for multiple photos', category: 'collage', courierCharge: 150, material: 'Wooden Frame', dimensions: '12" x 16"', weight: '800g' },
  { id: '25', name: 'Collage 6-Photo', price: 599, image: 'collage6.jpg', description: '6 openings for family collage', category: 'collage', courierCharge: 180, material: 'Wooden Frame', dimensions: '16" x 20"', weight: '950g' },
  { id: '26', name: 'Collage 8-Photo', price: 799, image: 'collage8.jpg', description: '8 openings for memory wall', category: 'collage', courierCharge: 220, material: 'Wooden Frame', dimensions: '20" x 24"', weight: '1100g' },
  { id: '27', name: 'Panoramic 12x36', price: 1300, image: '12x36.jpg', description: 'Ultra-wide panoramic frame', category: 'panoramic', courierCharge: 250, material: 'Wooden Frame', dimensions: '12" x 36"', weight: '1300g' },
  { id: '28', name: 'Certificate Frame', price: 450, image: '8x10.jpg', description: 'Professional certificate display', category: 'certificate', courierCharge: 90, material: 'Wooden Frame', dimensions: '8" x 10"', weight: '450g' },
  { id: '29', name: 'Custom Size Small', price: 500, image: 'custom.jpg', description: 'Custom frame up to 12 inches', category: 'custom', courierCharge: 100, material: 'Wooden Frame', dimensions: 'Custom', weight: '500g' },
  { id: '30', name: 'Custom Size Large', price: 1500, image: 'custom2.jpg', description: 'Custom frame above 12 inches', category: 'custom', courierCharge: 300, material: 'Wooden Frame', dimensions: 'Custom', weight: '1500g' }
];

export const reviews: Review[] = [
  { id: '1', customerName: 'Rajesh Kumar', rating: 5, comment: 'Excellent quality frames! Very happy with the service and quick delivery.', date: '2024-09-15' },
  { id: '2', customerName: 'Priya Sharma', rating: 5, comment: 'Beautiful frames at great prices. Highly recommend PS Gallery!', date: '2024-09-20' },
  { id: '3', customerName: 'Amit Patel', rating: 4, comment: 'Good quality and variety. Will definitely order again.', date: '2024-09-25' },
  { id: '4', customerName: 'Sneha Reddy', rating: 5, comment: 'Amazing work! The frames are perfect for my photos.', date: '2024-09-28' },
  { id: '5', customerName: 'Vijay Singh', rating: 5, comment: 'Best photo frame shop in town. Great customer service!', date: '2024-10-01' }
];

export const shopStats = {
  totalCustomers: 1247,
  averageRating: 4.8
};

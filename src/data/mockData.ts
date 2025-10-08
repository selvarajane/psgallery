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
  { id: '1', name: '4x6 inches', price: 149, image: 'https://images.pexels.com/photos/7086762/pexels-photo-7086762.jpeg?cs=srgb&dl=pexels-prasadkale975-7086762.jpg&fm=jpg', description: 'Perfect for small photos and memories', category: 'small', courierCharge: 50, material: 'Wooden Frame', dimensions: '4" x 6"', weight: '200g' },
  { id: '2', name: '5x7 inches', price: 199, image: 'https://i.pinimg.com/736x/bf/dd/08/bfdd08f0212c735c17de333253be8f40.jpg', description: 'Ideal for portraits and family photos', category: 'small', courierCharge: 60, material: 'Wooden Frame', dimensions: '5" x 7"', weight: '250g' },
  { id: '3', name: '6x8 inches', price: 249, image: 'https://i.pinimg.com/1200x/c9/e4/ad/c9e4adf92fa099c39d212c7c2862e247.jpg', description: 'Classic size for standard photos', category: 'medium', courierCharge: 70, material: 'Wooden Frame', dimensions: '6" x 8"', weight: '300g' },
  { id: '4', name: '8x10 inches', price: 299, image: 'https://i.pinimg.com/736x/cc/0c/12/cc0c12efec8b6fee5ac99723cf146b45.jpg', description: 'Popular choice for wall display', category: 'medium', courierCharge: 80, material: 'Wooden Frame', dimensions: '8" x 10"', weight: '400g' },
  { id: '5', name: '8x12 inches', price: 349, image: 'https://i.pinimg.com/1200x/0e/22/19/0e2219fef099d93717c2998cce674cf4.jpg', description: 'Great for landscape photos', category: 'medium', courierCharge: 90, material: 'Wooden Frame', dimensions: '8" x 12"', weight: '450g' },
  { id: '6', name: '10x12 inches', price: 399, image: 'https://dreamee.in/cdn/shop/files/LordMurugan_10x12InchesGlassyFinishPhotoFrame-DreaMee.png?v=1712940837&width=1445', description: 'Elegant medium-large frame', category: 'medium', courierCharge: 100, material: 'Wooden Frame', dimensions: '10" x 12"', weight: '500g' },
  { id: '7', name: '10x15 inches', price: 449, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCPmeS8Mh6IbosUl3Lg0JLoWvtRIXMFRH9dOJZTm_zMez7ruzB-dtTP8Xm4U2sIS8otD8&usqp=CAU', description: 'Perfect for poster prints', category: 'large', courierCharge: 120, material: 'Wooden Frame', dimensions: '10" x 15"', weight: '600g' },
  { id: '8', name: '11x14 inches', price: 499, image: 'https://akm-img-a-in.tosshub.com/indiatoday/images/story/202503/tvk-vijay-272620958-1x1.jpg?VersionId=0nOD_ZK3wV1INilRLVGQ_c6OCNvhTQC7', description: 'Premium quality large frame', category: 'large', courierCharge: 130, material: 'Wooden Frame', dimensions: '11" x 14"', weight: '650g' },
  { id: '9', name: '12x16 inches', price: 549, image: 'https://i.pinimg.com/736x/a5/78/03/a57803e6f37f73382bf89b007a4b5954.jpg', description: 'Stunning large format display', category: 'large', courierCharge: 140, material: 'Wooden Frame', dimensions: '12" x 16"', weight: '700g' },
  { id: '10', name: '12x18 inches', price: 599, image: 'https://i.pinimg.com/736x/29/21/ca/2921ca9055e9735b68a9d36364bddd74.jpg', description: 'Wide frame for panoramic shots', category: 'large', courierCharge: 150, material: 'Wooden Frame', dimensions: '12" x 18"', weight: '750g' },
  { id: '11', name: '16x20 inches', price: 1299, image: 'https://i.pinimg.com/736x/fc/91/64/fc916497270dd2312b92ed2dbfa1a657.jpg', description: 'Statement piece for any room', category: 'large', courierCharge: 180, material: 'Wooden Frame', dimensions: '16" x 20"', weight: '900g' },
  { id: '12', name: '16x24 inches', price: 1499, image: 'https://i.pinimg.com/736x/26/08/8c/26088cdd3c5d9fc4f9c20567846dfdd3.jpg', description: 'Extra large panoramic frame', category: 'xlarge', courierCharge: 200, material: 'Wooden Frame', dimensions: '16" x 24"', weight: '1000g' },
  { id: '13', name: '18x24 inches', price: 1699, image: 'https://i.pinimg.com/736x/fd/a7/7e/fda77eefb5bb9a592ec214dd93c378ae.jpg', description: 'Professional display size', category: 'xlarge', courierCharge: 220, material: 'Wooden Frame', dimensions: '18" x 24"', weight: '1100g' },
  { id: '14', name: '20x24 inches', price: 1899, image: 'https://i.pinimg.com/736x/36/26/70/3626702e7c927d936a8ef17f4197dd52.jpg', description: 'Gallery-worthy large frame', category: 'xlarge', courierCharge: 250, material: 'Wooden Frame', dimensions: '20" x 24"', weight: '1200g' },
  { id: '15', name: '20x30 inches', price: 2099, image: 'https://i.pinimg.com/1200x/96/85/f0/9685f0ca93848d2c7e047aeba9173dc2.jpg', description: 'Impressive wall centerpiece', category: 'xlarge', courierCharge: 280, material: 'Wooden Frame', dimensions: '20" x 30"', weight: '1400g' },
  { id: '16', name: '24x30 inches', price: 2299, image: 'https://i.pinimg.com/1200x/46/cd/72/46cd7223824c0d304796b7d77d668020.jpg', description: 'Extra large premium frame', category: 'xlarge', courierCharge: 300, material: 'Wooden Frame', dimensions: '24" x 30"', weight: '1600g' },
  { id: '17', name: '24x36 inches', price: 2499, image: 'https://i.pinimg.com/736x/f7/82/dd/f782ddcc55d7346a1a094ff27761bc42.jpg', description: 'Movie poster size frame', category: 'xlarge', courierCharge: 350, material: 'Wooden Frame', dimensions: '24" x 36"', weight: '1800g' },
  { id: '18', name: 'A4 Size', price: 300, image: 'https://i.pinimg.com/1200x/b1/d2/7b/b1d27bbe96cc8a1c05d91befc40613a7.jpg', description: 'Standard document frame (8.3x11.7")', category: 'standard', courierCharge: 60, material: 'Wooden Frame', dimensions: '8.3" x 11.7"', weight: '300g' },
  { id: '19', name: 'A3 Size', price: 600, image: 'https://i.pinimg.com/736x/16/f4/8d/16f48d528dfc7d3d0487e66810a3a274.jpg', description: 'Large document frame (11.7x16.5")', category: 'standard', courierCharge: 120, material: 'Wooden Frame', dimensions: '11.7" x 16.5"', weight: '600g' },
  { id: '20', name: 'Square 6x6 inches', price: 280, image: 'https://i.pinimg.com/736x/02/9b/84/029b8480209ea9b67c982da9296f5fb1.jpg', description: 'Perfect square format', category: 'square', courierCharge: 60, material: 'Wooden Frame', dimensions: '6" x 6"', weight: '280g' },
  { id: '21', name: 'Square 8x8 inches', price: 380, image: 'https://i.pinimg.com/736x/09/52/1b/09521bf6b6688b4e6101985f2ec1839c.jpg', description: 'Instagram-style square frame', category: 'square', courierCharge: 80, material: 'Wooden Frame', dimensions: '8" x 8"', weight: '380g' },
  { id: '22', name: 'Square 10x10 inches', price: 520, image: 'https://i.pinimg.com/736x/b5/e5/ac/b5e5ac93ad497c3b2f5b4428e5a2ecc6.jpg', description: 'Medium square display', category: 'square', courierCharge: 100, material: 'Wooden Frame', dimensions: '10" x 10"', weight: '520g' },
  { id: '23', name: 'Square 12x12 inches', price: 650, image: 'https://i.pinimg.com/1200x/ab/30/7b/ab307b6338b7a1e51d909b8e0d7f0042.jpg', description: 'Large square format', category: 'square', courierCharge: 130, material: 'Wooden Frame', dimensions: '12" x 12"', weight: '650g' },
  { id: '24', name: 'Collage 4-Photo', price: 499, image: 'https://i.pinimg.com/736x/e6/50/50/e6505078d90288e93045aa1291f61ee9.jpg', description: '4 openings for multiple photos', category: 'collage', courierCharge: 150, material: 'Wooden Frame', dimensions: '12" x 16"', weight: '800g' },
  { id: '25', name: 'Collage 6-Photo', price: 599, image: 'https://i.pinimg.com/736x/5d/22/27/5d222723db1da4e0241434c0d9bb33c1.jpg', description: '6 openings for family collage', category: 'collage', courierCharge: 180, material: 'Wooden Frame', dimensions: '16" x 20"', weight: '950g' },
  { id: '26', name: 'Collage 8-Photo', price: 799, image: 'https://i.pinimg.com/736x/d4/98/6c/d4986c35d1f5b7d0de70e7561d45bd2f.jpg', description: '8 openings for memory wall', category: 'collage', courierCharge: 220, material: 'Wooden Frame', dimensions: '20" x 24"', weight: '1100g' },
  { id: '27', name: 'Panoramic 12x36', price: 1300 , image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=400&fit=crop&crop=center', description: 'Ultra-wide panoramic frame', category: 'panoramic', courierCharge: 250, material: 'Wooden Frame', dimensions: '12" x 36"', weight: '1300g' },
  { id: '28', name: 'Certificate Frame', price: 450, image: 'https://i.pinimg.com/736x/5e/2e/5c/5e2e5c0012da991960287f3c59f26bf1.jpg', description: 'Professional certificate display', category: 'certificate', courierCharge: 90, material: 'Wooden Frame', dimensions: '8" x 10"', weight: '450g' },
  { id: '29', name: 'Custom Size Small', price: 500, image: 'https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=400&h=400&fit=crop&crop=center', description: 'Custom frame up to 12 inches', category: 'custom', courierCharge: 100, material: 'Wooden Frame', dimensions: 'Custom', weight: '500g' },
  { id: '30', name: 'Custom Size Large', price: 1500, image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=400&fit=crop&crop=center', description: 'Custom frame above 12 inches', category: 'custom', courierCharge: 300, material: 'Wooden Frame', dimensions: 'Custom', weight: '1500g' }
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

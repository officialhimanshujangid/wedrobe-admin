// enhancedDummyData.js

export const vendorAvailability = [
    { vendor: 'Elegant Moments Photography', availableDates: ['2024-09-01', '2024-09-02', '2024-09-05'] },
    { vendor: 'Gourmet Catering Co.', availableDates: ['2024-09-01', '2024-09-03', '2024-09-04'] },
    { vendor: 'Dream Venue', availableDates: ['2024-09-02', '2024-09-04', '2024-09-05'] },
    { vendor: 'Floral Fantasy', availableDates: ['2024-09-01', '2024-09-03', '2024-09-05'] },
    { vendor: 'DJ Harmony', availableDates: ['2024-09-01', '2024-09-02'] },
  ];
  
  export const budgetBreakdown = [
    { category: 'Venue', amount: 8000 },
    { category: 'Catering', amount: 5000 },
    { category: 'Photography', amount: 2500 },
    { category: 'Attire', amount: 2000 },
    { category: 'Decor', amount: 1500 },
    { category: 'Entertainment', amount: 1200 },
    { category: 'Miscellaneous', amount: 800 },
  ];
  
  export const rsvpStatus = [
    { status: 'Attending', count: 90 },
    { status: 'Not Attending', count: 15 },
    { status: 'Pending', count: 5 },
  ];
  
  export const taskCompletion = [
    { task: 'Send Invitations', completed: true },
    { task: 'Book Venue', completed: true },
    { task: 'Finalize Guest List', completed: true },
    { task: 'Choose Attire', completed: false },
    { task: 'Book Photographer', completed: true },
    { task: 'Arrange Transportation', completed: false },
    { task: 'Finalize Menu', completed: false },
  ];
  
  export const eventTimeline = [
    { date: '2024-08-01', event: 'Book Photographer' },
    { date: '2024-08-15', event: 'Send Invitations' },
    { date: '2024-09-01', event: 'Rehearsal Dinner' },
    { date: '2024-09-02', event: 'Wedding Day' },
    { date: '2024-09-03', event: 'Thank You Cards Sent' },
  ];
  
  export const vendorRatings = [
    { vendor: 'Elegant Moments Photography', rating: 4.9, reviews: 120 },
    { vendor: 'Gourmet Catering Co.', rating: 3.7, reviews: 95 },
    { vendor: 'Dream Venue', rating: 4.8, reviews: 150 },
    { vendor: 'Floral Fantasy', rating: 2.6, reviews: 85 },
    { vendor: 'DJ Harmony', rating: 4.9, reviews: 75 },
  ];
  
  export const socialMediaEngagement = [
    { month: '2024-01', likes: 150, shares: 40, comments: 25 },
    { month: '2024-02', likes: 200, shares: 50, comments: 30 },
    { month: '2024-03', likes: 250, shares: 60, comments: 35 },
    { month: '2024-04', likes: 300, shares: 70, comments: 40 },
    { month: '2024-05', likes: 400, shares: 80, comments: 50 },
    { month: '2024-06', likes: 500, shares: 90, comments: 60 },
    { month: '2024-07', likes: 600, shares: 100, comments: 70 },
    { month: '2024-08', likes: 700, shares: 110, comments: 80 },
    { month: '2024-09', likes: 800, shares: 120, comments: 90 },
  ];
  
  export const guestDemographics = [
    { ageGroup: '18-25', count: 35 },
    { ageGroup: '26-35', count: 50 },
    { ageGroup: '36-45', count: 30 },
    { ageGroup: '46-55', count: 15 },
    { ageGroup: '56+', count: 5 },
    { location: 'Local', count: 70 },
    { location: 'Out of State', count: 30 },
  ];
  
  export const countdownToWedding = {
    daysLeft: 30, // Adjust based on the actual date
  };
  
  export const photoUploads = [
    { date: '2024-08-01', count: 10 },
    { date: '2024-08-15', count: 25 },
    { date: '2024-09-01', count: 50 },
    { date: '2024-09-02', count: 150 }, 
  ];
  
  export const salesData = [
    { month: '2023-09', sales: 2500, expectedSales: 3000 },  // Below expectation
    { month: '2023-10', sales: 3200, expectedSales: 3500 }, // Below expectation
    { month: '2023-11', sales: 2900, expectedSales: 2800 }, // Above expectation
    { month: '2023-12', sales: 4800, expectedSales: 5000 }, // Below expectation
    { month: '2024-01', sales: 3600, expectedSales: 3600 }, // Meeting expectation
    { month: '2024-02', sales: 5300, expectedSales: 5000 }, // Above expectation
    { month: '2024-03', sales: 6000, expectedSales: 6500 }, // Below expectation
    { month: '2024-04', sales: 7500, expectedSales: 7000 }, // Above expectation
    { month: '2024-05', sales: 8200, expectedSales: 8500 }, // Below expectation
    { month: '2024-06', sales: 9100, expectedSales: 9000 }, // Above expectation
    { month: '2024-07', sales: 11000, expectedSales: 12000 }, // Below expectation
    { month: '2024-08', sales: 13000, expectedSales: 12500 }, // Above expectation
  ];

  // constants/todayEvents.js
// constants/todayEvents.js
export const todayEvents = [
    {
      id: 1,
      bookingId: 'BKG001',
      customerId: 'CUST001',
      vendor: 'Elegant Moments Photography',
      eventType: 'Wedding Shoot',
      time: '10:00 AM',
      location: 'Central Park',
      avatar: 'https://i.pravatar.cc/150?img=1', // Random avatar
    },
    {
      id: 2,
      bookingId: 'BKG002',
      customerId: 'CUST002',
      vendor: 'Gourmet Catering Co.',
      eventType: 'Reception',
      time: '1:00 PM',
      location: 'Skyline Banquet Hall',
      avatar: 'https://i.pravatar.cc/150?img=2', // Random avatar
    },
    {
      id: 3,
      bookingId: 'BKG003',
      customerId: 'CUST003',
      vendor: 'Floral Fantasy',
      eventType: 'Flower Delivery',
      time: '9:00 AM',
      location: '123 Flower Lane',
      avatar: 'https://i.pravatar.cc/150?img=3', // Random avatar
    },
    {
      id: 4,
      bookingId: 'BKG004',
      customerId: 'CUST004',
      vendor: 'DJ Harmony',
      eventType: 'Music Setup',
      time: '3:00 PM',
      location: 'Main Hall',
      avatar: 'https://i.pravatar.cc/150?img=4', // Random avatar
    },
    {
      id: 5,
      bookingId: 'BKG005',
      customerId: 'CUST005',
      vendor: 'Dream Venue',
      eventType: 'Venue Setup',
      time: '8:00 AM',
      location: 'Dream Venue Estate',
      avatar: 'https://i.pravatar.cc/150?img=5', // Random avatar
    },
    {
      id: 6,
      bookingId: 'BKG006',
      customerId: 'CUST006',
      vendor: 'Sweet Treats Bakery',
      eventType: 'Cake Delivery',
      time: '11:00 AM',
      location: '123 Bakery Ave',
      avatar: 'https://i.pravatar.cc/150?img=6', // Random avatar
    },
    {
      id: 7,
      bookingId: 'BKG007',
      customerId: 'CUST007',
      vendor: 'Party Rentals Inc.',
      eventType: 'Equipment Delivery',
      time: '12:00 PM',
      location: 'Local Warehouse',
      avatar: 'https://i.pravatar.cc/150?img=7', // Random avatar
    },
  ];


  export const  bookingData = {
    "totalBookings": 1200,
    "bookingsByService": {
      "Lehenga Rental": 450,
      "Photography": 300,
      "Marriage Home": 200,
      "Sound System": 150,
      "Catering": 100
    },
    "monthlyBookingsTrend": [
      {"month": "January", "bookings": 80},
      {"month": "February", "bookings": 120},
      {"month": "March", "bookings": 110},
      {"month": "April", "bookings": 90},
      {"month": "May", "bookings": 130},
      {"month": "June", "bookings": 140},
      {"month": "July", "bookings": 100},
      {"month": "August", "bookings": 160},
      {"month": "September", "bookings": 150},
      {"month": "October", "bookings": 110},
      {"month": "November", "bookings": 160},
      {"month": "December", "bookings": 150}
    ]
  }

  export const topproducts =[
    {
      title: "Embroidered Lehenga",
      thumbnail: "https://images.unsplash.com/photo-1649930055986-ca57250a7fd4?q=80&w=1965&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      slug: "embroidered-lehenga",
      description: "A stunning embroidered lehenga perfect for brides.",
      price: 899.99,
      sale_price: 749.99,
      colors: ['#C70039', '#FFC300', '#581845'],
      product: { colors: ['#C70039', '#FFC300', '#581845'] },
    },
    {
      title: "Traditional Saree",
      thumbnail: "https://images.unsplash.com/photo-1716504628105-bd76d91e85f2?q=80&w=2127&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      slug: "traditional-saree",
      description: "Elegant saree that embodies traditional beauty.",
      price: 599.99,
      sale_price: 499.99,
      colors: ['#FF5733', '#33FF57', '#3357FF'],
      product: { colors: ['#FF5733', '#33FF57', '#3357FF'] },
    },
    {
      title: "Bridal Jewelry Set",
      thumbnail: "https://plus.unsplash.com/premium_photo-1681276170758-d6ca6e6e276a?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      slug: "bridal-jewelry-set",
      description: "Exquisite jewelry set to complement your bridal look.",
      price: 299.99,
      sale_price: 249.99,
      colors: ['#FFD700', '#C0C0C0', '#CD7F32'],
      product: { colors: ['#FFD700', '#C0C0C0', '#CD7F32'] },
    },
    {
      title: "Designer Sherwani",
      thumbnail: "https://images.unsplash.com/photo-1610047402714-307d99a677db?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fHNoZXJ3YW5pfGVufDB8fDB8fHww",
      slug: "designer-sherwani",
      description: "Stylish sherwani for the groom, perfect for the big day.",
      price: 799.99,
      sale_price: 649.99,
      colors: ['#4B0082', '#FF4500', '#FFD700'],
      product: { colors: ['#4B0082', '#FF4500', '#FFD700'] },
    },
    {
      title: "Wedding Decor Items",
      thumbnail: "https://images.unsplash.com/photo-1505744288177-8a097ba01de0?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fHdlZGRpbmclMjBkZWNvcmV8ZW58MHx8MHx8fDA%3D",
      slug: "wedding-decor-items",
      description: "Beautiful decor items to enhance your wedding ambiance.",
      price: 149.99,
      sale_price: 119.99,
      colors: ['#FF69B4', '#BA55D3', '#FFD700'],
      product: { colors: ['#FF69B4', '#BA55D3', '#FFD700'] },
    },
  ];
  
  
  
  
  
  
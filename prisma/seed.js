import 'dotenv/config';
import { PrismaClient } from '@prisma/client';
import { PrismaPg } from '@prisma/adapter-pg';
import bcrypt from 'bcrypt';

const adapter = new PrismaPg({ connectionString: process.env.DATABASE_URL });
const prisma = new PrismaClient({ adapter });

const categories = ['Vegetables', 'Fruits', 'Herbs', 'Seeds', 'Tools'];
const locations = ['Downtown NYC', 'Brooklyn Heights', 'Queens Village', 'Bronx Park', 'Staten Island'];
const agencies = ['USDA Organic', 'EU Organic', 'Non-GMO Project', 'Rainforest Alliance'];
const growthStages = ['Seedling', 'Vegetative', 'Flowering', 'Fruiting', 'Harvest Ready'];

async function main() {
  console.log('Seeding database...');

  // Clear existing data (children first)
  await prisma.order.deleteMany();
  await prisma.plantTracking.deleteMany();
  await prisma.rentalBooking.deleteMany();
  await prisma.sustainabilityCert.deleteMany();
  await prisma.produce.deleteMany();
  await prisma.rentalSpace.deleteMany();
  await prisma.communityPost.deleteMany();
  await prisma.vendorProfile.deleteMany();
  await prisma.user.deleteMany();

  const hashedPass = await bcrypt.hash('Password123!', 10);

  // 1. Create ADMIN
  const admin = await prisma.user.create({
    data: {
      name: 'Platform Admin',
      email: 'admin@urbanfarming.com',
      password: hashedPass,
      role: 'ADMIN',
      status: 'ACTIVE'
    }
  });
  console.log('Admin created:', admin.email);

  // 2. Create 10 VENDORS
  const vendorUsers = [];
  for (let i = 1; i <= 10; i++) {
    const user = await prisma.user.create({
      data: {
        name: `Vendor Farmer ${i}`,
        email: `vendor${i}@urbanfarming.com`,
        password: hashedPass,
        role: 'VENDOR',
        status: 'ACTIVE'
      }
    });

    const vendorProfile = await prisma.vendorProfile.create({
      data: {
        userId: user.id,
        farmName: `Green Farm ${i}`,
        farmLocation: locations[i % locations.length],
        certificationStatus: 'APPROVED',
        isApproved: true
      }
    });

    // Add sustainability cert for each vendor
    await prisma.sustainabilityCert.create({
      data: {
        vendorId: vendorProfile.id,
        certifyingAgency: agencies[i % agencies.length],
        certificationDate: new Date(`2024-0${(i % 9) + 1}-15`),
        status: 'APPROVED'
      }
    });

    // Add rental spaces for each vendor
    await prisma.rentalSpace.create({
      data: {
        vendorId: vendorProfile.id,
        location: locations[i % locations.length],
        size: `${(i * 10) + 20} sq ft`,
        pricePerMonth: 50 + (i * 10),
        availability: true,
        description: `Sunny garden plot available for urban farming - Vendor ${i}`
      }
    });

    vendorUsers.push({ user, vendorProfile });
    console.log(`Vendor ${i} created: ${user.email}`);
  }

  // 3. Create 100 PRODUCTS
  const produceItems = [
    'Organic Tomatoes', 'Fresh Basil', 'Kale Leaves', 'Cherry Tomatoes', 'Mint Herb',
    'Spinach', 'Lettuce Mix', 'Cucumber', 'Bell Peppers', 'Zucchini',
    'Eggplant', 'Carrots', 'Radishes', 'Beetroot', 'Sweet Corn',
    'Green Beans', 'Peas', 'Broccoli', 'Cauliflower', 'Cabbage'
  ];

  let produceCount = 0;
  for (let v = 0; v < vendorUsers.length; v++) {
    for (let p = 0; p < 10; p++) {
      const itemName = produceItems[produceCount % produceItems.length];
      await prisma.produce.create({
        data: {
          vendorId: vendorUsers[v].vendorProfile.id,
          name: `${itemName} - Batch ${p + 1}`,
          description: `Fresh organic ${itemName.toLowerCase()} grown with sustainable methods at ${vendorUsers[v].vendorProfile.farmName}`,
          price: (Math.random() * 20 + 2).toFixed(2),
          category: categories[produceCount % categories.length],
          certificationStatus: 'APPROVED',
          availableQuantity: Math.floor(Math.random() * 100) + 10
        }
      });
      produceCount++;
    }
  }
  console.log(`${produceCount} produce items created`);

  // 4. Create 5 CUSTOMERS
  const customers = [];
  for (let i = 1; i <= 5; i++) {
    const customer = await prisma.user.create({
      data: {
        name: `Customer User ${i}`,
        email: `customer${i}@urbanfarming.com`,
        password: hashedPass,
        role: 'CUSTOMER',
        status: 'ACTIVE'
      }
    });
    customers.push(customer);
  }
  console.log('5 customers created');

  // 5. Create Community Posts
  const postTopics = [
    { title: 'Best compost tips for small spaces', content: 'Composting in urban environments requires creativity...' },
    { title: 'How to deal with aphids organically', content: 'Organic pest control is key to sustainable farming...' },
    { title: 'Water conservation in urban gardens', content: 'Drip irrigation systems save up to 50% water...' },
  ];

  for (const post of postTopics) {
    await prisma.communityPost.create({
      data: {
        userId: vendorUsers[0].user.id,
        title: post.title,
        postContent: post.content,
        tags: ['organic', 'urban-farming', 'tips']
      }
    });
  }
  console.log('Community posts created');

  // 6. Create Orders (mix of statuses)
  const allProduce = await prisma.produce.findMany();
  const orderStatuses = ['PENDING', 'CONFIRMED', 'SHIPPED', 'DELIVERED'];
  let orderCount = 0;
  for (let i = 0; i < 20; i++) {
    const customer = customers[i % customers.length];
    const produce = allProduce[Math.floor(Math.random() * allProduce.length)];
    const quantity = Math.floor(Math.random() * 4) + 1;
    const totalPrice = Number(produce.price) * quantity;
    const status = orderStatuses[i % orderStatuses.length];

    await prisma.$transaction(async (tx) => {
      await tx.order.create({
        data: {
          userId: customer.id,
          produceId: produce.id,
          vendorId: produce.vendorId,
          quantity,
          totalPrice,
          status
        }
      });
      if (status !== 'CANCELLED') {
        await tx.produce.update({
          where: { id: produce.id },
          data: { availableQuantity: { decrement: quantity } }
        });
      }
    });
    orderCount++;
  }
  console.log(`${orderCount} orders created`);

  // 7. Create Rental Bookings
  const allRentalSpaces = await prisma.rentalSpace.findMany();
  const bookingStatuses = ['PENDING', 'CONFIRMED', 'CONFIRMED', 'COMPLETED'];
  const bookings = [];
  for (let i = 0; i < 8; i++) {
    const customer = customers[i % customers.length];
    const space = allRentalSpaces[i % allRentalSpaces.length];
    const startOffsetDays = 7 + i * 14;
    const startDate = new Date(Date.now() + startOffsetDays * 24 * 60 * 60 * 1000);
    const endDate = new Date(startDate);
    endDate.setMonth(endDate.getMonth() + (i % 3) + 1);
    const months = (i % 3) + 1;
    const totalPrice = Number(space.pricePerMonth) * months;
    const status = bookingStatuses[i % bookingStatuses.length];

    const booking = await prisma.rentalBooking.create({
      data: {
        customerId: customer.id,
        rentalSpaceId: space.id,
        startDate,
        endDate,
        totalPrice,
        status,
        notes: `Booked ${space.size} for growing seasonal crops.`
      }
    });
    bookings.push({ booking, customer, space });
  }
  console.log(`${bookings.length} rental bookings created`);

  // 8. Create Plant Tracking entries (anchored to existing bookings)
  const plantNames = ['Basil', 'Tomato', 'Mint', 'Kale', 'Spinach', 'Pepper', 'Cucumber', 'Lettuce'];
  const healthStatuses = ['Healthy', 'Needs Water', 'Thriving', 'Recovering'];
  let plantCount = 0;
  for (let i = 0; i < 12; i++) {
    const { customer, space } = bookings[i % bookings.length];
    const harvestDate = new Date();
    harvestDate.setDate(harvestDate.getDate() + 30 + (i * 7));

    await prisma.plantTracking.create({
      data: {
        userId: customer.id,
        rentalSpaceId: space.id,
        plantName: plantNames[i % plantNames.length],
        growthStage: growthStages[i % growthStages.length],
        healthStatus: healthStatuses[i % healthStatuses.length],
        harvestDate,
        notes: `Planted during spring cycle — checking weekly.`
      }
    });
    plantCount++;
  }
  console.log(`${plantCount} plant tracking entries created`);

  console.log('\nDatabase seeded successfully!');
  console.log('-----------------------------------');
  console.log('Admin:    admin@urbanfarming.com  / Password123!');
  console.log('Vendor:   vendor1@urbanfarming.com / Password123!');
  console.log('Customer: customer1@urbanfarming.com / Password123!');
}

main()
  .catch((e) => { console.error('Seed error:', e); process.exit(1); })
  .finally(async () => { await prisma.$disconnect(); });

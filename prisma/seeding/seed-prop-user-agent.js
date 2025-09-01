const { PrismaClient, UserRole } = require('@prisma/client');
const prisma = new PrismaClient();

// Hashing passwords in a real app is crucial. For seeding, we'll use plain text.
// const bcrypt = require('bcrypt');
// const saltRounds = 10;

async function main() {
  console.log(`Start seeding ...`);

  // 1. Clear existing data in the correct order
  console.log('Deleting existing data...');
  await prisma.property.deleteMany();
  await prisma.agent.deleteMany();
  await prisma.user.deleteMany();
  console.log('Existing data deleted.');

  // 2. Create Users
  console.log('Creating users...');
  const usersData = [
    { name: 'Alice Johnson', email: 'alice.j@example.com', password: 'password123', role: UserRole.AGENT },
    { name: 'Bob Williams', email: 'bob.w@example.com', password: 'password123', role: UserRole.AGENT },
    { name: 'Charlie Brown', email: 'charlie.b@example.com', password: 'password123', role: UserRole.AGENT },
    { name: 'Diana Miller', email: 'diana.m@example.com', password: 'password123', role: UserRole.USER },
    { name: 'Ethan Davis', email: 'ethan.d@example.com', password: 'password123', role: UserRole.USER },
  ];

  const createdUsers = [];
  for (const u of usersData) {
    const user = await prisma.user.create({ data: u });
    createdUsers.push(user);
    console.log(`Created user with id: ${u.id}`);
  }

  // 3. Create Agents from users with the AGENT role
  console.log('Creating agents...');
  const agentUsers = createdUsers.filter(u => u.role === UserRole.AGENT);
  const agentsData = [
    {
      info: 'Specializes in luxury properties in central Auckland. Over 10 years of experience.',
      phone: '021 123 4567',
      photo: 'https://i.pravatar.cc/150?u=alice',
    },
    {
      info: 'Expert in North Shore family homes and new developments.',
      phone: '027 890 1234',
      photo: 'https://i.pravatar.cc/150?u=bob',
    },
    {
      info: 'Focuses on apartments and townhouses for first-home buyers.',
      phone: '022 567 8901',
      photo: 'https://i.pravatar.cc/150?u=charlie',
    },
  ];

  const createdAgents = [];
  for (let i = 0; i < agentUsers.length; i++) {
    const agentUser = agentUsers[i];
    const agentSpecificData = agentsData[i];
    const agent = await prisma.agent.create({
      data: {
        name: agentUser.name,
        email: agentUser.email,
        ...agentSpecificData,
        user: {
          connect: { id: agentUser.id },
        },
      },
    });
    createdAgents.push(agent);
    console.log(`Created agent with id: ${agent.id}`);
  }

  // 4. Create Properties and assign to agents
  console.log('Creating properties...');
  const propertyData = [
    {
      title: 'Stunning Family Home in Remuera',
      description: 'A beautiful and spacious family home located in the heart of Remuera. Features a large backyard, modern kitchen, and is close to top schools.',
      price: 2500000,
      bedrooms: 4,
      bathrooms: 3,
      sqm: 280,
      address: '123 Victoria Avenue, Remuera',
      city: 'Auckland',
      propertyType: 'House',
      status: 'available',
      images: ['https://placehold.co/600x400/A5D8DD/31343C', 'https://placehold.co/600x400/EA6A47/31343C', 'https://placehold.co/600x400/A2D0C1/31343C'],
    },
    {
      title: 'Chic Apartment in Ponsonby',
      description: 'Stylish and modern apartment with stunning city views. Perfect for professionals or couples. Walking distance to Ponsonby Road cafes and shops.',
      price: 950000,
      bedrooms: 2,
      bathrooms: 1,
      sqm: 85,
      address: '45 Richmond Road, Ponsonby',
      city: 'Auckland',
      propertyType: 'Apartment',
      status: 'available',
      images: ['https://placehold.co/600x400/F4A261/31343C', 'https://placehold.co/600x400/E76F51/31343C'],
    },
    {
      title: 'Modern Townhouse in Mount Eden',
      description: 'Brand new townhouse with high-end finishes. Features an open-plan living area and a private courtyard. Zoned for excellent schools.',
      price: 1350000,
      bedrooms: 3,
      bathrooms: 2,
      sqm: 150,
      address: '78 Dominion Road, Mount Eden',
      city: 'Auckland',
      propertyType: 'Townhouse',
      status: 'sold',
      images: ['https://placehold.co/600x400/2A9D8F/31343C', 'https://placehold.co/600x400/264653/31343C'],
    },
    {
      title: 'Luxury Apartment with Harbour Views',
      description: 'Experience luxury living in this stunning apartment in the CBD with breathtaking harbour views. Includes access to a pool and gym.',
      price: 1800000,
      bedrooms: 2,
      bathrooms: 2,
      sqm: 120,
      address: '100 Queen Street, CBD',
      city: 'Auckland',
      propertyType: 'Apartment',
      status: 'available',
      images: ['https://placehold.co/600x400/F4A261/31343C', 'https://placehold.co/600x400/E9C46A/31343C', 'https://placehold.co/600x400/E76F51/31343C'],
    },
    {
      title: 'Charming Villa in Grey Lynn',
      description: 'A beautifully renovated villa that blends classic charm with modern convenience. Features a sunny deck and landscaped garden.',
      price: 1950000,
      bedrooms: 3,
      bathrooms: 2,
      sqm: 180,
      address: '22 Williamson Avenue, Grey Lynn',
      city: 'Auckland',
      propertyType: 'House',
      status: 'available',
      images: ['https://placehold.co/600x400/A5D8DD/31343C', 'https://placehold.co/600x400/EA6A47/31343C'],
    },
    {
      title: 'Seaside Property in Devonport',
      description: 'Enjoy the relaxed seaside lifestyle in this lovely Devonport home. Just a short walk to the beach and local village.',
      price: 2200000,
      bedrooms: 4,
      bathrooms: 2,
      sqm: 220,
      address: '55 King Edward Parade, Devonport',
      city: 'Auckland',
      propertyType: 'House',
      status: 'available',
      images: ['https://placehold.co/600x400/2A9D8F/31343C', 'https://placehold.co/600x400/A2D0C1/31343C'],
    },
    {
      title: 'Compact City Studio',
      description: 'A perfect and affordable entry into the Auckland market. This studio apartment is ideal for students or as a city crash pad.',
      price: 450000,
      bedrooms: 1,
      bathrooms: 1,
      sqm: 40,
      address: '30 Wakefield Street, CBD',
      city: 'Auckland',
      propertyType: 'Apartment',
      status: 'sold',
      images: ['https://placehold.co/600x400/E9C46A/31343C'],
    },
    { title: 'Parnell Character Home', description: 'Charming home with period features.', price: 1850000, bedrooms: 3, bathrooms: 2, sqm: 190, address: '8 St Georges Bay Road, Parnell', city: 'Auckland', propertyType: 'House', status: 'available', images: ['https://placehold.co/600x400/A5D8DD/31343C'] },
    { title: 'Takapuna Beachside Apartment', description: 'Modern living by the beach.', price: 1200000, bedrooms: 2, bathrooms: 2, sqm: 100, address: '20 The Strand, Takapuna', city: 'Auckland', propertyType: 'Apartment', status: 'available', images: ['https://placehold.co/600x400/F4A261/31343C'] },
    { title: 'Herne Bay Luxury Villa', description: 'Exclusive villa in a premium location.', price: 4500000, bedrooms: 5, bathrooms: 4, sqm: 400, address: '15 Jervois Road, Herne Bay', city: 'Auckland', propertyType: 'House', status: 'available', images: ['https://placehold.co/600x400/2A9D8F/31343C', 'https://placehold.co/600x400/264653/31343C'] },
    { title: 'Newmarket Investment Unit', description: 'Great rental return in a central spot.', price: 750000, bedrooms: 2, bathrooms: 1, sqm: 70, address: '50 Remuera Road, Newmarket', city: 'Auckland', propertyType: 'Apartment', status: 'available', images: ['https://placehold.co/600x400/E9C46A/31343C'] },
    { title: 'Mount Albert Bungalow', description: 'Classic bungalow with a large garden.', price: 1400000, bedrooms: 3, bathrooms: 1, sqm: 160, address: '90 Carrington Road, Mount Albert', city: 'Auckland', propertyType: 'House', status: 'available', images: ['https://placehold.co/600x400/A5D8DD/31343C'] },
    { title: 'Onehunga Starter Home', description: 'Perfect first home with renovation potential.', price: 890000, bedrooms: 2, bathrooms: 1, sqm: 110, address: '12 Queen Street, Onehunga', city: 'Auckland', propertyType: 'House', status: 'available', images: ['https://placehold.co/600x400/F4A261/31343C'] },
    { title: 'CBD Penthouse Suite', description: 'Top floor living with panoramic views.', price: 3200000, bedrooms: 3, bathrooms: 3, sqm: 250, address: '88 Albert Street, CBD', city: 'Auckland', propertyType: 'Apartment', status: 'available', images: ['https://placehold.co/600x400/2A9D8F/31343C'] },
    { title: 'Epsom Double Grammar Zone', description: 'Family home in sought-after school zones.', price: 2800000, bedrooms: 5, bathrooms: 3, sqm: 300, address: '25 Epsom Avenue, Epsom', city: 'Auckland', propertyType: 'House', status: 'sold', images: ['https://placehold.co/600x400/E9C46A/31343C'] },
    { title: 'Mission Bay Modern Masterpiece', description: 'Architecturally designed home near the beach.', price: 3500000, bedrooms: 4, bathrooms: 4, sqm: 350, address: '42 Tamaki Drive, Mission Bay', city: 'Auckland', propertyType: 'House', status: 'available', images: ['https://placehold.co/600x400/A5D8DD/31343C'] },
    { title: 'Kingsland Railway Cottage', description: 'Quaint cottage close to transport and cafes.', price: 1100000, bedrooms: 2, bathrooms: 1, sqm: 95, address: '18 Kingsland Avenue, Kingsland', city: 'Auckland', propertyType: 'House', status: 'available', images: ['https://placehold.co/600x400/F4A261/31343C'] },
    { title: 'Greenlane Family Townhouse', description: 'Low-maintenance living in a central location.', price: 1250000, bedrooms: 3, bathrooms: 2, sqm: 140, address: '66 Great South Road, Greenlane', city: 'Auckland', propertyType: 'Townhouse', status: 'available', images: ['https://placehold.co/600x400/2A9D8F/31343C'] },
    { title: 'Westmere Waterfront Property', description: 'Absolute waterfront with private jetty.', price: 5500000, bedrooms: 4, bathrooms: 3, sqm: 380, address: '33 West End Road, Westmere', city: 'Auckland', propertyType: 'House', status: 'available', images: ['https://placehold.co/600x400/E9C46A/31343C'] },
    { title: 'Otahuhu Industrial Loft', description: 'Unique loft-style apartment.', price: 650000, bedrooms: 1, bathrooms: 1, sqm: 80, address: '10 Station Road, Otahuhu', city: 'Auckland', propertyType: 'Apartment', status: 'available', images: ['https://placehold.co/600x400/A5D8DD/31343C'] },
  ];

  for (let i = 0; i < propertyData.length; i++) {
    const p = propertyData[i];
    // Assign properties to agents in a round-robin fashion
    const agentId = createdAgents[i % createdAgents.length].id;

    const property = await prisma.property.create({
      data: {
        ...p,
        agent: {
          connect: { id: agentId },
        },
      },
    });
    console.log(`Created property with id: ${property.id} for agent ${agentId}`);
  }

  console.log(`Seeding finished.`);
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });

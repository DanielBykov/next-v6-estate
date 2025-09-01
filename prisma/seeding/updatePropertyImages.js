// scripts/updatePropertyImages.js
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const imgList = ["pexels-alex-staudinger-829197-1732414.jpg", "pexels-curtis-adams-1694007-3555615.jpg", "pexels-curtis-adams-1694007-3935350.jpg", "pexels-heyho-7031607.jpg", "pexels-mugurel-moscaliuc-852629139-33678964.jpg", "pexels-mugurel-moscaliuc-852629139-33678966.jpg", "pexels-perqued-13203180.jpg", "pexels-pixabay-209296.jpg", "pexels-pixabay-210617.jpg", "pexels-pixabay-221540.jpg", "pexels-pixabay-259588.jpg", "pexels-pixabay-280222.jpg", "pexels-pixabay-280229.jpg", "pexels-pixabay-460695.jpg", "pexels-pixabay-534228.jpg", "pexels-ron-lach-9869371.jpg", "pexels-scottwebb-1029599.jpg", "pexels-thirdman-8469931.jpg", "pexels-thirdman-8469934.jpg", "pexels-thirdman-8482510.jpg"];

async function main() {
  const properties = await prisma.property.findMany();
  for (const property of properties) {
    // const random = Math.floor(Math.random() * 1000);
    const imageUrl = imgList[Math.floor(Math.random() * imgList.length)];

    await prisma.property.update({
      where: { id: property.id },
      data: { images: [imageUrl] },
    });
    console.log(`Updated property ${property.id} with image: ${imageUrl}`);
  }
}

main()
  .catch(e => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });

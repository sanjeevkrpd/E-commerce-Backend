const mongoose = require('mongoose');
const DailyProduct = require("../Models/dailyProduct");

const addMonths = (date, months) => {
  let result = new Date(date);
  result.setMonth(result.getMonth() + months);
  return result;
};

const addDays = (date,days)=>{
    let result = new Date(date);
    result.setDate(result.getDate() + days);
    return result;
}
const dailyProducts = [
  {
    productName: "Paneer",
    productPrice: 300,
    productQuantity: 20,
    productImage: "",
    date: Date.now(),
    productDescription:
      "Paneer is a type of cheese that is commonly used in Indian cuisine.",
    expDate: addMonths(Date.now(), 2)
  },
  {
    productName: "Milk",
    productPrice: 50,
    productQuantity: 100,
    productImage:
      "https://plus.unsplash.com/premium_photo-1664647903543-2ef213d1e754?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    date: Date.now(),
    productDescription:
      "Fresh cow's milk, a staple product for daily consumption.",
    expDate: addMonths(Date.now(), 1)
  },
  {
    productName: "Butter",
    productPrice: 250,
    productQuantity: 30,
    productImage:
      "https://plus.unsplash.com/premium_photo-1699292720983-725a6bb65d8a?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    date: Date.now(),
    productDescription:
      "Creamy butter made from fresh dairy milk, ideal for baking and cooking.",
    expDate: addMonths(Date.now(), 3)
  },
  {
    productName: "Curd",
    productPrice: 60,
    productQuantity: 75,
    productImage:
      "https://images.unsplash.com/photo-1680764955303-81618ecb67b5?q=80&w=2101&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    date: Date.now(),
    productDescription:
      "Homemade natural curd, a probiotic-rich dairy product for a healthy gut.",
    expDate: addMonths(Date.now(), 0.25)
  },
  {
    productName: "Cheese",
    productPrice: 400,
    productQuantity: 15,
    productImage:
      "https://plus.unsplash.com/premium_photo-1691939610797-aba18030c15f?q=80&w=1922&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    date: Date.now(),
    productDescription: "Mozzarella cheese, perfect for pizzas and pastas.",
    expDate: addMonths(Date.now(), 4)
  },
  {
    productName: "Yogurt",
    productPrice: 80,
    productQuantity: 50,
    productImage:
      "https://images.unsplash.com/photo-1572041002237-762bdc102cf6?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    date: Date.now(),
    productDescription:
      "Plain unsweetened yogurt, perfect for smoothies or eating on its own.",
    expDate: addMonths(Date.now(), 0.5)
  },
  {
    productName: "Ghee",
    productPrice: 500,
    productQuantity: 10,
    productImage:
      "https://images.unsplash.com/photo-1573812461383-e5f8b759d12e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    date: Date.now(),
    productDescription:
      "Pure desi ghee, used in traditional Indian cooking and for health benefits.",
    expDate: addMonths(Date.now(), 6)
  },
  {
    productName: "Pasta",
    productPrice: 80,
    productQuantity: 340,
    productImage:
      "https://images.unsplash.com/photo-1585672840829-d4ed3abbfb27?q=80&w=2004&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    date: Date.now(),
    productDescription: "Pasta non-sticky tasty.",
    expDate: addMonths(Date.now(), 4)
  },
  {
    productName: "Maggi",
    productPrice: 20,
    productQuantity: 484,
    productImage:
      "https://images.unsplash.com/photo-1585410304004-56ae05651552?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    date: Date.now(),
    productDescription: "Maggi with Iron , Pure and tasty.",
    expDate: addMonths(Date.now(), 4)
  },
  {
    productName: "Eggs",
    productPrice: 120,
    productQuantity: 200,
    productImage: "",
    date: Date.now(),
    productDescription:
      "Organic farm fresh eggs, rich in protein and essential nutrients.",
    expDate: addMonths(Date.now(), 1)
  },
  {
    productName: "Bread",
    productPrice: 40,
    productQuantity: 50,
    productImage:
      "https://images.unsplash.com/photo-1556471013-0001958d2f12?q=80&w=2106&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    date: Date.now(),
    productDescription: "Whole grain bread, perfect for a healthy breakfast.",
    expDate: addMonths(Date.now(), 0.5)
  },
  {
    productName: "Rice",
    productPrice: 60,
    productQuantity: 500,
    productImage:
      "https://plus.unsplash.com/premium_photo-1658527064466-df8ed3bbe6e7?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    date: Date.now(),
    productDescription:
      "Premium basmati rice, ideal for daily consumption and special occasions.",
    expDate: addMonths(Date.now(), 12)
  },
  {
    productName: "Wheat Flour",
    productPrice: 40,
    productQuantity: 300,
    productImage:
      "https://plus.unsplash.com/premium_photo-1671377660174-e43996bfdf03?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    date: Date.now(),
    productDescription:
      "Whole wheat flour, perfect for making chapatis and other flatbreads.",
    expDate: addMonths(Date.now(), 6)
  },
  {
    productName: "Turmeric Powder",
    productPrice: 150,
    productQuantity: 50,
    productImage:
      "https://plus.unsplash.com/premium_photo-1723867311354-e170658fd619?q=80&w=2006&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    date: Date.now(),
    productDescription:
      "Organic turmeric powder, known for its anti-inflammatory properties.",
    expDate: addMonths(Date.now(), 12)
  },
  {
    productName: "Red Chili Powder",
    productPrice: 200,
    productQuantity: 40,
    productImage:
      "https://images.unsplash.com/photo-1702041295471-01b73fd39907?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    date: Date.now(),
    productDescription:
      "Spicy red chili powder used in Indian curries and other dishes.",
    expDate: addMonths(Date.now(), 12)
  },
  {
    productName: "Cumin Seeds",
    productPrice: 90,
    productQuantity: 25,
    productImage: "",
    date: Date.now(),
    productDescription:
      "Cumin seeds, commonly used in Indian cooking for tempering and flavoring.",
    expDate: addMonths(Date.now(), 12)
  },
  {
    productName: "Mustard Oil",
    productPrice: 180,
    productQuantity: 100,
    productImage:
      "https://plus.unsplash.com/premium_photo-1723874683717-006f24c93975?q=80&w=1976&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    date: Date.now(),
    productDescription:
      "Cold-pressed mustard oil, used for cooking and seasoning in Indian cuisine.",
    expDate: addMonths(Date.now(), 6)
  },
  {
    productName: "Sunflower Oil",
    productPrice: 140,
    productQuantity: 200,
    productImage:
      "https://images.unsplash.com/photo-1642140027864-07cb8cb59cd9?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    date: Date.now(),
    productDescription:
      "Refined sunflower oil, perfect for frying and daily cooking.",
    expDate: addMonths(Date.now(), 6)
  },
  {
    productName: "Lentils (Toor Dal)",
    productPrice: 120,
    productQuantity: 150,
    productImage:
      "https://plus.unsplash.com/premium_photo-1671130295987-13d3b3b4e9dc?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    date: Date.now(),
    productDescription:
      "Split yellow pigeon peas, a staple in Indian lentil dishes.",
    expDate: addMonths(Date.now(), 18)
  },
  {
    productName: "Coriander Powder",
    productPrice: 100,
    productQuantity: 30,
    productImage:
      "https://images.unsplash.com/photo-1641296834707-bbe46429d945?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    date: Date.now(),
    productDescription:
      "Ground coriander powder, used for adding flavor to curries.",
    expDate: addMonths(Date.now(), 12)
  },
  {
    productName: "Black Pepper",
    productPrice: 250,
    productQuantity: 20,
    productImage:
      "https://plus.unsplash.com/premium_photo-1668446314011-301c7a98b6a9?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    date: Date.now(),
    productDescription:
      "Fresh whole black peppercorns, used for seasoning and spice.",
    expDate: addMonths(Date.now(), 18)
  },
  {
    productName: "Garlic",
    productPrice: 80,
    productQuantity: 100,
    productImage:
      "https://plus.unsplash.com/premium_photo-1666270423754-5b66a5184cc3?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    date: Date.now(),
    productDescription:
      "Fresh garlic bulbs, a common ingredient in various dishes.",
    expDate: addMonths(Date.now(), 1)
  },
  {
    productName: "Ginger",
    productPrice: 70,
    productQuantity: 100,
    productImage:
      "https://plus.unsplash.com/premium_photo-1675364893053-180a3c6e0119?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    date: Date.now(),
    productDescription:
      "Fresh ginger root, used in Indian cooking and herbal remedies.",
    expDate: addMonths(Date.now(), 1)
  }
];


async function main() {
  await mongoose.connect("mongodb://127.0.0.1:27017/ecommerce");
  console.log("Connected to DB");

  
  const result = await DailyProduct.insertMany(dailyProducts);
  console.log(`${result.length} products were saved successfully!`);
}

main().catch((err) => console.log(err));
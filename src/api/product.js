import typeASample from "../images/home-sample-oak.jpg";
import typeBSample from "../images/home-sample-walnut.jpg";
import typeAOrder from "../images/bull-typeA.png";
import typeBOrder from "../images/bull-typeB.png";

export const products = [
  {
    id: "type-a",
    title: "Oak",
    orderImage: typeAOrder,
    sampleImage: typeASample,
    desc: "",
    price: 49.99,
    diameter: "Ø 25,4 mm",
    profile: "Standard",
    weight: "150 g",
    delivery: "3-5 days"
  },
  {
    id: "type-b",
    title: "Walnut",
    orderImage: typeBOrder,
    sampleImage: typeBSample,
    desc: "",
    price: 39.99,
    diameter: "Ø 25,4 mm",
    profile: "Standard",
    weight: "150 g",
    delivery: "3-5 days"
  }
];

export const productDetails = {
  price: 49.99,
  diameter: "Ø 25,4 mm",
  profile: "Standard",
  weight: "150 g",
  delivery: "3-5 days"
};

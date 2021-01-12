/**
 * NOTE: this would normally be loaded from a db
 */

const breadType = [
  {
    key: "wheat",
    label: "Wheat Bread",
  },
  {
    key: "white",
    label: "White Bread",
  },
  {
    key: "italian",
    label: "Italian Herb & Cheese",
  },
  {
    key: "malted",
    label: "Malted Rye",
  },
  {
    key: "wrap",
    label: "Wrap",
  },
  {
    key: "gluten",
    label: "Gluten Free Wrap",
  },
  {
    key: "multi",
    label: "Multigrain Wrap",
  },
];
export const getBreadType = () => {
  return breadType;
};

const tasteType = [
  {
    key: "spicy",
    label: "Spicy italian",
  },
  {
    key: "rotisserie",
    label: "Rotisserie style chicken",
  },
  {
    key: "carved-turkey",
    label: "Carved turkey",
  },
  {
    key: "turkey-breast",
    label: "Turkey breast",
  },
  {
    key: "ham",
    label: "Black forest ham",
  },
  {
    key: "beef",
    label: "Roast beef",
  },
  {
    key: "veggie",
    label: "Veggie delite",
  },
  {
    key: "chicken-bacon",
    label: "Chicken & bacon ranch melt",
  },
  {
    key: "cold-cut",
    label: "Cold cut combo",
  },
  {
    key: "btm",
    label: "Italian b.m.t.®",
  },
  {
    key: "streak",
    label: "Steak & cheese",
  },
  {
    key: "meatball",
    label: "Meatball marinara",
  },
];

export const getTasteType = () => tasteType;

const toppingsType = [
  {
    key: "double-meant",
    label: "Double Meat",
  },
  {
    key: "pepperoni",
    label: "Pepperoni",
  },
  {
    key: "cheese",
    label: "Extra cheese",
  },
  {
    key: "tuna",
    label: "Tuna",
  },
  {
    key: "pineapple",
    label: "Pineapple",
  },
];

export const getToppingsType = () => toppingsType;
const vegetablesType = [
  {
    key: "lettuce",
    label: "Lettuce",
  },
  {
    key: "tomatoes",
    label: "Tomatoes",
  },
  {
    key: "cucumber",
    label: "Cucumber",
  },
  {
    key: "green-pepper",
    label: "Green Pepper",
  },
  {
    key: "red-onion",
    label: "Red Onion",
  },
  {
    key: "spinach",
    label: "Spinach",
  },
];

export const getVegetables = () => vegetablesType;
const sauceType = [
  {
    key: "sweet-onion",
    label: "Sweet Onion",
  },
  {
    key: "red-wine-vinegar",
    label: "Red Wine Vinegar",
  },
  {
    label: "Full Flavor",
    key: "full-flavor",
  },
  {
    label: "Light Mayo",
    key: "light-mayo",
  },
  {
    label: "Chipotle Southwest",
    key: "chipotle-southwest",
  },
  {
    label: "Ranch",
    key: "ranch",
  },
  {
    label: "SUBWAY® Vinaigrette",
    key: "subway-vinaigrette",
  },
  {
    label: "Mayo",
    key: "mayo",
  },
  {
    label: "Honey Mustard",
    key: "honey-mustard",
  },
  {
    label: "Buffalo",
    key: "buffalo",
  },
  {
    label: "Spicy Brown Mustard",
    key: "spicy-brown-mustard",
  },
  {
    label: "Creamy Sriracha",
    key: "creamy-sriracha",
  },
];
export const getSauce = () => sauceType;

export const getLabelForKey = (data, key) =>
  data.find((item) => item.key === key)?.label;

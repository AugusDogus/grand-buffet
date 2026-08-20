export type MenuItem = {
  readonly name: string;
  readonly price: string;
  readonly spicy?: boolean;
  readonly description?: string;
};

export type MenuCategory = {
  readonly name: string;
  readonly note?: string;
  readonly items: readonly MenuItem[];
};

export const menuCategories: readonly MenuCategory[] = [
  {
    name: "Appetizers",
    items: [
      { name: "Egg Roll", price: "$1.25" },
      { name: "Spring Rolls (2)", price: "$2.25" },
      { name: "Chicken Wings (4)", price: "$7.25" },
      { name: "Sweet Cheese Wontons", price: "$5.25", description: "Cream cheese" },
      { name: "Chicken Sticks (6)", price: "$7.25" },
      { name: "Fried Wontons (10)", price: "$5.25", description: "Meat" },
      { name: "Fried Shrimp (20)", price: "$6.25" },
      { name: "House Donuts (10)", price: "$5.25" },
      { name: "Fried Dumplings (10)", price: "$6.25" },
    ],
  },
  {
    name: "Soup",
    note: "Served with crispy noodles. Small / large.",
    items: [
      { name: "Wonton Soup", price: "$2.75 / $4.50" },
      { name: "Egg Drop Soup", price: "$2.75 / $4.50" },
      { name: "Hot & Sour Soup", price: "$3.25 / $4.95", spicy: true },
      { name: "Chicken Rice or Noodle Soup", price: "$3.25 / $4.95" },
      { name: "Seafood Soup", price: "$6.95" },
    ],
  },
  {
    name: "Fried Rice",
    items: [
      { name: "Plain Fried Rice", price: "$5.95" },
      { name: "Vegetable Fried Rice", price: "$7.25" },
      { name: "Roast Pork Fried Rice", price: "$7.95" },
      { name: "Chicken Fried Rice", price: "$7.95" },
      { name: "Beef Fried Rice", price: "$8.25" },
      { name: "Shrimp Fried Rice", price: "$8.25" },
      { name: "House Fried Rice", price: "$8.95" },
    ],
  },
  {
    name: "Lo Mein",
    note: "Soft noodles.",
    items: [
      { name: "Vegetable Lo Mein", price: "$7.95" },
      { name: "Plain Lo Mein", price: "$7.95" },
      { name: "Roast Pork Lo Mein", price: "$8.25" },
      { name: "Chicken Lo Mein", price: "$8.25" },
      { name: "Beef Lo Mein", price: "$8.95" },
      { name: "Shrimp Lo Mein", price: "$8.95" },
      { name: "House Lo Mein", price: "$9.15" },
    ],
  },
  {
    name: "Mai Fun",
    note: "Thin rice noodles.",
    items: [
      { name: "Vegetable Mai Fun", price: "$7.95" },
      { name: "Roast Pork Mai Fun", price: "$8.25" },
      { name: "Chicken Mai Fun", price: "$8.25" },
      { name: "Beef Mai Fun", price: "$8.95" },
      { name: "Shrimp Mai Fun", price: "$8.95" },
      { name: "Singapore Mai Fun", price: "$9.15", spicy: true },
    ],
  },
  {
    name: "Chicken",
    note: "Served with white rice.",
    items: [
      { name: "Curry Chicken with Onion", price: "$8.95", spicy: true },
      { name: "Chicken with Broccoli", price: "$8.95" },
      { name: "Chicken with Chinese Vegetables", price: "$8.95" },
      { name: "Moo Goo Gai Pan", price: "$8.95" },
      { name: "Chicken with Cashew Nuts", price: "$8.95" },
      { name: "Chicken Chow Mein", price: "$8.95" },
    ],
  },
  {
    name: "Beef",
    note: "Served with white rice.",
    items: [
      { name: "Curry Beef with Onion", price: "$9.25", spicy: true },
      { name: "Beef with Broccoli", price: "$9.25" },
      { name: "Beef with Chinese Vegetables", price: "$9.25" },
      { name: "Pepper Steak with Onion", price: "$9.25" },
      { name: "Beef with Mushrooms", price: "$9.25" },
      { name: "Beef Chow Mein", price: "$9.25" },
    ],
  },
  {
    name: "Seafood",
    note: "Served with white rice.",
    items: [
      { name: "Curry Shrimp with Onion", price: "$9.95", spicy: true },
      { name: "Shrimp with Broccoli", price: "$9.95" },
      { name: "Shrimp with Chinese Vegetables", price: "$9.95" },
      { name: "Shrimp with Lobster Sauce", price: "$9.95" },
      { name: "Shrimp with Cashew Nuts", price: "$9.95" },
      { name: "Shrimp Chow Mein", price: "$9.95" },
    ],
  },
  {
    name: "Vegetable Dishes",
    note: "Served with white rice.",
    items: [
      { name: "Mixed Chinese Vegetables", price: "$8.25" },
      { name: "Bean Curd Home Style", price: "$8.25" },
      { name: "Broccoli with Garlic Sauce", price: "$8.25", spicy: true },
      { name: "Vegetable Chow Mein", price: "$8.25" },
    ],
  },
  {
    name: "Egg Foo Young",
    note: "Served with white rice.",
    items: [
      { name: "Vegetable Egg Foo Young", price: "$7.95" },
      { name: "Roast Pork or Chicken Egg Foo Young", price: "$8.25" },
      { name: "Shrimp or Beef Egg Foo Young", price: "$8.95" },
      { name: "House Special Egg Foo Young", price: "$8.95" },
    ],
  },
  {
    name: "Chef’s Specials",
    note: "Served with white rice.",
    items: [
      { name: "Chicken with Peanut Sauce", price: "$9.95" },
      { name: "Hong Kong Chicken", price: "$9.95" },
      { name: "Black Pepper Chicken", price: "$9.95", spicy: true },
      { name: "Cheese Crabmeat", price: "$9.95" },
      { name: "Sweet & Sour Chicken", price: "$9.95" },
      { name: "Crispy Orange Chicken or Beef", price: "$9.95", spicy: true },
      { name: "General Tso’s Chicken", price: "$9.95", spicy: true },
      { name: "Sesame Chicken", price: "$9.95" },
      { name: "Seafood Delight", price: "$10.95" },
      { name: "Frog Legs", price: "$10.95", spicy: true },
      { name: "Coconut Shrimp", price: "$10.25" },
      { name: "Moo Shu Chicken, Beef, or Shrimp", price: "$9.95" },
      { name: "String Beans", price: "$8.25" },
      { name: "Potato with Butter", price: "$8.25" },
    ],
  },
  {
    name: "Szechuan & Hunan Style",
    note: "Served with white rice.",
    items: [
      { name: "Mongolian Beef", price: "$9.25", spicy: true },
      { name: "Hunan Chicken or Beef", price: "$9.25", spicy: true },
      { name: "Chicken or Beef with Garlic Sauce", price: "$9.25", spicy: true },
      { name: "Kung Pao Chicken or Beef", price: "$9.25", spicy: true },
      { name: "Szechuan Chicken", price: "$9.25", spicy: true },
      { name: "Szechuan Beef", price: "$9.25", spicy: true },
      { name: "Hunan Shrimp", price: "$9.95", spicy: true },
      { name: "Shrimp with Garlic Sauce", price: "$9.95", spicy: true },
      { name: "Kung Pao Shrimp", price: "$9.95", spicy: true },
      { name: "Hot & Spicy Shrimp", price: "$9.95", spicy: true },
      { name: "Szechuan Shrimp", price: "$9.95", spicy: true },
    ],
  },
  {
    name: "Sushi Rolls",
    note: "Served with white rice.",
    items: [
      { name: "California Roll", price: "$6.95" },
      { name: "Krab Meat & Cheese Roll", price: "$6.95" },
      { name: "Avocado Cucumber Roll", price: "$6.95" },
      { name: "Salmon Roll", price: "$6.95" },
      { name: "Salmon Avocado Roll", price: "$6.95" },
      { name: "Spicy Krab Meat Roll", price: "$6.95", spicy: true },
      { name: "Red Dragon Roll", price: "$10.95", description: "Tempura shrimp and cucumber, topped with salmon and avocado, spicy mayo, eel sauce, and crunch." },
      { name: "Special Roll", price: "$10.95", description: "Cucumber and tempura shrimp, topped with krab meat, spicy mayo, eel sauce, and crunch." },
      { name: "Dancing Kimono Roll", price: "$10.95", description: "Cucumber and tempura shrimp, topped with spicy krab meat, eel sauce, and crunch." },
    ],
  },
] as const;

export const dinnerSpecials: readonly MenuItem[] = [
  { name: "Chicken with Cashew Nuts", price: "$9.25" },
  { name: "Chicken, Beef, or Shrimp Lo Mein", price: "$9.25" },
  { name: "Chicken with Garlic Sauce", price: "$9.25", spicy: true },
  { name: "Sweet & Sour Chicken", price: "$9.25" },
  { name: "Pepper Steak with Onion", price: "$9.25" },
  { name: "Sesame Chicken", price: "$9.25" },
  { name: "Chicken or Beef with Broccoli", price: "$9.25" },
  { name: "Vegetable Delight", price: "$9.25" },
  { name: "Moo Goo Gai Pan", price: "$9.25" },
  { name: "Kung Pao Chicken, Beef, or Shrimp", price: "$9.25", spicy: true },
  { name: "Chicken or Shrimp with Chinese Vegetables", price: "$9.25" },
  { name: "Shrimp with Lobster Sauce", price: "$9.25" },
  { name: "Szechuan Beef or Chicken", price: "$9.25", spicy: true },
  { name: "General Tso’s Chicken", price: "$9.25", spicy: true },
  { name: "Hot & Spicy Chicken, Shrimp, or Beef", price: "$9.25", spicy: true },
] as const;

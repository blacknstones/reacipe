const dietLabels = [
  {
    type: 'diet',
    webLabel: 'Balanced',
    label: 'balanced',
    definition: 'Protein/Fat/Carb values in 15/35/50 ratio',
  },
  {
    type: 'diet',
    webLabel: 'High-Fiber',
    label: 'high-fiber',
    definition: 'More than 5g fiber per serving',
  },
  {
    type: 'diet',
    webLabel: 'High-Protein',
    label: 'high-protein',
    definition: 'More than 50% of total calories from proteins',
  },
  {
    type: 'diet',
    webLabel: 'Low-Carb',
    label: 'low-carb',
    definition: 'Less than 20% of total calories from carbs',
  },
  {
    type: 'diet',
    webLabel: 'Low-Fat',
    label: 'low-fat',
    definition: 'Less than 15% of total calories from fat',
  },
  {
    type: 'diet',
    webLabel: 'Low-Sodium',
    label: 'low-sodium',
    efinition: 'Less than 140mg Na per serving',
  },
];

const healthLabels = [
  {
    type: 'health',
    webLabel: 'Kosher',
    label: 'kosher',
    definition:
      'Contains only ingredients allowed by the kosher diet. However it does not guarantee kosher preparation of the ingredients themselves',
  },
  {
    type: 'health',
    webLabel: 'Alcohol-free',
    label: 'alcohol-free',
    definition: 'No alcohol used or contained',
  },
  {
    type: 'health',
    webLabel: 'Red meat-free',
    label: 'red-meat-free',
    definition:
      'Does not contain beef, lamb, pork, duck, goose, game, horse, and other types of red meat or products containing red meat.',
  },
  {
    type: 'health',
    webLabel: 'Vegan',
    label: 'vegan',
    definition: 'No meat, poultry, fish, dairy, eggs or honey',
  },
  {
    type: 'health',
    webLabel: 'Vegetarian',
    label: 'vegetarian',
    definition: 'No meat, poultry, or fish',
  },
];

const allergyLabels = [
  {
    type: 'health',
    webLabel: 'Dairy',
    label: 'dairy-free',
    definition: 'No dairy; no lactose',
  },
  {
    type: 'health',
    webLabel: 'Egg',
    label: 'egg-free',
    definition: 'No eggs or products containing eggs',
  },
  {
    type: 'health',
    webLabel: 'Fish',
    label: 'fish-free',
    definition: 'No fish or fish derivatives',
  },

  {
    type: 'health',
    webLabel: 'Gluten',
    label: 'gluten-free',
    definition: 'No ingredients containing gluten',
  },

  {
    type: 'health',
    webLabel: 'Peanuts',
    label: 'peanut-free',
    definition: 'No peanuts or products containing peanuts',
  },
  {
    type: 'health',
    webLabel: 'Shellfish',
    label: 'shellfish-free',
    definition: 'No shellfish or shellfish derivatives',
  },
  {
    type: 'health',
    webLabel: 'Soy',
    label: 'soy-free',
    definition: 'No soy or products containing soy',
  },

  {
    type: 'health',
    webLabel: 'Tree Nuts',
    label: 'tree-nut-free',
    definition: 'No tree nuts or products containing tree nuts',
  },

  {
    type: 'health',
    webLabel: 'Wheat',
    label: 'wheat-free',
    definition: 'No wheat, can have gluten though',
  },
];

const mealTypes = [
  { type: 'mealType', label: 'Breakfast' },
  { type: 'mealType', label: 'Lunch' },
  { type: 'mealType', label: 'Dinner' },
  { type: 'mealType', label: 'Snack' },
  { type: 'mealType', label: 'Teatime' },
];

const cuisineTypes = [
  {
    type: 'cuisineType',
    label: 'American',
  },
  {
    type: 'cuisineType',
    label: 'Asian',
  },
  {
    type: 'cuisineType',
    label: 'British',
  },
  {
    type: 'cuisineType',
    label: 'Caribbean',
  },
  {
    type: 'cuisineType',
    label: 'Central Europe',
  },
  {
    type: 'cuisineType',
    label: 'Chinese',
  },
  {
    type: 'cuisineType',
    label: 'Eastern Europe',
  },
  {
    type: 'cuisineType',
    label: 'French',
  },
  {
    type: 'cuisineType',
    label: 'Indian',
  },
  {
    type: 'cuisineType',
    label: 'Italian',
  },
  {
    type: 'cuisineType',
    label: 'Japanese',
  },
  {
    type: 'cuisineType',
    label: 'Kosher',
  },
  {
    type: 'cuisineType',
    label: 'Mediterranean',
  },
  {
    type: 'cuisineType',
    label: 'Mexican',
  },
  {
    type: 'cuisineType',
    label: 'Middle Eastern',
  },
  {
    type: 'cuisineType',
    label: 'Nordic',
  },
  {
    type: 'cuisineType',
    label: 'South American',
  },
  {
    type: 'cuisineType',
    label: 'South East Asian',
  },
];


export {
  dietLabels,
  healthLabels,
  allergyLabels,
  mealTypes,
  cuisineTypes,
};

const dietLabels = [
  {
    webLabel: 'Balanced',
    label: 'balanced',
    definition: 'Protein/Fat/Carb values in 15/35/50 ratio',
  },
  {
    webLabel: 'High-Fiber',
    label: 'high-fiber',
    definition: 'More than 5g fiber per serving',
  },
  {
    webLabel: 'High-Protein',
    label: 'high-protein',
    definition: 'More than 50% of total calories from proteins',
  },
  {
    webLabel: 'Low-Carb',
    label: 'low-carb',
    definition: 'Less than 20% of total calories from carbs',
  },
  {
    webLabel: 'Low-Fat',
    label: 'low-fat',
    definition: 'Less than 15% of total calories from fat',
  },
  {
    webLabel: 'Low-Sodium',
    label: 'low-sodium',
    efinition: 'Less than 140mg Na per serving',
  },
];

const healthLabels = [
  {
    webLabel: 'Kosher',
    label: 'kosher',
    definition:
      'Contains only ingredients allowed by the kosher diet. However it does not guarantee kosher preparation of the ingredients themselves',
  },
  {
    webLabel: 'Alcohol-free',
    label: 'alcohol-free',
    definition: 'No alcohol used or contained',
  },
  {
    webLabel: 'Red meat-free',
    label: 'red-meat-free',
    definition:
      'Does not contain beef, lamb, pork, duck, goose, game, horse, and other types of red meat or products containing red meat.',
  },
  {
    webLabel: 'Vegan',
    label: 'vegan',
    definition: 'No meat, poultry, fish, dairy, eggs or honey',
  },
  {
    webLabel: 'Vegetarian',
    label: 'vegetarian',
    definition: 'No meat, poultry, or fish',
  }
];

const allergyLabels = [
  {
    webLabel: 'Dairy',
    label: 'dairy-free',
    definition: 'No dairy; no lactose',
  },
  {
    webLabel: 'Egg',
    label: 'egg-free',
    definition: 'No eggs or products containing eggs',
  },
  {
    webLabel: 'Fish',
    label: 'fish-free',
    definition: 'No fish or fish derivatives',
  },

  {
    webLabel: 'Gluten',
    label: 'gluten-free',
    definition: 'No ingredients containing gluten',
  },

  {
    webLabel: 'Peanuts',
    label: 'peanut-free',
    definition: 'No peanuts or products containing peanuts',
  },
  {
    webLabel: 'Shellfish',
    label: 'shellfish-free',
    definition: 'No shellfish or shellfish derivatives',
  },
  {
    webLabel: 'Soy',
    label: 'soy-free',
    definition: 'No soy or products containing soy',
  },

  {
    webLabel: 'Tree Nuts',
    label: 'tree-nut-free',
    definition: 'No tree nuts or products containing tree nuts',
  },

  {
    webLabel: 'Wheat',
    label: 'wheat-free',
    definition: 'No wheat, can have gluten though',
  },
];

mealTypes = ['Breakfast', 'Lunch', 'Dinner', 'Snack', 'Teatime'];

cuisineTypes = [
  'American',
  'Asian',
  'British',
  'Caribbean',
  'Central Europe',
  'Chinese',
  'Eastern Europe',
  'French',
  'Indian',
  'Italian',
  'Japanese',
  'Kosher',
  'Mediterranean',
  'Mexican',
  'Middle Eastern',
  'Nordic',
  'South American',
  'South East Asian',
];

dishTypes = [
  'Biscuits and cookies',
  'Bread',
  'Cereals',
  'Condiments and sauces',
  'Desserts',
  'Drinks',
  'Main course',
  'Pancake',
  'Preps',
  'Preserve',
  'Salad',
  'Sandwiches',
  'Side dish',
  'Soup',
  'Starter',
  'Sweets',
];


export { dietLabels, healthLabels, allergyLabels, mealTypes, cuisineTypes, dishTypes }
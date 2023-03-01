const { Item, Location } = require('../models')

const menuSeeder = async () => {
    await Promise.all([
        Item.create({
            name: 'Wings',
            description: '12 piece with your choice of sauce: Mild, Medium, or Hot',
            price: 14.99,
            category: 'Appetizers'
        }),
        Item.create({
            name: "Jalapeño Poppers",
            description: "6 cheese-stuffed jalapeños wrapped in bacon and deep-fried",
            price: 10.99,
            category: "Appetizers"
        }),
        Item.create({
            name: "Nachos",
            description: "Your choice of chicken or beef.  Topped with cheese, lettuce, tomato, sour cream, and onions",
            price: 13.99,
            category: "Appetizers"
        }),
        Item.create({
            name: "Spinach and Artichoke Dip",
            description: "Spinach and artichokes in a cheese sauce.  Served with our house-made bread",
            price: 8.99,
            category: "Appetizers"
        }),
        Item.create({
            name: "Spring Mix",
            description: "Spring mix with walnuts, dried cranberries, mandarin oranges, and chicken. Served with house-made balsalmic vinaigrette.",
            price: 13.99,
            category: "Salads"
        }),
        Item.create({
            name: "Chef Salad",
            description: "Romaine lettuce, hard-boiled egg, ham, turkey, tomatoes, cucumbers, and cheese. Served with our house-made ranch dressing.",
            price: 15.99,
            category: "Salads"
        }),
        Item.create({
            name: "Caesar Salad",
            description: "Classic caeser salad, romaine lettuce, parmesan cheese, croutons, and house-made dressing.",
            price: 9.99,
            category: "Salads"
        }),
        Item.create({
            name: "Chicken Club",
            description: "Grilled chicken on a brioche bun, topped with lettuce, tomato, bacon, and colby jack cheese.",
            price: 12.99,
            category: "Sandwiches"
        }),
        Item.create({
            name: "American Cheeseburger",
            description: "Two patties with american cheese on a brioche bun with ketchup, mayonnaise, lettuce, tomato, onions, and pickles.",
            price: 10.99,
            category: "Sandwiches"
        }),
        Item.create({
            name: "Veggie Burger",
            description: "Our homemade veggie patty with lettuce, tomatoes, onion, and mustard on a brioche bun",
            price: 15.99,
            category: "Sandwiches"
        }),
        Item.create({
            name: "Half Rack of Ribs",
            description: "Our baby back ribs served with your choice of 2 sides.",
            price: 22.99,
            category: "Entrees"
        }),
        Item.create({
            name: "Cajun Pasta",
            description: "Angel hair pasta with chaick and our cajun alfredo sauce.",
            price: 16.99,
            category: "Entrees"
        }),
        Item.create({
            name: "Grilled Chicken Dinner",
            description: "8oz blackened chicken breast with choice of 2 sides.",
            price: 19.99,
            category: "Entrees"
        }),
        Item.create({
            name: "Grilled Salmon Dinner",
            description: "8oz grilled salmon with 2 sides.",
            price: 21.99,
            category: "Entrees"
        }),
        Item.create({
            name: "Steamed Broccoli",
            description: "Free w/ entree",
            price: 0.00,
            category: "Sides"
        }),
        Item.create({
            name: "French Fries",
            description: "Free w/ entree",
            price: 0.00,
            category: "Sides"
        }),
        Item.create({
            name: "Mac & Cheese",
            description: "Free w/ entree",
            price: 0.00,
            category: "Sides"
        }),
        Item.create({
            name: "Mashed Potatoes",
            description: "Free w/ entree",
            price: 0.00,
            category: "Sides"
        }),
        Item.create({
            name: "Chicken Tender Meal",
            description: "Comes with one side and a drink.",
            price: 5.99,
            category: "Kids' Meals"
        }),
        Item.create({
            name: "Kids Rib Meal",
            description: "Comes with one side and a drink.",
            price: 10.99,
            category: "Kids' Meals"
        }),
        Item.create({
            name: "Cheese Burger Meal",
            description: "Comes with one side and a drink.",
            price: 6.99,
            category: "Kids' Meals"
        }),
        Item.create({
            name: "7 Layer Chocolate Cake",
            description: "Delicious!",
            price: 8.99,
            category: "Desserts"
        }),
        Item.create({
            name: "Peanut Butter Pie",
            description: "Fulfilling!",
            price: 7.99,
            category: "Desserts"
        }),
        Item.create({
            name: "Ice Cream",
            description: "Refreshing!",
            price: 4.99,
            category: "Desserts"
        })
    ])
}

module.exports = menuSeeder
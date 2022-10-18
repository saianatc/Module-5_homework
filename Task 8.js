let food = new Map();
food.set ("carrot", "cucumber", "tomato");
food.set ("watermelon", "banana", "orange");
food.set ("pork", "beef", "chicken");
for (let name of food) {
    console.log(`Ключ - ${name[0]}, значение - ${name[1]}`);
}
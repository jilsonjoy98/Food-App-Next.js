import Link from "next/link";

export default function Meals() {
  const meals = [
    { id: 1, name: "Spaghetti-Carbonara" },
    { id: 2, name: "Chicken-Alfredo" },
    { id: 3, name: "Vegetable-Stir-Fry" },
  ];
  return (
    <div>
        <h1>Meals</h1>
        <p>Discover delicious meals shared by our food-loving community. Browse through a variety of recipes, from quick and easy dishes to gourmet creations. Whether you're looking for breakfast ideas, lunch inspiration, or dinner delights, you'll find something to satisfy your cravings. Join us in celebrating the joy of food and share your own culinary masterpieces with fellow food enthusiasts!</p>
        {
          meals.map(meal => (
            <div key={meal.id}>
              <Link href={`/meals/${meal.name}`}>{meal.name}</Link>
            </div>
          ))
        }
    </div>
  )
}

import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

const FoodDetail = () => {
  const [name, setName] = useState("");
  const [category, setCategory] = useState("");
  const [detail, setDetail] = useState("");
  const [area, setArea] = useState("");
  const [foodImage, setFoodImage] = useState("");
  const [ingredients, setIngredients] = useState(Array(20));
  const [measure, setMeasure] = useState(Array(20));
  const { id } = useParams();

  useEffect(() => {
    getProductById();
  }, []);

  const getProductById = async () => {
    const response = await axios.get(
      `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`
    );
    const items = response.data.meals[0];

    setName(items.strMeal);
    setCategory(items.strCategory);
    setDetail(items.strInstructions);
    setFoodImage(items.strMealThumb);
    setArea(items.strArea);
    const ingredients = [];
    const measure = [];
    for (let i = 1; i <= 20; i++) {
      ingredients.push(items[`strIngredient${i}`]);
      measure.push(items[`strMeasure${i}`]);
      setIngredients(ingredients);
      setMeasure(measure);
    }
  };

  return (
    <section className="relative lg:max-w-6xl px-5 lg:px-0 mx-auto pt-5 pb-24">
      <div className="mt-32">
        <div className="mb-16 text-center">
          <h2 className="title-font text-4xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            {name}
          </h2>
          <p className="text-yellow-400 font-medium uppercase tracking-widest">
            {category} - {area}
          </p>
        </div>
        <div className="mb-16">
          <p className="text-md text-gray-700 font-bold tracking-wide uppercase">
            Instructions
          </p>
          <p className="text-justify mt-4 text-gray-900">{detail}</p>
        </div>
      </div>

      <p className="mb-5 text-md text-gray-700 font-bold tracking-wide uppercase">
        Ingredients
      </p>

      <div className="grid grid-cols-1 gap-y-16 gap-x-8 lg:max-w-6xl lg:grid-cols-3">
        <div className="col-span-2">
          <dl className="grid grid-cols-2 gap-x-6 gap-y-5 sm:grid-cols-3 sm:gap-y-5 lg:gap-x-8">
            {ingredients.map((v, i) => (
              <div className="border border-slate-100 bg-slate-50 rounded-lg flex flex-col items-start p-4">
                <dt className="font-semibold text-gray-500 ">{v}</dt>
                <dd className="font-medium text-sm flex flex-col uppercase tracking-wide">
                  {" "}
                  - {measure[i]}
                </dd>
              </div>
            ))}
          </dl>
        </div>
        <div className="grid grid-cols-1 grid-rows-2 gap-4 sm:gap-6 lg:gap-8">
          <img
            src={foodImage}
            alt="Walnut card tray with white powder coated steel divider and 3 punchout holes."
            className="bg-gray-100 rounded-lg"
          />
        </div>
      </div>
    </section>
  );
};

export default FoodDetail;

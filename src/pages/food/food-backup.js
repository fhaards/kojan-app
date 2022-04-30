import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

const FoodDetail = () => {
  const [name, setName] = useState("");
  const [category, setCategory] = useState("");
  const [detail, setDetail] = useState("");
  const [foodImage, setFoodImage] = useState("");

  const [ingredients1, setIngredients1] = useState("");
  const [ingredients2, setIngredients2] = useState("");
  const [ingredients3, setIngredients3] = useState("");
  const [ingredients4, setIngredients4] = useState("");
  const [ingredients5, setIngredients5] = useState("");

  const [measure1, setMeasure1] = useState("");
  const [measure2, setMeasure2] = useState("");
  const [measure3, setMeasure3] = useState("");
  const [measure4, setMeasure4] = useState("");
  const [measure5, setMeasure5] = useState("");

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

    setIngredients1(items.strIngredient1);
    setIngredients2(items.strIngredient2);
    setIngredients3(items.strIngredient3);
    setIngredients4(items.strIngredient4);
    setIngredients5(items.strIngredient5);

    setMeasure1(items.strMeasure1);
    setMeasure2(items.strMeasure2);
    setMeasure3(items.strMeasure3);
    setMeasure4(items.strMeasure4);
    setMeasure5(items.strMeasure5);
  };

  return (
    <section className="relative lg:max-w-6xl px-5 lg:px-0 mx-auto pt-5 pb-24">
      <div className="mt-32">
        <div className="mb-16 text-center">
          <h2 className="title-font text-4xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            {name}
          </h2>
          <p className="text-yellow-400 font-medium uppercase tracking-wide">
            {category}
          </p>
        </div>
        <div className="mb-16">
          <p className="text-md text-gray-500 font-medium tracking-wide">
            Instructions
          </p>
          <p className="text-justify mt-4 text-gray-900">{detail}</p>
        </div>
      </div>

      <p className="mb-5 text-md text-gray-500 font-medium tracking-wide">
        Ingredients
      </p>

      <div className="grid grid-cols-1 gap-y-16 gap-x-8 lg:max-w-6xl lg:grid-cols-3">
        <div className="col-span-2">
          <dl className="grid grid-cols-2 gap-x-6 gap-y-10 sm:grid-cols-3 sm:gap-y-16 lg:gap-x-8">
            <div className="border-t border-gray-200 pt-4">
              <dt className="font-medium text-gray-900">1. {ingredients1}</dt>
              <dd className="mt-2 text-sm flex flex-col"> - {measure1}</dd>
            </div>
            <div className="border-t border-gray-200 pt-4">
              <dt className="font-medium text-gray-900">2. {ingredients2}</dt>
              <dd className="mt-2 text-sm flex flex-col"> - {measure2}</dd>
            </div>
            <div className="border-t border-gray-200 pt-4">
              <dt className="font-medium text-gray-900">3. {ingredients3}</dt>
              <dd className="mt-2 text-sm flex flex-col"> - {measure3}</dd>
            </div>
            <div className="border-t border-gray-200 pt-4">
              <dt className="font-medium text-gray-900">4. {ingredients4}</dt>
              <dd className="mt-2 text-sm flex flex-col"> - {measure4}</dd>
            </div>
            <div className="border-t border-gray-200 pt-4">
              <dt className="font-medium text-gray-900">5. {ingredients5}</dt>
              <dd className="mt-2 text-sm flex flex-col"> - {measure5}</dd>
            </div>
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

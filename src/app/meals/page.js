import React, { Suspense } from "react";
import classes from "./page.module.css";
import Link from "next/link";
import Mealsgrid from "../components/main-header/meals/meals-grid";
import { getMeals } from "../../../lib/meals";

async function Meals(){
  const meals = await getMeals();
  return    <Mealsgrid meals={meals} />
}

const Meal = async () => {


  return (
    <>
      <header className={classes.header}>
        <h1>
          Delicious meals, created{" "}
          <span className={classes.highlight}>by you</span>
        </h1>
        <p>
          Choose your facvorite recipe and cook it yourself.It is easy and
          taste.
        </p>
        <p className={classes.cta}>
          <Link href={"/meals/shares"}>Share your favorite recipe</Link>
        </p>
      </header>
      <main className={classes.main}>
      <Suspense fallback={<p className={classes.loading}>fetching Meals...</p>}>

     <Meals/>
      </Suspense>
      </main>
    </>
  );
};

export default Meal;

import React from "react";
import classes from "./page.module.css";
import Image from "next/image";
import { getMeal } from "../../../../lib/meals";
import { notFound } from "next/navigation";


export async function generateMetadata({params}){
const meal=getMeal(params.slugMeals)
if(!meal){
  notFound()
}
return {
  title:meal.title,
  description:meal.summary
}
}

const MealDetails = ({params}) => {

  

 const meal= getMeal(params.slugMeals)

if(!meal){
  notFound()
}

 meal.instructions=meal.instructions.replace(/\n/g,'<br />')
  return (
    <>
      <header className={classes.header}>
        <div className={classes.image}>
          <Image fill src={meal.image} />
        </div>

        <div className={classes.headerText}>
          <h1>{meal.title}</h1>
          <p className={classes.creator}>
            {" "}
            by <a href={`mailto:${meal.reator_email}`}>{meal.creator}</a>
          </p>

          <p className={classes.summary}>{meal.summary}

          </p>
        </div>
      </header>

      <main>
        <p className={classes.instructions} dangerouslySetInnerHTML={{
          __html:meal.instructions
        }}></p>
      </main>
    </>
  );
};

export default MealDetails;

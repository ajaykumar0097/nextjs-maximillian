"use client";

import { useRef, useState } from "react";
import classes from "./image-picker.module.css";
import Image from "next/image";

export default function ImagePicker({ label, name }) {
  const [pickedImage, setPickedImage] = useState();
  const imageInput = useRef();

  function handlePickClick() {
    imageInput.current.click();
  }

  function handleImage(e) {
    console.log(e?.target?.files);
    const file = e?.target?.files?.[0];
    if (!file) {
      return;
    }

    const fileReader = new FileReader();
    fileReader.onload = () => {
        setPickedImage( fileReader.result)
     
    };
    fileReader.readAsDataURL(file);
  }

  console.log("pickedImage",pickedImage);
  
  return (
    <div className={classes.picker}>
      <label htmlFor={name}>{label}</label>
      <div className={classes.controls}>
      <div className={classes.preview}>
      {!pickedImage && <p>No Image Picked yet</p>}
      {
        pickedImage&& <Image src={pickedImage} alt="The image selected by the user" fill/>
      }

      </div>
      <input
        className={classes.input}
        type="file"
        name={name}
        id={name}
        accept="image/png, image/jpeg"
        ref={imageInput}
        onChange={handleImage}
      />
      <button
        className={classes.button}
        type="button"
        onClick={handlePickClick}
      >
        Pick an Image
      </button>
      </div>
    </div>
  );
}

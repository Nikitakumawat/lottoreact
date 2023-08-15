import React, { useState } from "react";
import Loader from "../../atom/loader/Loader.js";
import Button from "../../atom/button/index.js";
import InputField from "../../atom/inputField/InputField.js";
import { getRandomAdjective } from "../../utils";
import { GOOGLE_API_KEY, CREATE_SEARCH_ENGINE_KEY } from "../../config/env";
import { GOOGLE_CUSTOM_IMAGE_API } from "../../utils/integration";
import { MIN, MAX } from "../../constants";
import "./style.css";

const TYPE = "image";

const Form = () => {
  const [animal, setAnimal] = useState("");
  const [imageSrc, setImageSrc] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleAnimalChange = (event) => {
    const inputValue = event.target.value;
    setAnimal(inputValue);
  };

  const handleGenerateImage = async () => {
    if (animal.length >= 2 && animal.length <= 20) {
      if (animal) {
        setIsLoading(true);
        const adjective = getRandomAdjective();
        const query = `${adjective} ${animal}`;

        const searchUrl = `${GOOGLE_CUSTOM_IMAGE_API}q=${query}&key=${GOOGLE_API_KEY}&cx=${CREATE_SEARCH_ENGINE_KEY}&searchType=${TYPE}`;

        try {
          const response = await fetch(searchUrl);
          const data = await response.json();

          if (data.items && data.items.length > 0) {
            setIsLoading(false);
            setImageSrc(data.items[0].link);
          } else {
            setImageSrc("");
          }
        } catch (error) {
          console.error("Error fetching image:", error);
          setImageSrc("");
        }
      }
    } else {
      setErrorMessage("Animal name must be between 2 and 20 characters");
    }
  };

  return (
    <>
      <h1>Favorite Animal Image Generator</h1>
      <div className="container">
        <h2>Form to generate animal image</h2>
        <form>
          <label>
            <b>Enter your favorite animal</b>
            <br />
            <InputField
              type="text"
              value={animal}
              onChange={handleAnimalChange}
              minLength={MIN}
              maxLength={MAX}
              placeholder="Enter animal name"
              required={true}
            />
          </label>
          {errorMessage && (
            <p style={{ color: "red", fontSize: "small" }}>{errorMessage}</p>
          )}
          <br />
          <Button label={"Generate Image"} onClick={handleGenerateImage} />
        </form>
      </div>
      <div className="loader">{isLoading ? <Loader /> : null}</div>
      <div className="image__container">
        {imageSrc ? (
          <img src={imageSrc} alt={`A ${animal}`} loading="lazy-loading" />
        ) : null}
      </div>
    </>
  );
};

export default Form;

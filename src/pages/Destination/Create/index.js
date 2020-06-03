import React, { useRef, useState } from "react";
import { Card, Button } from "../../../components";
import { useHistory } from "react-router";
import { useDispatch } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { saveDestination } from "../../../store/actions";
import "./index.css";

const AddDestination = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const imgRef = useRef();
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [location, setLocation] = useState("");
  const [price, setPrice] = useState("");
  const [images, setImages] = useState([]);
  const [previewImageSrc, setPreviewImageSrc] = useState([]);

  const destinationImagesHandler = (dataImage) => {
    const previewImageUrl = URL.createObjectURL(dataImage);
    setImages([...images, dataImage]);
    setPreviewImageSrc([...previewImageSrc, previewImageUrl]);
  };

  const submitDestinationHandler = async (e) => {
    e.preventDefault();
    const data = new FormData();
    data.append("name", name);
    data.append("description", description);
    data.append("location", location);
    data.append("price", Number(price));
    images.forEach((image) => data.append("images", image));
    const responseStatus = await dispatch(saveDestination(data));
    if (responseStatus) backToDestination();
  };

  const backToDestination = () => {
    history.replace("/destination");
  };

  return (
    <Card
      title="Add New Destination"
      action={{
        title: " Back",
        icon: "arrow-left",
        onPress: backToDestination,
      }}
    >
      <form>
        <div className="input-container">
          <label className="input-label">Name</label>
          <input
            type="text"
            placeholder="Destination name"
            className="input-field"
            onChange={(e) => setName(e.target.value)}
            value={name}
          />
        </div>
        <div className="input-container">
          <label className="input-label">Description</label>
          <textarea
            placeholder="Destination description"
            className="input-field"
            rows="10"
            onChange={(e) => setDescription(e.target.value)}
            value={description}
          ></textarea>
        </div>
        <div className="input-container">
          <label className="input-label">Location</label>
          <input
            className="input-field"
            type="text"
            placeholder="Destination location"
            onChange={(e) => setLocation(e.target.value)}
            value={location}
          />
        </div>
        <div className="input-container">
          <label className="input-label">Price</label>
          <input
            className="input-field"
            type="number"
            placeholder="Destination price"
            onChange={(e) => setPrice(e.target.value)}
            value={price}
          />
        </div>
        <div className="input-container">
          <label className="input-label">Image</label>
          <input
            id="files"
            accept="image/*"
            type="file"
            onChange={(e) => destinationImagesHandler(e.target.files[0])}
            className="image-upload"
            ref={imgRef}
          />
        </div>
        <div className="image-container">
          {previewImageSrc.map((imgSrc, index) => (
            <img
              src={imgSrc}
              key={index}
              className="destination-image"
              alt={"destination image" + index}
            />
          ))}
          <FontAwesomeIcon
            icon="plus-square"
            size="4x"
            color="#aaa"
            className="add-image-icon"
            onClick={() => imgRef.current.click()}
          />
        </div>
        <div className="button-container">
          <Button primary width="200px" onClick={submitDestinationHandler}>
            SAVE
          </Button>
        </div>
      </form>
    </Card>
  );
};

export default AddDestination;

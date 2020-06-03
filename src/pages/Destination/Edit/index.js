import React, { useRef, useState, useEffect } from "react";
import { Card, Button } from "../../../components";
import { useHistory, useParams } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  editDestination,
  updateImageDestination,
} from "../../../store/actions";
import "./index.css";
import alert from "../../../helper/alert";

const EditDestination = () => {
  const history = useHistory();
  const dispatch = useDispatch();

  const selectedDestination = useSelector(
    (props) => props.destination.selectedDestination
  );

  const imgRef = useRef();
  const [name, setName] = useState(selectedDestination.name);
  const [description, setDescription] = useState(
    selectedDestination.description
  );
  const [location, setLocation] = useState(selectedDestination.location);
  const [price, setPrice] = useState(selectedDestination.price);
  const [images, setImages] = useState(selectedDestination.DestinationImages);
  const [previewImageSrc, setPreviewImageSrc] = useState(
    selectedDestination.DestinationImages
  );
  const { id } = useParams();

  const destinationImagesHandler = (dataImage) => {
    const previewImageUrl = URL.createObjectURL(dataImage);
    setImages([...images, dataImage]);
    setPreviewImageSrc([...previewImageSrc, { imageURL: previewImageUrl }]);
  };

  const editDestinationHandler = async (e) => {
    e.preventDefault();
    const data = new FormData();
    data.append("name", name);
    data.append("description", description);
    data.append("location", location);
    data.append("price", Number(price));

    const imagesForm = new FormData();
    images.forEach((image) => imagesForm.append("images", image));

    const responseStatusUploadImage = await dispatch(
      updateImageDestination(imagesForm, id)
    );

    if (!responseStatusUploadImage) {
      alert.error("Error Upload Image");
    } else {
      const responseStatusUpdate = await dispatch(editDestination(data, id));
      if (responseStatusUpdate) backToDestination();
    }
  };

  const backToDestination = () => {
    history.replace("/destination");
  };

  if (!previewImageSrc) {
    history.replace("/destination");
    return "Checking..";
  } else {
    return (
      <Card
        title="Edit Destination"
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
                src={imgSrc.imageURL}
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
            <Button primary width="200px" onClick={editDestinationHandler}>
              SAVE
            </Button>
          </div>
        </form>
      </Card>
    );
  }
};

export default EditDestination;

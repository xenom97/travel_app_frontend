import React, { useEffect } from "react";
import { Card, Button, Padding } from "../../components";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  getDestinations,
  deleteDestination,
  setSelectedDestination,
} from "../../store/actions";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./index.css";
import alert from "../../helper/alert";

function Destination() {
  const history = useHistory();
  const dispatch = useDispatch();
  const destinations = useSelector((props) => props.destination.destinations);

  useEffect(() => {
    dispatch(getDestinations());
  }, []);

  const deleteDestinations = (selectedDestination) => {
    const name = selectedDestination.DestinationImages.map(
      (destination) => destination.name
    );
    console.log("name : ", { name, id: selectedDestination.id });
    alert.confirmation().then((result) => {
      if (result.value) {
        dispatch(deleteDestination({ name, id: selectedDestination.id }));
      }
    });
  };

  const goToEditPage = (selectedDestination) => {
    dispatch(setSelectedDestination(selectedDestination));
    history.push("/destination/edit/" + selectedDestination.id);
  };

  return (
    <Card
      title="Destination"
      action={{
        title: " New Destination",
        icon: "plus-circle",
        onPress: () => history.push("/destination/create"),
      }}
    >
      <table className="table">
        <thead>
          <tr>
            <th width="5%">No</th>
            <th width="20%">Destination Name</th>
            <th width="20%">Description</th>
            <th width="10%">Location</th>
            <th width="10%">Price</th>
            <th width="25%">Image</th>
            <th width="10%">Action</th>
          </tr>
        </thead>
        <tbody>
          {destinations.length
            ? destinations.map((item, index) => {
                return (
                  <tr key={index} className="row-data">
                    <td>{index + 1}</td>
                    <td>{item.name}</td>
                    <td>{item.description}</td>
                    <td>{item.location}</td>
                    <td>
                      {item.price
                        ? new Intl.NumberFormat("id-ID", {
                            style: "currency",
                            currency: "IDR",
                          }).format(item.price)
                        : null}
                    </td>
                    <td className="preview-image-container">
                      {item.DestinationImages.map((image) => (
                        <img
                          src={image.imageURL}
                          key={image.id}
                          alt={image.id}
                          className="preview-image"
                        />
                      ))}
                    </td>
                    <td className="action-container">
                      <Padding>
                        <Button
                          danger
                          width="50px"
                          onClick={() => deleteDestinations(item)}
                        >
                          <FontAwesomeIcon icon="trash-alt" color="#fff" />
                        </Button>
                      </Padding>
                      <Padding>
                        <Button
                          warning
                          width="50px"
                          onClick={() => goToEditPage(item)}
                        >
                          <FontAwesomeIcon icon="edit" color="#fff" />
                        </Button>
                      </Padding>
                    </td>
                  </tr>
                );
              })
            : null}
        </tbody>
      </table>
    </Card>
  );
}

export default Destination;

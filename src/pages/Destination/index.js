import React, { useEffect } from "react";
import { Card } from "../../components";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getDestinations } from "../../store/actions";
import "./index.css";

function Destination() {
  const history = useHistory();
  const dispatch = useDispatch();
  const destinations = useSelector((props) => props.destination.destinations);

  useEffect(() => {
    dispatch(getDestinations());
  }, []);

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
            <th width="25%">Description</th>
            <th width="10%">Location</th>
            <th width="10%">Price</th>
            <th width="30%">Image</th>
          </tr>
        </thead>
        <tbody>
          {destinations.length
            ? destinations.map((item, index) => {
                return (
                  <tr key={index}>
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

import Home from "../Home";
import Destination from "../Destination";

const menu = [
  {
    name: "home",
    label: "Home",
    icon: "user-alt",
    path: "/",
    exact: true,
    page: Home,
  },
  {
    name: "destination",
    label: "Destination",
    icon: "map-marked-alt",
    path: "/destionation",
    exact: false,
    page: Destination,
  },
];

export default menu;

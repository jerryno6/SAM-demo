import axios from "axios";

export default axios.create({
  baseURL: "https://gdm70j3nmk.execute-api.eu-central-1.amazonaws.com/Stage",
  headers: {
    "Content-type": "application/json"
  }
});
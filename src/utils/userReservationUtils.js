import axios from "axios";

const getGarages = async (coordinates) => {
  try {
    const { data } = await axios.get(`http://localhost:3001/reservations`, {
      params: coordinates,
    });
    return data;
  } catch (err) {
    console.error(err);
  }
};
const getGeoCoordinates = async (address) => {
  /* Given address (only first line is necessary), get long and lat of address*/
  try {
    const { data } = await axios.get(
      `http://localhost:3001/geocode/?address=${address}`
    );
    return JSON.parse(data);
  } catch (error) {
    console.log(error);
    return null;
  }
};
const getReservationsByDate = async (garage_id, date) => {
  /* Given garage_id and date, get count of reservations per hour */
  try {
    const { data } = await axios.get(
      `http://localhost:3001/reservations/garage/${garage_id}?date=${date}`
    );
    return data;
  } catch (error) {
    console.log(error);
    return null;
  }
};
const postReservation = async (body) => {
  /* Given garage_id and date, get count of reservations per hour */
  try {
    await axios.post(`http://localhost:3001/reservations`, body);
    console.log("Reservation complete");
  } catch (error) {
    console.log(error);
    return null;
  }
};
export {
  getGarages,
  getGeoCoordinates,
  getReservationsByDate,
  postReservation,
};
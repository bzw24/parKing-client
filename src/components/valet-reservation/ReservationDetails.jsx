import { useEffect, useCallback } from 'react';
import { useSelector, useDispatch } from "react-redux";
import { setReservationDetails } from "../../utils/slice/valetSlice";
import { getReservationDetails } from "../../utils/valetReservationUtils";
import CheckinCheckoutBtns from "./CheckinCheckoutBtns";
import DetailsAndKeyBox from "./DetailsAndKeyBox";
import AccountAndCarDetails from "./AccountAndCarDetails";
import { useParams } from 'react-router-dom';
import { Link } from "react-router-dom";

const ReservationDetails = () => {

  const { reservation_id } = useParams()
  const { reservationDetails } = useSelector((state) => state.valet);
  const dispatch = useDispatch();

  const fetchData = useCallback(async () => {
    if (!reservation_id) {
      return;
    }
    try {
      const data = await getReservationDetails(reservation_id);
      await dispatch(setReservationDetails(data[0]));
    } catch (error) {
      console.log(error);
    }
  }, [reservation_id, dispatch])

  useEffect(() => {
    fetchData();
  }, [fetchData])

  // p-8 bg-gray-100 shadow-md rounded-md
  return (
    <div className="container mx-auto mt-8 p-8 bg-white shadow-md rounded-md">
      <h3 className="flex justify-center text-2xl font-semibold mb-4">Reservation #{reservationDetails.id}</h3>

      <DetailsAndKeyBox />
      <AccountAndCarDetails />

      <CheckinCheckoutBtns fetchData={fetchData} />
      <Link to="/valet" className="flex justify-center py-5 text-blue-500 hover:underline">
        Back
      </Link>
    </div>
  );
}

export default ReservationDetails;
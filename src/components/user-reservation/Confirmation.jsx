import { useSelector, useDispatch } from "react-redux";
import { addReservation, resetState } from "../../utils/slice/reservationSlice";
import { convertTime } from "../../lib/timeSlotUtil";
const Confirmation = () => {
  const { reservation, selectedGarage } = useSelector(
    (state) => state.reservation
  );
  const dispatch = useDispatch();
  const convertDateString = (dateString) => {
    const [month, day, year] = dateString.split("-");
    const date = new Date(`20${year}-${month}-${day}`);
    const monthNames = [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ];
    const dayNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    const dayName = dayNames[date.getDay()];
    const monthName = monthNames[date.getMonth()];
    const dayOfMonth = date.getDate();
    return `${dayName} ${monthName} ${dayOfMonth}`;
  };

  /* SAMPLE DATA */
  const details = {
    name: "Twin Peaks",
    address: "501 Twin Peaks Blvd",
    city: "San Francisco",
    zip: "94131",
    state: "CA",
    phoneNumber: "123-456-7890",
    username: "Bruce",
    car: "Tesla Model 3",
    licensePlate: "123abc",
  };

  return (
    reservation && (
      <div className="flex flex-col items-center w-full">
        <div className="card card-compact w-[60%] bg-base-100 shadow-xl mb-5">
          <div className="card-body">
            <h2 className="card-title">Account Info</h2>
            <div className="divider m-0 "></div>
            <p>{details.username}</p>
            <p>Cell: {details.phoneNumber}</p>
            <p>Make & Model: {details.car}</p>
            <p>License Plate: {details.licensePlate}</p>
          </div>
        </div>
        <div className="card card-compact w-[60%] bg-base-100 shadow-xl mb-5">
          <div className="card-body">
            <h2 className="card-title">Reservation Details</h2>
            <div className="divider m-0 "></div>
            <p>{`${convertDateString(reservation.date)} at ${convertTime(
              reservation.time
            )}`}</p>
            <p>{selectedGarage.name}</p>
            <p>{selectedGarage.address}</p>
            <p>{`${selectedGarage.city}, ${selectedGarage.state} ${selectedGarage.zip}`}</p>
          </div>
        </div>

        <button
          className="btn"
          onClick={() => {
            dispatch(addReservation());
            dispatch(resetState());
          }}
        >
          Confirm Reservation
        </button>
      </div>
    )
  );
};

export default Confirmation;

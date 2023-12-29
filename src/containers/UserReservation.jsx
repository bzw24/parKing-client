import { useSelector } from "react-redux";
import AddressForm from "../components/user-reservation/AddressForm.jsx";
import Confirmation from "../components/user-reservation/Confirmation.jsx";

const UserReservation = () => {
  const { page } = useSelector((state) => state.reservation);

  return (
    <>
      <h1 className="text-2xl">User Reservation Container </h1>
      {page === "reservation" && <AddressForm />}
      {page === "confirmation" && <Confirmation />}
    </>
  );
};

export default UserReservation;

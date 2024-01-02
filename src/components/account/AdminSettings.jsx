import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import toast from "react-hot-toast";

const AdminSettings = () => {
  const dispatch = useDispatch();
  const [valetData, setValetData] = useState(false);
  const { id } = useParams();

  useEffect(() => {
    const getValetData = async () => {
      try {
        const response = await axios.get(`http://localhost:3000/valet/${id}`);
        setValetData(response.data[0]);
      } catch (error) {
        console.error("Error fetching vehicle data:", error);
      }
    };

    getValetData();
  }, [id]);

  console.log(valetData);

  return (
    <div className="max-w-7xl bg-white drop-shadow-xl border border-black/20 w-full rounded-md flex justify-center items-center p-10">
      <div className="text-center">
        <h1 className="text-2xl sm:text-3xl font-semibold text-[#000] mb-5">
          Admin Settings
        </h1>
        <div className="gap-6 h-[600px] overflow-y-auto">
          <div
            key={valetData.id}
            className="card bg-base-100 shadow-xl mb-3 mr-3 max-w-200 max-h-200"
          >
            <div className="card-body items-center text-center">
              <h2 className="card-title">Garage Information</h2>
              <p className="text-[#000]">{valetData.name}</p>
              <p className="text-[#000]">{`${valetData.address}, ${valetData.city}, ${valetData.state}, ${valetData.country}, ${valetData.zip}`}</p>
              <p className="text-[#000]">{`Latitude: ${valetData.lat}`}</p>
              <p className="text-[#000]">{`Longitude: ${valetData.lng}`}</p>
            </div>
          </div>
          <div className="stats shadow">
            <div className="stat">
              <div className="stat-title">Number of Parking Spots</div>
              <div className="stat-value">{valetData.spots}</div>
              <button
                className="btn btn-ghost text-blue-500"
                onClick={() =>
                  document.getElementById("my_modal_3").showModal()
                }
              >
                <svg
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10"
                  />
                </svg>
                Edit
              </button>
              <dialog id="my_modal_3" className="modal">
                <div className="modal-box">
                  <form method="dialog">
                    <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
                      ✕
                    </button>
                  </form>
                  <h3 className="font-bold text-lg">Hello!</h3>
                  <p className="py-4">
                    Press ESC key or click on ✕ button to close
                  </p>
                </div>
              </dialog>
            </div>
          </div>
          <div className="stats shadow">
            <div className="stat">
              <div className="stat-title">Hours of Operation</div>
              <div className="stat-value">{valetData.operation_hours}</div>
              <button className="btn btn-ghost text-blue-500">
                <svg
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10"
                  />
                </svg>
                Edit
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminSettings;

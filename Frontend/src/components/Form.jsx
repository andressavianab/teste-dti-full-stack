import * as yup from "yup";
import { useState } from "react";
import { api } from "../services/api";
import { Modal } from "./Modal";

export const Form = () => {
  const [date, setDate] = useState();
  const [quantitySmallDog, setQuantitySmallDog] = useState("0");
  const [quantityBigDog, setQuantityBigDog] = useState("0");
  const [errorMessage, setErrorMessage] = useState("");
  const [errorMessageVisible, setErrorMessageVisible] = useState(true);
  const [message, setMessage] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);


  const validate = async () => {
    let schema = yup.object().shape({
      date: yup.date().required(),
      quantitySmallDog: yup.string().required(),
      setQuantityBigDog: yup.string().required(),
    });

    try {
      await schema.validate({
        date: date,
        quantitySmallDog: quantitySmallDog,
        setQuantityBigDog: setQuantityBigDog,
      });
      return true;
    } catch (error) {
      console.log(error);
      return false;
    }
  };

  const hideErrorMessage = () => {
    setErrorMessageVisible(false);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;
    api
      .post("/calc", {
        date: date,
        quantitySmallDog: quantitySmallDog,
        quantityBigDog: quantityBigDog,
      })
      .then(function (response) {
        const { bestPetshop, totalCost, distance } = response.data;
        setMessage([bestPetshop, totalCost, distance]);
        setIsModalOpen(true);
      })
      .catch(function (error) {
        console.log(error)
        setErrorMessage(error.response.data.error);
        setErrorMessageVisible(true);
      });
    setDate("");
    setQuantitySmallDog("0");
    setQuantityBigDog("0");
  };
  

  return (
    <form
      onSubmit={handleSubmit}
      className="max-h-[550px] mb-3 mt-3 bg-[#303030] max-w-md w-full gap-1 h-full p-7 rounded-lg"
      action=""
    >
      <div className="max-w-md font-Popins text-slate-50 flex flex-col gap-4">
        <div className="flex flex-col gap-2 pt-4 pb-4 max-h-80">
          <label htmlFor="date">Data:</label>
          <input
            className="h-14 p-5 rounded-lg focus:outline text-[#303030] bg-[#fff5ee]"
            type="date"
            name="date"
            id="date"
            onChange={(e) => setDate(e.target.value)}
            value={date}
            onFocus={hideErrorMessage}
          />
        </div>
        <div className="flex flex-col gap-2 pt-4 pb-4">
          <label htmlFor="quantitySmallDog">Cachorros pequenos:</label>
          <input
            className="h-14 p-5 rounded-lg focus:outline text-[#303030] bg-[#fff5ee]"
            type="number"
            name="quantitySmallDog"
            id="quantitySmallDog"
            onChange={(e) => setQuantitySmallDog(e.target.value)}
            value={quantitySmallDog}
            min="0"
            onFocus={hideErrorMessage}
          />
        </div>
        <div className="flex flex-col gap-2 pt-4 ">
          <label htmlFor="quantityBigDog">Cachorros grandes:</label>
          <input
            className="h-14 p-5 rounded-lg focus:outline text-[#303030] bg-[#fff5ee]"
            type="number"
            name="quantityBigDog"
            id="quantityBigDog"
            onChange={(e) => setQuantityBigDog(e.target.value)}
            value={quantityBigDog}
            min="0"
            onFocus={hideErrorMessage}
          />
          <div>
            {errorMessageVisible && (
              <span className="text-xs text-[#ff0000] font-bold">
                {errorMessage ? (
                  <span className="flex items-center">
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M12 22C10.0222 22 8.08879 21.4135 6.4443 20.3147C4.79981 19.2159 3.51809 17.6541 2.76121 15.8268C2.00433 13.9996 1.8063 11.9889 2.19215 10.0491C2.578 8.10929 3.53041 6.32746 4.92894 4.92894C6.32746 3.53041 8.10929 2.578 10.0491 2.19215C11.9889 1.8063 13.9996 2.00433 15.8268 2.76121C17.6541 3.51809 19.2159 4.79981 20.3147 6.4443C21.4135 8.08879 22 10.0222 22 12C21.9971 14.6513 20.9426 17.1931 19.0679 19.0679C17.1931 20.9426 14.6513 21.9971 12 22V22ZM12 15C11.8022 15 11.6089 15.0587 11.4444 15.1685C11.28 15.2784 11.1518 15.4346 11.0761 15.6173C11.0004 15.8 10.9806 16.0011 11.0192 16.1951C11.0578 16.3891 11.153 16.5673 11.2929 16.7071C11.4328 16.847 11.6109 16.9422 11.8049 16.9808C11.9989 17.0194 12.2 16.9996 12.3827 16.9239C12.5654 16.8482 12.7216 16.72 12.8315 16.5556C12.9414 16.3911 13 16.1978 13 16C13 15.7348 12.8946 15.4804 12.7071 15.2929C12.5196 15.1054 12.2652 15 12 15ZM12 7C11.7348 7 11.4804 7.10536 11.2929 7.2929C11.1054 7.48043 11 7.73479 11 8V13C11 13.2652 11.1054 13.5196 11.2929 13.7071C11.4804 13.8946 11.7348 14 12 14C12.2652 14 12.5196 13.8946 12.7071 13.7071C12.8946 13.5196 13 13.2652 13 13V8C13 7.73479 12.8946 7.48043 12.7071 7.2929C12.5196 7.10536 12.2652 7 12 7Z"
                        fill="#ff0000"
                        id="id_101"
                      ></path>
                    </svg>{" "}
                    <p>{errorMessage}</p>
                  </span>
                ) : (
                  ""
                )}
              </span>
            )}
          </div>
        </div>
        <div className="pt-4 pb-3">
          <button
            className="w-full rounded-lg h-16 font-bold bg-[#5dc999] hover:bg-[#44ad7e] text-[#303030]"
            type="submit"
          >
            Enviar
          </button>
          <div className="text-slate-900">
            <Modal isOpen={isModalOpen} message={message} onClose={() => setIsModalOpen(false)} />
          </div>
        </div>
      </div>
    </form>
  );
};

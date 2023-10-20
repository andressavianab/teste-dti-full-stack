export const Modal = ({ isOpen, message, onClose }) => {
  if (!isOpen) {
    return null;
  }

  return (
    <div
      className={`fixed inset-0 flex justify-center items-center px-2 transition-colors  ${
        open ? "visible bg-black/20" : "invisible"
      }`}
    >
      <div
        className={`bg-white w-96 h-96 rounded-xl shadow pt-10 px-6 transition-all 
           "scale-100 opacity-100" : "scale-125 opacity-0"
        `}
      >
        <div className="flex flex-col items-center gap-3">
          <div className="flex flex-col items-center gap-3">
            <p>Melhor petshop: </p>
            <h1 className="text-5xl uppercase font-bold text-center">{message[0]}</h1>
          </div>
          <div className="flex flex-col items-center gap-3">
            <p>Custo total: </p>
            <h1 className="text-5xl uppercase font-bold">R$ {message[1]},00</h1>
          </div>
          <div>
            <p>Distância: <span className="font-bold">{message[2]}</span>m</p>
          </div>
          <button
            className="bg-red-700 w-60 mt-3 p-3 rounded-lg hover:bg-red-600 font-bold"
            onClick={onClose}
          >
            Fechar
          </button>
        </div>
      </div>
    </div>
  );
};

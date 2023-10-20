import walkDog from "../assets/img/passear-com-o-animal-de-estimacao.png";
import { Form } from "../components/Form";

export const CalculatorPage = () => {
  return (
    <main className="w-full flex flex-col">
      <div className="flex w-full">
        <div className="w-5/12 justify-center items-center hidden lg:flex">
          <div>
            <img src={walkDog} alt="Pessoa passeando com um cachorro." />
          </div>
        </div>
        <div className="lg:w-7/12 p-10 w-full">
          <div className="text-4xl font-Bebas-Neue tracking-wide text-[#303030] flex flex-col gap-3">
            <div>
              Encontre o{" "}
              <span className="text-[#5dc999]">paraíso dos cães</span> com
              apenas alguns cliques!
            </div>
            <div>
              o nosso site vai ajudá-lo a encontrar os{" "}
              <span className="text-[#5dc999]">
                petshops mais acessíveis{" "}
                <span className="text-[#303030]">e</span> próximos
              </span>
              .
            </div>
            <div>
              Cuide do seu pet,{" "}
              <span className="text-[#5dc999]">cuide do seu bolso</span>!
            </div>
          </div>
        </div>
      </div>
      <div className="w-full border-t border-b border-black flex justify-center">
        <Form />
      </div>
    </main>
  );
};

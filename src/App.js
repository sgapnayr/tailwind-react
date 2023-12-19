import { pageWrapper } from "./css/styles";

function App() {
  const cardColor =
    "bg-whatevercolornameIWant w-[350px] p-4 rounded-md text-white shadow-md";

  return (
    <div className={pageWrapper}>
      <div className={cardColor}>
        <div className="text-2xl font-bold mb-85">Ryan Pags</div>
        <div className="opacity-50">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. At optio
          nobis, illum quasi consectetur, laudantium sunt dicta ad magni
          reiciendis ex sapiente exercitationem, nostrum eaque dolore iste
          doloremque praesentium maxime!
        </div>
      </div>
    </div>
  );
}

export default App;

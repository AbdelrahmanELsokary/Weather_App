export function Card3() {
  return (
    <>
      <div className="bg-[#24353E] p-9 pt-20 relative text-white rounded-3xl ">
        <img src="/public/assets/images/rain.webp" alt="rain image" className=" absolute right-0 top-[-60px]" />
        <h3 className="text-4xl font-bold leading-[65px] ">
          Gilan <span className="font-extralight pl-3">23°C</span>
        </h3>
        <span className=" block text-[25px] leading-[65px]">
          wind speed :<span className=" font-extralight"> 23 km</span>
        </span>
        <span className=" block text-[25px] leading-[65px]">
          Tuesday :<span className=" font-extralight"> 19:52</span>
        </span>
        <span className=" text-[25px]">Rainy</span>
      </div>
    </>
  );
}

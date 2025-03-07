export function Card2() {
  return (
    <>
      <div className="bg-[#24353E] p-9 pt-20 relative text-white rounded-3xl ">
        <img src="/assets/images/sun.webp" alt="sun image" className=" absolute right-0 top-[-60px]" />
        <h3 className="text-4xl font-bold leading-[65px] ">
        Qom  <span className="font-extralight pl-3">41°C</span>
        </h3>
        <span className=" block text-[25px] leading-[65px]">
          wind speed :<span className=" font-extralight"> 5 km</span>
        </span>
        <span className=" block text-[25px] leading-[65px]">
          Tuesday :<span className=" font-extralight"> 19:52</span>
        </span>
        <span className=" text-[25px]">Sunny</span>
      </div>
    </>
  );
}

export function Card1() {
  return (
    <>
      <div className="bg-[#24353E] p-9 pt-20 relative text-white rounded-3xl ">
        <img src="/public/assets/images/cloud.webp" alt="cloudy image" className=" absolute right-[-10px] top-[-60px]" />
        <h3 className="text-4xl font-bold leading-[65px] ">
          Tehran<span className="font-extralight pl-3">35°C</span>
        </h3>
        <span className=" block text-[25px] leading-[65px]">
          wind speed :<span className=" font-extralight"> 11 km</span>
        </span>
        <span className=" block text-[25px] leading-[65px]">
          Tuesday :<span className=" font-extralight"> 19:52</span>
        </span>
        <span className=" text-[25px]">Cloudy</span>
      </div>
    </>
  );
}

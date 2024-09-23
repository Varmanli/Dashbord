import icon from "../../../public/icon/Shape.svg";

function Card({ children, title, description, className, details }) {
  return (
    <div
      className={`md:h-[400px] flex flex-col justify-between gap-[20px] p-[16px]  md:gap-0 border-t border-t-white shadow-[0_0px_2px_0px_rgba(0,0,0,0.12),_0_2px_4px_0px_rgba(0,0,0,0.14)] rounded-lg relative ${className}`}
    >
      <div className="flex justify-between items-center ">
        <div>
          <h2 className="text-[#242424] leading-5 text-[15px] font-semibold">
            {title}
          </h2>
          <p className="text-[12px] leading-4 text-[#616161] hidden md:block">
            {description}
          </p>
        </div>
        <button className="text-[#424242]">
          <img src={icon} alt="" />
        </button>
      </div>
      <div className="w-[326px] md:w-auto  ">{children}</div>
      {details && (
        <div className="text-right md:text-left mt-3">
          <button className="font-sans text-[15px] font-semibold leading-[20px]  tracking-[-0.23px] text-[#5B5FC7]">
            View details
          </button>
        </div>
      )}
    </div>
  );
}

export default Card;

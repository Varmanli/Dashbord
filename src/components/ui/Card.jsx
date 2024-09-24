function Card({ children, title, description, className, details }) {
  return (
    <div
      className={`lg:h-[400px] xl:h-auto flex flex-col justify-between gap-[20px] p-[16px]  md:gap-0 border-t border-t-white shadow-[0_0px_2px_0px_rgba(0,0,0,0.12),_0_2px_4px_0px_rgba(0,0,0,0.14)] rounded-lg relative ${className}`}
    >
      <div className="flex justify-between items-center ">
        <div>
          <h2 className="text-secendery leading-5 text-[15px] font-semibold">
            {title}
          </h2>
          <p className="text-[12px] leading-4 text-[#616161] hidden md:block">
            {description}
          </p>
        </div>
        <button className="text-gray1">
          <svg
            width="32"
            height="32"
            viewBox="0 0 33 32"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M13 16C13 16.6904 12.4404 17.25 11.75 17.25C11.0596 17.25 10.5 16.6904 10.5 16C10.5 15.3096 11.0596 14.75 11.75 14.75C12.4404 14.75 13 15.3096 13 16ZM18 16C18 16.6904 17.4404 17.25 16.75 17.25C16.0596 17.25 15.5 16.6904 15.5 16C15.5 15.3096 16.0596 14.75 16.75 14.75C17.4404 14.75 18 15.3096 18 16ZM21.75 17.25C22.4404 17.25 23 16.6904 23 16C23 15.3096 22.4404 14.75 21.75 14.75C21.0596 14.75 20.5 15.3096 20.5 16C20.5 16.6904 21.0596 17.25 21.75 17.25Z"
              fill="#424242"
            />
          </svg>
        </button>
      </div>
      <div className="w-[326px] md:w-auto  ">{children}</div>
      {details && (
        <div className="text-right md:text-left mt-3">
          <button className="font-sans text-[15px] font-semibold leading-[20px]  tracking-[-0.23px] text-primary ">
            View details
          </button>
        </div>
      )}
    </div>
  );
}

export default Card;

function ToolBar() {
  return (
    <div className="flex items-center  justify-between s gap-4 px-4 py-2 border-b">
      <div className="flex items-center space-x-3">
        <button>
          <svg
            width="16"
            height="11"
            viewBox="0 0 16 11"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0 0.5C0 0.223858 0.223858 0 0.5 0H15.5C15.7761 0 16 0.223858 16 0.5C16 0.776142 15.7761 1 15.5 1H0.5C0.223858 1 0 0.776142 0 0.5ZM0 5.5C0 5.22386 0.223858 5 0.5 5H15.5C15.7761 5 16 5.22386 16 5.5C16 5.77614 15.7761 6 15.5 6H0.5C0.223858 6 0 5.77614 0 5.5ZM0.5 10C0.223858 10 0 10.2239 0 10.5C0 10.7761 0.223858 11 0.5 11H15.5C15.7761 11 16 10.7761 16 10.5C16 10.2239 15.7761 10 15.5 10H0.5Z"
              fill="#424242"
            />
          </svg>
        </button>
        <button className="flex items-center pl-2 gap-3 w-[92px] h-[32px] rounded bg-primary text-white text-sm font-semibold">
          <span className="w-4 h-4 border-[1.3px] border-white rounded-full flex items-center justify-center">
            <span className="w-2 h-2 rounded-full"></span>
          </span>
          <div className="flex items-center gap-2">
            <p>Text</p>
            <button>
              <svg
                width="8"
                height="10"
                className="mt-[2px]"
                viewBox="0 0 8 5"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M0.146447 0.646447C0.341709 0.451184 0.658291 0.451184 0.853553 0.646447L4 3.79289L7.14645 0.646447C7.34171 0.451184 7.65829 0.451184 7.85355 0.646447C8.04882 0.841709 8.04882 1.15829 7.85355 1.35355L4.35355 4.85355C4.15829 5.04882 3.84171 5.04882 3.64645 4.85355L0.146447 1.35355C-0.0488155 1.15829 -0.0488155 0.841709 0.146447 0.646447Z"
                  fill="white"
                />
              </svg>
            </button>
          </div>
        </button>
        {Array(2)
          .fill(0)
          .map((_, index) => (
            <button
              key={index}
              className="flex items-center gap-2 px-4 py-2 rounded-lg text-gray1 text-sm font-semibold"
            >
              <button className="w-[14px] h-[14px] border-[1.3px] border-gray1 rounded-full flex items-center justify-center">
                <span className="w-2 h-2 bg-transparent rounded-full"></span>
              </button>
              <span>Text</span>
            </button>
          ))}
        <div className="w-px h-6 bg-[#D1D1D1] mx-4"></div>
        {Array(3)
          .fill(0)
          .map((_, index) => (
            <button
              key={index}
              className="lg:flex items-center gap-2 px-4 py-2 rounded-lg text-gray1 text-sm font-semibold hidden"
            >
              <button className="w-[14px] h-[14px] border-[1.3px] border-gray1 rounded-full flex items-center justify-center">
                <span className="w-2 h-2 bg-transparent rounded-full"></span>
              </button>
              <span>Text</span>
            </button>
          ))}
        <div className="w-px h-6 bg-[#D1D1D1] mx-4 hidden lg:block"></div>
        {Array(2)
          .fill(0)
          .map((_, index) => (
            <button
              key={index}
              className="lg:flex items-center gap-2 px-4 py-2 rounded-lg text-gray1 text-sm font-semibold hidden "
            >
              <button className="w-[14px] h-[14px] border-[1.3px] border-gray1 rounded-full flex items-center justify-center">
                <span className="w-2 h-2 bg-transparent rounded-full"></span>
              </button>
              <span>Text</span>
            </button>
          ))}
      </div>
      <div className="flex items-center gap-4">
        <h2 className="text-gray1 font-semibold leading-5">Filter</h2>
        <div className="flex items-center rounded border-2 px-2 py-1 border-b-black/60">
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M8.5 3C11.5376 3 14 5.46243 14 8.5C14 9.83879 13.5217 11.0659 12.7266 12.0196L16.8536 16.1464C17.0488 16.3417 17.0488 16.6583 16.8536 16.8536C16.68 17.0271 16.4106 17.0464 16.2157 16.9114L16.1464 16.8536L12.0196 12.7266C11.0659 13.5217 9.83879 14 8.5 14C5.46243 14 3 11.5376 3 8.5C3 5.46243 5.46243 3 8.5 3ZM8.5 4C6.01472 4 4 6.01472 4 8.5C4 10.9853 6.01472 13 8.5 13C10.9853 13 13 10.9853 13 8.5C13 6.01472 10.9853 4 8.5 4Z"
              fill="#616161"
            />
          </svg>
          <input
            type="text"
            placeholder="Find"
            className="focus:outline-none w-[150px]"
          />
        </div>
      </div>
    </div>
  );
}

export default ToolBar;

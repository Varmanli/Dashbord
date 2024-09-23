function DesktopNav() {
  return (
    <div className="flex items-center justify-between w-full h-[60px] px-5 border-b">
      <div className="flex items-center gap-4">
        <div className="flex items-center gap-3">
          <img
            src="/images/Avatar2.png"
            alt="Avatar"
            className="w-[32px] h-[32px] rounded"
          />
          <h2 className="text-[18px] leading-6 font-bold">Van Arsdel</h2>
        </div>
        <nav>
          <ul className="flex w-[277px] justify-around items-center">
            <li className="text-[#242424] text-sm leading-5 font-semibold relative">
              Home
              <span className="w-[35px] h-[4px] rounded-tr-full rounded-tl-full bg-[#5B5FC7] absolute left-0 right-0 bottom-[-20px]"></span>
            </li>
            <li className="text-[#424242] text-sm leading-5">Timeline </li>
            <li className="text-[#424242] text-sm leading-5">Chat</li>
            <li className="text-[#424242] text-sm leading-5">Asigned to you</li>
          </ul>
        </nav>
      </div>

      <div className="flex items-center gap-3">
        <button className="w-[20px] h-[20px]">
          <svg
            width="14"
            height="14"
            viewBox="0 0 14 14"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M6.51562 3C6.23948 3 6.01562 3.22386 6.01562 3.5C6.01562 3.77614 6.23948 4 6.51562 4H9.29289L5.14645 8.14645C4.95118 8.34171 4.95118 8.65829 5.14645 8.85355C5.34171 9.04882 5.65829 9.04882 5.85355 8.85355L10 4.70711V7.48438C10 7.76052 10.2239 7.98438 10.5 7.98438C10.7761 7.98438 11 7.76052 11 7.48438V3.5C11 3.22386 10.7761 3 10.5 3H6.51562ZM9.76562 14C11.0136 14 12.0481 13.0855 12.2354 11.8901C13.2572 11.5761 14 10.6248 14 9.5V2.5C14 1.11929 12.8807 0 11.5 0H4.5C3.36321 0 2.40363 0.758746 2.10007 1.79744C0.909465 1.98887 0 3.02104 0 4.26562V10.5C0 12.433 1.567 14 3.5 14H9.76562ZM1 4.26562C1 3.61252 1.4174 3.0569 2 2.85098V9.5C2 10.8807 3.11929 12 4.5 12H11.1803C10.9744 12.5826 10.4187 13 9.76562 13H3.5C2.11929 13 1 11.8807 1 10.5V4.26562ZM4.5 1H11.5C12.3284 1 13 1.67157 13 2.5V9.5C13 10.3284 12.3284 11 11.5 11H4.5C3.67157 11 3 10.3284 3 9.5V2.5C3 1.67157 3.67157 1 4.5 1Z"
              fill="#424242"
            />
          </svg>
        </button>
        <button className="w-[20px] h-[20px]">
          <svg
            width="13"
            height="4"
            viewBox="0 0 13 4"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M3 2C3 2.69036 2.44036 3.25 1.75 3.25C1.05964 3.25 0.5 2.69036 0.5 2C0.5 1.30964 1.05964 0.75 1.75 0.75C2.44036 0.75 3 1.30964 3 2ZM8 2C8 2.69036 7.44036 3.25 6.75 3.25C6.05964 3.25 5.5 2.69036 5.5 2C5.5 1.30964 6.05964 0.75 6.75 0.75C7.44036 0.75 8 1.30964 8 2ZM11.75 3.25C12.4404 3.25 13 2.69036 13 2C13 1.30964 12.4404 0.75 11.75 0.75C11.0596 0.75 10.5 1.30964 10.5 2C10.5 2.69036 11.0596 3.25 11.75 3.25Z"
              fill="#424242"
            />
          </svg>
        </button>
      </div>
    </div>
  );
}

export default DesktopNav;

import type { V2_MetaFunction } from "@remix-run/node";

export const meta: V2_MetaFunction = () => {
  return [
    { title: "Home - Viticket" },
    { name: "description", content: "Create your event ticket" },
  ];
};

export default function Index() {
  return (
    <div className="text-white bg-black py-6 sm:py-8 lg:py-12 ">
     <div className="flex justify-between items-center">
      <div className=" flex justify-center items-center gap-3 text-xs text-yellow-300">get the<svg width="25" className="mt-[6px]" height="2" viewBox="0 0 25 2" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect x="0.28125" y="0.484344" width="24" height="1" fill="#EDF738"/>
</svg>feel</div>
      <div className=" text-yellow-300 flex-col flex justify-center items-center">   
        <svg width="33" height="34" viewBox="0 0 33 34" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g clip-path="url(#clip0_4_4102)">
            <path d="M26.5389 13.5356C27.1028 13.7141 27.4247 14.0157 27.4992 14.4457C27.5738 14.8756 27.414 15.3341 27.0256 15.8157C26.6089 16.3244 26.1067 16.6645 25.5358 16.8306C23.3366 17.4358 20.8149 17.5002 17.9709 17.0126C19.9963 15.3968 22.2344 14.2527 24.6912 13.5639C25.3573 13.3718 25.9695 13.3623 26.5389 13.5356ZM18.8828 7.14493C19.3799 6.77694 19.8832 6.65387 20.3926 6.77582C20.7907 6.89536 21.0895 7.2409 21.3056 7.81847C21.4822 8.42301 21.4811 9.01281 21.2913 9.57632C20.7192 11.4004 19.3164 13.5745 17.0941 16.0987C16.7683 13.5771 16.9919 11.117 17.7595 8.72391C17.9789 8.06641 18.3571 7.54013 18.8828 7.14493ZM24.491 23.9916C24.5291 24.5654 24.3751 25.0185 24.0174 25.3615C23.6938 25.6719 23.2298 25.7791 22.6308 25.6888C22.059 25.6268 21.5799 25.3887 21.1933 24.9857C19.723 23.4529 18.5442 21.2808 17.6625 18.4639C19.982 19.2911 22.0351 20.6245 23.8104 22.4752C24.2243 22.9067 24.4585 23.4123 24.4912 23.9805M8.53437 11.1525C8.49855 10.4675 8.68785 9.92616 9.10227 9.52863C9.45424 9.191 9.99087 9.0686 10.7012 9.16133C11.383 9.2812 11.9499 9.57674 12.391 10.0366C13.7197 11.4218 14.8433 13.5704 15.7568 16.4659C12.7251 15.3736 10.602 14.1944 9.38219 12.9228C8.88118 12.4005 8.60399 11.816 8.53437 11.1525ZM14.9319 27.5037C14.4618 27.9001 13.9971 28.0407 13.5434 27.92C13.1453 27.8004 12.8574 27.4662 12.674 26.9227C12.4917 26.3236 12.4928 25.7338 12.6883 25.1648C13.5151 22.5949 14.7108 20.4778 16.2811 18.808C16.7091 21.5041 16.6046 23.8498 15.9733 25.8507C15.7526 26.5639 15.4017 27.1185 14.9316 27.5149M6.91799 21.4562C6.38377 21.1948 6.06365 20.8042 5.96869 20.2848C5.86579 19.8821 6.02561 19.4237 6.4423 18.9149C6.8579 18.4618 7.35402 18.1494 7.93039 17.9889C10.1295 17.3837 12.6179 17.3186 15.4062 17.805C12.9962 19.7244 10.7276 20.9958 8.58976 21.5967C8.00763 21.7626 7.4522 21.7177 6.91799 21.4562Z" fill="#EDF738"/>
            </g>
            <defs>
            <clipPath id="clip0_4_4102">
            <rect width="22.6721" height="20.1529" fill="white" transform="translate(16.9707 32.1211) rotate(-133.808)"/>
            </clipPath>
          </defs>
        </svg>      
        <svg width="508" height="222" viewBox="0 0 508 222" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g clip-path="url(#clip0_4_4091)">
            <path d="M0.0527344 2.30771C36.2538 2.30771 65.5891 50.4623 65.5891 109.888C65.5891 169.314 36.2538 217.469 0.0527344 217.469" stroke="#EDF738" stroke-opacity="0.4" stroke-width="0.918685"/>
            <path d="M254.198 142.335C228.358 150.789 195.539 155.977 161.397 155.977C74.0155 155.977 3.11133 123.352 3.11133 83.0872C3.11133 42.8226 74.0155 10.1977 161.397 10.1977C199.721 10.1977 226.798 13.6122 254.198 24.0697" stroke="#EDF738" stroke-opacity="0.4" stroke-width="0.918685"/>
            <path d="M254.198 196.044C226.797 206.563 200.031 209.514 161.583 209.514C74.201 209.514 3.29688 176.827 3.29688 136.625C3.29688 96.4223 74.201 63.6725 161.583 63.6725C195.724 63.6725 228.243 68.4943 254.083 76.9479" stroke="#EDF738" stroke-opacity="0.4" stroke-width="0.918685"/>
            <path d="M506.867 217.469C470.667 217.469 441.331 169.314 441.331 109.888C441.331 50.4623 470.667 2.30771 506.867 2.30771" stroke="#EDF738" stroke-opacity="0.4" stroke-width="0.918685"/>
            <path d="M253.896 77.2636C279.737 68.8099 311.381 63.8003 345.523 63.8003C432.905 63.8003 503.809 96.425 503.809 136.69C503.809 176.954 432.967 209.579 345.523 209.579C307.2 209.579 281.599 206.501 254.198 196.044" stroke="#EDF738" stroke-opacity="0.4" stroke-width="0.918685"/>
            <path d="M254.198 24.0698C281.598 13.5497 307.013 10.0098 345.46 10.0098C432.842 10.0098 503.746 42.6347 503.746 82.8992C503.746 123.163 432.904 155.789 345.46 155.789C311.319 155.789 280.038 150.789 254.198 142.335" stroke="#EDF738" stroke-opacity="0.4" stroke-width="0.918685"/>
            <path d="M256.581 218.283C336.416 218.283 401.136 169.754 401.136 109.888C401.136 50.0235 336.416 1.49353 256.581 1.49353C176.746 1.49353 112.026 50.0235 112.026 109.888C112.026 169.754 176.746 218.283 256.581 218.283Z" stroke="#EDF738" stroke-opacity="0.4" stroke-width="0.918685"/>
            <path d="M254.209 1.49353V218.283" stroke="#EDF738" stroke-opacity="0.4" stroke-width="0.918685"/>
            </g>
            <defs>
            <clipPath id="clip0_4_4091">
            <rect width="507.114" height="220.484" fill="white" transform="translate(0.0527344 0.742157)"/>
            </clipPath>
            </defs>
        </svg>
      <div className="absolute">
        <h1 className=" font-extrabold text-[100px]  ">
          Make it SL<span className=" transform-gpu rotate-90">E</span><span>E</span>K</h1></div>
      <p className=" text-sm w-[300px] z-30">
        Ease of managing tickets for your events.

        Take a closer step into effectively organising your events, 
        manage ticket sales and seats from one dashboard, we can make it work together.
      </p>
      </div>
      <div className=" flex justify-center items-center gap-3 text-xs text-yellow-300">capture 
      <svg width="25" className="mt-[6px]" height="2" viewBox="0 0 25 2" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="0.28125" y="0.484344" width="24" height="1" fill="#EDF738"/>
      </svg>your event</div>
     </div>
    </div>
  );
}
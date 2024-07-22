import React from "react";

export const Brand = () => {
  return (
    <div>
      <div className="pb-[80px]">
        <div>
          <div>
            <h1 className="text-transform: uppercase; mb-[16px] text-[16px] font-[500px] text-[#999]">
              BY BRAND
            </h1>
            <ul className="flex justify-between">
              <li className="w-[370px]">
                <h1 className="mb-[20px] text-[60px] font-[700] text-white">
                  selection by brands{" "}
                </h1>
                <button className="flex items-center gap-[15px] rounded-[30px] bg-[#F1C25F] pb-[13px] pl-[40px] pr-[60px] pt-[13px] text-[16px] font-[500] text-[#000000]">
                  <span>by brand</span>
                </button>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

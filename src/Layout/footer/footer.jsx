import React from "react";
import { Post } from "../../components/Svgs/Post";
import { Location } from "../../components/Svgs/Location";
import { Instagram } from "../../components/Svgs/Instagram";
import { Telegram } from "../../components/Svgs/Telegram";
import { Facebook } from "../../components/Svgs/Facebook";

export const Footer = () => {
  return (
    <div className="container pb-[30px]">
      <div>
        <img src="/footer-img.png" alt="img" />
      </div>
      <div className="mt-[8px] rounded-[20px] bg-[#262626] pb-[68px] pl-[40px] pr-[240px] pt-[40px]">
        <h1 className="mb-[30px] text-[12px] font-[700] text-[#f1c05b]">
          All or Nothing
        </h1>
        <ul className="flex justify-between">
          <li>
            <div className="flex flex-col">
              <a
                className="mb-[16px] text-[16px] font-[500] text-[#999]"
                href="#"
              >
                + 94 099 4001
              </a>
              <a
                className="mb-[16px] text-[16px] font-[500] text-[#999]"
                href="#"
              >
                + 94 099 4001
              </a>
            </div>
          </li>
          <li>
            <p className="mb-[16px] cursor-pointer text-[16px] font-[500] text-[#999]">
              Biz haqimizda
            </p>
            <p className="cursor-pointer text-[16px] font-[500] text-[#999]">
              Ish vaqti 11:00 - 23:00
            </p>
          </li>
          <li>
            <div className="w-[250px]">
              <div className="mb-[8px] flex items-center gap-2 rounded-[8px] bg-[#808080] pb-[6px] pl-[14px] pr-[14px] pt-[6px]">
                <Post />
                <a href="#">allornothing.uz@gmail.com</a>
              </div>
            </div>
            <div className="flex items-center gap-2 rounded-[8px] bg-[#808080] pb-[6px] pl-[14px] pr-[14px] pt-[6px]">
              <Location />
              <a href="#">T.sh Moirobod tuman. Fidokor 10. 4a uy </a>
            </div>
          </li>
          <li>
            <a href="#" className="flex">
              <Instagram />
              <Facebook />
              <Telegram />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

import React from "react";
import { COMPANY_LOGO } from "../../constants/companyLogo";

const IMG_BASE_URL = "https://image.tmdb.org/t/p/original/";

function CompanyList() {
  return (
    <div className="my-10">
      <ul className="flex justify-between gap-4">
        {COMPANY_LOGO.map((v) => (
          <li className="h-30 flex-shrink-0 basis-1/6 rounded border border-lightBlue bg-white p-4">
            <button className="h-full w-full">
              <img
                src={`${IMG_BASE_URL}${v.logo_path}`}
                alt={`${v.company}로고 이미지`}
                className="object-contain"
              />
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default CompanyList;

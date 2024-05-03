import React from "react";
import Image from "next/image";
import { getHomePage } from "@/sanity/queries/getHomePage";
import { urlForImage } from "@/sanity/lib/image";

async function LeftSide() {
  const LeftSidedata = await getHomePage();

  return (
    <div className="flex my-16 py-20 sm:py-24 mt-20 md:mt-40 mr-auto w-full lg:py-20 md:w-2/3 flex-wrap-reverse md:flex-nowrap items-center bg-gray-100 rounded-lg shadow-md">
      <div className="w-full mx-auto max-w-xl px-6 lg:max-w-7xl lg:px-8 md:w-1/2 mb-4 md:mb-0 md:mr-6">
        <Image
          src={urlForImage(LeftSidedata.sideBySideSections[0].image).url()}
          alt="Descriptive Alt Text"
          className="w-full h-auto rounded-md shadow-sm"
          height={500}
          width={500}
        />
      </div>
      <div className="w-full px-4 md:w-1/2">
        <h3 className="text-2xl text-center font-bold mb-4">
          {LeftSidedata.sideBySideSections[0].heading}
        </h3>
        <p className="text-gray-700 px-4 text-center mb-4">
          {LeftSidedata.sideBySideSections[0].description}
        </p>
        <a
          href={LeftSidedata.sideBySideSections[0].ctaLink}
          className="text-blue-600 font-semibold text-lg my-6 flex justify-center hover:underline"
        >
          {LeftSidedata.sideBySideSections[0].ctaLabel}
        </a>
      </div>
    </div>
  );
}

async function RightSide() {
  const RightSidedata = await getHomePage();
  return (
    <div className="flex my-16 py-20 sm:py-24 md:mt-40 mt-20 md:mb-40 ml-auto w-full lg:py-20  md:w-2/3 flex-wrap-reverse md:flex-nowrap items-center bg-gray-100 rounded-lg shadow-md">
      <div className="w-full mx-auto max-w-xl px-6 lg:max-w-7xl lg:px-8 md:w-1/2 mb-4 md:mb-0 md:ml-6">
        <Image
          src={urlForImage(RightSidedata.sideBySideSections[1].image).url()}
          alt="Descriptive Alt Text"
          className="w-full h-auto rounded-md shadow-sm"
          height={500}
          width={500}
        />
      </div>
      <div className="w-full px-4 md:w-1/2">
        <h3 className="text-2xl px-4 text-center font-bold mb-4">
          {RightSidedata.sideBySideSections[1].heading}
        </h3>
        <p className="text-gray-700 px-4 text-center mb-4">
          {RightSidedata.sideBySideSections[1].description}
        </p>
        <a
          href={RightSidedata.sideBySideSections[1].ctaLink}
          className="text-blue-600 font-semibold text-lg my-6 flex justify-center hover:underline"
        >
          {RightSidedata.sideBySideSections[1].ctaLabel}
        </a>
      </div>
    </div>
  );
}
export default function SideBySide() {
  return (
    <div className="  md:mt-40 bg-white  mx-auto">
      <LeftSide />
      <div className="h-20 lg:h-40" />
      <RightSide />
    </div>
  );
}

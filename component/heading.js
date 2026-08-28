import React from "react";

const Heading = ({ id, children }) => {
  return (
    <div className="flex mt-9 w-full">
      <hr className="border-gray-950 w-full mt-4" />
      <h2
        id={id}
        className="text-3xl font-bold text-gray-950 dark:text-white px-5 scroll-mt-20"
      >
        {children}
      </h2>
      <hr className="border-gray-950 w-full mt-4" />
    </div>
  );
};

export default Heading;

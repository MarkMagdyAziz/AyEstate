import React from "react";

function Heading() {
  return (
    <>
      <h2 className="mb-4 w-full text-start text-2xl font-bold capitalize lg:mb-[50px] lg:text-center lg:text-[44px] lg:leading-[57px]">
        Exelent customer service
      </h2>
      <p className="mt-4 px-1 text-center text-sm leading-[22px] text-app-grey-text lg:px-0">
        If you have any questions you can report them below with the following
        information, <br className="hidden lg:block" /> so that it is easy for
        us to reply to your message.
      </p>
    </>
  );
}

export default Heading;

import React from "react";

function ContactUsMap() {
  return (
    <div className="mapouter relative mt-[50px] h-[400px] w-[330px] text-right lg:h-[520px] lg:w-full">
      <div className="gmap_canvas h-[400px] w-[330px] overflow-hidden rounded-2xl bg-none lg:h-[520px] lg:w-full">
        <iframe
          title="contact us location"
          className="gmap_iframe h-[400px] w-[330px] lg:h-[520px] lg:w-full"
          src="https://maps.google.com/maps?width=340&amp;height=400&amp;hl=en&amp;q=University of Oxford&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
          style={{ border: "0" }}
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
}

export default ContactUsMap;

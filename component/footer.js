import React from "react";
import Image from "next/image";

const Footer = () => {
  return (
    <div className="w-full bg-black text-white mt-10">
      <h2 className="text-center text-2xl font-bold py-4">
        © 2026 Asaad Nadeem. All rights reserved.
      </h2>
      <hr className="border-gray-100" />
      <div className="flex flex-col md:flex-row justify-between gap-4 py-4 mx-4">
        <div className="flex flex-col gap-2">
          <div className="flex gap-2 items-center">
            <Image
              src="/location.svg"
              alt="Location"
              width={27}
              height={27}
              className="bg-white rounded-sm"
            />
            <h3 className="hover:underline cursor-pointer">
              Hostel City, Royal Avenue, Park Road, Islamabad, Pakistan
            </h3>
          </div>
          <div className="flex gap-2 items-center">
            <Image
              src="/phone.svg"
              alt="Phone"
              width={27}
              height={27}
              className="bg-white rounded-sm"
            />
            <h3 className="hover:underline cursor-pointer">+92 321 7953957</h3>
          </div>
          <div className="flex gap-2 items-center">
            <Image
              src="/gmail.svg"
              alt="Email"
              width={27}
              height={27}
              className="bg-white rounded-sm"
            />
            <h3 className="hover:underline cursor-pointer">
              asaadnadeem686@gmail.com
            </h3>
          </div>
        </div>
        <div className="flex flex-col items-center">
          <p className="text-bold py-3">Let&apos;s Connect:</p>
          <div className="flex gap-4">
            <a href="http://linkedin.com/in/asaadnadeem686" target="_blank">
              <Image src="/2504923.png" alt="LinkedIn" width={27} height={27} />
            </a>
            <a href="https://www.facebook.com/asaadnadeem686" target="_blank">
              <Image src="/2504903.png" alt="LinkedIn" width={27} height={27} />
            </a>
            <a href="https://github.com/AsaadNadeem" target="_blank">
              <Image src="/2504911.png" alt="LinkedIn" width={27} height={27} />
            </a>
          </div>
        </div>
      <Image src="/Logo.png" alt="Asaad Nadeem" height={100} width={100} className="hidden md:flex" />
      </div>
    </div>
  );
};

export default Footer;

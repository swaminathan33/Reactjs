import React from "react";
import phone from "./images/phone.svg";
import { useGlobalContext } from "./Context";

const Hero = () => {
  const { closeSubmenu } = useGlobalContext();

  return (
    <div>
      <div className="hero" onMouseOver={closeSubmenu}>
        <div className="text">
          <h3>
            Payments <br />
            infrastructure for <br />
            the internet
          </h3>
          <p>
            Millions of Companies of all sizes - from startups to Fortune
            500s-use Stripe's software and APIs to accept Payments, send payouts
            and manage their businesses online.
          </p>
          <button>Start Now</button>
        </div>
        <div className="img">
          <img src={phone} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Hero;

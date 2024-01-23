import React from "react";
import Navbar from "./Components/Navbar";
import "./App.css";
import PricingBox from "./Components/PricingBox";
import Addon from "./Components/Addon";
import Startfree from "./Components/Startfree";
import { MdArrowForwardIos } from "react-icons/md";
import { FaRegCopyright } from "react-icons/fa";

const App = () => {
  return (
    <div>
      <Navbar />
      <div className="container">
        <div className="plans-title">
          <h1>Plans & Pricing</h1>
        </div>
        <div className="middle-boxes">
          <PricingBox />
          <PricingBox />
        </div>
        <div className="addons-title">
          <p>Super charge your work with add-ons</p>
        </div>
        <div className="addons">
          <Addon />
          <Addon />
          <Addon />
        </div>
        <div className="blue-box">
          <div id="blue-box">
            <div className="text">
              It's your business.
              <br />
              We're here to help it grow.
            </div>
            <Startfree paddings={"15px 28px 15px 28px"} />
          </div>
        </div>
        <div className="faqs">
          <div className="faq-title">Frequently Asked Questions.</div>
          <div className="faq">
            <div>How does the 14 day free trial work ?</div>
            <div>
              <button>
                <MdArrowForwardIos />
              </button>
            </div>
          </div>
          <div className="faq">
            <div>what is your refund policy?</div>
            <div>
              <button>
                <MdArrowForwardIos />
              </button>
            </div>
          </div>
          <div className="faq">
            <div>Can I change plan anytime ?</div>
            <div>
              <button>
                <MdArrowForwardIos />
              </button>
            </div>
          </div>
        </div>
        <footer>
          <div>
          <ul>
                <li className="title">Product</li>
                <li>Proposals</li>
                <li>Contracts</li>
                <li>Invoicing</li>
                <li>Client CRM</li>
                <li>Time Tracking</li>
              </ul>
          </div>
          <div>
          <ul>
                <li className="title">Free Resources</li>
                <li>Freelance Resources</li>
                <li>Freelance Blog by Bonsai</li>
                <li>How to write a contract</li>
                <li>Online Signature Maker</li>
                <li>Self taxes</li>
              </ul>
          </div>
          <div>
          <ul>
                <li className="title">BONSAI</li>
                <li>About </li>
                <li>Careers</li>
                <li>Support</li>
                <li>LinkedIn</li>
                <li>Twitter</li>
              </ul>
          </div>
        </footer>
      </div>
      <div className="copyrights">
      <p>
      <FaRegCopyright /> Copyrighted 2022.
      </p>
        <span>
        Bonsai private limited.
        </span>
      </div>
    </div>
  );
};

export default App;

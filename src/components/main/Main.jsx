import React from "react";
import style from "./Main.module.css";
import Logistic from "../../assets/logistic.jpeg";
import Ondc from "../../assets/ondc.png";
import Amazon from "../../assets/amazon.png";
import Blinkit from "../../assets/blinkit.png";
import Dominos from "../../assets/dominos.png";
import Gog from "../../assets/gog.png";
import Myntra from "../../assets/myntra.png";
import Philips from "../../assets/philips.png";
import Swiggy from "../../assets/swiggy.png";
import Zomato from "../../assets/zomato.png";
import Bee from "../../assets/bee.png"
import Capital from "../../assets/capital.png"
import Matrix from "../../assets/matrix.jpeg"
import Tiger from "../../assets/tiger.jpeg"


const Main = () => {
  return (
    <div>
      <div className={style.main}>
        <div className={style.main_logistic}>
          <h3>Solving your most difficult logistics problems</h3>
          <br />
          <br />
          <p>
            Empowering businesses with tech-driven logistics solutions by
            unleashing the power of logistics entrepreneurs
          </p>
        </div>
        <div className={style.main_img}>
          <img src={Logistic} alt="" />
        </div>
      </div>

      <div className={style.track_shipment}>
        <div className={style.track_btn}>
          <button>Track Shipment</button>
          <button>Book Shipment</button>
          <button>Client Login</button>
          <button>LoadShare Rider App</button>
        </div>
      </div>
      <div className={style.logistic_step}>
        <h1>Your 1-stop logistics solution</h1>
        <div className={style.cards}>
          <div className={style.card}>
            <i class="fa-solid fa-car-side"></i>
            <p className={style.p}>Intercity</p>
            <div className={style.extras}>
              <p>National Distribution channel - PTL + FTL</p>
              <p>Primary Distribution</p>
              <p>Secondary Distribution</p>
              <p>Reverse Logistics</p>
            </div>
          </div>
          <div className={style.card}>
            <i class="fa-solid fa-map-location-dot"></i>
            <p className={style.p}>Intracity</p>
            <div className={style.extras}>
              <p>Quick Commerce</p>
              <p>On demand variable capacity warehousing</p>
              <p>Hyperlocal</p>
              <p>Direct to Retail</p>
            </div>
          </div>
          <div className={style.card}>
            <i class="fa-solid fa-warehouse"></i>
            <p className={style.p}>Go Down</p>
            <div className={style.extras}>
              <p>Fulfilment Centres</p>
              <p>Mother Hub operations</p>
              <p>On demand variable capacity warehousing</p>
              <p>Contract logistics for businesses</p>
            </div>
          </div>
        </div>
      </div>

      <div className={style.quick_fact}>
        <p className={style.factP}>QUICK FACTS</p>

        <h1>Scale + Service + Reach</h1>
        <div className={style.cardsFact}>
          <div className={style.cardFact}>
            <p>200+</p>
            <span className={style.para}>Clients</span>
          </div>
          <div className={style.cardFact}>
            <p>350t+</p>
            <span className={style.para}>Per day of PTL</span>
          </div>
          <div className={style.cardFact}>
            <p>100K+</p>
            <span className={style.para}>Trucks on the platform</span>
          </div>
          <div className={style.cardFact}>
            <p>1000+</p>
            <span className={style.para}>Pin codes</span>
          </div>
          <div className={style.cardFact}>
            <p>200K+</p>
            <span className={style.para}>LM deliveries/day</span>
          </div>
          <div className={style.cardFact}>
            <p>10000+</p>
            <span className={style.para}>Delivery partners</span>
          </div>
        </div>
      </div>

      <div className={style.load_share}>
        <div className={style.loadShare}>
          <p className={style.loadP}>OUR EXPERTISE</p>
          <h1>Loadshare Advantage</h1>
          <span>
            “Give us a shipment in Delhi and we can deliver it deep inside Bihar
            – to a customer doorstep or to a retail store”
          </span>
        </div>
        <div className={style.loadShare_cards}>
          <div className={style.loadShare_card}>
            <i class="fa-solid fa-location-dot"></i>
            <p>Reach anywhere in India</p>
            <span>
              Serving 10000+ pin codes across all metros, Tier 1 cities and deep
              coverage in East and North East
            </span>
          </div>
          <div className={style.loadShare_card}>
            <i class="fa-solid fa-hand-holding-heart"></i>
            <p>Lower your cost of Operations</p>
            <span>
              Enabling optimised operations via our deep network and technology
              to ensure lowest operational costs
            </span>
          </div>
          <div className={style.loadShare_card}>
            <i class="fa-regular fa-clipboard"></i>
            <p>Customized Logistics Solutions</p>
            <span>
              Solving most critical problems across logistics for both
              traditional and digital native enterprises through our modular and
              customizable solutions
            </span>
          </div>
          <div className={style.loadShare_card}>
            <i class="fa-solid fa-gear"></i>
            <p>Technology and Innovation</p>
            <span>
              Providing technology across WMS, TMS, Last mile modules and with
              provision to loan out tech to SME logistics service providers
            </span>
          </div>
        </div>
      </div>

      <div className={style.loadOndc}>
        <div className={style.ondc}>
          <div className={style.ondcs}>
            <p>ONDC</p>
            <h1>
              Loadshare is the first logistics NP to achieve on-network delivery
              for ONDC.
            </h1>
            <span>
              Loadshare Network is spearheading logistics delivery solutions for
              the Beta city launch of ONDC’s pilot project. Beta testing is
              taking place in 15 select cities before the national roll out.
              These cities are - Bangalore, Bhubaneswar, Chandigarh, Dehradun,
              Delhi, Guwahati, Hyderabad, Jaipur, Kolkata, Lucknow, Mumbai,
              Patna, Pune, Siliguri and Trivandrum. Loadshare Network provides
              Hyperlocal, Standard, SDD and NDD services for F&B and Groceries
              categories in these cities.
            </span>
          </div>
          <div className={style.ondcImage}>
            <img src={Ondc} alt="" />
          </div>
        </div>
      </div>

      <div className={style.our_clients}>
        <p>OUR CLIENTS</p>
        <div className={style.clients}>
          <img src={Zomato} alt="Zomato" />
          <img src={Gog} alt="Gog" />
          <img src={Philips} alt="Philips" />
          <img src={Swiggy} alt="Swiggy" />
          <img src={Myntra} alt="Myntra" />
          <img src={Dominos} alt="Dominos" />
          <img src={Amazon} alt="Amazon" />
          <img src={Blinkit} alt="Blinkit" />
          <img src={Philips} alt="Philips" />
          <img src={Swiggy} alt="Swiggy" />
          <img src={Myntra} alt="Myntra" />
          <img src={Dominos} alt="Dominos" />
        </div>
      </div>

      <div className={style.investers}>
        <p>INVESTERS</p>
        <div className={style.invests}>
          <img src={Bee} alt="Bee" />
          <img src={Capital} alt="Capital" />
          <img src={Matrix} alt="Matrix" />
          <img src={Tiger} alt="Tiger" />
          <img src={Bee} alt="Bee" />
          <img src={Capital} alt="Capital" />
        </div>
      </div>
    </div>
  );
};

export default Main;

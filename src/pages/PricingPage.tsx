import "./PricingPage.scss";
import { TiTick } from "react-icons/ti";
import { FaXmark } from "react-icons/fa6";

export default function PricingPage() {
  return (
    <div className="price-body">
      <div className="bronze-pricing">
        <div className="head">
          <h1>Free</h1>
          <p>Get a professionally designed WordPress website at no cost!</p>
        </div>
        <div className="pricing">
          <h1>$0</h1>
        </div>
        <div className="feature-list">
          <div>
            <TiTick color="green" size={25} />
            <p>WordPress Website</p>
          </div>
          <p>
            <li>3 Pages</li>
          </p>
          <div>
            <TiTick color="green" size={25} />
            <p>Prototype</p>
          </div>
          <div>
            <TiTick color="green" size={25} />
            <p>SEO</p>
          </div>
          <div>
            <FaXmark color="red" size={25} />
            <p>Maintenance</p>
          </div>
        </div>
      </div>
      <div className="silver-pricing">
        <div className="head">
          <h1>Standard</h1>
          <p>
            Elevate your online presence with a customized WordPress website!
          </p>
        </div>
        <div className="pricing">
          <h1>$10</h1>
        </div>
        <div className="feature-list">
          <div>
            <TiTick color="green" size={25} />
            <p>All features in Free Plan</p>
          </div>
          <div>
            <TiTick color="green" size={25} />
            <p>5 Pages</p>
          </div>
          <div>
            <TiTick color="green" size={25} />
            <p>Maintenance for 1 month</p>
          </div>
        </div>
      </div>
      <div className="gold-pricing">
        <div className="head">
          <h1>Pro</h1>
          <p>
            Get a premium, high-performance website tailored to your business
            needs!
          </p>
        </div>
        <div className="pricing">
          <h1>$30</h1>
        </div>
        <div className="feature-list">
          <div>
            <TiTick color="green" size={25} />
            <p>All features in Silver Plan</p>
          </div>
          <div>
            <TiTick color="green" size={25} />
            <p>Explore outside of WordPress</p>
          </div>
        </div>
      </div>
    </div>
  );
}

import React from "react";
import Layout from "./../components/Layout/Layout";

const About = () => {
  return (
    <Layout title={"About Us - ShopKart"}>
      <div className="row contactus">
        <div className="col-md-6">
          <img
            src="/images/about.jpeg"
            alt="About Us"
            style={{ width: "100%" }}
          />
        </div>
        <div className="col-md-6">
          <p className="text-justify mt-2">
            ShopKart is your ultimate online shopping destination, providing a wide range of products across multiple categories including electronics, fashion, home essentials, and more. Founded with the vision to empower consumers by offering convenience, variety, and unmatched customer service, ShopKart has quickly risen to become a leading e-commerce platform. 
          </p>
          <p className="text-justify">
            At ShopKart, we are committed to ensuring a seamless shopping experience for all our customers. Whether you are shopping from the comfort of your home or on the move, our site is designed to be intuitive and user-friendly. We pride ourselves on the quality of our products and our ability to deliver exceptional customer experiences consistently.
          </p>
          <p className="text-justify">
            Our core values revolve around customer satisfaction, innovation in shopping technology, and sustainable business practices. We believe in building long-lasting relationships with our customers, suppliers, and partners through transparency and trust. ShopKart continues to evolve, driven by our commitment to improving the shopping journey and expanding our offerings to meet and exceed the expectations of our customers.
          </p>
          <p className="text-justify">
            Thank you for choosing ShopKart. We look forward to serving you and providing the best online shopping experience possible.
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default About;

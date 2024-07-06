import React from "react";
import Layout from "./../components/Layout/Layout";

const Policy = () => {
  return (
    <Layout title={"Privacy Policy"}>
      <div className="row contactus">
        <div className="col-md-6">
          <img
            src="/images/contactus.jpeg"
            alt="contactus"
            style={{ width: "100%" }}
          />
        </div>
        <div className="col-md-6">
          <h2>Privacy Policy</h2>
          <p>We respect the privacy of our website visitors and are committed to protecting your personal information. This Privacy Policy outlines the types of information we collect, how it is used, and the measures we take to safeguard it.</p>
          <h3>Information Collection</h3>
          <p>We collect information when you register on our site, place an order, subscribe to our newsletter, or fill out a form. When ordering or registering on our site, as appropriate, you may be asked to enter your: name, e-mail address, mailing address, or phone number.</p>
          <h3>Information Use</h3>
          <p>The information we collect from you may be used in one of the following ways: To personalize your experience, to improve our website, to improve customer service, and to process transactions. </p>
          
        </div>
      </div>
    </Layout>
  );
};

export default Policy;

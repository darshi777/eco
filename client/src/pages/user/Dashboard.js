import React from "react";
import Layout from "../../components/Layout/Layout";
import UserMenu from "../../components/Layout/UserMenu";
import { useAuth } from "../../context/auth";

import "../../styles/dash.css";

const Dashboard = () => {
  const [auth] = useAuth();

  return (
    <Layout title={"Dashboard - Ecommerce App"}>
      <div className="container-fluid m-3 p-3 dashboard">
        <div className="row">
          <div className="col-md-3">
            <div className="user-menu">
              <UserMenu />
            </div>
          </div>
          <div className="col-md-9">
            <div className="card p-3">
              <h3>Welcome {auth?.user?.name}</h3>
              <h3>User Email: {auth?.user?.email}</h3>
              <h3>Address: {auth?.user?.address}</h3>
             
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Dashboard;

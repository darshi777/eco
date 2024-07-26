
import Layout from "../../components/Layout/Layout";
import UserMenu from "../../components/Layout/UserMenu";
import { useAuth } from "../../context/auth";
import "../../styles/dash.css";
import React, { useState } from "react";

const Dashboard = () => {
  const [auth] = useAuth();
  const [activities, setActivities] = useState({
    transport: "",
    diet: "",
    energy: "",
    waste: "",
  });
  const [score, setScore] = useState(null);

  const handleChange = (e) => {
    setActivities({ ...activities, [e.target.name]: e.target.value });
  };

  const calculateScore = () => {
    let totalScore = 0;
    if (activities.transport === "public") totalScore += 20;
    if (activities.transport === "bike") totalScore += 25;
    if (activities.transport === "walk") totalScore += 30;
    if (activities.diet === "vegetarian") totalScore += 20;
    if (activities.diet === "vegan") totalScore += 25;
    if (activities.diet === "local") totalScore += 15;
    if (activities.energy === "renewable") totalScore += 25;
    if (activities.energy === "efficient") totalScore += 15;
    if (activities.waste === "recycle") totalScore += 20;
    if (activities.waste === "compost") totalScore += 25;
    setScore(totalScore);
  };

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
              <h2>Personal Sustainability Score Calculator</h2>
              <form>
                <div className="form-group">
                  <label>Your Mode Of Transport:</label>
                  <select name="transport" onChange={handleChange} className="form-control">
                    <option value="">Select</option>
                    <option value="public">Public Transport</option>
                    <option value="bike">Bike</option>
                    <option value="walk">Walk</option>
                    <option value="car">Car</option>
                  </select>
                </div>
                <div className="form-group">
                  <label>Your Diet:</label>
                  <select name="diet" onChange={handleChange} className="form-control">
                    <option value="">Select</option>
                    <option value="vegetarian">Vegetarian</option>
                    <option value="vegan">Vegan</option>
                    <option value="local">Local Produce</option>
                    <option value="meat">Meat</option>
                  </select>
                </div>
                <div className="form-group">
                  <label>Your Energy Consumption:</label>
                  <select name="energy" onChange={handleChange} className="form-control">
                    <option value="">Select</option>
                    <option value="renewable">Renewable</option>
                    <option value="efficient">Energy Efficient</option>
                    <option value="standard">Standard</option>
                    <option value="high">High Consumption</option>
                  </select>
                </div>
                <div className="form-group">
                  <label>Your Waste Management:</label>
                  <select name="waste" onChange={handleChange} className="form-control">
                    <option value="">Select</option>
                    <option value="recycle">Recycle</option>
                    <option value="compost">Compost</option>
                    <option value="landfill">Landfill</option>
                    <option value="incinerate">Incinerate</option>
                  </select>
                </div>
                <button type="button" onClick={calculateScore} className="btn btn-primary mt-3">
                  Calculate Sustainability Score
                </button>
              </form>
              {score !== null && (
                <div className="mt-3">
                  <h4>Your Sustainability Score: {score} / 100</h4>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Dashboard;

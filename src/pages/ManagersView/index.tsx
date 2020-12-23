import React from "react";

export default function index() {
  return (
    <div style={styles.main}>
      <div className="earnings">
        <h1 className="header">manager's money per day</h1>
        <p>Total: 300</p>
      </div>
      <div className="orders">
        <h1 className="header">manager's orders per day</h1>
        <p>kajsdadhajshdjkahddjkasdh</p>
      </div>
    </div>
  );
}

const styles = {
  main: {
    display: "flex",
    margin: "auto",
  },
};

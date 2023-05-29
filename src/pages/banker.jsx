import React from "react";
import { Link } from "react-router-dom";

function Banker() {
  return (
    <div>
      <h1>Welcome, Banker!</h1>

      <section>
        <h2>Loan Requests</h2>
        <Link to="/loanRequests">View Loan Requests</Link>
      </section>

      <section>
        <h2>Credit Card Requests</h2>
        <Link to="/cardRequests">View Credit Card Requests</Link>
      </section>

      <section>
        <h2>Accounts Management</h2>
        <Link to="/manageAccounts">Manage Accounts</Link>
      </section>
    </div>
  )
}
export default Banker;
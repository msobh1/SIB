import React from "react";
import AccTransactions from "./accTransactions";
import YourLoan from "./yourloan";

function SearchResult(){
    return(
        <div className="search-results">
            <div className="accbalance">
                <i class="fa-sharp fa-solid fa-sack-dollar"></i>
                <label for i>Savings</label>
                <hh>Account ID: <br/> <pp2>1234 5678 8911 4576</pp2> </hh>
                <br/>
                <hh>Balance:<br/> <pp2>$ 5,000,000</pp2> </hh>
                <button className="closeAcc"> Close account</button>
            </div>
            <AccTransactions/>
            <YourLoan/>
        </div>
    );
}
export default SearchResult;
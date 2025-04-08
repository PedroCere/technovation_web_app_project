import React from "react";
import "../styles/OrdersTable.css";

const OrdersTable = () => {
  return (
    <div className="orders-table">
      <h3>Recent Trades</h3>
      <table>
        <thead>
          <tr>
            <th>Time</th>
            <th>Price</th>
            <th>Quantity</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>16:59:32</td>
            <td>$420.56</td>
            <td>25</td>
          </tr>
          <tr>
            <td>16:59:32</td>
            <td>$420.56</td>
            <td>25</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default OrdersTable;

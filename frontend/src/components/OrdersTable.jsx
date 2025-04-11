import React from "react";
import "./styles/OrdersTable.css";

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
            <td>16:58:21</td>
            <td>$419.75</td>
            <td>30</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default OrdersTable;

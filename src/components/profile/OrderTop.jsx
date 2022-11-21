import React, { useEffect, useState } from 'react';
import './profile.css';

const OrderTop = (props) => {
  let order = props.order;
  let [fullDate, setFullDate] = useState("");
  let [orderAmount, setOrderAmount] = useState("");
  
  useEffect(() => {
    let order = props.order;
    let date = order.date;

    let monthArr = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

    const [day, month, year] = date.split('/');
    let newDate = day + " " + monthArr[month - 1] + " " + year;

    setFullDate(newDate);

    let amount = order.amount.toString();  
    amount = amount.substring(0, amount.length - 2);
    let lastThree = amount.substring(amount.length-3);
    let otherNumbers = amount.substring(0,amount.length-3);
    if(otherNumbers != '')
      lastThree = ',' + lastThree;
    amount = otherNumbers.replace(/\B(?=(\d{2})+(?!\d))/g, ",") + lastThree;

    setOrderAmount(amount);
  }, [])
  

  return (
    <div>
      <div className='order-top row'>
        <div className='col-6 col-md-3 col-lg-2'>
          <h6 className='order-top-details'>Order Placed</h6>
          <p>{ fullDate }</p>
        </div>
        <div className='col-6 col-md-3 col-lg-2'>
          <h6 className='order-top-details'>Total</h6>
          <p>{ "₹" + orderAmount + ".00" }</p>
        </div>
        <div className='col-12 col-md-6 col-lg-8'>
          <h6 className='order-id'>{ order.razorpay.orderId }</h6>
        </div>
      </div>
    </div>
  )
}

export default OrderTop;
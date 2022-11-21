import React, { useEffect, useState } from 'react';
import NameBanner from './NameBanner';
import { useNavigate } from 'react-router-dom';
import './profile.css';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import OrderTop from './OrderTop';
import OrderedProduct from './OrderedProduct';
import Loader from '../loader/Loader';

const Orders = () => {

  const [isLoading, setIsLoading] = useState(true);
  const [userData, setUserData] = useState();
  const [name, setName] = useState("");

  const navigate = useNavigate();

  useEffect(function() {
    async function fetchUser() {
      try {
        let token = localStorage.getItem('HomeStylist');
        const res = await axios.post("https://home-stylist-be.vercel.app/api/getAuthUser", {
          HomeStylist: token
        })
  
        if (res) {
          setName(res.data.name + "'s Account");
          res.data.orders.reverse();
          setUserData(res.data);
          setIsLoading(false);
        }
      } catch (error) {
        if (error.response.data.message === "No token provided") {
          navigate('/login');
        } else {
          console.log(error);
        }
      }
    }

    fetchUser();
  }, []);
  

    return (
      <>
        { 
          isLoading ? <Loader /> :
          <div className='profile'>
            <NameBanner name={name} />
            <div className='order-list'>
              { userData.orders.map((order, index) => {
                let orderItem = order.orderInfo;
                let orderedProducts = orderItem.products;

                // console.log("---NEW ORDER---");
                // console.log(orderedProducts);

                return (
                  <div className='order'>
                    <OrderTop order={ orderItem } />
                    <div className='order-bottom'>
                      { orderedProducts ? orderedProducts.map((product, index) => {
                        // console.log(product);
                          return <OrderedProduct key={index} product={product} />
                        }) : ""
                      } 
                    </div>
                  </div>
                )
              })}
              
            </div>
          </div>
        }
      </>
    )
  
}

export default Orders;
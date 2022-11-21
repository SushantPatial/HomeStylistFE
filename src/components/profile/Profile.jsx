import React, { useEffect, useState } from 'react';
import NameBanner from './NameBanner';
import UserDetails from './UserDetails';
import { useNavigate } from 'react-router-dom';
import './profile.css';
import axios from 'axios';
import Loader from '../loader/Loader';

const Profile = () => {

  const [isLoading, setIsLoading] = useState(true);
  const [userData, setUserData] = useState();
  const [name, setName] = useState("");

  const navigate = useNavigate();

  useEffect(function() {
    async function fetchUser() {
      setIsLoading(true);
      try {
        let token = localStorage.getItem('HomeStylist');
        const res = await axios.post("https://home-stylist-be.vercel.app/api/getAuthUser", {
          HomeStylist: token
        })
  
        if (res) {
          setName(res.data.name + "'s Account");
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
            <UserDetails user={userData} />
          </div>
        }
      </>
    ) 
  
}

export default Profile;
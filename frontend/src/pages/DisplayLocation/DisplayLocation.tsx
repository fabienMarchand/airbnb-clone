import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useFetch } from '../../utils/useFetch';

import './DisplayLocation.css';

type DisplayLocationPageProps = {
  id: number;
  title: string;
  description: string;
  location: string;
  picture: string;
  stars: number;
  numberOfRooms: number;
  price: number;
  categoryId: number;
};

type CategProps = {
  id: number;
  name: string;
  description: string;
};

const DisplayLocationPage: React.FC<DisplayLocationPageProps> = () => {
  const [location, setLocation] = useState<DisplayLocationPageProps>();
  const [category, setCateg] = useState<CategProps>();
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchLocation = async () => {
      try {
        const property = await useFetch<DisplayLocationPageProps>(
          `http://localhost:8000/locations/location/${id}`
        );
        setLocation(property);
      } catch (error) {
        console.log(error);
      }
    };
    fetchLocation();
  }, []);

  useEffect(() => {
    const fetchCategory = async () => {
      if (location) {
        try {
          const categ = await useFetch<CategProps>(
            `http://localhost:8000/category/${location?.categoryId}`
          );
          setCateg(categ);
        } catch (error) {
          console.log(error);
        }
      }
    };

    fetchCategory();
  }, [location]);

  // Create a function to handle price change and persist it to database
  const handleSubmit = async () => {
    console.log(location);
    if (location) {
      await fetch(`http://localhost:8000/locations/${id}`, {
        method: 'PUT',
        body: JSON.stringify(location),
        headers: {
          'Content-Type': 'application/json'
        }
      });
    }
  };

  // Create a function to delete the location and persist it to database
  const handleDelete = async () => {
    try {
      await fetch(`http://localhost:8000/locations/${id}`, { method: 'DELETE' });
      navigate('/');
    } catch (error) {
      console.log(error);
    }
  };

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (location) {
      setLocation({
        ...location,
        [e.target.name]: +e.target.value
      });
    }
  };

  return (
    <div className="display-location">
      <div className="img-container-display-location">
        <img src={location?.picture} alt={location?.title} />
      </div>
      <div className="wrapper-display-location">
        <div className="display-location__content">
          <h1>
            {location?.title},&nbsp;
            {location?.location}
          </h1>
          <span>
            {category?.name}﹒{location?.numberOfRooms} rooms
          </span>
          <br />
          {category?.description}
        </div>
        <div className="display-location__price">
          <span>
            <strong>€ {location?.price} </strong>night
          </span>
        </div>

        <div className="display-location__edit">
          <div className="display-location__from-input">
            <label htmlFor="price">Modify Price</label>
            <br />
            {location && (
              <input type="text" defaultValue={location.price} onChange={onChange} name="price" />
            )}
          </div>
          <button className="display-location__delete-btn" onClick={handleDelete}>
            Delete
          </button>
          <button className="display-location__confirm-btn" onClick={handleSubmit}>
            Confirm
          </button>
        </div>
      </div>
    </div>
  );
};

export default DisplayLocationPage;

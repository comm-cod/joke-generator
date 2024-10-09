import React, { useState } from 'react';
import Button from './Button';

const Joke = () => {

  const [value, setValue] = useState('');

  const fetchApi = () => {
    fetch('https://sv443.net/jokeapi/v2/joke/Programming?type=single')
      .then((res) => res.json())
      .then((data) => setValue(data.joke)) // Set the joke value from the API
      .catch((error) => console.error('Error fetching the joke:', error));
  };

  return (
    <>
    <div className='w-full h-full'>
      <Button callApi={fetchApi} />
      <p className="border border-gray-300 rounded px-2 py-1 mt-2">
        {value}
      </p>
    </div>  
      
       
    </>
  );
};

export default Joke;
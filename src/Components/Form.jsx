import React, { useState } from 'react';
import emailjs from 'emailjs-com';

const Form = () => {
  const [Details, setDetails] = useState({
    name: '',
    phone: '',
    address: '',
    email: '',
    password: '',
    message: '',
    image: '',
  });



  const handleInput = (e) => {
    setDetails({ ...Details, [e.target.name]: e.target.value });
  };
  //  console.log(Details)
  const sendMail = (e) => {
    e.preventDefault();

    emailjs
  .send(
    'service_2d9w8lg', 
    'template_2myy78j', 
    {
      name: Details.name,
      phone: Details.phone,
      address: Details.address,
      email: Details.email,
      password: Details.password,
      message: Details.message,
      image: Details.image,
    }, 
    'xPHTlVkYQ7KWHpt8c'
  )
  .then(
    (response) => {
      console.log('SUCCESS!', response.status, response.text);
      alert('Form Submitted successfully!');
      setDetails({
        name: '',
        phone: '',
        address: '',
        email: '',
        password: '',
        message: '',
        image: '',
      });
    },
    (error) => {
      console.log('FAILED...', error);
      alert('Failed to send message, please try again.');
    }
  );

  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 p-4">
      
      <form onSubmit={sendMail}  className="w-full max-w-lg bg-white shadow-lg rounded-lg p-6 space-y-4">
        <h2 className="text-2xl font-semibold text-gray-800 text-center">Contact Us</h2>

        <label className="block">
          <span className="text-gray-700">Name:</span>
          <input
            onChange={handleInput}
            type="text"
            name="name"
            required

            value={Details.name}
            className="mt-1 block w-full px-3 py-2 bg-gray-100 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
          />
        </label>

        <label className="block">
          <span className="text-gray-700">Phone:</span>
          <input
            onChange={handleInput}
            type="tel"
            name="phone"
            required

            value={Details.phone}
            className="mt-1 block w-full px-3 py-2 bg-gray-100 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
          />
        </label>


        <label className="block">
          <span className="text-gray-700">Address:</span>
          <input
            onChange={handleInput}
            type="text"
            name="address"
            required

            value={Details.address}
            className="mt-1 block w-full px-3 py-2 bg-gray-100 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
          />
        </label>

        <label className="block">
          <span className="text-gray-700">Email:</span>
          <input
            onChange={handleInput}
            type="email"
            name="email"
            required

            value={Details.email}
            className="mt-1 block w-full px-3 py-2 bg-gray-100 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
          />
        </label>

        <label className="block">
          <span className="text-gray-700">Password:</span>
          <input
            onChange={handleInput}
            required

            type="password"
            name="password"
            value={Details.password}
            className="mt-1 block w-full px-3 py-2 bg-gray-100 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
          />
        </label>

        <label className="block">
          <span className="text-gray-700">Message:</span>
          <textarea
            onChange={handleInput}
            required

            name="message"
            value={Details.message}
            rows="3"
            className="mt-1 block w-full px-3 py-2 bg-gray-100 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
          />
        </label>

        <label className="block">
          <span className="text-gray-700">Image:</span>
          <input
            onChange={handleInput}
            required
            type="file"
            name="image"
            value={Details.image}
            className="mt-1 block w-full text-gray-500 px-3 py-2 bg-gray-100 border border-gray-300 rounded-md focus:outline-none"
          />
        </label>

        <button
          type="submit"
          className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-md transition duration-200"
        >
          Submit
        </button>
      </form>
    </div>
  );
}

export default Form;

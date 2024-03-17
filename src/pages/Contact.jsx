import { useState } from "react";
import img from "../../public/images/contact.jpg";

// taking detail for contact form
const Contact = () => {
  const [data, setData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    message: "",
  });

  const submitHandler = (e) => {
    e.preventDefault();
    console.log(data);
    setData({
      firstName: "",
      lastName: "",
      email: "",
      message: "",
    });
  };

  // data input from user
  const dataInput = (e) => {
    const { name, value } = e.target;
    setData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  return (
    <>
      <h2 className="text-[#FF6B18] mt-20 text-center  font-medium text-lg pb-6 ">
        Contact Us
      </h2>
      <div
        id="Contact"
        className="flex flex-col md:flex-row justify-around items-center "
      >
        <div className="md:w-1/2 max-w-lg ml-4">
          <img src={img} alt="Contact" className="w-full h-auto rounded-lg" />
        </div>
        <div className="md:w-1/2 max-w-lg mr-4">
          <form
            onSubmit={submitHandler}
            className="flex flex-col justify-center items-center border p-8 rounded-lg shadow-md shadow-orange-100"
          >
            <div className="flex justify-start w-full mb-4">
              <input
                type="text"
                placeholder="Enter First Name"
                className="border p-2 w-1/2 mr-2"
                value={data.firstName}
                name="firstName"
                onChange={dataInput}
              />
              <input
                type="text"
                placeholder="Enter Last Name"
                className="border p-2 w-1/2"
                name="lastName"
                value={data.lastName}
                onChange={dataInput}
              />
            </div>
            <input
              type="email"
              placeholder="Enter your Email"
              required
              value={data.email}
              name="email"
              onChange={dataInput}
              className="border p-2 w-full mb-4"
            />
            <textarea
              name="message"
              cols="30"
              rows="5"
              value={data.message}
              onChange={dataInput}
              placeholder="Message"
              className="border p-2 w-full mb-4"
            ></textarea>
            <button
              type="submit"
              className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Contact;

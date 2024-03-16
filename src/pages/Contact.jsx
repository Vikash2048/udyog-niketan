import { useState } from "react";

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
    const email = "vikasrajpoot974@gmail.com";
    const subject = "subject";
    const body = JSON.stringify(data);
    window.location.href = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };
  return (
    <div id="Contact" className="mt-10  ">
      <form
        onSubmit={submitHandler}
        className="flex flex-col justify-center items-center bg-slate-100 p-8 rounded-lg"
      >
        <h2 className="text-[#FF6B18] font-medium text-lg pb-16 ">
          Contact Us
        </h2>
        <div className="flex justify-start w-full mb-4   ">
          <input
            type="text"
            placeholder="Enter First Name"
            className="border  p-2 w-1/2"
            value={data.firstName}
            name="firstName"
            onChange={dataInput}
          />
          <input
            type="text"
            placeholder="Enter Last Name"
            className="border  p-2 w-1/2 "
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
          className="border  p-2 w-full"
        />
        <textarea
          name="message"
          cols="30"
          rows="10"
          value={data.message}
          onChange={dataInput}
          placeholder="Message"
          className=" p-2 w-full mt-4"
        ></textarea>
        <button
          type="submit"
          className="bg-red-600 text-white px-4 py-2 mt-4 rounded hover:bg-red-700"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default Contact;

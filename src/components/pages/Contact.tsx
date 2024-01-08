import React, { useState } from 'react';
import { baseUrl } from '../../backendBaseUrl';
import { useToast } from "@chakra-ui/react"

const Contact = () => {
  const toast = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });


  const handleChange = (e: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    let response = await fetch((baseUrl + "nodemailer"), {
      method: "POST",
      headers: { "Content-Type": "application/json", },
      body: JSON.stringify({ email: formData.email, name: formData.name, text: formData.message }),
    });
    if (response.status === 200) {
      toast({
        title: "success",
        description: "Your message has been sent to honey.sahith29@gmail.com",
        status: "success",
        position: "bottom-left",
        duration: 5000,
        isClosable: true,
      })
      setFormData({ name: "", email: "", message: "" })

      return;
    }
    toast({
      title: "error",
      description: "internal server error",
      status: "error",
      position: "bottom-left",
      duration: 5000,
      isClosable: true,
    })



  };

  return (
    <div className="container mx-auto my-5 flex flex-col justify-center items-center">
      <h1 className="text-3xl font-semibold mb-4">Contact Me</h1>
      <form onSubmit={(e) => handleSubmit(e)} className="max-w-md">
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={(e) => handleChange(e)}
            className="sm:w-[25rem] p-2 border rounded-md"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={(e) => handleChange(e)}
            className="w-full p-2 border rounded-md"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="message">
            Message
          </label>
          <textarea

            id="message"
            name="message"
            value={formData.message}
            onChange={(e) => handleChange(e)}
            rows={4}
            className="resize-none w-full p-2 border rounded-md"
            required
          />
        </div>
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default Contact;

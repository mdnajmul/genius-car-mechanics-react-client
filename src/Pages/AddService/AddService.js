import React from "react";
import axios from "axios";
import { useForm } from "react-hook-form";
import "./AddService.css";

const AddService = () => {
  const { register, handleSubmit, reset } = useForm();
  const onSubmit = (data) => {
    axios.post("http://localhost:5000/services", data).then((res) => {
      if (res.data.insertedId) {
        alert("Service Added Successfully.");
        reset();
      }
      console.log(res);
    });
    console.log(data);
  };
  return (
    <div className="service-field">
      <h2>Add New Service</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          {...register("name", { required: true })}
          placeholder="Service Name"
        />
        <textarea {...register("description")} placeholder="Service Details" />
        <input type="number" {...register("price")} placeholder="Price" />
        <input {...register("img")} placeholder="Image url" />
        <input type="submit" />
      </form>
    </div>
  );
};

export default AddService;

import React from "react";

const UpdateCoffee = () => {
  return (
    <div>
      <h2 className="text-5xl text-center text-pink-900">Update Coffee</h2>
      <div>
        <input
          type="text"
          placeholder="Type here"
          className="input input-bordered input-info w-full"
        />
      </div>
    </div>
  );
};

export default UpdateCoffee;

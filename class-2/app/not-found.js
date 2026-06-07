import React from "react";

const NotFound = () => {
  return (
    <div>
      <h1 className="text-4xl font-bold text-black text-center mt-10">
        404 - Page Not Found
      </h1>
      <p className="text-lg text-gray-600 text-center mt-4">
        The page you are looking for does not exist. Please check the URL and
        try again.
      </p>
    </div>
  );
};

export default NotFound;

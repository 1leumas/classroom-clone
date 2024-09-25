"use client";

import { ClassService } from "@/app/services/ClassService";
import { useEffect, useState } from "react";
import ModalDelete from "./ModalDelete";
const classService = new ClassService();

function ClassCards() {
  const [classes, setClasses] = useState([]);
  const [openModal, setOpenModal] = useState(null); // Change to track ID of the class

  useEffect(() => {
    async function fetchData() {
      const data = await classService.fetchClasses();
      setClasses(data);
    }
    fetchData();
  }, []);

  const handleDelete = async (id) => {
    const response = await classService.removeClass(id);
    if (response.ok) {
      setClasses((prevClasses) => prevClasses.filter((cls) => cls.id !== id));
    }
  };

  if (!classes) return <p>Loading classes...</p>;

  return (
    <div className="flex gap-6 p-6 mt-12">
      {classes.length > 0 ? (
        classes.map((item, index) => (
          <div
            key={index}
            className="flex flex-col bg-white shadow-md rounded-lg hover:shadow-lg transition-shadow h-64 w-80"
          >
            <div className="flex flex-col gap-4 bg-blue-500 rounded-t py-2 relative">
              <div className="flex justify-between items-center mx-2">
                <h2 className="text-xl text-white font-semibold">
                  {item.title}
                </h2>
                <button
                  onClick={() =>
                    setOpenModal(openModal === item.id ? null : item.id)
                  }
                  className="mt-4 rounded-full text-black px-2 py-2 hover:bg-gray-400"
                >
                  <svg
                    version="1.0"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 100 100"
                  >
                    <g fill="#FFF">
                      <path d="M45.5 6.9c-4.5 2-7 6-7 11.2 0 4.2.5 5.3 3.3 8.1s3.9 3.3 8.2 3.3c4.3 0 5.4-.5 8.2-3.3 2.8-2.8 3.3-3.9 3.3-8.2 0-4.2-.5-5.4-3.1-8.1-3.3-3.3-9.2-4.6-12.9-3zM45.5 38.9c-4.5 2-7 6-7 11.2 0 4.2.5 5.3 3.3 8.1s3.9 3.3 8.2 3.3c4.3 0 5.4-.5 8.2-3.3 2.8-2.8 3.3-3.9 3.3-8.2 0-4.2-.5-5.4-3.1-8.1-3.3-3.3-9.2-4.6-12.9-3zM45.5 70.9c-4.5 2-7 6-7 11.2 0 4.2.5 5.3 3.3 8.1s3.9 3.3 8.2 3.3c4.3 0 5.4-.5 8.2-3.3 2.8-2.8 3.3-3.9 3.3-8.2 0-4.2-.5-5.4-3.1-8.1-3.3-3.3-9.2-4.6-12.9-3z" />
                    </g>
                  </svg>
                </button>
                {openModal === item.id && (
                  <ModalDelete
                    openModal={openModal === item.id}
                    onDelete={() => handleDelete(item.id)}
                  />
                )}
              </div>
              <span className="text-white mx-2">{item.professor}</span>
            </div>
          </div>
        ))
      ) : (
        <p>Add a class or refresh the page!</p>
      )}
    </div>
  );
}

export default ClassCards;

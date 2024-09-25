"use client";

import { useState } from "react";
import { ClassService } from "@/app/services/ClassService";

const classService = new ClassService();

function AddClass() {
  const [isOpen, setIsOpen] = useState(false);
  const [title, setTitle] = useState("");
  const [professor, setProfessor] = useState("");
  
  const handleSubmit = async () => {
    const response = await classService.addClass(title, professor);
    if (response.ok) {
      setIsOpen(false);
      setTitle("");
      setProfessor("");
    }
    window.location.reload();
  };

  return (
    <div>
      <button
        onClick={() => setIsOpen(true)}
        className="px-4 py-2 text-black rounded-full text-2xl"
      >
        +
      </button>

      {isOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
          <div className="bg-white p-6 rounded-lg shadow-md w-80">
            <h1 className="text-xl font-semibold mb-4">Add Class</h1>

            <div className="mb-4">
              <label htmlFor="title" className="block text-sm font-medium">
                Title:
              </label>
              <input
                type="text"
                id="title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                className="w-full mt-1 p-2 border border-gray-300 rounded"
              />
            </div>

            <div className="mb-4">
              <label htmlFor="professor" className="block text-sm font-medium">
                Professor:
              </label>
              <input
                type="text"
                id="professor"
                value={professor}
                onChange={(e) => setProfessor(e.target.value)}
                className="w-full mt-1 p-2 border border-gray-300 rounded"
              />
            </div>

            <div className="flex justify-between">
              <button
                onClick={handleSubmit}
                className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
              >
                Submit
              </button>
              <button
                onClick={() => setIsOpen(false)}
                className="px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-600"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default AddClass;

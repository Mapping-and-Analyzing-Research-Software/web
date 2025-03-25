"use client"
import Link from "next/link";

import { useState } from 'react';


export default function Page() {
  const [inputValue, setInputValue] = useState<string>('');
  const [harvestName, setHarvestName] = useState<string>('GitHub Keyword Search');
  const [description, setDescription] = useState<string>('');

  // Handle form submission
  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault(); // Prevent page refresh
    // Handle form submission logic here
    const formData = {
      harvestName,
      inputValue,
      description,
    };
    console.log('Form Data:', formData);
    // You can also send this data to an API or handle it as needed
  };

   
    return (
      <>
        <div className="row w-100 justify-content-center">
        <div className="col-10 bg-white rounded p-3 m-1">
        <h3 className="h3">New GitHub Keyword Search Harvest</h3>
        <div className="container">
      <form onSubmit={handleSubmit}>
        <div className="row">
          {/* Text field */}
          <div className="col-8">
            <label htmlFor="harvestName" className="form-label">
              Name of this harvest:
            </label>
            <input
              type="text"
              className="form-control"
              id="harvestName"
              value={harvestName}
              onChange={(e) => setHarvestName(e.target.value)} // Update the input state on change
            />
          </div>

          <div className="col-8">
            <label htmlFor="simpleInput" className="form-label">
              Enter keywords to search for on GitHub:
            </label>
            <input
              type="text"
              className="form-control"
              id="simpleInput"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)} // Update the input state on change
            />
          </div>

          <div className="col-8">
            <label htmlFor="description" className="form-label">
              Provide a brief description or comments on this harvest:
            </label>
            <textarea
              className="form-control"
              id="description"
              rows={3}
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </div>

          <div className="rounded p-3 w-50 m-3" style={{ border: '2px dashed #cccccc' }}>
          More settings go here.  <br /> Example: number of results to consider.
          </div>

          {/* Submit Button */}
          <div className="col-12">
            <button type="submit" className="btn btn-primary">
              Start Harvest
            </button>
          </div>
        </div>
      </form>
    </div>

        
        </div>
        
</div>
        
        
      </>
    );
  }


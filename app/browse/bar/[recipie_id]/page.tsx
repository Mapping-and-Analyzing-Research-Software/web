"use client"
import Link from "next/link";

import { useState } from 'react';


export default function Page() {

  interface TableRow {
    [key: string]: any;
  }



  const [inputValue, setInputValue] = useState<string>('');
  const [harvestName, setHarvestName] = useState<string>('Wiskey_Sour_13.3');
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
        <h3 className="h3">Make a cocktail from a recipie: Wiskey Sour (Recipie 13)</h3>
        <div className="container border rounded p-3 my-3">
        <div className="row">
        <div className="col-4">
        <h4 className="h5 border-bottom">Version</h4>
            
            <select name="harvest" id="harvest" className="form-select">
            
            <option value="">Recipe 13.3: 2024-11-13 (Stable)</option>
            
              <option value="">Recipe 13.4: 2025-01-31 (Beta)</option>
              <option value="">Recipe 13.2: 2024-04-04</option>
              <option value="">Recipe 13.1: 2024-01-31</option>
              
            </select>
            <h4 className="h5 border-bottom  mt-3">About</h4>
            <p>Written and maintained by John Roe, jon@domain.com.</p>
          <p>Source code for this recipie can be found at github.com/mars/core/.../bar/recipie/13.3/</p>
            
          </div>
          
          <div className="col">
          <h4 className="h5 border-bottom">Description</h4>
          <p>Everything there is to know about your choice of GitHub repository. ​</p>
          
          <p>Given a pointer to repository "X", we open all bottles, filter all the data for information related to X, and aggregate it into a massive JSON file for you.
          </p>
          
          </div>
          </div>
        </div>
        <div className="container border rounded p-3">
      <form onSubmit={handleSubmit}>
        <h4 className="h4 border-bottom">Cocktail Information</h4>
        <div className="row">
          {/* Text field */}
          <div className="col-7">
            <label htmlFor="harvestName" className="form-label">
              Name of this drink:
            </label>
            <input
              type="text"
              className="form-control"
              id="harvestName"
              value={harvestName}
              onChange={(e) => setHarvestName(e.target.value)} // Update the input state on change
            />
          </div>

          <div className="col">
            <label htmlFor="description" className="form-label">
              Provide a brief description or comments on this drink:
            </label>
            <textarea
              className="form-control"
              id="description"
              rows={1}
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </div>
          </div>

          <h4 className="h4 mt-3 border-bottom">Recipe Specifications</h4>

            
            <div>

            <div className="col">
            <label htmlFor="description" className="form-label">
              URL to a GitHub repository:
            </label>
            <input
              className="form-control"
              id="description"
              placeholder="https://github.com/some/repo"
            />
          </div>

          
          <div className="row">

          <div className="col rounded p-3 w-50 m-3" style={{ border: '2px dashed #cccccc' }}>
          More settings go here.  <br /> Example: place this drink on the "showcase" table.
          </div>

          {/* Submit Button */}
          <div className="col-6 text-center p-3">
            <button type="submit" className="mt-2 btn btn-primary">
              Pour Drink <span className="font-monospace text-sm">"{harvestName}.json"</span> <br /> (AKA: Download Result) 
            </button>
            </div>
          </div>
        </div>
      </form>
    </div>

        
        </div>
        
</div>
        
        
      </>
    );
  }


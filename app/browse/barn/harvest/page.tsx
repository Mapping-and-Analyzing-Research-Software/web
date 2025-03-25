"use client"
import Link from "next/link";

import { useState } from 'react';


export default function Page() {

  const [selectedType, setSelectedType] = useState<string>('repos');
  const [artifacts, setArtifacts] = useState<string>('');
  const [description, setDescription] = useState<string>('');
  const [harvestName, setHarvestName] = useState<string>('Manual');

  const handleRadioChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedType(event.target.value);
  };

  // Handle form submission
  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault(); // Prevent page refresh
    // Handle form submission logic here
    const formData = {
      artifacts,
      description,
      selectedType,
    };
    console.log('Form Data:', formData);
    // You can also send this data to an API or handle it as needed
  };

   
    return (
      <>
        <div className="row w-100 justify-content-center">
        <div className="col-10 bg-white rounded p-3 m-1">

        <div className="row">

        <div className="col">
        <h4 className="h4">New Manual Harvest</h4>

        <div className="container">

        <form onSubmit={handleSubmit}>
          <div className="row">
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
          </div>
        <div className="row mt-3">
          

        

          {/* Radio Buttons Group */}
          <div className="col-4">
            <fieldset>
              <p className="form-label">Select the type of artifacts you're manually entering</p>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="radio"
                  name="type"
                  id="repos"
                  value="repos"
                  checked={selectedType === 'repos'}
                  onChange={handleRadioChange}
                />
                <label className="form-check-label" htmlFor="repos">
                  GitHub Repositories
                </label>
              </div>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="radio"
                  name="type"
                  id="emails"
                  value="emails"
                  checked={selectedType === 'emails'}
                  onChange={handleRadioChange}
                />
                <label className="form-check-label" htmlFor="emails">
                  Email Addresses
                </label>
              </div>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="radio"
                  name="type"
                  id="paperDOIs"
                  value="paperDOIs"
                  checked={selectedType === 'paperDOIs'}
                  onChange={handleRadioChange}
                />
                <label className="form-check-label" htmlFor="paperDOIs">
                  Paper DOIs
                </label>
              </div>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="radio"
                  name="type"
                  id="json"
                  value="json"
                  checked={selectedType === 'json'}
                  onChange={handleRadioChange}
                />
                <label className="form-check-label" htmlFor="json">
                  JSON
                </label>
              </div>
            </fieldset>
          </div>
          {/* "Description" Textarea */}
          <div className="col-8">
            <label htmlFor="description" className="form-label">
              Provide a brief description or comments on this harvest.
            </label>
            <textarea
              className="form-control"
              id="description"
              rows={5}
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </div>
        </div>
        <div className="row">


          {/* "One per line" Textarea */}
          <div className="col-12 mb-4">
            <label htmlFor="artifacts" className="form-label">
              Artifacts (One entry per line for non-JSON artifacts)
            </label>
            <textarea
              className="form-control"
              id="artifacts"
              rows={5}
              value={artifacts}
              onChange={(e) => setArtifacts(e.target.value)}
            />
          </div>

          {/* Submit Button */}
          <div className="col-12">
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </div>
        </div>
      </form>
      
    </div>

          </div>


        <div className="col-4 border-start">
        <h4 className="h4 text-center ">New Automated Harvests</h4>
              <Link href="./harvest/github-keyword-search" className="btn btn-primary m-1 w-100">GitHub Keyword Search</Link>
              <Link href="" className="btn btn-primary m-1 w-100">Website Scrape</Link>
              <Link href="" className="btn btn-primary m-1 w-100">Spack Scrape</Link>
              <Link href="" className="btn btn-primary m-1 w-100">BigQuery Query</Link>
          </div>

        </div>

        
        </div>
        
</div>
        
        
      </>
    );
  }


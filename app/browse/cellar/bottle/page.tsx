"use client"
import Link from "next/link";

import { useState } from 'react';


export default function Page() {

  interface TableRow {
    [key: string]: any;
  }
  const harvest_data: TableRow[] = [
    { id: 1, harvest_name: 'website.com scrape', status: "In Progress", started: "2025-03-24 13:03:02", finished: null, email: 'john@example.com', comments: "This is additional comments that someone could write. This might also include a description field, error logs, etc.", artifact_types: "GitHub Repos" },
    { id: 6, harvest_name: 'manual', status: "Done", started: "2024-03-24 13:03:02", finished: "2024-03-24 13:03:02", email: 'sam@example.com', comments: "Made for a custom thing", artifact_types: "GitHub Repos"  },
    { id: 2, harvest_name: 'website.com scrape', status: "Done", started: "2024-03-24 13:03:02", finished: "2024-03-24 13:03:02", email: 'jane@example.com', comments: "Lorium Ipsum", artifact_types: "JSON"  },
    { id: 3, harvest_name: 'spack', status: "Done", started: "2025-02-24 13:03:02", finished: "2024-03-24 13:03:02", email: 'sam@example.com', comments: "Lorium Ipsum", artifact_types: "Emails"  },
    { id: 4, harvest_name: 'big query', status: "Done - Terminated Early", started: "2025-02-14 13:03:02", finished: "2024-02-14 13:03:05", email: 'chris@example.com', comments: "Lorium Ipsum", artifact_types: "GitHub Repos"  },
    { id: 5, harvest_name: 'github keyword search', status: "Done", started: "2024-04-25 13:03:02", finished: "2024-05-24 13:03:02", email: 'anna@example.com', comments: "Lorium Ipsum", artifact_types: "GitHub Repos"  },
  ];


  const [harvest, setHarvest] = useState<string>('');
  const [description, setDescription] = useState<string>('');
  const [bottleName, setBottleName] = useState<string>('Manual');
  const [bottleContents, setBottleContents] = useState<string>('');


  // Handle form submission
  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault(); // Prevent page refresh
    // Handle form submission logic here
    const formData = {
      harvest,
      description,
      bottleName
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
        <h4 className="h4">New Manual Bottle</h4>

        <div className="container">

        <form onSubmit={handleSubmit}>
          <div className="row">
          <div className="col-8">
            <label htmlFor="harvestName" className="form-label">
              Name of this bottle:
            </label>
            <input
              type="text"
              className="form-control"
              id="harvestName"
              value={bottleName}
              onChange={(e) => setBottleName(e.target.value)} // Update the input state on change
            />
          </div>
          </div>
        <div className="row mt-3">
          


          {/* "Harvest" Textarea */}
          <div className="col-7">
            <label htmlFor="harvest" className="form-label">
              Select the harvest associated with this bottle
            </label>
            <select name="harvest" id="harvest" className="form-select">
            {harvest_data.map((element) => (
              <>
            
              <option value="">(ID {element.id}) {element.harvest_name}</option>
              </>
            
          ))}
            </select>
            <p className="mt-3">Preview of harvest</p>
            <p className="text-sm border border-secondary text-center p-4">[Artifact pointers here]</p>
          </div>

        

          
          {/* "Description" Textarea */}
          <div className="col-5">
            <label htmlFor="description" className="form-label">
              Provide a brief description or comments on this bottle.
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
              Bottle Contents
            </label>
            <textarea
              className="form-control"
              id="artifacts"
              rows={5}
              value={bottleContents}
              onChange={(e) => setBottleContents(e.target.value)}
            />
          </div>

          {/* Submit Button */}
          <div className="col-12">
            <button type="submit" className="btn btn-primary">
              Create Bottle
            </button>
          </div>
        </div>
      </form>
      
    </div>

          </div>


        <div className="col-5 border-start">
        <h4 className="h4 text-center ">New Automated Bottles</h4>
              <h5 className="h5 mt-2">Repo Bottles</h5>
              <Link href="./bottle/github-api-repo-information" className="btn btn-primary m-1 w-100">GitHub API | Repo Information <div className="text-xs">(Script 3 by sam@example.com)</div></Link>
              <Link href="" className="btn btn-primary m-1 w-100">GitHub API | Repo Information  <div className="text-xs">(Script 2 by jon@example.com)</div></Link>
              <Link href="" className="btn btn-primary m-1 w-100">GitHub API | Contributors  <div className="text-xs">(Script 1 by someone@example)</div></Link>
              <Link href="" className="btn btn-primary m-1 w-100">GitHub API | Software Bill of Materials  <div className="text-xs">(Script 4 by someone@example)</div></Link>
              <Link href="" className="btn btn-primary m-1 w-100">ChatGPT | Is repo X research software?  <div className="text-xs">(Script 5 by someone@example)</div></Link>
              <Link href="" className="btn btn-primary m-1 w-100">ChatGPT | Is repo X science software?  <div className="text-xs">(Script 7 by someone@example)</div></Link>
              <h5 className="h5 mt-2">People Bottles</h5>
              <Link href="" className="btn btn-success m-1 w-100">ChatGPT | Tell me about this email  <div className="text-xs">(Script 6 by someone@example)</div></Link>
              <h5 className="h5 mt-2">Paper Bottles</h5>
              <Link href="" className="btn btn-warning m-1 w-100">Crosstalk | Get title, author, abstract from DOI  <div className="text-xs">(Script 8 by someone@example)</div></Link>
              <Link href="" className="btn btn-warning m-1 w-100">Schema.org API | Categorize from DOI  <div className="text-xs">(Script 9 by someone@example)</div></Link>
              <h5 className="h5 mt-2">Contribute</h5>
              <ul>
              <li>Want to use your own custom script to bottle data? <Link href="" className="btn btn-secondary">Click here</Link> to learn how to use the API for MARS.</li>
              <li>Want to share your own custom script on this page? <Link href="" className="btn btn-secondary">Click here</Link> to learn how to contribute to MARS.</li>
              </ul>
        
          </div>

        </div>

        
        </div>
        
</div>
        
        
      </>
    );
  }


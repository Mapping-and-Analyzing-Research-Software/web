"use client"
import Link from "next/link";
import BrowseNavbar from "./subnavbar/navbar";

import React, { useState} from 'react';

export default function Page() {

    interface TableRow {
        [key: string]: any;
      }

    const bottle_label: TableRow[] = [
        { id: 1, harvest_id: 123,  bottle_name: 'GitHub API call', status: "In Progress", started: "2025-03-24 13:03:02", finished: "", email: 'john@example.com', comments: "This is additional comments that someone could write. This might also include a description field, error logs, etc.", script: "GitHub API 1.0" },
        { id: 6, harvest_id: 12, bottle_name: 'File Count', status: "Done", started: "2024-03-24 13:03:02", finished: "2024-03-24 13:03:02", email: 'sam@example.com', comments: "Made for a custom thing", script: "Fast File Count 1.0"  },
        { id: 7, harvest_id: 12, bottle_name: 'Manual', status: "Done", started: "2024-03-24 13:03:02", finished: "2024-03-24 13:03:02", email: 'sam@example.com', comments: "Made for a custom thing", script: "Manual entry"  },
        { id: 3, harvest_id: 13, bottle_name: 'ChatGPT analysis', status: "Done", started: "2025-02-24 13:03:02", finished: "2024-03-24 13:03:02", email: 'sam@example.com', comments: "Lorium Ipsum", script: "ChatGPT 1.2"  },
        { id: 4, harvest_id: 3, bottle_name: 'GitHub API call', status: "Done - Terminated Early", started: "2025-02-14 13:03:02", finished: "2024-02-14 13:03:05", email: 'chris@example.com', comments: "Lorium Ipsum", script: "GitHub API 1.0"  },
        { id: 5, harvest_id: 4, bottle_name: 'Different GitHub API call', status: "Done", started: "2024-04-25 13:03:02", finished: "2024-05-24 13:03:02", email: 'anna@example.com', comments: "Lorium Ipsum", script: "GitHub API 2.0"  },
      ];

      const bottle_ingredients: TableRow[] = [
        { id: 1, artifacts: ["https://github.com/AllenDowney/ThinkBayes", "https://github.com/AllenDowney/ThinkStats2", "https://github.com/academic/awesome-datascience", "https://github.com/Avik-Jain/100-Days-Of-ML-Code", "https://github.com/microsoft/Data-Science-For-Beginners", "https://github.com/jakevdp/PythonDataScienceHandbook", "https://github.com/ossu/data-science", "https://github.com/HarvardEcon/data-science-interview-questions", "https://github.com/trevorstephens/ISLR-python"]},
        { id: 6, artifacts: ["https://github.com/numfocus/moss", "https://github.com/numfocus/moss2"]},
        { id: 7, artifacts: ["https://github.com/numfocus/moss", "https://github.com/numfocus/moss2"]},
        { id: 3, artifacts: ["sam@example.com", "jon@example.com", "susan@example.com"]},
        { id: 4, artifacts: ["https://github.com/AllenDowney/ThinkBayes", "https://github.com/AllenDowney/ThinkStats2", "https://github.com/academic/awesome-datascience", "https://github.com/Avik-Jain/100-Days-Of-ML-Code", "https://github.com/microsoft/Data-Science-For-Beginners", "https://github.com/jakevdp/PythonDataScienceHandbook", "https://github.com/ossu/data-science", "https://github.com/HarvardEcon/data-science-interview-questions", "https://github.com/trevorstephens/ISLR-python"]},
        { id: 5, artifacts: ["https://github.com/AllenDowney/ThinkBayes", "https://github.com/AllenDowney/ThinkStats2", "https://github.com/academic/awesome-datascience", "https://github.com/Avik-Jain/100-Days-Of-ML-Code", "https://github.com/microsoft/Data-Science-For-Beginners", "https://github.com/jakevdp/PythonDataScienceHandbook", "https://github.com/ossu/data-science", "https://github.com/HarvardEcon/data-science-interview-questions", "https://github.com/trevorstephens/ISLR-python"]},
      ];

      const bottle_contents_example_minimized: TableRow[] = [
        
          {pointer: "https://github.com/AllenDowney/ThinkBayes", data: 
{
"createdAt": "2013-07-08T14:30:42Z",
"description": "Code repository for Think Bayes.",
"forkCount": 1935,
"licenseInfo": null,
"name": "ThinkBayes",
"stargazerCount": 1665,
"updatedAt": "2025-03-25T02:21:10Z"
}},
          {pointer: "https://github.com/AllenDowney/ThinkStats2", data: 
{
"createdAt": "2014-08-22T19:25:03Z",
"description": "Text and code for the second edition of Think Bayes, by Allen Downey.",
"forkCount": 1516,
"licenseInfo": {
  "key": "mit",
  "name": "MIT License",
  "nickname": ""
},
"name": "ThinkBayes2",
"stargazerCount": 1890,
"updatedAt": "2025-03-23T02:44:52Z"
}},
          {pointer: "https://github.com/Avik-Jain/100-Days-Of-ML-Code", data: 'data'},
          {pointer: "https://github.com/HarvardEcon/data-science-interview-questions", data: 'other data'},
          {pointer: "https://github.com/academic/awesome-datascience", data: 'data about this repo'},
          {pointer: "https://github.com/jakevdp/PythonDataScienceHandbook", data: 'info about this repo'},
          {pointer: "https://github.com/microsoft/Data-Science-For-Beginners", data: 'more data'},
          {pointer: "https://github.com/numfocus/moss", data: 'moss data'},
          {pointer: "https://github.com/ossu/data-science", data: 'data science data'},
          {pointer: "https://github.com/trevorstephens/ISLR-python", data: 'data'},
          {pointer: "jon@example.com", data: 'From ChatGPT: jon@example.com is Jon Starr, who is a rockstar/ninja/buzzword at NumFOCUS'},
          {pointer: "sam@example.com", data: 'From ChatGPT: sam@example.com is Sam Schwartz, who is a faculty member at uwec.edu'},
          {pointer: "susan@example.com", data: 'From ChatGPT: susan@example.com is Susan Doe, who is the boss of sam@example.com'}
          ]
      

      const [selectedRowIndex, setSelectedRowIndex] = useState<number | null>(null);
      const [selectedRow, setSelectedRow] = useState<TableRow | null>(null);

      // Handle mouse click to select row
      const handleRowClick = (row: TableRow, index: number) => {
        setSelectedRow(row);
        setSelectedRowIndex(index);

      };

      const getContents = (row: TableRow | null) =>
      {
        if(row?.id === 6){
          return "The total number of files in all (2) repositories is: 42"
        }
        if(row?.id === 7){
          return "This is a custom dataset, manually uploaded."
        }
        const ingrediant_artifacts = bottle_ingredients.find((element) => element.id === row?.id)?.artifacts;
        console.log(ingrediant_artifacts)

        const contents = bottle_contents_example_minimized.filter((element) => ingrediant_artifacts?.includes(element.pointer));
        return contents;
      }
    
    return (
      <>
        <BrowseNavbar />
        <div className="row w-100 justify-content-center">
        <div className="col-7 m-1">
            
        <div className="table-container" tabIndex={0}>
      <table className="spreadsheet-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Bottle Name</th>
            <th>Status</th>
            <th>Started</th>
            <th>Finished</th>
            <th>Script</th>
            <th>Bottle Owner</th>
          </tr>
        </thead>
        <tbody>
          {
          bottle_label.map((row, index) => (
            
            <tr
              key={row.id}
              className={`${index % 2 === 0 ? 'even' : 'odd'} ${
                selectedRowIndex === index ? 'selected' : ''
              }`}
              onClick={() => handleRowClick(row, index)}
            >
              <td>{row.id}</td>
              <td>{row.bottle_name}</td>
              <td>{row.status}</td>
              <td>{row.started}</td>
              <td>{row.finished}</td>
              <td>{row.script}</td>
              <td>{row.email}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="text-center m-3">
                <Link href="" className="btn btn-primary">Export Selected Bottle</Link>
            </div>
    </div>
        </div>

        <div className="col-4 m-1">
          <div className="rounded bg-white p-1">
            <div>
                <p className="lead">Bottle Label</p>
                <textarea
                    className="text-sm"
                    value={selectedRow ? JSON.stringify(selectedRow, null, 2) : ""}
                    readOnly
                    rows={5}
                    style={{ width: "100%", padding: "10px", borderRadius: "5px", border: "1px solid #ccc" }}
                    />
            </div>

            <div>
            <p><span className="lead">Ingredients</span> (Artifact Pointers in Harvest)</p>
            <select 
              id="cars"
              name="cars"
              size={3}
              className="text-xs"
              style={{ width: "100%", padding: "10px", borderRadius: "5px", border: "1px solid #ccc" }}
              multiple>
                {bottle_ingredients.find((row) => row.id === selectedRow?.id)?.artifacts.map((artifact_pointer) => (
              <>
            
              <option value="">{artifact_pointer}</option>
              </>
            
          ))}
            </select>
            </div>

            <div>
            <p className="lead">Contents</p>
            
            <textarea
                    className="text-xs"
                    value={JSON.stringify(getContents(selectedRow), null, 2)}
                    readOnly
                    rows={10}
                    style={{ width: "100%", padding: "10px", borderRadius: "5px", border: "1px solid #ccc" }}
                    />
            </div>

          
            

            </div>
        </div>


        </div>
        
      </>
    );
  }


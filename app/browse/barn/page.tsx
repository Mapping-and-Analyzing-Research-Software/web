"use client"
import Link from "next/link";
import BrowseNavbar from "./subnavbar/navbar";

import React, { useState} from 'react';

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

      const artifact_data: TableRow[] = [
        { id: 1, artifacts: ["https://github.com/academic/awesome-datascience", "https://github.com/Avik-Jain/100-Days-Of-ML-Code", "https://github.com/microsoft/Data-Science-For-Beginners", "https://github.com/jakevdp/PythonDataScienceHandbook", "https://github.com/ossu/data-science", "https://github.com/HarvardEcon/data-science-interview-questions", "https://github.com/trevorstephens/ISLR-python", "https://github.com/AllenDowney/ThinkBayes", "https://github.com/AllenDowney/ThinkStats2"]},
        { id: 6, artifacts: ["https://github.com/numfocus/moss"]},
        { id: 2, artifacts:  [{repo: "https://github.com/academic/awesome-datascience", info: "found on page somewebsite.com/123"},
        {repo: "https://github.com/Avik-Jain/100-Days-Of-ML-Code", info: "found on page otherwebsite.com/321"},
        {repo: "https://github.com/microsoft/Data-Science-For-Beginners", info: "found on page example.com/mypage"},
        {repo: "https://github.com/jakevdp/PythonDataScienceHandbook", info: "found on page somewebsite.com/123"}]
        },
        { id: 3, artifacts: ["sam@example.com", "jon@example.com", "susan@example.com"]},
        { id: 4, artifacts: ["https://github.com/academic/awesome-datascience", "https://github.com/Avik-Jain/100-Days-Of-ML-Code", "https://github.com/microsoft/Data-Science-For-Beginners", "https://github.com/jakevdp/PythonDataScienceHandbook", "https://github.com/ossu/data-science", "https://github.com/HarvardEcon/data-science-interview-questions", "https://github.com/trevorstephens/ISLR-python", "https://github.com/AllenDowney/ThinkBayes", "https://github.com/AllenDowney/ThinkStats2"]},
        { id: 5, artifacts: ["https://github.com/academic/awesome-datascience", "https://github.com/Avik-Jain/100-Days-Of-ML-Code", "https://github.com/microsoft/Data-Science-For-Beginners", "https://github.com/jakevdp/PythonDataScienceHandbook", "https://github.com/ossu/data-science", "https://github.com/HarvardEcon/data-science-interview-questions", "https://github.com/trevorstephens/ISLR-python", "https://github.com/AllenDowney/ThinkBayes", "https://github.com/AllenDowney/ThinkStats2"]},
      ];

      const [selectedRowIndex, setSelectedRowIndex] = useState<number | null>(null);
      const [selectedRow, setSelectedRow] = useState<TableRow | null>(null);

      // Handle mouse click to select row
      const handleRowClick = (row: TableRow, index: number) => {
        setSelectedRow(row);
        setSelectedRowIndex(index);
      };
    
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
            <th>Harvest Name</th>
            <th>Status</th>
            <th>Started</th>
            <th>Finished</th>
            <th>Artifacts</th>
            <th>Harvest Owner</th>
          </tr>
        </thead>
        <tbody>
          {harvest_data.map((row, index) => (
            <tr
              key={row.id}
              className={`${index % 2 === 0 ? 'even' : 'odd'} ${
                selectedRowIndex === index ? 'selected' : ''
              }`}
              onClick={() => handleRowClick(row, index)}
            >
              <td>{row.id}</td>
              <td>{row.harvest_name}</td>
              <td>{row.status}</td>
              <td>{row.started}</td>
              <td>{row.finished}</td>
              <td>{row.artifact_types}</td>
              <td>{row.email}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
        </div>

        <div className="col-4 m-1">
          <div className="rounded bg-white p-1">
            <div>
                <p className="lead">Harvest Info</p>
                <textarea
                    className="text-sm"
                    value={selectedRow ? JSON.stringify(selectedRow, null, 2) : ""}
                    readOnly
                    rows={5}
                    style={{ width: "100%", padding: "10px", borderRadius: "5px", border: "1px solid #ccc" }}
                    />
            </div>
            <div>
            <p className="lead">Artifacts</p>
            <textarea
                    className="text-xs"
                    value={JSON.stringify(artifact_data.find((row) => row.id === selectedRow?.id)?.artifacts, null, 2)|| ""}
                    readOnly
                    rows={5}
                    style={{ width: "100%", padding: "10px", borderRadius: "5px", border: "1px solid #ccc" }}
                    />
            </div>

          
            <div className="text-center">
                <Link href="" className="btn btn-primary">Export Selected Harvest</Link>
            </div>

            </div>
        </div>


        </div>
        
      </>
    );
  }


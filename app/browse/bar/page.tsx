"use client"
import Link from "next/link";
import BrowseNavbar from "./subnavbar/navbar";

import React, { useState} from 'react';

export default function Page() {

    interface TableRow {
        [key: string]: any;
      }

    const cocktail_info: TableRow[] = [
        { id: 11, cocktail_name: 'Shirley Temple', version:'1.3', short_disc: "Top 100 research repositories, by paper citations",  date: "2025-03-24 13:03:02", recipe: "https://github.com/mars/core/.../bar/recipes/1.3/", email: 'john@example.com', comments: "This is additional comments that someone could write. This might also include a description field, error logs, etc.", type: "CSV" },
        { id: 21, cocktail_name: 'Old Fashioned', version:'2.1', short_disc: "Top 50 people, by commits to scientific repositories, grouped by organization", date: "2024-03-24 13:03:02", recipe: "https://github.com/mars/core/.../bar/recipes/2.1/", email: 'jane@example.com', comments: "Lorium Ipsum", type: "JSON"  },
        { id: 53, cocktail_name: 'Pina Colada', version:'3.2', short_disc: "Table of repositories, the number of contributors to the repository, the number of papers from the repository, the number of unique authors across all papers", date: "2025-02-24 13:03:02", recipe: "https://github.com/mars/core/.../bar/recipes/3.2/", email: 'sam@example.com', comments: "Lorium Ipsum", type: "CSV"  },
        { id: 42, cocktail_name: 'Cosmopolitan', version:'4.1', short_disc: "Plot of commits to scientific software repositories over time", date: "2025-02-14 13:03:02", recipe: "https://github.com/mars/core/.../bar/recipes/4.1/", email: 'chris@example.com', comments: "Lorium Ipsum", type: "PNG"  },
        { id: 50, cocktail_name: 'Bloody Mary', version:'5.1', short_disc: "Most common words in research software documentation", date: "2024-04-25 13:03:02", recipe: "https://github.com/mars/core/.../bar/recipes/5.1/", email: 'anna@example.com', comments: "Lorium Ipsum", type: "TEXT"  },
      ];

      const cocktail_data: TableRow[] = [
        {id: 11, data:"Repo, Citation Count\nrepo_a, 123\nrepo_b, 432\n..."},
        {id: 21, data:`[
{org: "University of Rochester", 
  people: [
  {name: "Jon Starr", commits: 100}
  ]
},
{org: "University of Oregon", 
  people: [
  {name: "Sam Schwartz", commits: 123},
  {name: "Anthony Dario", commits: 321}
  ]
},
...
]`},
        {id: 53, data:"Test3"},
        {id: 42, data:"Test4"},
        {id: 50, data:"Test5"},
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
        <div className="row w-100 justify-content-center g-3 mt-1">
        <div className="col-3 rounded bg-white p-3">
          <h2 className="h3">Favorite Recipies</h2>
          <ul>

          <li className="my-3"><Link className="btn btn-dark m-1" href="./bar/13.3">Whiskey Sour</Link> (JSON)<br /> Everything there is to know about your choice of GitHub repository. ​</li>
<li className="my-3"><Link className="btn btn-dark m-1" href="">Daiquiri</Link> (JSON)<br /> Everything there is to know about your choice of paper DOI. ​</li>
<li className="my-3"><Link className="btn btn-dark m-1" href="">Margarita</Link> (JSON)<br /> Everything there is to know about your choice of email address. ​</li>
<li className="my-3"><Link className="btn btn-dark m-1" href="">Martini</Link> (PNG)<br /> Plot of citations over time for your choice of paper DOI. ​</li>
<li className="my-3"><Link className="btn btn-dark m-1" href="">Negroni</Link> (CSV)<br /> An Italian cocktail combining gin, Campari, and sweet vermouth. ​</li>
<li className="my-3"><Link className="btn btn-dark m-1" href="">Manhattan</Link> (CSV)<br /> A robust mix of rye whiskey, sweet vermouth, and bitters. ​</li>
<li className="my-3"><Link className="btn btn-dark m-1" href="">Mojito</Link> (JSON)<br /> A Cuban favorite blending white rum, sugar, lime juice, soda water, and mint. ​</li>
<li className="my-3"><Link className="btn btn-dark m-1" href="">Gin and Tonic</Link> (TEXT)<br /> A refreshing mix of gin and tonic water, often garnished with a lime wedge. ​</li>
<li className="my-3"><Link className="btn btn-dark m-1" href="">Long Island Iced Tea</Link><br /> A potent mix of vodka, tequila, rum, gin, triple sec, sour mix, and a splash of cola. ​</li>
<li className="my-3"><Link className="btn btn-dark m-1" href="">Mai Tai</Link><br /> A Polynesian-inspired cocktail with rum, lime juice, orgeat syrup, and curacao. ​</li>
<li className="my-3"><Link className="btn btn-dark m-1" href="">Espresso Martini</Link><br /> A caffeinated blend of vodka, coffee liqueur, and freshly brewed espresso. ​</li>
<li className="my-3"><Link className="btn btn-dark m-1" href="">Aperol Spritz</Link><br /> An Italian aperitif combining Aperol, prosecco, and a splash of soda water. ​</li>
<li className="my-3"><Link className="btn btn-dark m-1" href="">Rum Punch</Link><br /> A fruity mix of rum, pineapple juice, orange juice, grenadine, and lime juice. ​</li>
<li className="my-3"><Link className="btn btn-dark m-1" href="">Tequila Sunrise</Link><br /> A visually stunning cocktail with tequila, orange juice, and grenadine. ​</li>
<li className="my-3"><Link className="btn btn-dark m-1" href="">Paloma</Link><br /> A refreshing Mexican drink combining tequila, grapefruit soda, and lime juice. ​</li>
<li className="my-3"><Link className="btn btn-dark m-1" href="">Tom Collins</Link><br /> A gin-based cocktail mixed with lemon juice, sugar, and soda water. ​</li>
<li className="my-3"><Link className="btn btn-dark m-1" href="">French 75</Link><br /> A sparkling mix of gin, champagne, lemon juice, and sugar. ​</li>
<li className="my-3"><Link className="btn btn-dark m-1" href="">Sazerac</Link><br /> A New Orleans classic combining rye whiskey, absinthe, sugar, and Peychaud's bitters. ​</li>
<li className="my-3"><Link className="btn btn-dark m-1" href="">Mint Julep</Link><br /> A Southern favorite with bourbon, fresh mint, sugar, and water. ​</li>
<li className="my-3"><Link className="btn btn-dark m-1" href="">Gimlet</Link><br /> A simple mix of gin and lime juice, traditionally served with a lime wedge. ​</li>


          </ul>
        </div>


        <div className="col-6">
            
        <div className="table-container" tabIndex={0}>
          <h2 className="h3 text-center">On Tap: Drink Showcase</h2>
      <table className="spreadsheet-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Drink Name</th>
            <th>Description</th>
            <th>Date Poured</th>
            <th>Type</th>
          </tr>
        </thead>
        <tbody>
          {cocktail_info.map((row, index) => (
            <tr
              key={row.id}
              className={`${index % 2 === 0 ? 'even' : 'odd'} ${
                selectedRowIndex === index ? 'selected' : ''
              }`}
              onClick={() => handleRowClick(row, index)}
            >
              <td>{row.id}</td>
              <td><p>{row.cocktail_name} (Version {row.version})</p> <Link href={row.recipe} className="btn btn-secondary" >Recipe</Link></td>
              <td>{row.short_disc}</td>
              <td>{row.date}</td>
              <td>{row.type}</td>
            </tr>
          ))}
        </tbody>
      </table>
      
    </div>
        </div>

        <div className="col-3">
          <div className="rounded bg-white p-1">
            <div>
                <p className="lead">Cocktail Info</p>
                <textarea
                    className="text-sm"
                    value={selectedRow ? JSON.stringify(selectedRow, null, 2) : ""}
                    readOnly
                    rows={5}
                    style={{ width: "100%", padding: "10px", borderRadius: "5px", border: "1px solid #ccc" }}
                    />
            </div>
            <div>
            <p className="lead">Sample</p>
            <pre
            className="text-xs"
            style={{ width: "100%", padding: "10px", borderRadius: "5px", border: "1px solid #ccc" }}
            >
              {cocktail_data.find((row) => row.id === selectedRow?.id)?.data}
              </pre>
            </div>

            <div className="text-center m-3">
                <Link href="" className="btn btn-primary">Download</Link>
            </div>
            

            </div>

            
        </div>


        </div>

        <div className="row w-100 justify-content-center">

        </div>
      </>
    );
  }


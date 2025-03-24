"use client";

export default function Page() {
  return (
    <>

    
    <h1 className="h1 p-3 m-3 bg-white rounded border-2 border-fuchsia-400 text-center">Welcome to MARS: Mapping &amp; Analyzing Research Software</h1>

<div className="row px-3">
    <div className="border col-5 bg-white rounded shadow m-3 p-3 mx-auto">
    <h2 className="h2">What is MARS?</h2>
      <p>MARS is a suite of analysis tools built on top of an expansive database/catelog of information about research software.</p>
      <p>We track all sorts of things about the world's research software, including history. MARS has a retro theme, but don't let that fool you: under the hood we're employing the latest cutting edge analysis tools.</p>
    
      <h2 className="h2">Cite MARS</h2>
      <p>Did you use MARS in your own research? Give us a shout-out by citing us in your work today:</p>
      <pre className="border m-1 font-sm">{`@misc{MARS,
title={MARS: Mapping and Analyzing Research Software}, 
author={Schwartz, Samuel D. and Surname, Name I. and SurnameTwo, NameTwo J.},
year={2024}}`}
      </pre>


    
    <h2 className="h2">Who uses MARS?</h2>
    <p>MARS used by researchers looking to better understand the ecosystem of scientific software, software foundations looking to better understand the software projects they sponsor (e.g., does their code rely on external software with known security vulnrabilities), and companies/university labs interested in benchmarking their open-source software against peers.</p>
    <p>We are also affiliated with the MOSS project, which uses MARS as a source to connect software projects with research artifacts (such as peer-reviewed papers).</p>

    


      </div>

      <div className="border col-6 bg-white rounded shadow m-3 p-3 mx-auto">
      <ul>
      <li><strong>Visualize:</strong> This is where Mark's graph visualization page(s) will go</li>
      <li><strong>Query:</strong> This is where "Google/Chat" search / Q and A page(s) will go</li>
      <li><strong>Browse:</strong> Users can browse saved data in harvests and bottles; nice interface for DB</li>
      <li><strong>Analyze:</strong> Users can do basic analysis in the browser (via Jupyter notebooks?) on data</li>
      <li><strong>API:</strong> Documentation for API</li>
    </ul>
      </div>
      </div>
    </>
  );
}

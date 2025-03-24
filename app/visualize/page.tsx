import ForceGraph3DComponent from './forceGraph3DComponent';

export default function Page() {
  return (
    <>

<div className='float-right m-5 rounded bg-white p-3'>
    <h1 className="h1">The Random Ecosystem</h1>
    <p>Information about this random repository ecosystem displayed on the left.</p>
    <ul>
        <li>Fact 1</li>
        <li>Tidbit 2</li>
        <li>Data 3</li>
        <li>Info 4</li>
    </ul>

    <div className="m-3 p-3 rounded border">
        Select another ecosystem: [Predictive Textbox Here]
        </div>
    </div>  
        <div className=''>
      <ForceGraph3DComponent />
    </div>
    
    </>
  );
}

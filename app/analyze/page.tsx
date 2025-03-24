export default function Page() {

    return (
      <>
       <div style={{ width: '100%' }}>
      <iframe
        src="https://nbviewer.org/github/Mapping-and-Analyzing-Research-Software/jupyter/tree/main/"
        width="100%"
        height={500}  // Set height to either dynamically adjusted value or fallback height
        style={{ border: 'none' }}
        title="Jupyter Notebooks"
      />
    </div>      
      </>
    );
  }


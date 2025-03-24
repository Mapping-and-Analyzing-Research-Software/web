export default function Page() {

    return (
      <>
    <div className="p-5 m-4 w-75 mx-auto rounded bg-white">
    <h3 className="h3">Ask our AI model anything about research software</h3>
      <form className="">
        <input
          type="text"
          placeholder="What are the dependencies of numpy"
          className="w-75 border p-3 m-3 rounded"
        />
        <button type="submit" className="button btn btn-primary">Search</button>
      </form>

      <h3 className="h3">For example...</h3>

      <ul>
        <li>
            Standard query 1
        </li>
        <li>
            Standard query 2
        </li>
        <li>
            Standard query 3
        </li>
      </ul>

    </div>
    </>
    );
  }

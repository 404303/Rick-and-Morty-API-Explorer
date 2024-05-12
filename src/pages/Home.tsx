import { useState } from "react";
import List from "../components/List.tsx";
import Navbar from "../components/Navbar.tsx";
import Button from "../components/Button.tsx";


const Home = () => {
  const [page, setPage] = useState(1);

  return (
    <>
      <Navbar />
      <div className="flex flex-wrap justify-center">
        <List page={page} />
      </div>
      <div className="my-4 w-full relative h-48  flex items-center">
        {page != 1 && <Button className="left-0 absolute" onClick={() => setPage(page-1)}>Pervious</Button>}
        <Button className="right-0 absolute" onClick={() => setPage(page+1)}>Next</Button>
      </div>
      <div className="bottom-0">
      </div>
    </>
  );
};

export default Home;

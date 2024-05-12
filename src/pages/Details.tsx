import { useParams } from "react-router";
import { useQuery } from "react-query";
import { fetchOne } from "../utils/api.ts";
import Navbar from "../components/Navbar.tsx";
import Button from "../components/Button.tsx";
import { Link } from "react-router-dom";

const Details = () => {
  const { id } = useParams();
  const numberId = Number(id);
  const { data, isLoading, isError } = useQuery({
    queryKey: ["char_det", id],
    queryFn: () => fetchOne(id),
  });

  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-screen w-full">
        <span className="loading loading-spinner loading-lg" />
      </div>
    );
  }

  if (isError) {
    return (
      <div className="flex justify-center items-center h-screen w-full">
        <p>something went wrong..</p>
      </div>
    );
  }
  const { name, status, species, gender, origin, location, image } = data;
  return (
    <>
      <Navbar />
      <div className="hero flex bg-base-200 justify-start">
        <div className="hero-content flex-col lg:flex-row w-full">
          <img src={image} className="max-w-sm rounded-lg shadow-2xl" />
          <div className="mx-auto flex flex-col">
            <h1 className="text-5xl font-bold ">{name}</h1>
            <p className="py-1 text-lg">Status: {status}</p>
            <p className="py-1">Sepcies: {species}</p>
            <p className="py-1 text-lg">gender: {gender}</p>
            <p className="py-1">from: {origin.name}</p>
            <p className="py-1 text-lg">location: {location.name}</p>
          </div>
        </div>
      </div>
      <div className="my-4 w-full relative h-48  flex items-center">
        {numberId != 1 && (
          <Link to={`/${numberId - 1}`}>
            {" "}
            <Button className="left-0 absolute">Pervious</Button>{" "}
          </Link>
        )}
        <Link to={`/${numberId + 1}`}>
          <Button className="right-0 absolute">Next</Button>
        </Link>
      </div>
      <div className="bottom-0">
      </div>
    </>
  );
};

export default Details;

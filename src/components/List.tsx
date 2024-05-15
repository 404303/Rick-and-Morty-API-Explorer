import { fetchAll } from "../utils/api.ts";
import { Card } from "./Card.tsx";
import { useQuery } from "react-query";

interface ListProps {
  page: number;
}

export const List = ({ page }: ListProps) => {
  const { data, isLoading, isError } = useQuery({
    queryKey: ["char", page],
    queryFn: () => fetchAll(page),
    onSuccess: () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        })
    }
  });

  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-screen w-full">
        <span className="loading loading-spinner loading-lg" />
      </div>
    );
  }

  if (isError) {
    return <p>something went wrong..</p>;
  }

  return (
    <>
      {data.map((item, index) => (
        <Card item={item} key={index} />
      ))}
    </>
  );
};

export default List;

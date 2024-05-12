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
    return <span className="loading loading-spinner loading-lg" />;
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

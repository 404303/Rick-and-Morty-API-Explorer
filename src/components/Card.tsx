import { Link } from "react-router-dom";

interface CardProps {
  item: {
    id: number;
    name: string;
    status: string;
    species: string;
    gender: string;
    location: string;
    image: string;
  };
}
export const Card = ({ item }: CardProps) => {
  const { id, name, status, species, image, gender } = item;
  return (
    <div className="w-1/3 px-2 mb-4">
      <Link to={`/${id}`}>
        <div className="w-full card bg-base-300 shadow-xl">
          <figure>
            <img src={image} alt={name} />
          </figure>
          <div className="card-body">
            <h2 className="card-title">{name}</h2>
            <p>
              {status} - {species}
            </p>
            <div className="card-actions justify-end">
              <div className="badge badge-outline">{gender}</div>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};

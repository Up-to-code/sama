import Button from "./Button";
import Title from "./Title";

interface PriceCardProps {
  title: string;
  price: string;
  features: string[];
  isPopular: boolean;
  className?: string;
}

const PriceCard = ({ title, price, features, isPopular, className }: PriceCardProps) => (
  <div
    className={`relative p-6 bg-white w-full min-h-80 flex flex-col justify-between ${
      isPopular ? "transform scale-105" : ""
    } ${className}`}
  >
    {isPopular && (
      <div className="absolute top-4 left-4 px-2 py-1 bg-primary text-white  ">
        الأكثر شعبية
      </div>
    )}
    <Title className="text-xl font-semibold text-primary">{title}</Title>
    <p className="mt-2 text-4xl font-bold text-primary">{price}</p>
    <ul className="mt-4 space-y-2">
      {features.map((feature, index) => (
        <li key={index} className="text-gray-700">
          {feature}
        </li>
      ))}
    </ul>
    <Button className="mt-4">اشترك</Button>
  </div>
);

export default PriceCard;

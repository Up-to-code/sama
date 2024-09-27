import Image from "next/image";
import Title from "./Title";
import Text from "./Text";

interface WhyCardProps {
  title: string;
  description: string;
  image: string;
  rtl?: boolean;
  className?: string;
  direction?: "ltr" | "rtl";
}

function WhyCard({ title, description, image, rtl = false, className, direction = "ltr" }: WhyCardProps) {
  return (
    <div
      className={`flex flex-col md:flex-row items-center justify-center gap-8 p-8 ${
        rtl ? "md:flex-row-reverse" : ""
      } ${className}`}
    >
      {/* Image Section */}
      <Image
        src={image}
        alt={title}
        width={400}
        height={400}
        className="object-cover rounded-lg"
        
        quality={80}
        loading="lazy"
        lazyRoot="true"
      />

      {/* Text Section */}
      <div className="flex flex-col items-center md:items-start gap-4 text-center md:text-left max-w-lg">
        <Title className="text-4xl font-bold text-primary">{title}</Title>
        <Text 
          direction={direction} 
          size="lg" 
          className="text-gray-600 text-2xl font-medium leading-relaxed"
        >
          {description}
        </Text>
      </div>
    </div>
  );
}

export default WhyCard;

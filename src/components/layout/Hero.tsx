import Image from "next/image";
import Button from "../ui/Button";
import Title from "../ui/Title";

function Hero() {
  return (
    <div className=" h-[80vh]  flex justify-between items-center">
      <div className="flex flex-col gap-4 px-4 max-w-[500px]">
        <div className="flex items-center gap-2">
          <Image src="/logo/logo.svg" alt="hero" width={150} height={100} />
        </div>
        <Title className="text-3xl font-semibold my-3 max-w-96">
          في سما، نجاحك ليس مجرد هدف، بل هو حلم نعمل على تحقيقه
        </Title>
        <div className="">
          <Button className="px-6">اعرف اكثر</Button>
          <Button variant="outline" className="px-6 ">
            احجز استشاره مجانية
          </Button>
        </div>
      </div>
      <div className="   hidden md:block">
        <Image src="/assets/hero.png" alt="hero" width={400} height={500} />
      </div>
    </div>
  );
}

export default Hero;

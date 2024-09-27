import React from "react";
import Title from "../ui/Title";
import PriceCard from "../ui/PriceCard";

function Price() {
  return (
    <div className="bg-primary py-10">
      <div className="container mx-auto ">
        <Title className="text-4xl font-bold text-white mb-4">سعر الخدمة</Title>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <PriceCard
            title="باسي"
            price="$10"
            features={[
              "10 جيجابايت من التخزين",
              "10 جيجابايت من التخزين",
              "10 جيجابايت من التخزين",
            ]}
            isPopular={false}
            className="bg-white text-primary p-6 rounded-lg shadow-lg max-w-sm mx-auto scale-90"
          />
          <PriceCard
            title="برو"
            price="$20"
            features={[
              "20 جيجابايت من التخزين",
              "20 جيجابايت من التخزين",
              "20 جيجابايت من التخزين",
            ]}
            isPopular={true}
            className="bg-white text-primary p-6 rounded-lg shadow-lg max-w-sm mx-auto scale-90"
          />
          <PriceCard
            title="انتربرايز"
            price="$30"
            features={[
              "30 جيجابايت من التخزين",
              "30 جيجابايت من التخزين",
              "30 جيجابايت من التخزين",
            ]}
            isPopular={false}
            className="bg-white text-primary p-6 rounded-lg shadow-lg max-w-sm mx-auto scale-90"
          />
        </div>
      </div>
    </div>
  );
}

export default Price;

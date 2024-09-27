import React from "react";
import Title from "../ui/Title";
import Image from "next/image";
import WhyCard from "../ui/WhyCard";

function WhyUs() {
  return (
    <section className="py-12 bg-gray-100">
      {/* Title Section */}
      <div className="container mx-auto text-center mb-8">
        <div className="flex flex-col items-center justify-center gap-4 md:flex-row">
          {/* Title */}
          <Title className="text-3xl font-semibold text-primary">
            لماذا نحن؟
          </Title>

          {/* Image beside Title */}
          <Image src="/assets/why_us.png" alt="Why Us" width={40} height={40} />
        </div>
      </div>

      {/* Cards Section */}
      <div className="container mx-auto">
        {/* WhyCard #1 */}
        <WhyCard
          direction="rtl" // Right-to-left direction
          className="text-end mx-auto"
          title="خدمات العملاء"
          description="نحن نقدم دعمًا شاملًا للشركات الناشئة لتسريع نجاحها."
          image="/assets/customers_serves.png"
        />

        {/* WhyCard #2 */}
        <WhyCard
          rtl={true} // Set rtl to true for RTL layout
          direction="rtl"
          className="text-end mx-auto"
          title="خدمات التطوير"
          description="تطوير مواقع وتطبيقات باستخدام أحدث التقنيات الحديثة."
          image="/assets/up.png"
        />

        {/* WhyCard #3 */}
        <WhyCard
          direction="rtl"
          className="text-end mx-auto"
          title="خدمات الشركات الناشئة"
          description="نحن نقدم دعمًا شاملًا للشركات الناشئة لتسريع نجاحها."
          image="/assets/start_up.png"
        />
      </div>
    </section>
  );
}

export default WhyUs;

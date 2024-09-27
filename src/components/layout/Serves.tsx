import React from "react";
import Title from "../ui/Title";
import Card from "../ui/Card";
import Image from "next/image";
import Text from "../ui/Text";

function Serves() {
  return (
    <div className="bg-primary text-white p-8">
      <Title className="text-3xl font-semibold text-white mb-8">خدماتنا</Title>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <Card className="bg-white text-primary p-6 rounded-lg shadow-lg max-w-sm mx-auto scale-90">
          <div className="flex flex-col items-center gap-4">
            <Image
              src="/assets/theme.png"
              alt="serve"
              width={100}
              height={100}
              className="rounded-full"
            />
          </div>
          <div className="flex flex-col gap-4 mt-4 text-center">
            <Title className="text-2xl font-semibold">خدمات التصميم</Title>
            <Text size="md" className="text-sm text-gray-600 leading-relaxed">
              خدمات التصميم هي خدمات التصميم المتكاملة التي تغطي جميع خدمات
              التصميم المتكاملة التي تغطي جميع خدمات التصميم المتكاملة التي تغطي
              جميع خدمات التصميم المتكاملة
            </Text>
            <Text
              size="md"
              className="text-sm text-gray-600 leading-relaxed mt-4"
            >
              عدد المشاريع: 50
            </Text>
            <Text
              size="md"
              className="text-sm text-gray-600 leading-relaxed mt-4"
            >
              وصف الخدمة: هذه خدمة تصميم متكاملة تغطي جميع احتياجات التصميم
            </Text>
          </div>
        </Card>

        {/* card 2 */}
        <Card className="bg-white text-primary p-6 rounded-lg shadow-lg max-w-sm mx-auto scale-90">
          <div className="flex flex-col items-center gap-4">
            <Image
              src="/assets/seo.png"
              alt="serve"
              width={100}
              height={100}
              className=""
            />
          </div>
          <div className="flex flex-col gap-4 mt-4 text-center">
            <Title className="text-2xl font-semibold">خدمات التصميم</Title>
            <Text size="md" className="text-sm text-gray-600 leading-relaxed">
              خدمات التصميم هي خدمات التصميم المتكاملة التي تغطي جميع خدمات
              التصميم المتكاملة التي تغطي جميع خدمات التصميم المتكاملة التي تغطي
              جميع خدمات التصميم المتكاملة
            </Text>
            <Text
              size="md"
              className="text-sm text-gray-600 leading-relaxed mt-4"
            >
              عدد المشاريع: 75
            </Text>
            <Text
              size="md"
              className="text-sm text-gray-600 leading-relaxed mt-4"
            >
              وصف الخدمة: هذه خدمة تصميم متكاملة تغطي جميع احتياجات التصميم
              الرقمي
            </Text>
          </div>
        </Card>

        {/* card 3 */}
        <Card className="bg-white text-primary p-6 rounded-lg shadow-lg max-w-sm mx-auto scale-90">
          <div className="flex flex-col items-center gap-4">
            <Image
              src="/assets/crm.png"
              alt="serve"
              width={100}
              height={100}
          
            />
          </div>
          <div className="flex flex-col gap-4 mt-4 text-center">
            <Title className="text-2xl font-semibold">خدمات التصميم</Title>
            <Text size="md" className="text-sm text-gray-600 leading-relaxed">
              خدمات التصميم هي خدمات التصميم المتكاملة التي تغطي جميع خدمات
              التصميم المتكاملة التي تغطي جميع خدمات التصميم المتكاملة التي تغطي
              جميع خدمات التصميم المتكاملة
            </Text>
            <Text
              size="md"
              className="text-sm text-gray-600 leading-relaxed mt-4"
            >
              عدد المشاريع: 100
            </Text>
            <Text
              size="md"
              className="text-sm text-gray-600 leading-relaxed mt-4"
            >
              وصف الخدمة: هذه خدمة تصميم متكاملة تغطي جميع احتياجات التصميم
              والبرمجة
            </Text>
          </div>
        </Card>
      </div>
    </div>
  );
}

export default Serves;

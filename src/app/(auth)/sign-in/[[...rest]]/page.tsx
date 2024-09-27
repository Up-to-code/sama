import React from "react";
import { SignIn } from "@clerk/nextjs";
import Link from "next/link";
 
function SignInPage() {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="flex flex-col items-center justify-center py-5 min-h-screen">
        <SignIn
          appearance={{
            elements: {
              footer: "hidden",
              formButtonPrimary:
                "bg-primary hover:bg-primary/90 border-primary shadow-none shadow-white",
              cardBox: "shadow-none",
              footerActionLink: "text-primary-500 hover:text-primary-600",
            },
          }}
        />
        <div className="mt-4 text-center">
          <Link
            href="/sign-up"
            className="text-lg text-primary font-bold hover:text-primary/90"
          >
            ليس لديك حساب؟ سجل الآن
          </Link>
        </div>
      </div>
    </div>
  );
}

export default SignInPage;

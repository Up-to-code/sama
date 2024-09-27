import React from "react";
import { SignUp } from "@clerk/nextjs";
import Link from "next/link";
 
function SignUpPage() {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="flex flex-col items-center justify-center py-5 min-h-screen">
        <SignUp
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
            href="/sign-in"
            className="text-lg text-primary font-bold hover:text-primary/90"
          >
            هل لديك حساب؟ تسجيل الدخول
          </Link>
        </div>
      </div>
    
    </div>
  );
}

export default SignUpPage;

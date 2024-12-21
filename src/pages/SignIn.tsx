import { useState } from "react";
import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowUp } from "lucide-react";

export default function SignInPage() {
  const [mode, setMode] = useState<"saas" | "self-hosted">("saas");

  return (
    <div className="flex min-h-screen w-full bg-[#fafafa] border-[1px] border-[#f3f2f2]">
      {/* Left Side Section */}
      <div className="relative hidden w-1/2 bg-[#ffffff] lg:flex flex-col items-center justify-center">
        <div className="flex flex-col items-end relative">
          <div className="flex flex-col bg-white rounded-xl h-max shadow-xl pb-[1rem]">
            <div className="p-4 font-semibold text-lg pr-[5rem] flex flex-row items-center justify-center gap-2">
              <img src="/codeant-logo.svg" alt="CodeAnt Logo" />
              <p>AI to Detect & Autofix Bad Code</p>
            </div>
            <hr className="h-[1px] w-full bg-[#f3f2f2]" />
            <div className="flex flex-row gap-6 p-4 items-center">
              <div className="flex flex-col gap-1 items-center">
                <p className="font-semibold">30+</p>
                <p className="text-gray-600">Language Support</p>
              </div>
              <div className="flex flex-col items-center gap-1">
                <p className="font-semibold">10K+</p>
                <p className="text-gray-600">Developers</p>
              </div>
              <div className="flex flex-col gap-1 items-center">
                <p className="font-semibold">100K+</p>
                <p className="text-gray-600">Hours Saved</p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white w-[15rem] relative top-[-2rem] left-[6rem] shadow-xl p-5 rounded-2xl flex flex-col gap-2 mt-4 border-[1px] border-[#f3f2f2]">
          <div className="flex flex-row items-center justify-between">
            <img src="/assets/icons/pie.svg" alt="Pie Icon" />
            <div className="flex flex-col items-start justify-center">
              <div className="flex flex-row items-center text-[#0049c6] justify-center">
                <ArrowUp />
                <p>14%</p>
              </div>
              <p className="text-gray-600 text-sm pl-2">This week</p>
            </div>
          </div>
          <p>Issues Fixed</p>
          <p className="text-3xl font-semibold">500K+</p>
        </div>
        <img
          src="/assets/images/backgroundimg.svg"
          alt="Background Design"
          className="hidden md:block absolute bottom-0 left-0"
        />
      </div>

      {/* Sign In Section */}
      <div className="flex w-full flex-col items-center justify-center lg:w-1/2">
        <div className="w-full max-w-md">
          <div className="mx-4 sm:mx-0 rounded-[24px] bg-white p-8 sm:px-20 sm:py-10 shadow-xl">
            <div className="mb-8 text-center">
              <img
                src="/assets/icons/logo.svg"
                alt="CodeAnt AI Logo"
                className="mx-auto mb-6 h-8"
              />
              <h1 className="text-2xl font-semibold text-gray-900">
                Welcome to CodeAnt AI
              </h1>
            </div>

            {/* Mode Toggle */}
            <div className="relative mb-8 flex rounded-lg bg-gray-100 p-1">
              <motion.div
                className="absolute inset-y-1 w-1/2 rounded-md bg-[#1470ef]"
                animate={{ x: mode === "saas" ? "0%" : "100%" }}
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
              />
              <button
                onClick={() => setMode("saas")}
                className={`relative z-10 flex-1 rounded-md py-2 text-sm font-medium transition-colors ${
                  mode === "saas"
                    ? "text-white"
                    : "text-gray-600 hover:text-gray-900"
                }`}
              >
                SAAS
              </button>
              <button
                onClick={() => setMode("self-hosted")}
                className={`relative z-10 flex-1 rounded-md py-2 text-sm font-medium transition-colors ${
                  mode === "self-hosted"
                    ? "text-white"
                    : "text-gray-600 hover:text-gray-900"
                }`}
              >
                Self Hosted
              </button>
            </div>

            {/* Authentication Buttons */}
            <div className="space-y-3 h-[228px]">
              {mode === "saas" ? (
                <>
                  {data.map((item) => (
                    <AuthButton
                      key={item.text}
                      img={item.img}
                      text={item.text}
                      onClick={item.onClick}
                    />
                  ))}
                </>
              ) : (
                <>
                  <AuthButton
                    img="/assets/icons/gitlab.svg"
                    text="Self Hosted GitLab"
                    onClick="/dashboard"
                  />
                  <AuthButton
                    img="/assets/icons/key.svg"
                    text="Sign in with SSO"
                    onClick="/dashboard"
                  />
                </>
              )}
            </div>
          </div>
        </div>

        <p className="mt-8 text-center text-sm text-gray-600">
          By signing up you agree to the{" "}
          <span className="font-semibold">Privacy Policy</span>.
        </p>
      </div>
    </div>
  );
}

// Authentication Button Component
function AuthButton({
  img,
  text,
  onClick,
}: {
  img: string;
  text: string;
  onClick: string;
}) {
  return (
    <NavLink
      to={onClick}
      className="flex flex-row justify-center items-center font-semibold border-[1px] w-full border-[#e5e4e4] gap-4 px-4 py-2 rounded-lg cursor-pointer hover:bg-gray-50"
    >
      <img src={img} alt={text} className="h-5 w-5" />
      <p>{text}</p>
    </NavLink>
  );
}

// Authentication Data
const data = [
  {
    img: "/assets/icons/github.svg",
    text: "Sign in with Github",
    onClick: "/dashboard",
  },
  {
    img: "/assets/icons/bitbucket.svg",
    text: "Sign in with Bitbucket",
    onClick: "/dashboard",
  },
  {
    img: "/assets/icons/azure.svg",
    text: "Sign in with Azure DevOps",
    onClick: "/dashboard",
  },
  {
    img: "/assets/icons/gitlab.svg",
    text: "Sign in with GitLab",
    onClick: "/dashboard",
  },
];

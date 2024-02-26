import HeaderLandingPage from "../components/HeaderLandingPage";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function LandingPage() {
  const { userInfo } = useSelector((state) => state.auth);
  const navigate = useNavigate();

  // check if the user is logged in
  useEffect(() => {
    if (userInfo) {
      navigate("/dashboard");
    }
  }, [userInfo, navigate]);

  return (
    <div className="bg-white overflow-hidden">
      <HeaderLandingPage />
      <div className="relative isolate px-6 pt-0 lg:px-8  max-h-screen flex items-center">
        <div
          className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
          aria-hidden="true"
        >
          <div className="relative" />
        </div>
        <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
          <div className="hidden sm:mb-8 sm:flex sm:justify-center">
            <div className="relative rounded-full px-3 py-1 text-sm leading-6 text-gray-600 ring-1 ring-gray-900/10 hover:ring-gray-900/20">
              For SignUp click.{" "}
              <Link to="/SignUpPage" className="font-semibold text-indigo-600">
                <span className="absolute inset-0" aria-hidden="true" />
                SignUp <span aria-hidden="true">&rarr;</span>
              </Link>
            </div>
          </div>
          <div className="text-center">
            <h1 className="text-l font-bold tracking-tight text-gray-900 sm:text-6xl">
              CollaboraDocs{" "}
              <span className="text-indigo-600 text-[35px]">
                Elevate Your Team's Collaboration Efforts
              </span>
            </h1>
            {/* <h1 className="text-4xl font-bold tracking-tight text-indigo-600 sm:text-6xl">
              ''
            </h1> */}
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Our platform empowers teams to work together efficiently, breaking
              down barriers to productivity and fostering a culture of shared
              success
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <a
                href="/LoginPage"
                className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Get started
              </a>
              <Link
                to="/AboutUs"
                className="text-sm font-semibold leading-6 text-gray-900"
              >
                Learn more <span aria-hidden="true">→</span>
              </Link>
            </div>
          </div>
        </div>
        <div
          className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
          aria-hidden="true"
        >
          <div
            className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
            style={{
              clipPath:
                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
            }}
          />
        </div>
      </div>
    </div>
  );
}

import { NavLink } from "react-router-dom";

const NotFound = () => {
  return (
    <main className="grid min-h-full place-items-center bg-white py-44 px-6 sm:py-52 lg:px-8">
      <div className="text-center">
        <p className="text-base lg:text-lg xl:text-xl font-semibold text-primary">
          404
        </p>
        <h1 className="mt-4 text-3xl md:text-5xl lg:text-5xl xl:text-6xl font-bold tracking-tight">
          Page not found
        </h1>
        <p className="mt-6 text-base leading-7">
          Sorry, we couldn’t find the page you’re looking for.
        </p>
        <NavLink href="/">
          <button className="btn-dark mx-auto mt-10"> Go back home</button>
        </NavLink>
      </div>
    </main>
  );
};

export default NotFound;

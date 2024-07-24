import Header from "./Header";
import { signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import useLatestMovies from "../hooks/useLatestMovies";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";

// import user
export default function Browse() {
  useLatestMovies();

  const handleSignout = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
      })
      .catch((error) => {
        // An error happened.
      });
  };

  return (
    <>
      <div className="flex justify-between">
        <Header />
        <div className="flex">
          <img
            className="w-16 h-16"
            src="https://t3.ftcdn.net/jpg/03/65/42/00/360_F_365420014_xjsSDkKzrhq4gr9GFzP6S97H7MJyNI5B.jpg"
            alt="logo"
          />

          <button onClick={handleSignout} className="text-bold bg-red-500 m-4">
            SignOut
          </button>
        </div>
      </div>
      <MainContainer />
      <SecondaryContainer />
    </>
  );
}

import { Outlet, useNavigation } from "react-router-dom";
import MainNavigation from "../components/MainNavigation";

const RootLayout = () => {
  // we use useNvigate hook that tells us the state of the request it gives back 3 states idle, loading, submitting
  // const navigate = useNavigation();
  return (
    <>
      <MainNavigation />
      {/* {navigate.state === "loading" && <p>Loading...</p>} */}
      <main>
        <Outlet />
      </main>
    </>
  );
};

export default RootLayout;

import { useLocation } from "react-router-dom";

const usePageMetadata = () => {
  const location = useLocation();

  switch (location.pathname) {
    case "/tasks":
      return { title: "Your To Do Tasks" };
    case "/bookmarks":
      return { title: "Your Bookmarks" };
    case "/dashboard":
      return { title: "Devtime-Companion Dashboard" };
    default:
      return { title: "Welcome to Devtime-Companion" };
  }
};

export default usePageMetadata;
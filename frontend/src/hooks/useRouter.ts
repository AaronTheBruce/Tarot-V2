import { useMemo } from "react";
import {
  useParams,
  useLocation,
  useNavigate,
//   useMatch,
  NavigateOptions
} from "react-router-dom";
import queryString from "query-string";

// Hook
export function useRouter() {
  const params = useParams();
  const location = useLocation();
  const navigate = useNavigate();
//   const match = useMatch();
  // Return our custom router object
  // Memoize so that a new object is only returned if something changes
  return useMemo(() => {
    return {
      // For convenience add push(), replace(), pathname at top level
      navigate: (to: string, options: NavigateOptions | undefined) => navigate(to, options),
      pathname: location.pathname,
      // Merge params and parsed query string into single "query" object
      // so that they can be used interchangeably.
      // Example: /:topic?sort=popular -> { topic: "react", sort: "popular" }
      query: {
        ...queryString.parse(location.search), // Convert string to object
        ...params,
      },
      location,
      history,
    };
  }, [params, location, navigate]);
}

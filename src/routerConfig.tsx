import React from "react";
import { useNavigate, useParams, useLocation } from "react-router-dom";

export const withRouter = (OriginalComponent: any) => {
  return function Wrapper(props: any) {
    const navigate = useNavigate();
    const params = useParams();
    let location = useLocation();
    // return <OriginalComponent router={{ location, navigate, params }} {...props} />;
    return (
      <OriginalComponent
        navigate={navigate}
        location={location}
        params={params}
        {...props}
      />
    );
  };
};

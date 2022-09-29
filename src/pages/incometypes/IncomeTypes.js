import React, { useEffect } from "react";

export default function IncomeTypes({ setSelectedLink, link }) {
  useEffect(() => {
    setSelectedLink(link);
  }, [setSelectedLink, link]);
  return <div>Income Types</div>;
}

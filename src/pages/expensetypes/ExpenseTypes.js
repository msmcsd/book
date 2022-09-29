import React, { useEffect } from "react";

export default function ExpenseTypes({ setSelectedLink, link }) {
  useEffect(() => {
    setSelectedLink(link);
  }, [setSelectedLink, link]);
  return <div>ExpenseTypes</div>;
}

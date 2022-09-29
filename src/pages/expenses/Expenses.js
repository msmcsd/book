import React, { useEffect } from "react";

export default function Expenses({ setSelectedLink, link }) {
  useEffect(() => {
    setSelectedLink(link);
  }, [setSelectedLink, link]);
  return <div>Expenses</div>;
}

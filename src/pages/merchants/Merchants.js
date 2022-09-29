import React, { useEffect } from "react";

export default function Merchants({ setSelectedLink, link }) {
  useEffect(() => {
    setSelectedLink(link);
  }, [setSelectedLink, link]);
  return <div>Merchants</div>;
}

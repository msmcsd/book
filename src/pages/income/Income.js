import React, { useEffect } from "react";

export default function Income({ setSelectedLink, link }) {
  useEffect(() => {
    setSelectedLink(link);
  }, [setSelectedLink, link]);
  return <div>Income</div>;
}

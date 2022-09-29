import React, { useEffect } from "react";

export default function Users({ setSelectedLink, link }) {
  useEffect(() => {
    setSelectedLink(link);
  }, [setSelectedLink, link]);
  return <div>Users</div>;
}

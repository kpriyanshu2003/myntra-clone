import React from "react";

export default function Options() {
  const opt = [
    { label: "Myntra Studio", link: "#" },
    { label: "Myntra Mall", link: "#" },
    { label: "Myntra Insider", link: "#" },
    { label: "Gift Cards", link: "#" },
    { label: "Contact Us", link: "#" },
    { label: "FAQs", link: "#" },
    { label: "Legal", link: "#" },
  ];

  const options = opt.map((xtra) => (
    <li key={xtra.label} className="mx-2 my-5">
      <a href={xtra.link}>{xtra.label}</a>
    </li>
  ));
  return <div className="list-none mt-3">{options}</div>;
}

import React from "react";

export const Blockquote = ({ text }) => {
  return <blockquote>{text}</blockquote>;
};

Blockquote.defaultProps = {
  text:
    "Software Developer with 12+ years of experience building user interfaces for a variety of clients from small businesses to Fortune 500 organizations. Skilled at building interactive experiences for the web and other mediums. Highly adaptable with a versatile UI-building skill set. Adept at communicating complex technical concepts in plain English."
};

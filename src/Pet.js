import React from "react";
export default function Pet({ name, animal, breed, media, location, id }) {
  let hero = "http://placecorgi.com/300/300";

  if (media.length) {
    hero = media[0];
  }
}

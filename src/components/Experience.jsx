import React, { Fragment } from "react";
import { experience } from "../data";

export const Experience = () => {
  const { title, employers } = experience;
  return (
    <div className="experience">
      <h2 class="group-title">{title}</h2>

      {employers.map(
        ({ name, location, positions, description, highlights }) => {
          return (
            <section>
              <article>
                <div class="contents">
                  <h3>
                    <strong>{name}</strong> | {location}
                  </h3>

                  {positions.map(({ title, start, end }) => {
                    return (
                      <Fragment>
                        <h4>{title}</h4>
                        <p className="meta">
                          {start} to {end}
                        </p>
                      </Fragment>
                    );
                  })}

                  {description && <p className="meta">{description}</p>}
                </div>
              </article>
              {highlights && (
                <ul>
                  {highlights.map(highlight => (
                    <li>{highlight}</li>
                  ))}
                </ul>
              )}
            </section>
          );
        }
      )}
    </div>
  );
};

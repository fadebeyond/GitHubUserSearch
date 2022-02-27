import React from "react";
import { AiFillStar } from "react-icons/ai";

import { GitHubCustomHook } from "../context/context";
import "bootstrap/dist/css/bootstrap.min.css";

const Repos = () => {
  const { repos } = GitHubCustomHook();

  return (
    <>
      <div
        className="container overflow-hidden"
        style={{ backgroundColor: "#2b2e4a" }}
      >
        <div className="row justify-content-around">
          {repos.map((repo) => {
            return (
              <div
                className="card text-white col-lg-4 col-sm-12 gy-4"
                style={{
                  maxWidth: "18rem",
                  minHeight: "14rem",
                  backgroundColor: "#903749",
                }}
              >
                <div className="card-header">
                  <div className="row justify-content-around">
                    <button
                      type="button"
                      className="btn btn-primary col-5 btn-sm"
                    >
                      <span className="badge badge-light">{repo.language}</span>
                    </button>

                    <button
                      type="button"
                      className="btn btn-primary col-5 btn-sm"
                    >
                      <AiFillStar />{" "}
                      <span className="badge badge-light">
                        {repo.stargazers_count}
                      </span>
                    </button>
                  </div>
                </div>
                <a
                  href={repo.html_url}
                  style={{ textDecoration: "none" }}
                  target="_blank"
                >
                  <div className="card-body">
                    <h5 className="card-title">{repo.name}</h5>
                  </div>
                  <p class="card-text">The id is {repo.id}</p>
                </a>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Repos;

import React from "react";
import { useState } from "react";
import styled from "styled-components";
import { MdSearch } from "react-icons/md";
import "bootstrap/dist/css/bootstrap.min.css";
import { GithubContext } from "../context/context";
import { GitHubCustomHook } from "../context/context";

const Search = () => {
  const { setGithubUserName } = GitHubCustomHook();
  const [name, setName] = useState("");

  const handleSubmit = (evt) => {
    evt.preventDefault();
    setGithubUserName(name);
    console.log(name);
  };

  // fetch("https://api.github.com/users/aaryandewan")
  //   .then((response) => response.json())
  //   .then((data) => console.log(data));

  return (
    <div
      className="d-flex justify-content-between"
      style={{ backgroundColor: "#2b2e4a" }}
    >
      <div style={{ margin: "auto", marginTop: "5%", marginBottom: "3%" }}>
        <form onSubmit={handleSubmit} style={{ justifyContent: "center" }}>
          {/* <label>
        Frirst Name:
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </label>
      <input type="submit" value="Submit" /> */}
          <div class="input-group">
            <span class="input-group-text" id="addon-wrapping">
              @
            </span>
            <input
              type="text"
              class="form-control"
              placeholder="Username"
              aria-label="Username"
              aria-describedby="addon-wrapping"
              value={name}
              onChange={(e) => setName(e.target.value)}
            ></input>
            <button
              class="btn btn-outline-secondary"
              type="submit"
              id="button-addon2"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Search;

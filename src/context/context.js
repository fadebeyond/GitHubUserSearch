import React, { useState, useEffect, useContext } from "react";
import mockUser from "./mockData.js/mockUser";
import mockRepos from "./mockData.js/mockRepos";
import mockFollowers from "./mockData.js/mockFollowers";
import axios from "axios";

const rootUrl = "https://api.github.com";

const GithubContext = React.createContext();

export const GithubProvider = ({ children }) => {
  const [githubUserName, setGithubUserName] = useState("shiffman");

  const [githubUser, setGithubUser] = useState(mockUser);
  const [repos, setRepos] = useState(mockRepos);
  const [followers, setFollowers] = useState(mockFollowers);

  const fetchData = async () => {
    console.log(
      `${rootUrl}/${githubUserName}`,
      `${rootUrl}/${githubUserName}/repos`
    );
    const response = await fetch(`${rootUrl}/users/${githubUserName}`);
    const data = await response.json();
    setGithubUser(data);
    const response2 = await fetch(`${rootUrl}/users/${githubUserName}/repos`);
    const data2 = await response2.json();
    setRepos(data2);
 
    console.log(githubUser);
    console.log(repos);
  };

  useEffect(() => {
    fetchData();
  }, [githubUserName]);

  return (
    <GithubContext.Provider
      value={{ githubUser, repos, followers, setGithubUserName }}
    >
      {children}
    </GithubContext.Provider>
  );
};

export const GitHubCustomHook = () => {
  return useContext(GithubContext);
};

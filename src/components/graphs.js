import React from "react";
import { GitHubCustomHook } from "../context/context";
import { Bar, Pie } from "react-chartjs-2";
import Chart from "chart.js/auto";

const graphs = () => {
  const { repos } = GitHubCustomHook();

  function compare(a, b) {
    if (a.stargazers_count < b.stargazers_count) {
      return -1;
    }
    if (a.stargazers_count > b.stargazers_count) {
      return 1;
    }
    return 0;
  }

  let finalRepo = repos.sort(compare);
  finalRepo.reverse();
  let totalFinalRepo = finalRepo.slice(0, 7);
  //   console.log("total final repo length", totalFinalRepo.length);

  const xAxis = [];
  const yAxis = [];

  const fiveObjects = totalFinalRepo.map((obj) => {
    const { name, stargazers_count } = obj;
    xAxis.push(name);
    yAxis.push(stargazers_count);
  });

  const languageValuePair = {};
  let counter = 0;
  let lengthOfRepos = repos.length;
  //   languageValuePair[repos[0].language] = 1;
  while (counter < lengthOfRepos) {
    // console.log(repos[counter].language);
    //works

    if (languageValuePair.hasOwnProperty(repos[counter].language)) {
      languageValuePair[repos[counter].language]++;
    } else {
      languageValuePair[repos[counter].language] = 1;
    }
    counter++;
  }
  delete languageValuePair.null;
  console.log("Fuck");
  console.log(languageValuePair);
  let xxValue = [];
  let yyValue = [];
  for (let property in languageValuePair) {
    xxValue.push(property);
    yyValue.push(languageValuePair[property]);
  }
  console.log(yyValue);

  return (
    <>
      <div class="container">
        <div className="d-flex justify-content-between col-lg-4 col-sm-12">
          <Bar
            data={{
              labels: xAxis,
              datasets: [
                {
                  label: "# of Stars",
                  data: yAxis,
                  backgroundColor: [
                    "rgba(255, 99, 132, 0.2)",
                    "rgba(54, 162, 235, 0.2)",
                    "rgba(255, 206, 86, 0.2)",
                    "rgba(75, 192, 192, 0.2)",
                    "rgba(153, 102, 255, 0.2)",
                    "rgba(255, 159, 64, 0.2)",
                  ],
                  borderColor: [
                    "rgba(255, 99, 132, 1)",
                    "rgba(54, 162, 235, 1)",
                    "rgba(255, 206, 86, 1)",
                    "rgba(75, 192, 192, 1)",
                    "rgba(153, 102, 255, 1)",
                    "rgba(255, 159, 64, 1)",
                  ],
                  borderWidth: 1,
                },
              ],
            }}
            height={400}
            width={600}
            options={{
              maintainAspectRatio: true,
              responsive: true,
            }}
          />
        </div>
        <div className="d-flex justify-content-between col-lg-4 col-sm-12">
          <Pie
            data={{
              labels: xxValue,
              datasets: [
                {
                  label: "Most used Languages",
                  data: yyValue,
                  backgroundColor: [
                    "rgba(255, 99, 132, 0.2)",
                    "rgba(54, 162, 235, 0.2)",
                    "rgba(255, 206, 86, 0.2)",
                    "rgba(75, 192, 192, 0.2)",
                    "rgba(153, 102, 255, 0.2)",
                    "rgba(255, 159, 64, 0.2)",
                  ],
                  borderColor: [
                    "rgba(255, 99, 132, 1)",
                    "rgba(54, 162, 235, 1)",
                    "rgba(255, 206, 86, 1)",
                    "rgba(75, 192, 192, 1)",
                    "rgba(153, 102, 255, 1)",
                    "rgba(255, 159, 64, 1)",
                  ],
                  borderWidth: 1,
                },
              ],
            }}
            height={400}
            width={400}
            options={{
              maintainAspectRatio: true,
            }}
          />
        </div>
      </div>
    </>
  );
};

export default graphs;

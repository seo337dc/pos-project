import React from "react";
import { Droppable } from "@shopify/draggable";
import styled from "styled-components";

function Test() {
  const func = () => {};

  function solution(v) {
    //	[[1, 4], [3, 4], [3, 10]]
    let firstCheck = v[0][1];
    console.log(firstCheck);
    // let first_second;
    // let other;
    console.log(v.length);
    for (let index = 0; index < v.length; index++) {
      console.log(v);
    }
    // for (let i = 0; (i = v.length); i++) {
    //   // if ((firstCheck = v[i][1])) {
    //   //   first_second = v[i][1];
    //   // } else {
    //   //   other = v[i][1];
    //   // }
    // }

    // console.log(first_second, other);
    // var answer = [[]];

    // console.log("Hello Javascript");

    // return answer;
  }

  solution([
    [1, 4],
    [3, 4],
    [3, 10],
  ]);

  return (
    <TestContainer>
      <div class="wrapper">
        <div class="dropzone occupied" data-dropzone="1">
          {/* asdfadsf */}
          <div class="draggable">asdfadsf</div>
        </div>
        <div class="dropzone occupied" data-dropzone="2">
          <div class="draggable"></div>
        </div>
        <div class="dropzone occupied" data-dropzone="3">
          <div class="draggable"></div>
        </div>
      </div>
      <div class="wrapper">
        <div class="dropzone" data-dropzone="1"></div>
        <div class="dropzone" data-dropzone="2"></div>
        <div class="dropzone" data-dropzone="3"></div>
      </div>
    </TestContainer>
  );
}

export default Test;

const TestContainer = styled.div`
  background-color: #618bff;
  margin: 0;
  padding: 0;
  font-family: "Montserrat", sans-serif;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  /* To center content in the containers */
  .dropzone {
    display: flex;
    align-items: center;
    justify-content: center;
    /*fixes dragging causing item to be .5* the size*/
    flex-wrap: wrap;
    padding: 1em;
    height: 100px;
    width: 100px;
    border-radius: 10px;
    margin: 20px;
    background-color: white;
    border: 3px solid blue;
  }

  .wrapper {
    margin-bottom: 1em;
  }

  /* Creating the dropzone boxes */
  .dropzone {
  }

  /* Creating the dragable boxes */
  .draggable {
    border-radius: 8px;
    background-color: #ff8fde;
    height: 80px;
    width: 80px;
  }

  /* Occupied dropzone color */
  .draggable-dropzone--occupied {
    background-color: #7bed9f;
  }

  /* Fix for color changing on container of the image */
  .occupied {
    background-color: white !important;
  }
`;

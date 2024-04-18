let displayArea = document.querySelector("#displayArea");
let sportSubmisson2 = document.querySelector("#sportSubmisson2");
let mediumSubmission2 = document.querySelector("#mediumSubmisson2");
let submitBtn2 = document.querySelector("#submitBtn2");
let alert2 = document.querySelector("#alert2");

// Above, we slect the form and input areas.
//Also, we select our append areas.

function ValidateMediumRequest() {
  const searchParamArray = document.location.search.split("&");
  console.log(searchParamArray);

  const sport = searchParamArray[0].split("=")[1];
  const medium = searchParamArray[1].split("=")[1];

  console.log(sport);
  console.log(medium);

  if (medium === "Video") {
    ValidateSportRequest(sport);
  } else {
  }
}
// Above, is a function to validate the type of medium selected.
function ValidateSportRequest(sport) {
  console.log(sport);

  if (sport === "Football") {
    getFootballAPI(sport);
  } else if (sport === "Boxing") {
    getBoxingAPI(sport);
  } else if (sport === "Baseball") {
    getBaseBallAPI(sport);
  } else {
    getBasketBallAPI(sport);
  }
}
// Above, is to validate the type of sport selected if a video medium is selected
function getFootballAPI(sport) {
  let apiURL = ` https://youtube.googleapis.com/youtube/v3/search?part=snippet&channelId=UCJdl3Paao2f3ha5JXMYUCIA&channelType=any&maxResults=6&order=viewCount&q=${sport}&safeSearch=strict&type=video&videoDuration=long&key=AIzaSyBQ2byzV6h7M11NJ7yjfTA4gpxLs2_qbEg `;

  fetch(apiURL)
    .then(function (response) {
      if (response.ok) {
        response.json().then(function (data) {
          if (data.length === 0) {
            alert("Error data Not Found!");
          } else {
            videos = data.items;
            console.log(videos);

            videos.forEach((video) => {
              let videoId = video.id.videoId;
              let thumbSrc = video.snippet.thumbnails.high.url;
              let videoTitel = video.snippet.title;
              console.log(videoTitel);

              let videoA = document.createElement("a");
              videoA.setAttribute(
                "href",
                `https://www.youtube.com/watch?v=${videoId}`
              );

              let thumbNail = document.createElement("img");
              thumbNail.setAttribute("src", `${thumbSrc}`);

              let title = document.createElement("div");
              title.setAttribute("class", "videoTitle");
              title.textContent = videoTitel;

              videoA.append(thumbNail);
              videoA.append(title);

              displayArea.append(videoA);
            });
          }
        });
      }
    })

    .catch(function (error) {
      alert("Unable to connect to server!");
    });
}
// Above, fetches football api and renders items to screen.

function getBoxingAPI(sport) {
  let apiURL = ` https://youtube.googleapis.com/youtube/v3/search?part=snippet&channelId=UCrg3MVqw0MJVMJ6TQGUS0hA&channelType=any&maxResults=6&order=viewCount&q=${sport}&safeSearch=strict&type=video&videoDuration=long&key=AIzaSyBQ2byzV6h7M11NJ7yjfTA4gpxLs2_qbEg `;

  fetch(apiURL)
    .then(function (response) {
      if (response.ok) {
        response.json().then(function (data) {
          if (data.length === 0) {
            alert("Error data Not Found!");
          } else {
            videos = data.items;
            console.log(videos);

            videos.forEach((video) => {
              let videoId = video.id.videoId;
              let thumbSrc = video.snippet.thumbnails.high.url;
              let videoTitel = video.snippet.title;
              console.log(videoTitel);

              let videoA = document.createElement("a");
              videoA.setAttribute(
                "href",
                `https://www.youtube.com/watch?v=${videoId}`
              );

              let thumbNail = document.createElement("img");
              thumbNail.setAttribute("src", `${thumbSrc}`);

              let title = document.createElement("div");
              title.setAttribute("class", "videoTitle");
              title.textContent = videoTitel;

              videoA.append(thumbNail);
              videoA.append(title);

              displayArea.append(videoA);
            });
          }
        });
      }
    })

    .catch(function (error) {
      alert("Unable to connect to server!");
    });
}
// Above, fetches boxing api and renders items to screen.

function getBaseBallAPI(sport) {
  let apiURL = ` https://youtube.googleapis.com/youtube/v3/search?part=snippet&channelId=UCp0fj-KxpS1OR_5dKUW7zUw&channelType=any&maxResults=6&order=viewCount&q=${sport}&safeSearch=strict&type=video&videoDuration=long&key=AIzaSyBQ2byzV6h7M11NJ7yjfTA4gpxLs2_qbEg `;

  fetch(apiURL)
    .then(function (response) {
      if (response.ok) {
        response.json().then(function (data) {
          if (data.length === 0) {
            alert("Error data Not Found!");
          } else {
            videos = data.items;
            console.log(videos);

            videos.forEach((video) => {
              let videoId = video.id.videoId;
              let thumbSrc = video.snippet.thumbnails.high.url;
              let videoTitel = video.snippet.title;
              console.log(videoTitel);

              let videoA = document.createElement("a");
              videoA.setAttribute(
                "href",
                `https://www.youtube.com/watch?v=${videoId}`
              );

              let thumbNail = document.createElement("img");
              thumbNail.setAttribute("src", `${thumbSrc}`);

              let title = document.createElement("div");
              title.setAttribute("class", "videoTitle");
              title.textContent = videoTitel;

              videoA.append(thumbNail);
              videoA.append(title);

              displayArea.append(videoA);
            });
          }
        });
      }
    })

    .catch(function (error) {
      alert("Unable to connect to server!");
    });
}

// Above, fetches baseball api and renders items to screen.

function getBasketBallAPI(sport) {
  let apiURL = ` https://youtube.googleapis.com/youtube/v3/search?part=snippet&channelId=UC3-gn89LFClSLU6scv9naOQ&channelType=any&maxResults=6&order=viewCount&q=${sport}&safeSearch=strict&type=video&videoDuration=long&key=AIzaSyBQ2byzV6h7M11NJ7yjfTA4gpxLs2_qbEg `;

  fetch(apiURL)
    .then(function (response) {
      if (response.ok) {
        response.json().then(function (data) {
          if (data.length === 0) {
            alert("Error data Not Found!");
          } else {
            videos = data.items;
            console.log(videos);

            videos.forEach((video) => {
              let videoId = video.id.videoId;
              let thumbSrc = video.snippet.thumbnails.high.url;
              let videoTitel = video.snippet.title;
              console.log(videoTitel);

              let videoA = document.createElement("a");
              videoA.setAttribute(
                "href",
                `https://www.youtube.com/watch?v=${videoId}`
              );

              let thumbNail = document.createElement("img");
              thumbNail.setAttribute("src", `${thumbSrc}`);

              let title = document.createElement("div");
              title.setAttribute("class", "videoTitle");
              title.textContent = videoTitel;

              videoA.append(thumbNail);
              videoA.append(title);

              displayArea.append(videoA);
            });
          }
        });
      }
    })

    .catch(function (error) {
      alert("Unable to connect to server!");
    });
}
// Above, fetches basketball api and renders items to screen.

function nextSubmisson(event) {
  event.preventDefault();
  displayArea.innerHTML = "";

  if (sportSubmisson2.value === "" || mediumSubmission2.value === "") {
    let h6 = document.createElement("h6");
    h6.textContent = "Please Use A Valid Entry!";
    h6.setAttribute("class", "alert");
    alert2.append(h6);

    setTimeout(() => {
      alert2.removeChild(h6);
    }, 2000);
    // Above, we created a function to handle the form if the submission areas are blank to alert the user for 2 seconds.
  } else {
    sport = sportSubmisson2.value;
    medium = mediumSubmission2.value;

    document.location.search = `sport=${sport}&medium=${medium}`;
  }
}
// Above, is the function that will run once a second submission is made.
// This function will update the document search params.

$(document).ready(function () {
  // Handler for .ready() called.
  ValidateMediumRequest();

  submitBtn2.addEventListener("submit", nextSubmisson);
});

// Above, we make sure the dom and page is fully loaded and ready before executing code.

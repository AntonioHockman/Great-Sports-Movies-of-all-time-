let displayArea = document.querySelector("#displayArea");

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

$(document).ready(function () {
  // Handler for .ready() called.
  ValidateMediumRequest();
});

let sportsSubmission = document.querySelector("#sportSubmisson");
let mediumSubmission = document.querySelector("#mediumSubmission");
let submitBtn = document.querySelector("#submitBtn");
let alert1 = document.querySelector("#alert");

console.log(sportsSubmission);
console.log(mediumSubmission);
console.log(submitBtn);

// Above, we selected our form element and the two submission areas.

function handleSearch(event) {
  event.preventDefault();

  let trackedInputs = JSON.parse(localStorage.getItem("cities")) || [];

  if (sportsSubmission.value === "" || mediumSubmission.value === "") {
    let h2 = document.createElement("h2");
    h2.textContent = "Please Use A Valid Entry!";
    h2.setAttribute("class", "alert");
    alert1.append(h2);

    setTimeout(() => {
      alert1.removeChild(h2);
    }, 2000);
    // Above, we created a function to handle the form if the submission areas are blank to alert the user for 2 seconds.
  } else {
    let sportsSubmissionValue = sportsSubmission.value;
    let mediumSubmissionValue = mediumSubmission.value;

    console.log(sportsSubmissionValue);
    console.log(mediumSubmissionValue);

    let inputs = {
      sport: sportsSubmissionValue,
      medium: mediumSubmissionValue,
    };

    trackedInputs.push(inputs);

    let trackedInputSerialized = JSON.stringify(trackedInputs);

    localStorage.setItem("cities", trackedInputSerialized);

    const queryString = `./results.html?sport=${sportsSubmissionValue}&medium=${mediumSubmissionValue}`;

    location.assign(queryString);

    // Above, we handle a valid submission.
    // Next, we get the last values inputed, store them in a object, and set them to local storage.
    // Last, we set a query string with parameters of our values.
  }

  sportsSubmission.value = "";
  mediumSubmission.value = "";
  // Above, we clear the input areas.
}

$(document).ready(function () {
  // Handler for .ready() called.
  submitBtn.addEventListener("submit", handleSearch);
});

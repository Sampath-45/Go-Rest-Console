let consoleFormEl = document.getElementById("consoleForm");
let requestUrlEl = document.getElementById("requestUrl");
let responseStatusEl = document.getElementById("responseStatus");
let requestUrlErrMsgEl = document.getElementById("requestUrlErrMsg");
let requestMethodEl = document.getElementById("requestMethod");
let requestBodyEl = document.getElementById("requestBody");
let responseBodyEl = document.getElementById("responseBody");

function checkRequestUrl() {
    if (requestUrlEl.value === "") {
        requestUrlErrMsgEl.textContent = "Required";
        requestUrlErrMsgEl.classList.add("error-message");
    } else {
        requestUrlErrMsgEl.textContent = "";
    }
}
let formData = {
    requestUrl: "https://gorest.co.in/public-api/users",
    requestMethod: "POST",
    requestBody: ""
};

requestUrlEl.addEventListener("change", function(event) {
    formData.requestUrl = event.target.value;
});
requestMethodEl.addEventListener("change", function(event) {
    formData.requestMethod = event.target.value;
});
requestBodyEl.addEventListener("change", function(event) {
    formData.requestBody = event.target.value;
});



function sendRequestUrl() {
    let {
        requestUrl,
        requestMethod,
        requestBody,
    } = formData;
    let url = requestUrl;
    let options = {
        method: requestMethod,
        headers: {
            "Content-type": "application/json",
            Accept: "application/json",
            Authorization: "Bearer 67572d9d23a26f280283e017dffee7179fec88336cdbd48ed84a843a60f34afe",
        },
        body: requestBody
    };
    fetch(url, options)
        .then(function(response) {
            return response.json();
        })
        .then(function(jsonData) {
            let requestStatus = jsonData.code;
            responseStatusEl.value = requestStatus;
            responseBodyEl.textContent = JSON.stringify(jsonData);
        });
}

consoleFormEl.addEventListener("submit", function(event) {
    event.preventDefault();
    checkRequestUrl();
    sendRequestUrl();
})

        let button = document.getElementById("loginBtn");
        let message = document.getElementById("message");

button.addEventListener("click", function () {

    button.disabled = true;
    message.innerText = "Logging in wait a minuteeeeeeee";

    let loginPromise = new Promise(function (resolve, reject) {

              
        setTimeout(function () {
            resolve();
        }, 2000);

    });

    loginPromise.then(function () {
        message.innerText = "Welcome back broooooooo";
    });
});
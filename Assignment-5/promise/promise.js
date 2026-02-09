function getUser() {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log("User fetched");
            resolve({ id: 1, name: "Ram" });
        }, 2000);
    });
}

function getPosts(userId) {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log("Posts fetched");
            resolve(["post1", "post2"]);
        }, 2000);
    });
}

function getComments(post) {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log("Comments fetched");
            resolve(["nice", "good"]);
        }, 2000);
    });
}

let userData, postData, commentData;

getUser()
    .then((user) => {
        userData = user;
        return getPosts(user.id);
    })
    .then((posts) => {
        postData = posts;
        return getComments(posts[0]);
    })
    .then((comments) => {
        commentData = comments;

        console.log("User:", userData);
        console.log("Posts:", postData);
        console.log("Comments:", commentData);
    })
    .catch((error) => {
        console.log("Error:", error);
    });

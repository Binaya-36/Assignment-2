// function to get user
function getUser() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("User fetched");
            resolve({ id: 1, name: "Ram" });
        }, 2000);
    });
}

// function to get posts using user id
function getPosts(userId) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Posts fetched");
            resolve(["post1", "post2"]);
        }, 2000);
    });
}

// function to get comments using post
function getComments(post) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Comments fetched");
            resolve(["nice", "good"]);
        }, 2000);
    });
}

// async / await function
async function showData() {
    try {
        const user = await getUser();
        const posts = await getPosts(user.id);
        const comments = await getComments(posts[0]);

        console.log("User:", user);
        console.log("Posts:", posts);
        console.log("Comments:", comments);
    } catch (error) {
        console.log("Error:", error);
    }
}

// call the function
showData();

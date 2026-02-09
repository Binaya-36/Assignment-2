function getUser(callback)
{
    console.log("Data fetching...");
    setTimeout(() => {
        console.log("User fetched");
        callback({ id: 1, name: "Binaya" });
    }, 2000);
}
function getposts(userid, callback)
{
    setTimeout(() => {
            console.log("Fetching posts of the user...");
        console.log("User posts fetched");
        callback(["Posts 1", "Posts 2"]);
    }, 2000);
}
function getcomments(posts, callback)
{
    console.log("Fetching comments of the post..");
    setTimeout(() => {
        console.log("Posts comments fetched");
        callback(["Handsome", "Greek God Physique"]);
    }, 2000);
}

getUser(function (user) {
    getposts(user.id, function (posts) {
        getcomments(posts[0], function (comments)
        {
            console.log("User:", user);
            console.log("Id:", posts);
            console.log("Comments", comments);
    })
    })
})
function getUser(id, callback)
{
setTimeout(() => {
    const user = {
        id: id,
        name: "Raju"
    };
    callback(user);
}, 2000);
}
getUser(1, function (user) {
    console.log("User name is ", user.name);
});
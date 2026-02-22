        const message = document.getElementById("message");
        const commentList = document.getElementById("commentList");
        
        fetch("https://jsonplaceholder.typicode.com/comments")
            .then(function(response) {
                return response.json();   
            })
            .then(function(data) {
                message.style.display = "none";  

              
                data.forEach(function(comment) {
                    const li = document.createElement("li");

                    li.innerHTML = 
                        "<strong>Name:</strong> " + comment.name + "<br>" +
                        "<strong>Email:</strong> " + comment.email + "<br>" +
                        "<strong>Comment:</strong> " + comment.body + "<br><br>";

                    commentList.appendChild(li);
                });
            })
            .catch(function(error) {
                message.innerText = "Failed to load data.";
            });
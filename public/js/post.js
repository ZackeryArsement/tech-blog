// delete sentence on click
const addCommentButtonHandler = async (event) => {
    console.log('clicked');
    if (event.target.hasAttribute("data-id")) {
      const post_id = event.target.getAttribute("data-id");

      const text = document.querySelector("#text").value.trim();
  
      if(text){
        const response = await fetch(`/api/comment`, {
            method: "POST",
            body: JSON.stringify({ text, post_id }),
            headers: { "Content-Type": "application/json" },
        });
    
        if (response.ok) {
        document.location.replace(`/api/post/${post_id}`);
        } else {
        alert("Failed to add comment");
        }
      }
    }
  };
  
document
.getElementById("comment-list")
.addEventListener("click", addCommentButtonHandler);
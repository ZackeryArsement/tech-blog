// delete sentence on click
const delButtonHandler = async (event) => {
    if (event.target.hasAttribute("data-id")) {
      const id = event.target.getAttribute("data-id");
      console.log(id);
  
      const response = await fetch(`/api/post/${id}`, {
        method: "DELETE",
      });
  
      if (response.ok) {
        document.location.replace("/dashboard");
      } else {
        alert("Failed to delete post");
      }
    }
  };
  
document
.getElementById("post-list")
.addEventListener("click", delButtonHandler);
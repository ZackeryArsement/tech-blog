// style="disply=none; visibility=hidden;" 
document.querySelector("#user_id").style.display = 'none';
document.querySelector("#user_id").style.visibility = 'hidden';

const newPostHandler = async (event) => {
    event.preventDefault();
  
    // Collect values from the login form
    const title = document.querySelector("#title").value.trim();
    const text = document.querySelector("#text").value.trim();
    const user_id = document.querySelector("#user_id").textContent;

    if (title && text) {
      // Send a POST request to the API endpoint
      const response = await fetch(`/api/post/new/${user_id}`, {
        method: "POST",
        body: JSON.stringify({ title, text, user_id }),
        headers: { "Content-Type": "application/json" },
      });
      if (response.ok) {
        // document.location.replace(`/dashboard`);
      } else {
        alert("Failed to create new post.");
      }

      document.location.replace('/dashboard');
    }
  };

  document
  .querySelector(".post-form")
  .addEventListener("submit", newPostHandler);
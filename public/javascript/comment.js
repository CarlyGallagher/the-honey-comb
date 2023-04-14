async function commentFormHandler(event) {
    event.preventDefault();
  
    const comment_text = document.querySelector('input[name="comment-body"]').value.trim();
  
    const post_id = window.location.toString().split('/')[
      window.location.toString().split('/').length - 1
    ];
  
    // if there is a comment -- preventing from users submitting empty comments 
    if (comment_text) {
        const response = await fetch('/api/comments', {
          method: 'POST',
          body: JSON.stringify({
            post_id,
            comment_text
          }),
          headers: {
            'Content-Type': 'application/json'
          }
        });
      
        if (response.ok) {
          document.location.reload();
          
        } else {
          alert(response.statusText);
          document.querySelector('#comment-form').style.display = "block";
        }
      }
  }
  
  document.querySelector('.comment-form').addEventListener('submit', commentFormHandler);
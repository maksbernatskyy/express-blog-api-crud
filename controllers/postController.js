// Array of posts
const blog = require("../data/postsArr");

// Function find
function getFind(id) {
  return blog.find((thisPost) => {
    return thisPost.id === id;
  });
}

// index
function index(req, res) {
  // Now filtered blog is equal to the original blog
  let filteredBlog = blog;

  // Verify if there is a filter
  if (req.query.tag) {
    filteredBlog = blog.filter((thisPost) => {
      return thisPost.tags.includes(req.query.tag);
    });
    console.log(filteredBlog);
  }

  // Response with the filterd menu
  res.json(filteredBlog);
}

// show
function show(req, res) {
  // Transform to number the id of URL
  const id = Number(req.params.id);

  // Find the post with the id that be search
  const specificPost = getFind(id);

  // Controll if the post exist
  if (!specificPost) {
    // Change the status
    res.status(404);

    // Return an error
    return res.json({
      error: "Not found",
      message: "Post not find",
    });
  }

  // Response whit the specific post
  res.json(specificPost);
}

// destroy
function destroy(req, res) {
  // Tranform to number the id of URL
  const id = Number(req.params.id);

  // Find the post with the id that be search
  const specificPost = getFind(id);

  // Controll if the post exist
  if (!specificPost) {
    // Change the status
    res.status(404);

    // Return an error
    return res.json({
      error: "Not found",
      message: "Post not find",
    });
  }

  // Remove the post
  blog.splice(blog.indexOf(specificPost), 1);

  // Show the updated list
  console.log(blog);

  // Response with the status 204
  res.sendStatus(204);
}

// Export
module.exports = { index, show, destroy };

// Get book details based on author
public_users.get('/author/:author', async function (req, res) {
  // Write your code here
  let author = req.params.author;
  let booksByAuthor = [];

  try {
    // Assuming the API endpoint for getting all books is http://localhost:5000/books
    const response = await axios.get('http://localhost:5000/books');

    for (let isbn in response.data) {
      if (response.data[isbn].author == author) {
        booksByAuthor.push(response.data[isbn]);
      }
    }

    if (booksByAuthor.length > 0) {
      return res.status(200).send(JSON.stringify(booksByAuthor, null, 4));
    } else {
      return res.status(404).send("No book found with author " + author);
    }
  } catch (error) {
    // Handle errors, e.g., network issues or API errors
    console.error(error);
    return res.status(500).send("Internal Server Error");
  }
});
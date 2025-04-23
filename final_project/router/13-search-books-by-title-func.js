// Get all books based on title
public_users.get('/title/:title', async function (req, res) {
  // Write your code here
  let title = req.params.title;
  let booksByTitle = [];

  try {
    // Assuming the API endpoint for getting all books is http://localhost:5000/books
    const response = await axios.get('http://localhost:5000/books');

    for (let isbn in response.data) {
      if (response.data[isbn].title == title) {
        booksByTitle.push(response.data[isbn]);
      }
    }

    if (booksByTitle.length > 0) {
      return res.status(200).send(JSON.stringify(booksByTitle, null, 4));
    } else {
      return res.status(404).send("No book found with title " + title);
    }
  } catch (error) {
    // Handle errors, e.g., network issues or API errors
    console.error(error);
    return res.status(500).send("Internal Server Error");
  }
});
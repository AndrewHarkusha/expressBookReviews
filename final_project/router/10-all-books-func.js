// Get book details based on ISBN
public_users.get('/isbn/:isbn', async function (req, res) {
  // Write your code here
  let isbn = req.params.isbn;

  try {
    const response = await axios.get('http://localhost:5000/books');

    if (response.data[isbn]) {
      return res.status(200).send(JSON.stringify(response.data[isbn], null, 4));
    } else {
      return res.status(404).send("No book found with ISBN " + isbn);
    }
  } catch (error) {
    // Handle errors, e.g., network issues or API errors
    console.error(error);
    return res.status(500).send("Internal Server Error");
  }
});
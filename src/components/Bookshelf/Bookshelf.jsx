import { useState } from "react";

const Bookshelf = () => {
  // Step 1: Store your current list of books
  const [books, setBooks] = useState([
    { title: "Fourth Wing", author: "Rebecca Yarros" },
    { title: "The Lion, the Witch and the Wardrobe", author: "C.S. Lewis" },
  ]);

  const [formData, setFormData] = useState({ title: "", author: "" });

  const handleInputChange = (event) => {
    const { name, value } = event.target;

    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Set our title state based on the formData state at the time of submission
    setBooks([...books, formData]);
    // Reset fullName state to clear our form inputs
    setFormData({ title: "", author: "" });
  };

  return (
    <div className="bookshelfDiv">
      <div className="formDiv">
        <h3>Add a Book</h3>

        <form onSubmit={handleSubmit}>
          <label htmlFor="Title">Title: </label>
          <input
            id="title"
            name="title"
            value={formData.title}
            onChange={handleInputChange}
          />
          <label htmlFor="Author">Author: </label>
          <input
            id="author"
            name="author"
            value={formData.author}
            onChange={handleInputChange}
          />
          <button type="submit">Add Book</button>
        </form>
      </div>
      <div className="bookCardsDiv">
        <ul>
          {books.map((book, index) => (
            <li key={index} className="bookCard">
              <h4>{book.title}</h4>
              <p>by {book.author}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Bookshelf;

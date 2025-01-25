import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./TrackWishlist.css"; // Import CSS for styling

const TrackWishlist = () => {
  const [wishItem, setWishItem] = useState("");
  const [wishList, setWishList] = useState([]);
  const navigate = useNavigate();

  // Handle adding a new item to the wishlist
  const handleAddItem = (e) => {
    e.preventDefault();
    if (!wishItem) {
      alert("Please enter an item.");
      return;
    }

    // Add the new item to the wishlist
    setWishList([...wishList, wishItem]);
    setWishItem(""); // Reset input field
  };

  // Handle removing an item from the wishlist
  const handleRemoveItem = (index) => {
    const updatedWishList = wishList.filter((_, i) => i !== index);
    setWishList(updatedWishList); // Update wishlist state
  };

  // Navigate back to Dashboard
  const handleBackToDashboard = () => {
    navigate("/dashboard");
  };

  return (
    <div className="wishlist-container">
      <div className="wishlist-card">
        <h2>Your Wishlist</h2>

        {/* Add Item Form */}
        <form onSubmit={handleAddItem} className="wishlist-form">
          <div className="form-group">
            <label htmlFor="wishItem">Item Name:</label>
            <input
              type="text"
              id="wishItem"
              value={wishItem}
              onChange={(e) => setWishItem(e.target.value)}
              placeholder="Enter your wish item"
              required
            />
          </div>
          <button type="submit" className="add-item-button">Add Item</button>
        </form>

        {/* Display the wishlist */}
        <div className="wishlist-items">
          <h3>Your Wishlist Items:</h3>
          {wishList.length === 0 ? (
            <p>No items in your wishlist yet.</p>
          ) : (
            <ul>
              {wishList.map((item, index) => (
                <li key={index}>
                  {item}
                  <button
                    className="remove-item-button"
                    onClick={() => handleRemoveItem(index)}
                  >
                    Remove
                  </button>
                </li>
              ))}
            </ul>
          )}
        </div>

        {/* Back Button */}
        <button onClick={handleBackToDashboard} className="back-button">
          Back to Dashboard
        </button>
      </div>
    </div>
  );
};

export default TrackWishlist;

// import React, { useState } from 'react';
// import { db } from '../../Firebase';
// import { collection, addDoc, serverTimestamp } from 'firebase/firestore';
// import './AddReview.css';

// const AddReview = () => {
//   const [name, setName] = useState('');
//   const [review, setReview] = useState('');
//   const [rating, setRating] = useState(5);

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     if (!name || !review) {
//       alert("Please fill in all fields.");
//       return;
//     }

//     try {
//       await addDoc(collection(db, "testimonials"), {
//         name,
//         review,
//         rating: parseInt(rating),
//         createdAt: serverTimestamp()
//       });
//       alert("🎉 Thank you for your review!");
//       setName('');
//       setReview('');
//       setRating(5);
//     } catch (error) {
//       console.error("Error adding review:", error);
//       alert("Something went wrong, try again.");
//     }
//   };

//   return (
//     <div className="add-review container my-5">
//       <h2 className="text-center mb-4">⭐ Add Your Review</h2>
//       <form className="glass-form" onSubmit={handleSubmit}>
//         <input
//           type="text"
//           placeholder="Your Name"
//           value={name}
//           onChange={(e) => setName(e.target.value)}
//           required
//         />
//         <textarea
//           placeholder="Write your review here..."
//           value={review}
//           onChange={(e) => setReview(e.target.value)}
//           required
//         />
//         <select
//           value={rating}
//           onChange={(e) => setRating(e.target.value)}
//         >
//           {[1, 2, 3, 4, 5].map((star) => (
//             <option key={star} value={star}>{star} Star</option>
//           ))}
//         </select>
//         <button type="submit">Submit Review</button>
//       </form>
//     </div>
//   );
// };

// export default AddReview;

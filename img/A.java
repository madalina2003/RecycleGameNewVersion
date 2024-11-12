body {
  font-family: Roboto, sans-serif;
  text-align: center;
  color: #333;
  background-color: #e7d8d4;
}

h1 { margin-top: 2em;}

.bins {
  display: flex;
  justify-content: center;
  gap: 20px;
  margin: 20px;
}

/* Base styles for bins */
.bin {
  width: 160px;  /* Adjust the width */
  height: 200px;  /* Adjust the height */
  padding: 20px;
  margin: 20px 0px;
  font-size: 22px;  /* Bin label text size */
  text-align: center;
  font-weight: bold;
  background-size: cover;  /* Ensure the image covers the whole bin */
  background-position: center;  /* Center the image */
  border-radius: 10px;
  position: relative;  /* Allows positioning of text */
}

/* Specific bin images */
#compost-bin {
  background-image: url('trash-bin-with-cover_svgrepo.com.svg'); /* Path to compost image */
}

#recycle-bin {
  background-image: url('trash-bin-with-cover-black.svg'); /* Path to recycling image */
}

#trash-bin {
  background-image: url('trash-bin-with-cover-green.svg'); /* Path to trash image */
}

.bin span {
  position: absolute;
  top: 50%;  /* Position text vertically in the center */
  left: 50%;  /* Position text horizontally in the center */
  transform: translate(-50%, -50%);  /* Center the text */
  color: white;  /* White text for contrast */
  font-size: 24px;  /* Adjust text size */
  font-weight: bold;  /* Make text bold */
}

/* Hover effect for bins */
.bin: hover {
  opacity: 0.8;
}

/* Adjust the bin text visibility (place text on top of the image) */
.bin::after {
  content: ''; /* Clear content */
  position: absolute;
  top: 50%; /* Center the label text vertically */
  left: 50%;
  transform: translate(-50%, -50%); /* Center horizontally and vertically */
  color: #fff; /* White text color for contrast */
  font-size: 24px; /* Size of the bin label text */
  font-weight: bold;
}

.items {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
  margin-top: 20px;
  color: #333;
}

.item {
  width: 80px;
  padding: 15px;
  border: 1px solid #000000;
  border-radius: 10px;
  cursor: grab;
  background-color: #dbc5be;
  font-size: 50px;
  display: inline-block;
}

.item:active {
  cursor: grabbing;
}

#score {
  font-size: 20px;
  margin-top: 10px;
}

#congratulations-modal, #wrong-modal {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: white;
  padding: 20px;
  border: 2px solid #333;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
  color: #333;
}

#congratulations-modal div, #wrong-modal div {
  text-align: center;
}

button {
  padding: 10px 20px;
  border: none;
  background-color: #4CAF50;
  color: rgb(16, 16, 16);
  cursor: pointer;
  border-radius: 5px;
}

button:hover {
  background-color: #45a049;
}

/* Correct Modal Button */
a button {
  background-color: #4CAF50;
}

a button:hover {
  background-color: #45a049;
}

/* Wrong Modal Styles */
#wrong-modal {
  background-color: red; /* Red background */
  color: rgb(26, 26, 26); /* White text */
}

#wrong-modal button {
  background-color: #f44336; /* Red button */
  color: rgb(28, 28, 28);
}

#wrong-modal button:hover {
  background-color: #d32f2f; /* Darker red on hover */
}

/* Close button (X) in the top right corner */
.close-btn {
  position: absolute;
  top: 10px;
  right: 10px;
  font-size: 30px;
  color: rgb(28, 28, 28);
  cursor: pointer;
  font-weight: bold;
}

.close-btn:hover {
  color: #ddd;

}

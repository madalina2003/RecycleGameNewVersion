let score = 0;
let wrongAnswers = 0;
let itemsPlaced = 0;
const totalItems = document.querySelectorAll('.item').length;

function drag(event) {
  event.dataTransfer.setData("id", event.target.id);
  event.dataTransfer.setData("type", event.target.dataset.type);
}

function allowDrop(event) {
  event.preventDefault();
}

function drop(event) {
  event.preventDefault();

  const itemId = event.dataTransfer.getData("id");
  const itemType = event.dataTransfer.getData("type");

  const droppedItem = document.getElementById(itemId);
  const targetBin = event.target;

  if (targetBin.id === `${itemType}-bin`) {
    droppedItem.style.display = "none";
    score++;
    itemsPlaced++;
    document.getElementById("score").textContent = `Score: ${score} Correct, ${wrongAnswers} Wrong`;

    if (itemsPlaced === totalItems) {
      showCongratulationsModal();
    }
  } else {
    wrongAnswers++;
    showWrongModal(droppedItem);
    document.getElementById("score").textContent = `Score: ${score} Correct, ${wrongAnswers} Wrong`;
  }
}

// Show the Congratulations Modal when the game is completed
function showCongratulationsModal() {
  document.getElementById("congratulations-modal").style.display = "block";
}

// Show the Wrong Modal with a customized message for the dropped item
function showWrongModal(droppedItem) {
  const wrongMessage = document.getElementById("wrong-message");
  let message = '';

  // Customize the message based on the dropped item
  switch (droppedItem.id) {
    case 'item1':
      message = "Bananas are organic waste, which means they are biodegradable. " +
        "When you put a banana peel in the compost bin, it will break down and turn into nutrient-rich soil. " +
        "Composting helps reduce waste in landfills and promotes healthier plants!";
      break;
    case 'item2':
      message = "Cans are made of metal, which can be recycled and reused to make new products. Recycling saves energy and reduces waste in landfills!";
      break;
    case 'item4':
      message = "Apples are organic waste and can break down naturally in compost, turning into rich soil that helps plants grow.";
      break;
    case 'item5':
      message = "Chocolate wrappers are usually made of plastic or foil, which can't be composted or recycled. " +
        "Please place it in the trash bin to avoid contamination of other recyclables.";
      break;
    case 'item6':
      message = "Leftover French fries are organic waste and can be composted to create nutrient-rich soil. Please place them in the compost bin instead of the trash.";
      break;
    case 'item7':
      message = "Oranges are organic waste and can break down in compost to enrich the soil, helping plants grow healthier";
      break;
    case 'item8':
      message = "Plastic cans can be recycled and turned into new products, reducing waste and conserving resources. Please recycle to help protect the environment.";
      break;
    case 'item9':

      message = "Juice boxes are made of mixed materials that can't always be recycled. Please place it in the trash bin to avoid contaminating recyclables";
      break;
    case 'item10':
      message="Bread is organic waste and can decompose naturally in compost, turning into nutrient-rich soil that helps plants thrive.";

      break;
    case 'item12':
      message = "Cardboard boxes are recyclable! Please place them in the recycle bin so they can be turned into new products, saving resources and reducing waste";
      break;
    case 'item11':
      message = "Leftover food is organic waste and can be composted to break down into nutrient-rich soil, helping plants grow and reducing landfill waste.";
      break;
    case 'item13':
      message = "Plastic forks and spoons are single-use items that can't be recycled or composted. Please dispose of them in the trash bin to prevent contamination of other waste streams.";
      break;
    case 'item14':
      message = "Butter wraps are often made from non-recyclable materials like wax paper or plastic. Please dispose of them in the trash bin to avoid contaminating recyclables.";
      break;
    case'item15':
      message="Ketchup wrappers are typically made of mixed materials, making them non-recyclable. Please dispose of them in the trash bin to prevent contamination of recyclable items.";


    default:
      message = "Oops! You chose the wrong bin. Try again!";
  }

  wrongMessage.textContent = message;
  document.getElementById("wrong-modal").style.display = "block";
}

// Close the Wrong Modal
function closeWrongModal() {
  document.getElementById("wrong-modal").style.display = "none";
}

// Reset the game to its initial state
function resetGame() {
  score = 0;
  wrongAnswers = 0;
  itemsPlaced = 0;
  document.getElementById("score").textContent = `Score: ${score} Correct, ${wrongAnswers} Wrong`;

  document.querySelectorAll(".item").forEach(item => {
    item.style.display = "inline-block";
  });

  document.getElementById("congratulations-modal").style.display = "none";
}

document.querySelectorAll('.item').forEach(item => {
  item.addEventListener('touchstart', drag);
  item.addEventListener('touchmove', drag);
  item.addEventListener('touchend', drop);
  item.addEventListener('touchcancel', drop);
});

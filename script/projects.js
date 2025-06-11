const cardsData = [
  {
    frontText: "Hover me",
    heading: "Card Hover",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipii voluptas ten mollitia pariatur odit, ab minus ratione adipisci accusamus vel est excepturi laboriosam magnam necessitatibus dignissimos molestias.",
  },
  {
    frontText: "Another",
    heading: "Second Card",
    description: "Description for the second card goes here.",
  },
  
  {
    frontText: "Hover me",
    heading: "Card Hover",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipii voluptas ten mollitia pariatur odit, ab minus ratione adipisci accusamus vel est excepturi laboriosam magnam necessitatibus dignissimos molestias.",
  },
  {
    frontText: "Another",
    heading: "Second Card",
    description: "Description for the second card goes here.",
  },
  
];

const container = document.getElementById("card-container");

cardsData.forEach(({ frontText, heading, description }) => {
  const card = document.createElement("div");
  card.className = "card";

  card.innerHTML = `
    <div class="front-content"><p>${frontText}</p></div>
    <div class="content">
      <p class="heading">${heading}</p>
      <p>${description}</p>
    </div>
  `;

  container.appendChild(card);
});

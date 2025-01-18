const cardData = [
    {
        title: "Baggage Insurance",
        description: "$50.00",
        img: "/images/img4.png",
    },
    {
        title: "Health Insurance",
        description: "$220.00",
        img: "/images/img3.png",
    },
    {
        title: "Medical Insurance",
        description: "<del>$78.00</del> $45.00",
        img: "/images/img2.png",
    },
    {
        title: "Tour Operator Liability",
        description: "<del>$70.00</del> $45.00",
        img: "/images/img5.png",
    },
    {
        title: "Trip Cancellation Insurance",
        description: "$39.00",
        img: "/images/img1.png",
    },
    {
        title: "Visitor Insurance",
        description: "$60.00 – $80.00",
        img: "/images/img6.png",
    },
    
];

const container = document.getElementById("card-container");
cardData.forEach((data) => {
    const card = document.createElement("div");
    card.classList.add("card");

    card.innerHTML =` 
      <img src="${data.img}" alt="${data.title}">
      <h3>${data.title}</h3>
      <p>${data.description}</p>
      <button> Add to cart </button>
    `;

    container.appendChild(card);
});
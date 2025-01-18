const offers = [
    { img: "/images/img4.png", name: "Chiang Mai", days: 7, location: "Thailand", price: 490 },
    { img: "/images/img2.png", name: "Chao Phraya", days: 5, location: "Thailand", price: 98 },
    { img: "/images/img7.png", name: "Bangkok", days: 10, location: "Thailand", price: 1000 },
    { img: "/images/img6.png", name: "Nara", days: 15, location: "Japan", price: 890 },
];

function displayOffers(filteredOffers) {
    const offersList = document.getElementById("offersList");
    offersList.innerHTML = ""; 

    if (filteredOffers.length === 0) {
        offersList.innerHTML = "<p>No offers found within this price range.</p>";
        return;
    }

    filteredOffers.forEach((offer) => {
        const offerCard = document.createElement("div");
        offerCard.className = "offer-card";
        offerCard.innerHTML = `
            <img src="${offer.img}" alt="${offer.name}">
            <h2>${offer.name}</h2>
            <p>Duration: ${offer.days} days</p>
            <p>Location: ${offer.location}</p>
            <p>Price: $${offer.price}</p>
        `;
        offersList.appendChild(offerCard);
    });
}

function filterOffers() {
    const maxPrice = parseInt(document.getElementById("priceSlider").value, 10);

    const filteredOffers = offers.filter((offer) => offer.price <= maxPrice);

    displayOffers(filteredOffers);
}

document.getElementById("priceSlider").addEventListener("input", function () {
    const sliderValue = document.getElementById("sliderValue");
    sliderValue.textContent = `$${this.value}`;

    filterOffers();
});

displayOffers(offers);
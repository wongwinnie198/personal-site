const cardData = [
  {
    title: "Person website",
    desc: "React makes it painless to create interactive UIs. Design simple views for each state in your application, and React will efficiently update and render just the right components when your data changes.",
    id: "card-1",
    imgSrc: "https://picsum.photos/300/200",
  },
  {
    title: "card 2",
    desc: "desc of card 2",
    id: "card-2",
    imgSrc: "https://picsum.photos/300/200",
  },
  {
    title: "card 3",
    desc: "desc of card 3",
    id: "card-3",
    imgSrc: "https://picsum.photos/300/200",
  },
  {
    title: "card 4",
    desc: "desc of card 4",
    id: "card-4",
    imgSrc: "https://picsum.photos/300/200",
  },
  {
    title: "card 5",
    desc: "desc of card 5",
    id: "card-5",
    imgSrc: "https://picsum.photos/300/200",
  },
];

class Card {
  constructor(props) {
    this.state = props;
  }

  render() {
    const cardContainer = document.createElement("div");
    Object.assign(cardContainer, { className: "card-container" });

    for (let item of cardData) {
      let cardItem = document.createElement("div");
      Object.assign(cardItem, {
        className: `card-items`,
        id: `${item.id}`,
      });
      cardItem.innerHTML = `
        <img src="${item.imgSrc}">
        <h2 class='card-title'>${item.title}</h2>
        <p class='card-desc'>${item.desc}</p>
        `;
      cardContainer.append(cardItem);
    }

    //   footerContainer.append()

    return cardContainer;
  }
}

let CardComponent = new Card(cardData);

export default CardComponent;

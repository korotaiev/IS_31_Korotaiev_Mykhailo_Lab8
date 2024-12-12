const images = [
  {
    preview: "https://images.pexels.com/photos/338515/pexels-photo-338515.jpeg",
    original:
      "https://images.pexels.com/photos/338515/pexels-photo-338515.jpeg",
    description: "Місто Париж",
  },
  {
    preview:
      "https://img.freepik.com/free-photo/beautiful-shot-sydney-harbor-bridge-with-light-pink-blue-sky_181624-16041.jpg?ga=GA1.1.693431905.1726232428&semt=ais_hybrid",
    original:
      "https://img.freepik.com/free-photo/beautiful-shot-sydney-harbor-bridge-with-light-pink-blue-sky_181624-16041.jpg?ga=GA1.1.693431905.1726232428&semt=ais_hybrid",
    description: "Місто Сідней",
  },
  {
    preview:
      "https://upload.wikimedia.org/wikipedia/commons/9/98/Cidade_Maravilhosa.jpg",
    original:
      "https://upload.wikimedia.org/wikipedia/commons/9/98/Cidade_Maravilhosa.jpg",
    description: "Місто Ріо-де-Жанейро",
  },
  {
    preview:
      "https://img.freepik.com/free-photo/view-front-milan-cathedral-milan-is-second-most-populous-city-italy-capital-lombardy_268835-719.jpg?ga=GA1.1.693431905.1726232428&semt=ais_hybrid",
    original:
      "https://img.freepik.com/free-photo/view-front-milan-cathedral-milan-is-second-most-populous-city-italy-capital-lombardy_268835-719.jpg?ga=GA1.1.693431905.1726232428&semt=ais_hybrid",
    description: "Місто Мілан",
  },
  {
    preview:
      "https://cdn.tripster.ru/thumbs2/509c4bbc-5543-11ee-a23b-e6c69b6689a3.1220x600.jpeg",
    original:
      "https://cdn.tripster.ru/thumbs2/509c4bbc-5543-11ee-a23b-e6c69b6689a3.1220x600.jpeg",
    description: "Місто Стамбул",
  },
  {
    preview:
      "https://img.freepik.com/free-photo/breathtaking-view-cesky-krumlov-city-south-bohemia-region-czech-republic-europe_181624-43081.jpg?ga=GA1.1.693431905.1726232428&semt=ais_hybrid",
    original:
      "https://img.freepik.com/free-photo/breathtaking-view-cesky-krumlov-city-south-bohemia-region-czech-republic-europe_181624-43081.jpg?ga=GA1.1.693431905.1726232428&semt=ais_hybrid",
    description: "Місто Відень",
  },
  {
    preview:
      "https://www.rbc.ua/static/img/k/i/kiev_skyline_beautiful_fiery_sunset_ukraine_monument_motherland_1200x675.jpg",
    original:
      "https://www.rbc.ua/static/img/k/i/kiev_skyline_beautiful_fiery_sunset_ukraine_monument_motherland_1200x675.jpg",
    description: "Місто Київ",
  },
  {
    preview:
      "https://opis-cdn.tinkoffjournal.ru/mercury/istock-1487490519-main.x0dozgjidsbv..jpg",
    original:
      "https://opis-cdn.tinkoffjournal.ru/mercury/istock-1487490519-main.x0dozgjidsbv..jpg",
    description: "Місто Дубай",
  },
  {
    preview: "https://images.pexels.com/photos/460672/pexels-photo-460672.jpeg",
    original:
      "https://images.pexels.com/photos/460672/pexels-photo-460672.jpeg",
    description: "Місто Лондон",
  },
];

let gallery = document.querySelector("ul.gallery");
images.forEach((image) => {
  addImage(image);
});

function addImage(imageObject) {
  let imageElement = document.createElement("img");
  imageElement.src = imageObject.preview;
  imageElement.alt = imageObject.description;

  let imageLi = document.createElement("li");
  imageLi.append(imageElement);
  gallery.append(imageLi);
}
gallery.addEventListener("click", (event) => {
  let previewLink = event.target.src;
  let imageObject = images.find((image) => image.preview == previewLink);

  const instance = basicLightbox.create(
    `
        <div class="modal">
            
                <img src="${imageObject.original}" alt="${imageObject.description}">
                <p>${imageObject.description}</p>
            
        </div>        
    `,
    { closable: true }
  );
  instance.show();
  console.log();
});

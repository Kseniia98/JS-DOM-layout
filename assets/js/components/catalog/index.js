const catalog = document.createElement('div');

fetch('https://raw.githubusercontent.com/fd-freshjs/serve-json/main/mebel.json')
  
  .then((response) => {
    return response.json();
  })
  .then(data => {
    const cards = data.data
    return cards.forEach(function createCards(card){

      let productCard = document.createElement('div');

      let cardLabel = document.createElement('div');
      cardLabel.className = 'cardLabel';

      let saleLabel = document.createElement('div');
      saleLabel.className = 'saleLabel';

      let saleLabelSpan = document.createElement('div');
      saleLabelSpan.className = 'saleLabelSpan';
      saleLabelSpan.textContent = `-${card.sale}%`;
      saleLabel.append(saleLabelSpan);

      let hitLabel = document.createElement('div');
        if(card.isBestseller){
          hitLabel.textContent = 'ХИТ';
          hitLabel.className = 'hitLabel'
        };

      cardLabel.append(saleLabel, hitLabel);

      let cardImg = document.createElement('img');
      cardImg.src = `https://github.com/fd-freshjs/serve-json/raw/main/assets/images/mebel/${card.code}.png`;
      cardImg.className = 'cardImg';

      let cardDescr = document.createElement('p');
      cardDescr.style.paddingLeft = '35px';
      cardDescr.textContent = card.name;

      let cardPrice = document.createElement('div');
      cardPrice.className = 'cardPrice';

      let oldPrice = document.createElement('span');
      oldPrice.textContent = card.price.old;
      oldPrice.className = 'oldPrice';

      let newPrice = document.createElement('span');
      newPrice.textContent = card.price.current;
      newPrice.className = 'newPrice';

      cardPrice.append(oldPrice, newPrice);

      let cardButton = createButton();

      productCard.append(cardLabel, cardImg, cardDescr, cardPrice, cardButton);
      catalog.append(productCard);

      productCard.className = 'productCard';
      catalog.className = 'productCards';
    })
  });


function createButton(){

  let buttDiv = document.createElement('div');
  buttDiv.className = 'buttDiv';

  let cardButton = document.createElement('button');
  cardButton.className = 'cardButton';
  cardButton.textContent = 'Купить';
  cardButton.addEventListener('mouseover', ()=>{cardButton.className = 'butOver'})
  cardButton.addEventListener('mouseout', ()=>{cardButton.className = 'cardButton'})
  
  const cardLike = document.createElement('div');
  cardLike.innerHTML = `<svg width="22" height="19" 
  viewBox="0 0 22 19" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M11 19C10.7925 19.0044 10.5889 18.9191 10.4163 18.7554L1.70152 9.99543C-0.566195 7.71112 -0.566195 3.99652 1.70152 1.70392C2.91951 0.551949 4.35661 -0.0426701 5.81959 1.05619e-05C7.28349 -0.0389963 8.72066 0.559995 9.93765 1.71635L11 2.78181L12.0624 1.71635C14.333 -0.567958 18.0279 -0.567958 20.2985 1.71635C22.5691 4.00067 22.5691 7.71112 20.2985 10.0079L11.5866 18.7554C11.4129 18.9191 11.2084 19.0044 11 19ZM5.81959 1.65831C4.77154 1.63537 3.74374 2.06945 2.87477 2.90204C1.24914 4.53547 1.24914 7.1929 2.87477 8.82633L11 16.9976L19.1282 8.81803C20.7509 7.18461 20.7509 4.52718 19.1282 2.89375C17.5054 1.26032 14.8612 1.24374 13.2327 2.90204L11.5866 4.56034C11.4126 4.71975 11.21 4.80453 11.0029 4.80453C10.7959 4.80453 10.5932 4.71975 10.4192 4.56034L8.75564 2.90204C7.88905 2.07213 6.86463 1.63818 5.81959 1.65831Z" 
  fill="#1D1818"/>
  </svg>`
  
  cardLike.addEventListener('mouseover', onLike);
  cardLike.addEventListener('mouseout', offLike);
  
  function onLike(event){
    event.target.innerHTML = `<svg width="22" height="19" 
    viewBox="0 0 22 19" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M11 19C10.7925 19.0044 10.5889 18.9191 10.4163 18.7554L1.70152 9.99543C-0.566195 7.71112 -0.566195 3.99652 1.70152 1.70392C2.91951 0.551949 4.35661 -0.0426701 5.81959 1.05619e-05C7.28349 -0.0389963 8.72066 0.559995 9.93765 1.71635L11 2.78181L12.0624 1.71635C14.333 -0.567958 18.0279 -0.567958 20.2985 1.71635C22.5691 4.00067 22.5691 7.71112 20.2985 10.0079L11.5866 18.7554C11.4129 18.9191 11.2084 19.0044 11 19ZM5.81959 1.65831C4.77154 1.63537 3.74374 2.06945 2.87477 2.90204C1.24914 4.53547 1.24914 7.1929 2.87477 8.82633L11 16.9976L19.1282 8.81803C20.7509 7.18461 20.7509 4.52718 19.1282 2.89375C17.5054 1.26032 14.8612 1.24374 13.2327 2.90204L11.5866 4.56034C11.4126 4.71975 11.21 4.80453 11.0029 4.80453C10.7959 4.80453 10.5932 4.71975 10.4192 4.56034L8.75564 2.90204C7.88905 2.07213 6.86463 1.63818 5.81959 1.65831Z" 
    fill="#E13B3F";
    "/>
    </svg>`
  }
  
  function offLike(event){
    event.target.innerHTML = `<svg width="22" height="19" 
    viewBox="0 0 22 19" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M11 19C10.7925 19.0044 10.5889 18.9191 10.4163 18.7554L1.70152 9.99543C-0.566195 7.71112 -0.566195 3.99652 1.70152 1.70392C2.91951 0.551949 4.35661 -0.0426701 5.81959 1.05619e-05C7.28349 -0.0389963 8.72066 0.559995 9.93765 1.71635L11 2.78181L12.0624 1.71635C14.333 -0.567958 18.0279 -0.567958 20.2985 1.71635C22.5691 4.00067 22.5691 7.71112 20.2985 10.0079L11.5866 18.7554C11.4129 18.9191 11.2084 19.0044 11 19ZM5.81959 1.65831C4.77154 1.63537 3.74374 2.06945 2.87477 2.90204C1.24914 4.53547 1.24914 7.1929 2.87477 8.82633L11 16.9976L19.1282 8.81803C20.7509 7.18461 20.7509 4.52718 19.1282 2.89375C17.5054 1.26032 14.8612 1.24374 13.2327 2.90204L11.5866 4.56034C11.4126 4.71975 11.21 4.80453 11.0029 4.80453C10.7959 4.80453 10.5932 4.71975 10.4192 4.56034L8.75564 2.90204C7.88905 2.07213 6.86463 1.63818 5.81959 1.65831Z" 
    fill="#1D1818"/>
    </svg>`
  }

  buttDiv.append(cardButton, cardLike)
  return buttDiv;
}


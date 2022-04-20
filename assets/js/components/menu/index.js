const menuArr = [
  {
    img: 'assets/js/components/menu/img/Layer2.svg',
    item: 'Войти'
  },
  {
    img: 'assets/js/components/menu/img/Layer3.svg',
    item: 'Избранное'
  },
  {
    img: 'assets/js/components/menu/img/Layer1.svg',
    item: 'Корзина'
  }
];


function func(arr){

  const navUl = document.createElement('ul');
  navUl.className = 'navUl';
  
  for(let i = 0; i < arr.length; i++){

    const navLi = document.createElement('li');

    const navLink = document.createElement('a');
    navLink.href = '#';
    
    const navIcons = document.createElement('img');
    navIcons.style.maxHeight = '19px';
    
    const navSpan = document.createElement('span');
    
    navIcons.src = arr[i].img;
    navSpan.textContent = arr[i].item;
    
    navLink.append(navIcons, navSpan);
    navLi.append(navLink);
    navUl.append(navLi);
    
    navLink.addEventListener('mouseover', mouseover);
    navLink.addEventListener('mouseout', mouseout);

    function mouseover(event){
      let target = event.target;
      target.style.color = 'red';      
    }
    function mouseout(event){
      let target = event.target;
      target.style.color = 'black';
    }
  }

  return navUl;
};

const navMenu = func(menuArr);


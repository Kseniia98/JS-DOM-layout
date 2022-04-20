const header = document.createElement('nav');

const navLogo = document.createElement('img');
navLogo.style.maxHeight = '40px';
navLogo.src = '/assets/image/_279190176.jpg';
navLogo.alt = 'image';

const navInput = document.createElement('input');
navInput.className = 'navInput';
navInput.type = 'text';
navInput.placeholder = 'Поиск';

const navCall = document.createElement('form');
navCall.className = 'navCall';
const callBlock = createCall();

const navEnter = document.createElement('div');
navEnter.append(navMenu);

header.append(navLogo, navInput, callBlock, navEnter);


function createCall(){

  const navCallButton = document.createElement('button');
  navCallButton.className = 'navCallButton';
  navCallButton.textContent = 'Заказать звонок';
  navCallButton.addEventListener('mouseover', ()=>{navCallButton.className = 'navCallButtonOver';})
  navCallButton.addEventListener('mouseout', ()=>{navCallButton.className = 'navCallButton';})

  const navLabel = document.createElement('div');
  navLabel.className = 'navLabel';

  const navLabelImg = document.createElement('img');
  navLabelImg.style.maxWidth = '20px'
  navLabelImg.src = 'assets/image/Vector.svg';

  navLabel.append(navLabelImg, '8 (961) 525 91 91');
  navLabel.addEventListener('mouseover', ()=>{navLabel.className='navLabelOver'})
  navLabel.addEventListener('mouseout', ()=>{navLabel.className='navLabel'})

  navCall.append(navLabel, navCallButton);
  return navCall;

}


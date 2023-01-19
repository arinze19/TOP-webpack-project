const menuWrapper = document.createElement('div');
menuWrapper.classList.add('component');

const menu = [
  {
    name: 'Fluffinge pancakes',
    price: '$4.00',
    status: 'available',
    image_url:
      'https://i.pinimg.com/564x/ad/cf/57/adcf57df50962b9dcbf8c8fcc21ede32.jpg',
  },
  {
    name: 'Strawberry banana pancakes',
    price: '$3.00',
    status: 'hot',
    image_url:
      'https://i.pinimg.com/474x/43/c5/aa/43c5aa8b8840d6bfc95a3842d49c6256.jpg',
  },
  {
    name: 'Oreo pancakes',
    price: '$4.50',
    status: 'sold-out',

    image_url:
      'https://i.pinimg.com/474x/31/30/33/313033c8f85105e87c5ee5568d1b6e11.jpg',
  },
  {
    name: 'Honey pancakes',
    price: '$2.50',
    status: 'available',
    image_url:
      'https://i.pinimg.com/474x/51/14/63/511463d36b8b14f17bbe91dd919283a3.jpg',
  },
];

for (let i = 0; i < menu.length; i++) {
  const container = document.createElement('div');
  container.classList.add('card');

  const details = document.createElement('div');
  details.classList.add('details');

  const name = document.createElement('p');
  name.textContent = `Name: ${menu[i].name}`;

  const price = document.createElement('p');
  price.textContent = `Price: ${menu[i].price}`;

  const status = statusHelper(menu[i].status);

  details.append(name, price, status);

  const image = document.createElement('img');
  image.classList.add('profile-image');
  image.src = menu[i].image_url;

  container.append(image, details);
  menuWrapper.appendChild(container);
}

function statusHelper(status) {
  if (!status) return;
  const div = document.createElement('span');
  div.classList.add('badge');

  if (status === 'sold-out') {
    div.textContent = `${status} 🚫`;
    div.classList.add('out-of-stock');
  } else if (status === 'hot') {
    div.textContent = `${status} 🔥`;
    div.classList.add('hot');
  } else {
    div.textContent = `${status} ✅`;
    div.classList.add('available');
  }

  return div;
}

export default menuWrapper;

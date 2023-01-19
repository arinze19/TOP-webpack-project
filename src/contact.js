const contactWrapper = document.createElement('div');
const intro = document.createElement('div');
contactWrapper.classList.add('component');

// ================ intro section
intro.textContent =
  'Need to contact us to lay a complaint? feel free to reach any of our lines below: 📧';
contactWrapper.appendChild(intro);

const contacts = [
  {
    name: 'Big Papa Jerry',
    role: 'Manager',
    email: 'jerrytheman@jerrys.com',
    image_url:
      'https://i.pinimg.com/564x/f1/5a/a8/f15aa898dacb53cd8c37ff388a383d0a.jpg',
  },
  {
    name: 'Chef Lerry',
    role: 'Chef',
    email: 'merrylerry@jerrys.com',
    image_url:
      'https://i.pinimg.com/564x/0c/f3/96/0cf396e250954e876992968cc9f43d57.jpg',
  },
  {
    name: 'Skilly Willy',
    role: 'Waiter',
    email: 'willynocap@jerrys.com',
    image_url:
      'https://i.pinimg.com/564x/14/78/1d/14781d2e55699eca1cb417c6be6bc72a.jpg',
  },
];

for (let i = 0; i < contacts.length; i++) {
  const container = document.createElement('div');
  container.classList.add('card');

  const details = document.createElement('div');
  details.classList.add('details');

  const name = document.createElement('p');
  name.textContent = `Name: ${contacts[i].name}`;

  const role = document.createElement('p');
  role.textContent = `Role: ${contacts[i].role}`;

  const email = document.createElement('p');
  email.textContent = `Email: ${contacts[i].email}`;

  details.append(name, role, email);

  const image = document.createElement('img');
  image.classList.add('profile-image');
  image.src = contacts[i].image_url;

  container.append(image, details);
  contactWrapper.appendChild(container);
}

export default contactWrapper;

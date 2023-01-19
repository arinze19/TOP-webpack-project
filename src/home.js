const homeWrapper = document.createElement('div');
const intro = document.createElement('div');
const hours = document.createElement('div');
const location = document.createElement('div');

const openingHours = [
  {
    days: 'Monday - Friday',
    hours: '8am - 9pm',
  },
  {
    days: 'Weekends',
    hours: '10am - 6pm',
  },
];

// ===================== Intro section
intro.textContent =
  'Welcome to Jerry`s Pancakes, where everyday is a pancake paaartay 🎉. We take pride in making the best and most condusive environment for downing pancakes in the land by combining years of pancake making experience with exceptional customer service.';

// ===================== Hours section
const hoursText = document.createElement('h3');
hoursText.innerText = 'Hours 📆';

// create table
const table = document.createElement('table');
const tableHeader = document.createElement('tr');

// create table headers
const tableHeaderItemOne = document.createElement('th');
tableHeaderItemOne.textContent = 'Days';
const tableHeaderItemTwo = document.createElement('th');
tableHeaderItemTwo.textContent = 'Hours';

// attach table headers
tableHeader.append(tableHeaderItemOne, tableHeaderItemTwo);

table.appendChild(tableHeader);

for (let i = 0; i < openingHours.length; i++) {
  const container = document.createElement('tr');
  const day = document.createElement('td');
  const hour = document.createElement('td');

  day.textContent = openingHours[i].days;
  hour.textContent = openingHours[i].hours;

  container.append(day, hour);
  table.appendChild(container);
}

hours.appendChild(hoursText);
hours.appendChild(table);

// ===================== Location section
const locationText = document.createElement('h3');
locationText.innerText = 'Location 📍';
const locationAddress = document.createElement('p');
locationAddress.innerText = '123 Honey Boulevard, Cakeland, Maine';

location.append(locationText, locationAddress);

// ==================== Append all
homeWrapper.append(intro, hours, location);

homeWrapper.classList.add('component');

export default homeWrapper;

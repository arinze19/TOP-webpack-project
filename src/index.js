import './style.css';
const tabs = ['Home', 'Menu', 'Contact'];
let active = tabs[0];

function activate(e) {
  const tabs = document.querySelectorAll('.tab-item');
  const activeTab = document.getElementById(e.target.id);

  active = activeTab.id;

  tabs.forEach((tab) => {
    tab.classList.remove('active');
  });

  activeTab.classList.add('active');
}

const content = document.getElementById('content');
content.classList.add('cover-background');

const header = document.createElement('div');
header.textContent = 'Jerry`s 🥞 Pancakes';
header.classList.add('header');
content.appendChild(header);

const tabList = document.createElement('div');

tabList.classList.add('tab-list');

for (let i = 0; i < tabs.length; i++) {
  const tabItem = document.createElement('button');
  tabItem.textContent = tabs[i];
  tabItem.classList.add('tab-item');
  if (active === tabs[i]) tabItem.classList.add('active');

  tabItem.id = tabs[i];
  tabItem.onclick = activate;

  tabList.appendChild(tabItem);
}


// add tab list to page
content.appendChild(tabList);

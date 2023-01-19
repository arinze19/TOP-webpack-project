import contactWrapper from './contact';
import homeWrapper from './home';
import menuWrapper from './menu';
import './style.css';

const tabs = ['Home', 'Menu', 'Contact'];
const components = {
  Home: homeWrapper,
  Menu: menuWrapper,
  Contact: contactWrapper,
};
let active = { tab: tabs[0], component: homeWrapper };

function activate(e) {
  const tabs = document.querySelectorAll('.tab-item');
  const activeTab = document.getElementById(e.target.id);

  tabs.forEach((tab) => {
    tab.classList.remove('active');
  });
  content.removeChild(active.component);

  active = {
    tab: activeTab.id,
    component: components[activeTab.id] ?? components[Home],
  };

  activeTab.classList.add('active');
  content.appendChild(active.component);
}

const content = document.getElementById('content');
content.classList.add('cover-background');

const header = document.createElement('div');
header.textContent = 'Jerry`s 🥞 Pancakes';
header.classList.add('header');

// attach header
content.appendChild(header);

const tabList = document.createElement('div');

tabList.classList.add('tab-list');

for (let i = 0; i < tabs.length; i++) {
  const tabItem = document.createElement('button');
  tabItem.textContent = tabs[i];
  tabItem.classList.add('tab-item');

  if (active.tab === tabs[i]) {
    tabItem.classList.add('active');
    active.component = components[tabs[i]];
  }

  tabItem.id = tabs[i];
  tabItem.onclick = activate;

  tabList.appendChild(tabItem);
}

// attach tab list to page
content.appendChild(tabList);
content.appendChild(active.component);

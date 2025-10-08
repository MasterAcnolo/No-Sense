const profilePictures = [
  {
    src: '../assets/images/pfp/profilepicture.webp',
    title: 'Actuelle',
    description: 'NF - The Search',
  },
  {
    src: '../assets/images/pfp/profilepicture2.webp',
    title: 'Talos',
    description: 'Elder Scrolls - Talos',
  },
  {
    src: '../assets/images/pfp/profilepicture3.webp',
    title: 'Skyrim Theme',
    description: 'Généré par IA - Skyrim Themed',
  },
  {
    src: '../assets/images/pfp/profilepicture5.webp',
    title: 'Inspecteur Gadget',
    description: 'Saint Roi Inspecteur Gadget du Schweppes',
  },
  {
    src: '../assets/images/pfp/profilepicture6.webp',
    title: 'Witcher',
    description: 'The Witcher - Geralt',
  },
  {
    src: '../assets/images/pfp/profilepicture7.webp',
    title: 'NF',
    description: 'NF - Concert ',
  },
  {
    src: '../assets/images/pfp/profilepicture9.webp',
    title: 'Breach',
    description: 'Valorant Breach - Handmade',
  },
  {
    src: '../assets/images/pfp/profilepicture10.webp',
    title: 'Breach',
    description: 'Valorant Breach - After Patch 7.04',
  },
  {
    src: '../assets/images/pfp/profilepicture11.webp',
    title: 'Acnologia',
    description: 'Because it\'s my name',
  },
  {
    src: '../assets/images/pfp/profilepicture14.webp',
    title: 'Master',
    description: 'The OG one',
  },
  {
    src: '../assets/images/pfp/profilepicture12.webp',
    title: 'Geralt',
    description: 'The Witcher - Geralt',
  },
  {
    src: '../assets/images/pfp/profilepicture13.webp',
    title: 'Peace',
    description: 'He is in Peace, like me',
  },
  {
    src: '../assets/images/pfp/profilepicture15.webp',
    title: 'Firmaly',
    description: 'If You Know, You know',
  },
  {
    src: '../assets/images/pfp/profilepicture16.webp',
    title: 'Team Pandi',
    description: 'Something we lost',
  },
  {
    src: '../assets/images/pfp/profilepicture17.webp',
    title: 'Tri Poloski',
    description: 'Хард басс тусовки, адидас кроссовки',
  },
  {
    src: '../assets/images/pfp/profilepicture18.webp',
    title: 'Bellamy - The 100',
    description: 'He is nice',
  },
  {
    src: '../assets/images/pfp/profilepicture19.webp',
    title: 'Murphy - The 100',
    description: 'G.O.A.T Of The 100',
  },
  {
    src: '../assets/images/pfp/profilepicture29.gif',
    title: 'Kirito Fighting',
    description: 'This may be a virtual world, but I feel more alive here than in the real world.',
  },
  {
    src: '../assets/images/pfp/profilepicture20.webp',
    title: 'Kirito',
    description: 'Never look back',
  },
  {
    src: '../assets/images/pfp/profilepicture21.webp',
    title: 'Kirito',
    description: 'Always look front',
  },
  {
    src: '../assets/images/pfp/profilepicture22.webp',
    title: 'Diamond style',
    description: 'Thanks a lot Emil',
  },
  {
    src: '../assets/images/pfp/profilepicture23.webp',
    title: 'Render Forest Addict',
    description: '',
  },
  {
    src: '../assets/images/pfp/NOTFOUND.webp',
    title: 'GOT LOST',
    description: 'Lost Media ?',
  },
  {
    src: '../assets/images/pfp/profilepicture24.webp',
    title: 'Gray Fullbuster',
    description: 'I don’t care where I get scarred. As long as they can be seen.',
  },
  {
    src: '../assets/images/pfp/profilepicture25.webp',
    title: 'Zeleph Dragnir',
    description: 'A good man',
  },
  {
    src: '../assets/images/pfp/profilepicture26.gif',
    title: 'Natsu Dragnir',
    description: 'Let’s save the tears for when we win.',
  },
  {
    src: '../assets/images/pfp/profilepicture27.webp',
    title: '2 Years',
    description: 'Gloire à Ulfric ! ',
  },
  {
    src: '../assets/images/pfp/profilepicture28.webp',
    title: 'MasterAcnolo',
    description: 'Tito Was Here',
  },
  {
    src: '../assets/images/pfp/profilepicture30.webp',
    title: 'Flash MCQueen',
    description: 'With bro',
  },
  {
    src: '../assets/images/pfp/profilepicture31.webp',
    title: 'Dogo',
    description: 'Dogo Supremacy',
  },
  {
    src: '../assets/images/pfp/profilepicture32.webp',
    title: 'Wucanit Benou',
    description: '🎷',
  },
];

const gallery = document.getElementById('gallery');

profilePictures.forEach(({ src, title, description }) => {
  const card = document.createElement('div');
  card.className = 'profile-card';

  card.innerHTML = `
    <div class="skeleton"></div>
    <img src="${src}" alt="${title}" class="profile-image" />
    <div class="profile-hover-info">
      <h3>${title}</h3>
      <p>${description}</p>
    </div>
  `;

  gallery.appendChild(card);

  const img = card.querySelector('.profile-image');
  img.addEventListener('load', () => {
    card.querySelector('.skeleton').remove();
    img.classList.add('loaded');
  });
});

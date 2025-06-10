const profilePictures = [
  {
    src: 'assets/images/profilepicture.jpg',
    title: 'Actuelle',
    description: 'NF - The Search',
  },
  {
    src: 'assets/images/profilepicture2.jpg',
    title: 'Talos',
    description: 'Elder Scrolls - Talos',
  },
  {
    src: 'assets/images/profilepicture3.png',
    title: 'Skyrim Theme',
    description: 'Généré par IA - Skyrim Themed',
  },
  {
    src: 'assets/images/profilepicture5.jpg',
    title: 'Inspecteur Gadget',
    description: 'Saint Roi Inspecteur Gadget du Schweppes',
  },
  {
    src: 'assets/images/profilepicture6.jpg',
    title: 'Witcher',
    description: 'The Witcher - Geralt',
  },
  {
    src: 'assets/images/profilepicture7.jpg',
    title: 'NF',
    description: 'NF - Concert ',
  },
  {
    src: 'assets/images/profilepicture9.png',
    title: 'Breach',
    description: 'Valorant Breach - Handmade',
  },
  {
    src: 'assets/images/profilepicture10.jpg',
    title: 'Breach',
    description: 'Valorant Breach - After Patch 7.04',
  },
  {
    src: 'assets/images/profilepicture11.png',
    title: 'Acnologia',
    description: 'Because it\'s my name',
  },
  {
    src: 'assets/images/profilepicture14.jpg',
    title: 'Master',
    description: 'The OG one',
  },
  {
    src: 'assets/images/profilepicture12.jpg',
    title: 'Geralt',
    description: 'The Witcher - Geralt',
  },
  {
    src: 'assets/images/profilepicture13.jpg',
    title: 'Peace',
    description: 'He is in Peace, like me',
  },
  {
    src: 'assets/images/profilepicture15.png',
    title: 'Firmaly',
    description: 'If You Know, You know',
  },
  {
    src: 'assets/images/profilepicture16.jpg',
    title: 'Team Pandi',
    description: 'Something we lost',
  },
  {
    src: 'assets/images/profilepicture17.jpg',
    title: 'Tri Poloski',
    description: 'Хард басс тусовки, адидас кроссовки',
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

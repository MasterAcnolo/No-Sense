 const userId = "724954095042953246";
  const apiUrl = `https://api.lanyard.rest/v1/users/${userId}`;
  const statusColors = {
    online: '#43b581',
    idle: '#faa61a',
    dnd: '#f04747',
    offline: '#747f8d'
  };

  function getDiscordImageUrl(appId, imageId) {
    if (!imageId) return null;
    if(imageId.startsWith("spotify:")) {
      return "https://i.scdn.co/image/" + imageId.split(":")[1];
    }
    const ext = imageId.startsWith("a_") ? "gif" : "png";
    return `https://cdn.discordapp.com/app-assets/${appId}/${imageId}.${ext}`;
  }

  function formatDurationFromStart(startTimestamp) {
    if (!startTimestamp) return '';
    const startTime = new Date(startTimestamp);
    const now = new Date();
    const diffMs = now - startTime;
    const diffMinutes = Math.floor(diffMs / 60000);
    const diffHours = Math.floor(diffMinutes / 60);
    const minutes = diffMinutes % 60;
    if(diffHours > 0) return `⏱️ Depuis ${diffHours}h${minutes}m`;
    if(diffMinutes > 0) return `⏱️ Depuis ${diffMinutes}min`;
    return '';
  }

  async function fetchStatus() {
    try {
      const res = await fetch(apiUrl);
      if (!res.ok) throw new Error('Utilisateur non trouvé');
      const json = await res.json();
      const data = json.data;

      const user = data.discord_user;
      const status = data.discord_status;
      const avatarUrl = `https://cdn.discordapp.com/avatars/${user.id}/${user.avatar}.png?size=128`;
      const username = user.display_name || `${user.username}#${user.discriminator}`;

      let activities = data.activities || [];
      activities = activities.filter(a => a.type !== 4);

      let activitiesHtml = '';
      if(activities.length === 0) {
        activitiesHtml = '<div class="activity">Aucune activité</div>';
      } else {
        activitiesHtml = activities.map(activity => {
          let imgTag = '';
          if(activity.id === "spotify:1" && data.spotify?.album_art_url) {
            imgTag = `<img src="${data.spotify.album_art_url}" alt="Spotify Album Art" />`;
          } else {
            const imageUrl = getDiscordImageUrl(activity.application_id, activity.assets?.large_image);
            if(imageUrl) imgTag = `<img src="${imageUrl}" alt="Image activité" />`;
          }
          const duration = formatDurationFromStart(activity.timestamps?.start);
          return `
            <div class="activity">
              <div class="activity-info">
                <strong>${activity.name}</strong>
                <span>${activity.details || ''}${activity.details && activity.state ? ' - ' : ''}${activity.state || ''}</span>
                <span class="duration">${duration}</span>
              </div>
              ${imgTag}
            </div>
          `;
        }).join('');
      }

      const devices = '';

      document.getElementById("discord").innerHTML = `
        <div class="profile">
          <img class="avatar" src="${avatarUrl}" alt="Avatar" />
          <div>
            <div style="font-size: 20px; font-weight: bold;">${username}</div>
            <div style="color: ${statusColors[status]};">
              <span class="status-dot">●</span> ${status === 'offline' ? 'hors ligne' : status}
            </div>
          </div>
        </div>
        <div class="activities">
          ${activitiesHtml}
        </div>
        <div class="footer">${devices}</div>
      `;
    } catch (error) {
      document.getElementById("discord").innerHTML = `<div style="color: #f04747;">Erreur : ${error.message}</div>`;
    }
  }

  fetchStatus();
  setInterval(fetchStatus, 10000);
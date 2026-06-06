export default function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');

  const playlists = [];

  for (let i = 1; i <= 10; i++) {
    const url = process.env[`PLAYLIST_${i}`];
    const name = process.env[`PLAYLIST_${i}_NAME`] || `Lista ${i}`;
    if (url) {
      playlists.push({ name, url });
    }
  }

  res.status(200).json({ playlists });
}

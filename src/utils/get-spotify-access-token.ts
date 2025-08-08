export const getSpotifyAccessToken = async (): Promise<string> => {
    const clientId = import.meta.env.VITE_SPOTIFY_CLIENT_ID;
    const clientSecret = import.meta.env.VITE_SPOTIFY_CLIENT_SECRET;

    const response = await fetch('https://accounts.spotify.com/api/token', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
            'Authorization': `Basic ${btoa(`${clientId}:${clientSecret}`)}`,
        },
        body: new URLSearchParams({ 'grant_type': 'client_credentials', json: 'true' }),
    });

    if (!response.ok) {
        throw new Error('Failed to fetch Spotify access token');
    }

    const data = await response.json();
    return data.access_token;
};

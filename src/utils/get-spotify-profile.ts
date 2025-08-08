export const getSpotifyProfile = async (accessToken: string): Promise<string> => {
    const response = await fetch('https://api.spotify.com/v1/me', {
        method: 'GET',
        headers: { 'Authorization': `Bearer ${accessToken}` },
    });

    if (!response.ok) {
        throw new Error('Failed to fetch Spotify access token');
    }

    const data = await response.json();
    return data;
};

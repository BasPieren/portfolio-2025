export const getSteamOwnedGames = async () => {
    const accessToken = import.meta.env.VITE_STEAM_ACCESS_TOKEN;
    const response = await fetch(`https://api.steampowered.com/IPlayerService/GetOwnedGames/v0001/?key=${accessToken}&steamid=76561198009527003&format=json`);

    if (!response.ok) {
        throw new Error('Failed to fetch Strava stats');
    }

    return response.json();
};

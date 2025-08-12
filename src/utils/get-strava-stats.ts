export const getStravaStats = async () => {
    const accessToken = import.meta.env.VITE_STRAVA_ACCESS_TOKEN;
    const response = await fetch('https://www.strava.com/api/v3/athletes/66246569/stats', { headers: { Authorization: `Bearer ${accessToken}` } });

    if (!response.ok) {
        throw new Error('Failed to fetch Strava stats');
    }

    return response.json();
};

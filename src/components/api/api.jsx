
function api() {
    const getTeams = async () => {
        const res = await fetch(`https://www.thesportsdb.com/api/v1/json/3/search_all_teams.php?l=French%20LNB`);
        return await res.json();
    };

    return { 
        getTeams, 
    };
}


export default api();













/**
 * 
 * Appeler une API dans un composant fonctionnel React : https://techblog.ingeniance.fr/appeler-une-api-dans-un-composant-fonctionnel-react/
 * Rappel fonctionnement fetch : https://fr.javascript.info/fetch
 * 
 */
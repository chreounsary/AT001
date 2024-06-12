import * as API_SERVICE from "./service";
const getGameList = async (body) => {
    const response = await API_SERVICE.postData(`gamelist`, body);
    return response;
}
const launchGame = async (body) => {
    const response = await API_SERVICE.postData(`launchgame`, body);
    return response;
}
export { 
    getGameList,
    launchGame
}

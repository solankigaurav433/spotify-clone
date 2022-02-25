//endpoints here below
//developer.spotify.com/documentation/web-playback-sdk/quick-start/#

export const authEndpoint = "https://accounts.spotify.com/authorize";

const redirectUri = "http://localhost:3000/";

const clientId = "a46062ee1c9241bf8165069e53140c65";

//user will be able to do following things mentioned in scope
//spotify gives following scope (permissions some what)to their users
const scopes = [
  "user-read-currently-playing",
  "user-read-recently-played",
  "user-read-playback-state",
  "user-top-read",
  "user-modify-playback-state",
];

export const loginUrl = `${authEndpoint}?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scopes.join(
  "%20"
)}&response_type=token&show_dialog=true`;

export const getTokenFromUrl = () => {
  //URL = localhost:3000/accessToken=mysecretkey&redirect_uri.....

  //window.location.hash will go to the URL returned n go to the point where we had `"/"accessToken`
  return (
    window.location.hash
      //substring(1) is basically getting the 1st of string. "accessToken=mysecretkey"
      .substring(1)
      //split('&') - it will split at & symbol. split at &redirecr_uri
      .split("&")
      //reduce - initial is the initial value of reduce n item is what we get everytime we loop thru
      .reduce((initial, item) => {
        //parts = item.split('=') is splitting at =mysecretkey
        let parts = item.split("=");
        //initial[parts[0]] is the accessToken part before =
        //decodeURLComponent(parts[1]) - mysecretkey
        initial[parts[0]] = decodeURIComponent(parts[1]);
        return initial;
      }, {})
  );
};

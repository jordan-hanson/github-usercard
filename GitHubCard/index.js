import axios from 'axios'
/*
  STEP 1: using axios, send a GET request to the following URL
    (replacing the placeholder with your Github name):
    https://api.github.com/users/<your name>
*/
const URL = 'https://api.github.com/users/jordan-hanson'

const data = axios.get(URL)
  .then(res => {
    const userInfo = res.data
    console.log(userInfo)
    console.log(userInfo.name)
    // userInfo.forEach(profile => {
    //   const userCard = githubCard({ name: profile.name, avatar_url: profile.avatar_url, login: profile.login, html_url: profile.html_url, location: user.location, followers: user.followers, following: user.following, bio: user.bio })
    //   console.log(userCard)
    //   return userCard
    // })
    return githubCard({ name: userInfo.name, avatar_url: userInfo.avatar_url, login: userInfo.login, html_url: userInfo.html_url, location: userInfo.location, followers: userInfo.followers, following: userInfo.following, bio: userInfo.bio })
  }).catch(err => {
    if (err) {
      console.log(err)
    }
  })
/*
  STEP 2: Inspect and study the data coming back, this is YOUR
    github info! You will need to understand the structure of this
    data in order to use it to build your component function

    Skip to STEP 3.
*/

/*
  STEP 4: Pass the data received from Github into your function,
    and append the returned markup to the DOM as a child of .cards
*/

/*
  STEP 5: Now that you have your own card getting added to the DOM, either
    follow this link in your browser https://api.github.com/users/<Your github name>/followers,
    manually find some other users' github handles, or use the list found at the
    bottom of the page. Get at least 5 different Github usernames and add them as
    Individual strings to the friendsArray below.

    Using that array, iterate over it, requesting data for each user, creating a new card for each
    user, and adding that card to the DOM.
*/

// const followersArray = [];

/*
  STEP 3: Create a function that accepts a single object as its only argument.
    Using DOM methods and properties, create and return the following markup:

    <div class="card">
      <img src={image url of user} />
      <div class="card-info">
        <h3 class="name">{users name}</h3>
        <p class="username">{users user name}</p>
        <p>Location: {users location}</p>
        <p>Profile:
          <a href={address to users github page}>{address to users github page}</a>
        </p>
        <p>Followers: {users followers count}</p>
        <p>Following: {users following count}</p>
        <p>Bio: {users bio}</p>
      </div>
    </div>
*/
function githubCard(data) {
  console.log(data)
  let card = document.createElement('div')
  let img = document.createElement('img')
  let cardInfo = document.createElement('div')
  let h3 = document.createElement('h3')
  let pUsername = document.createElement('p')
  let pLocation = document.createElement('p')
  let pProfile = document.createElement('p')
  let hrefUser = document.createElement('a')
  let pFollowers = document.createElement('p')
  let pFollowing = document.createElement('p')
  let pBio = document.createElement('p')
  card.setAttribute('class', 'card')
  img.setAttribute('src', data.avatar_url)
  cardInfo.setAttribute('class', 'card-info')
  h3.setAttribute('class', "name")
  h3.textContent = data.name
  pUsername.setAttribute('class', 'username')
  pUsername.textContent = data.login
  pLocation.textContent = `Location: ${data.location}`
  hrefUser.setAttribute('href', data.html_url)
  hrefUser.textContent = data.html_url
  pFollowers.textContent = `Followers: ${data.followers}`
  pFollowing.textContent = `Following: ${data.following}`
  pBio.textContent = `Bio: ${data.bio}`
  pProfile.textContent = `Profile: ${hrefUser}`
  card.appendChild(img)
  card.appendChild(cardInfo)
  card.appendChild(h3)
  card.appendChild(pUsername)
  card.appendChild(pLocation)
  card.appendChild(pProfile)
  card.appendChild(hrefUser)
  card.appendChild(pFollowers)
  card.appendChild(pFollowing)
  card.appendChild(pBio)
  console.log(card)
  return card
}
githubCard(data)
/*
  List of LS Instructors Github username's:
    tetondan
    dustinmyers
    justsml
    luishrd
    bigknell
*/

/**
 * @author Kerly Dayana Pardo Rivera <kerlydayanapardo@gmail.com>
 * @fileoverview This script uses an Arrow Function named getAvatarUrl
 * @licence BSD 3-clause Licence
 */

const apiUrl = "https://api.github.com/users/mojombo/followers";

const getAvatarUrl = () => {
  fetch(apiUrl)
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      data.forEach((follower) => {
        console.log(`avatar_url: ${follower.avatar_url}`);
      });
    });
};

// Llamar a la función
getAvatarUrl();

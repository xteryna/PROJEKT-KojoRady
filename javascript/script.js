// Replace with your Instagram Access Token
const accessToken = 'IGQWRQcm0xQmVEUEFodmdybkJnT0huMzNleEQ2ZAEFYckxEQklMYVZApRk1TUHM1c21uMXM1ZAkQ2SXZAwSEZApY29SSnpfNkxHcHk5TEgyWkxnQzNmZAWhYWEtJcGZASUHo2ZAWdoS1AtSWVTN2NWYV9LOFBBSm9SN2NmZAzAZD';
const limit = 6
// Function to fetch and display Instagram feed
function getInstagramFeed() {
    fetch(`https://graph.instagram.com/v12.0/me/media?fields=id,caption,media_type,media_url,permalink,timestamp&access_token=${accessToken}&limit=${limit}`)
        .then(response => response.json())
        .then(data => {
            const feedContainer = document.getElementById('instagram-feed');

        data.data.forEach(post => {
                const postLink = document.createElement('a');
                postLink.href = post.permalink;
                postLink.target = '_blank';

                const postImage = document.createElement('img');
                postImage.src = post.media_url;
                postImage.alt = post.caption;


                postLink.appendChild(postImage);
                feedContainer.appendChild(postLink);
            });
        })
        .catch(error => console.error(error));
}

// Call the function to fetch and display the Instagram feed
getInstagramFeed();

// https://instafeedjs.com/#/?id=advanced-options
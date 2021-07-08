const form = document.querySelector('#search');
form.addEventListener('submit', async function (e) {
    e.preventDefault();
    console.log('Submitted');
    const searchValue = form.elements.query.value;
    console.log(searchValue);
    const config = { params: { q: searchValue } };
    const response = await axios.get(`http://api.tvmaze.com/search/shows`, config);
    //console.log();
    createImages(response.data);
    form.elements.query.value = '';

});

const createImages = (shows) => {
    for (let result of shows) {
        if (result.show.image) {
            //console.log(result);
            const img = document.createElement('img');
            img.src = result.show.image.medium;
            document.body.append(img);
        } else {

            console.log('No Image for this show');
        }

    };
};

const form = document.querySelector('#search');
form.addEventListener('submit', async function (e) {
    e.preventDefault();
    console.log('Submitted');
    const searchValue = form.elements.query.value;
    console.log(searchValue);
    const response = await axios.get(`http://api.tvmaze.com/search/shows?q=${searchValue}`);
    console.log(response.data);
});
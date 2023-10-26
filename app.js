console.log("Let's get this party started!");


$("form").on("submit", async function getGiphy (event) {
    event.preventDefault()

    let searchQuery = $("#giphySearch").val()
    let giphyUserData = {
        params: {
            "api_key": "smBKxZZMmsmwfq8TB1W1I2razkm1LMZ9",
            "tag": searchQuery
        }
    }

    const results = await axios.get("http://api.giphy.com/v1/gifs/random", giphyUserData)
    console.log(results)
    console.log(results.data.data.images.fixed_height.url)
    let imgData = results.data.data.images.fixed_height.url

    $("div").append(`<img src=${imgData} alt=giphyPicture>`);
    $("#giphySearch").val("")

})

$("button").on("click", function () {
    $("#giphyImageContainer").remove()
})
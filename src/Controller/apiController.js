const getInfo = (req, res) => {
    res.json({
        name: "amakaorabuchi@gmail.com",
        current_datetime: new Date().toISOString(),
        github_url: "https://github.com/Amaksss/public-api"
    })
}

module.exports = { getInfo };
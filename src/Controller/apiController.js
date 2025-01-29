const getInfo = (req, res) => {
    try{
        res.json({
            email: "amakaorabuchi@gmail.com",
            current_datetime: new Date().toISOString(),
            github_url: "https://github.com/Amaksss/public-api"
        })
            
        }
    catch(error) {
        res.status(500).json({
            message: 'Internal server error',
            error: error.message
        })
    }
};
   


module.exports = { getInfo };
require('dotenv').config({ path: './.env' });

module.exports= {
	database: {
		uri: process.env.DB, // DB  
	},
    path: {
		baseUrl: process.env.baseUrl, // http://localhost:3005/	
	},
}




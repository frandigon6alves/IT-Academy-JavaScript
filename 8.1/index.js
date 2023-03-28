const films = [
	{
		title: 'Avatar',
		year: '2009',
		genre: [ 'Action', 'Adventure', 'Fantasy' ],
		director: 'James Cameron',
		actors: [ 'Sam Worthington', 'Zoe Saldana', 'Sigourney Weaver', 'Stephen Lang' ],
		plot:
			'A paraplegic marine dispatched to the moon Pandora on a unique mission becomes torn between following his orders and protecting the world he feels is his home.',
		poster: 'http://ia.media-imdb.com/images/M/MV5BMTYwOTEwNjAzMl5BMl5BanBnXkFtZTcwODc5MTUwMw@@._V1_SX300.jpg',
		imdbRating: '7.9',
		type: 'movie'
	},
	{
		title: 'I Am Legend',
		year: '2007',
		genre: [ 'Drama', 'Horror', 'Sci-Fi' ],
		director: 'Francis Lawrence',
		actors: [ 'Will Smith', 'Alice Braga', 'Charlie Tahan', 'Salli Richardson-Whitfield' ],
		plot:
			'Years after a plague kills most of humanity and transforms the rest into monsters, the sole survivor in New York City struggles valiantly to find a cure.',
		poster: 'http://ia.media-imdb.com/images/M/MV5BMTU4NzMyNDk1OV5BMl5BanBnXkFtZTcwOTEwMzU1MQ@@._V1_SX300.jpg',
		imdbRating: '7.2',
		type: 'movie'
	},
	{
		title: '300',
		year: '2006',
		genre: [ 'Action', 'Drama', 'Fantasy' ],
		director: 'Zack Snyder',
		actors: [ 'Gerard Butler', 'Lena Headey', 'Dominic West', 'David Wenham' ],
		plot: 'King Leonidas of Sparta and a force of 300 men fight the Persians at Thermopylae in 480 B.C.',
		poster: 'http://ia.media-imdb.com/images/M/MV5BMjAzNTkzNjcxNl5BMl5BanBnXkFtZTYwNDA4NjE3._V1_SX300.jpg',
		imdbRating: '7.7',
		type: 'movie'
	},
	{
		title: 'The Avengers',
		year: '2012',
		genre: [ 'Action', 'Sci-Fi', 'Thriller' ],
		director: 'Joss Whedon',
		actors: [ 'Robert Downey Jr.', 'Chris Evans', 'Mark Ruffalo', 'Chris Hemsworth' ],
		plot:
			"Earth's mightiest heroes must come together and learn to fight as a team if they are to stop the mischievous Loki and his alien army from enslaving humanity.",
		poster: 'http://ia.media-imdb.com/images/M/MV5BMTk2NTI1MTU4N15BMl5BanBnXkFtZTcwODg0OTY0Nw@@._V1_SX300.jpg',
		imdbRating: '8.1',
		type: 'movie'
	},
	{
		title: 'The Wolf of Wall Street',
		year: '2013',
		genre: [ 'Biography', 'Comedy', 'Crime' ],
		director: 'Martin Scorsese',
		actors: [ 'Leonardo DiCaprio', 'Jonah Hill', 'Margot Robbie', 'Matthew McConaughey' ],
		plot:
			'Based on the true story of Jordan Belfort, from his rise to a wealthy stock-broker living the high life to his fall involving crime, corruption and the federal government.',
		poster: 'http://ia.media-imdb.com/images/M/MV5BMjIxMjgxNTk0MF5BMl5BanBnXkFtZTgwNjIyOTg2MDE@._V1_SX300.jpg',
		imdbRating: '8.2',
		type: 'movie'
	},
	{
		title: 'Interstellar',
		year: '2014',
		genre: [ 'Adventure', 'Drama', 'Sci-Fi' ],
		director: 'Christopher Nolan',
		actors: [ 'Ellen Burstyn', 'Matthew McConaughey', 'Mackenzie Foy', 'John Lithgow' ],
		plot: "A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival.",
		poster: 'http://ia.media-imdb.com/images/M/MV5BMjIxNTU4MzY4MF5BMl5BanBnXkFtZTgwMzM4ODI3MjE@._V1_SX300.jpg',
		imdbRating: '8.6',
		type: 'movie'
	},
	{
		title: 'Doctor Strange',
		year: '2016',
		genre: [ 'Action', 'Adventure', 'Fantasy' ],
		director: 'Scott Derrickson',
		actors: [ 'Rachel McAdams', 'Benedict Cumberbatch', 'Mads Mikkelsen', 'Tilda Swinton' ],
		plot:
			'After his career is destroyed, a brilliant but arrogant and conceited surgeon gets a new lease on life when a sorcerer takes him under her wing and trains him to defend the world against evil.',
		poster: 'http://ia.media-imdb.com/images/M/MV5BNjgwNzAzNjk1Nl5BMl5BanBnXkFtZTgwMzQ2NjI1OTE@._V1_SX300.jpg',
		imdbRating: '5.6',
		type: 'movie'
	},
	{
		title: 'Rogue One: A Star Wars Story',
		year: '2016',
		genre: [ 'Action', 'Adventure', 'Sci-Fi' ],
		director: 'Gareth Edwards',
		actors: [ 'Felicity Jones', 'Riz Ahmed', 'Mads Mikkelsen', 'Ben Mendelsohn' ],
		plot:
			'The Rebellion makes a risky move to steal the plans to the Death Star, setting up the epic saga to follow.',
		poster:
			'https://images-na.ssl-images-amazon.com/images/M/MV5BMjQyMzI2OTA3OF5BMl5BanBnXkFtZTgwNDg5NjQ0OTE@._V1_SY1000_CR0,0,674,1000_AL_.jpg',
		imdbRating: '4',
		type: 'movie'
	},
	{
		title: "Assassin's Creed",
		year: '2016',
		genre: [ 'Action', 'Adventure', 'Fantasy' ],
		director: 'Justin Kurzel',
		actors: [ 'Michael Fassbender', 'Michael Kenneth Williams', 'Marion Cotillard', 'Jeremy Irons' ],
		plot:
			'When Callum Lynch explores the memories of his ancestor Aguilar and gains the skills of a Master Assassin, he discovers he is a descendant of the secret Assassins society.',
		poster: 'http://ia.media-imdb.com/images/M/MV5BMTU2MTQwMjU1OF5BMl5BanBnXkFtZTgwMDA5NjU5ODE@._V1_SX300.jpg',
		imdbRating: '6',
		type: 'movie'
	}
];

const shrek2 = {
	title: 'Shrek 2',
	year: '2004',
	genre: ['Animation', 'Adventure', 'Comedy'],
	director: 'Andrew Adamson, Kelly Asbury, Conrad Vernon',
	actors: ['Mike Myers', 'Eddie Murphy', 'Cameron Diaz', 'Antonio Banderas'],
	plot: 'Princess Fiona`s parents invite her and Shrek to dinner to celebrate her marriage. If only they knew the newlyweds were both ogres.',
	poster: 'https://m.media-amazon.com/images/I/71NVtR34hFL._AC_SY741_.jpg',
	imdbRating: '7.2',
	type: 'movie'
};
films.push(shrek2);

console.log(films);

const galinhaPintadinha = {
	title: 'Galinna Pintadita',
	year: '2006',
	genre: ['Animation', 'Family'],
	director: 'Juliano Prado, Marcos Luporini',
	actors: ['Fábio Hoffmann', 'Angelica Santos'],
	plot: 'Galinha Pintadinha is a Brazilian animated children`s music project',
	poster: 'https://m.media-amazon.com/images/I/61YKX3WWfGL._AC_SY879_.jpg',
	imdbRating: '8.6',
	type: 'movie'
};

films.splice(0, 1, galinhaPintadinha);

function showFilms(films) {

    const formatedFilms = films.map((film, i) => {
        return `🎥 ${i}.- ${film.title} <br> 
            Year: ${film.year} <br> 
            Genre: ${film.genre} <br>
            Director: ${film.director} <br> 
            Actors: ${film.actors} <br> 
            ImdbRating: ${film.imdbRating} <br>` 
    });

    document.getElementById('films').innerHTML = formatedFilms.join('<br><br>')
}


showFilms(films);

function searchByCriteria() {

    //showFilms()
}

function sortByRatingDesc() {
    //showFilms()
}

function sortByRatingAsc() {
    //showFilms()
}

function findByGenre(genre) {
    //showFilms()
}

const recentMovies = films.filter(movie => new Date(movie.year) > new Date("2015"));
console.log(recentMovies);

const iMovies = films.find(movie => movie.title.startsWith('I'));
console.log(iMovies)

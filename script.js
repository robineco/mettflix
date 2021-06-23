var Movie = function (name, director, year, actors, description, image) {
  var self = this;
  self.name = ko.observable(name);
  self.director = ko.observable(director);
  self.year = ko.observable(year);
  self.actors = ko.observable(actors);
  self.description = ko.observable(description);
  self.image = ko.observable(image);
  return self;
};

function vm() {
	var self = this;
	self.chosenMovieData = ko.observable();
	self.showMoviesOverview = ko.observable();
	
	self.movies = ko.observableArray([
		{
		  key: 'Snowden',
		  stat: new Movie(
			'Snowden',
			'Oliver Stone',
			2016,
			'Melissa Leo, Zachary Quinto, Tom Wilkinson',
			'The NSA illegal surveillance techniques are leaked to the public by one of the agency employees, Edward Snowden, in the form of thousands of classified documents distributed to the press. ',
			'https://m.media-amazon.com/images/S/sgp-catalog-images/region_DE/universum-UNIVERSUMFILM_SNOWDEN_AMAZON-Full-Image_GalleryCover-de-DE-1549361393904.jpg',
		  ),
		},
		{
		  key: 'PulpFiction',
		  stat: new Movie(
			'Pulp Fiction',
			'Quentin Tarantino',
			1994,
			'John Travolta, Uma Thurman, Samuel L. Jackson',
			'The lives of two mob hitmen, a boxer, a gangster and his wife, and a pair of diner bandits intertwine in four tales of violence and redemption.',
			'https://img.youtube.com/vi/tGpTpVyI_OQ/maxresdefault.jpg',
		  ),
		},
		{
		  key: 'FightClub',
		  stat: new Movie(
			'Fight Club ',
			'David Fincher',
			1999,
			'Brad Pitt, Edward Norton, Meat Loaf',
			'An insomniac office worker and a devil-may-care soap maker form an underground fight club that evolves into much more.',
			'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRL7Dp5QGcl3eW2LEZSmssC59tZwKJ8JPsTdw&usqp=CAU',
		  ),
		},
		{
		  key: ' Leon:DerProfi',
		  stat: new Movie(
			'Léon: Der Profi',
			'Luc Besson',
			1994,
			'Jean Reno, Gary Oldman, Natalie Portman',
			' Mathilda, a 12-year-old girl, is reluctantly taken in by Léon, a professional assassin, after her family is murdered. An unusual relationship forms as she becomes his protégée and learns the assassins trade.',
			'https://www.fazemag.de/wp-content/uploads/2019/10/Le%CC%81on-der-Profi.png',
		  ),
		},
		{
		  key: 'Parasite',
		  stat: new Movie(
			'Parasite',
			'Bong Joon Ho',
			2019,
			'Kang-ho Song, Sun-kyun Lee, Yeo-jeong Cho',
			' Greed and class discrimination threaten the newly formed symbiotic relationship between the wealthy Park family and the destitute Kim clan.',
			'https://www.ndr.de/kultur/film/festivals/parasite100_v-contentxl.jpg',
		  ),
		},
	]);
	
	self.goToMovie = function(movie) {
		self.showMoviesOverview(null);
        self.chosenMovieData(movie);
    };
	
	self.goToMoviesOverview = function() {
		self.chosenMovieData(null);
		self.showMoviesOverview(new vm());
	}
	
	self.chosenMovieData(null);
	self.showMoviesOverview(this);
}


ko.applyBindings(new vm());

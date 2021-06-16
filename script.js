function Movie(movie) {
  var self = this;
  self.movie = movie;
}

function MettflixViewModel() {
  self.allMovies = [
    {
      name: 'Snowden1',
      director: 'Oliver Stone',
      year: '2016',
      actors: ['Melissa Leo', 'Zachary Quinto', 'Tom Wilkinson'],
      description:
        'The NSA illegal surveillance techniques are leaked to the public by one of the agency employees, Edward Snowden, in the form of thousands of classified documents distributed to the press. ',
    },
    {
      name: '',
      director: '',
      year: '',
      actors: [],
      description: '',
    },
    { name: '', director: '', year: '', actors: [], description: '' },
  ];
  // Editable data
  self.movies = ko.observableArray([
    new Movie(self.allMovies[0]),
    new Movie(self.allMovies[1]),
    new Movie(self.allMovies[2]),
  ]);
}

ko.applyBindings(new MettflixViewModel());

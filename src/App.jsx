import React from 'react';

class App extends React.Component {
  state = {
    reviews: []
  };

  componentDidMount() {
    
    let apiUrl = `https://api.nytimes.com/svc/movies/v2/reviews/search.json?query=godfather&api-key=1uPI0Tw00qQLO0jlrYDhRhNy4HJGvirJ`;

    fetch(apiUrl)
      .then(response => response.json())
      .then(data => {
        this.setState({ reviews: data.results });
        console.log(data.results);
      })
      .catch(error => {
        console.error('Error:', error);
      });
  }

  render() {
    const { reviews } = this.state;

    return (
      <div>
        <h1>Movie Reviews</h1>
        {reviews.map(review => (
          <div key={review.display_title}>
            <h2>{review.byline}</h2>
            <p>Critic Pick: {review.critics_pick}</p>
            <p>Title: {review.display_title}</p>
            <p>Headline: {review.headline}</p>
          </div>
        ))}
      </div>
    );
  }
}

export default App;

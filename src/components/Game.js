import React from "react";
import "./style.css";

// const divStyle = {
//   padding: "10px"
// };

// const picStyle = {
//   width: "150px",
//   height: "150px",
//   objectFit: "cover"
// };

const navStyle = {
  marginRight: '60px',
  color: 'white'
};

const birds = [
  {
    "id": 1,
    "image": "/assets/images/1.jpg",
    "picked": false
  },
  {
    "id": 2,
    "image": "/assets/images/2.jpg",
    "picked": false
  },
  {
    "id": 3,
    "image": "/assets/images/3.jpg",
    "picked": false
  },
  {
    "id": 4,
    "image": "/assets/images/4.jpeg",
    "picked": false
  },
  {
    "id": 5,
    "image": "/assets/images/5.jpg",
    "picked": false
  },
  {
    "id": 6,
    "image": "/assets/images/6.jpeg",
    "picked": false
  },
  {
    "id": 7,
    "image": "/assets/images/7.jpeg",
    "picked": false
  },
  {
    "id": 8,
    "image": "/assets/images/8.jpg",
    "picked": false
  },
  {
    "id": 9,
    "image": "/assets/images/9.jpg",
    "picked": false
  },
  {
    "id": 10,
    "image": "/assets/images/10.jpg",
    "picked": false
  },
  {
    "id": 11,
    "image": "/assets/images/11.jpg",
    "picked": false
  },
  {
    "id": 12,
    "image": "/assets/images/12.jpg",
    "picked": false
  }
]

function shuffleArray(array) {
  let i = array.length - 1;
  for (; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    const temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }
  return array;
}

class Game extends React.Component {
  constructor(props) {
    super(props);
    // this.state = {isToggleOn: true};
    this.guesser = this.guesser.bind(this);
  }

  state = {
    birds,
    score: 0,
    topScore: 0,
    message: "Click on an image to earn points, but don't click on any more than once!"
  };

  componentDidMount() {
    this.setState({ birds: this.state.birds });
  }

  guesser() {
    console.log(this.id);
    this.setState({ message: "Correct!"})
    this.setState({ score: this.state.score + 1 });
    if (this.state.score >= this.state.topScore) {
      this.setState({ topScore: this.state.topScore + 1})
    }
    console.log(this.state.score);
    shuffleArray(this.state.birds)
  }

  // guesser = event => {
  //   let name = event.target.name;
  //   const value = event.target.value;
  //   this.setState({
  //     [name]: value
  //   });
  //   console.log(this);
  // };

  render() {
    const shuffledBirds = shuffleArray(this.state.birds);
    return (
      <div>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
          <p className="navbar-brand" style={navStyle}><img src="https://www.birdlife.org/sites/default/files/styles/1600/public/news/puffin-1546796_1920_1.jpg?itok=4DU42phi" width="25" height="25" className="d-inline-block align-top" alt=""></img>Bird Clicker!</p>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav">
                <p className="nav-item nav-link" style={navStyle}>{this.state.message}</p>
                <p className="nav-item nav-link" style={navStyle}>Your Score: {this.state.score} | Top Score: {this.state.topScore} </p>
            </div>
          </div>
        </nav>
        {/* <Header currentScore={this.state.score} /> */}
        <div className="container">
          <div className="row">
            {shuffledBirds.map((post, idx) => {
              return (
                <div key={idx} className="col col-lg-3 col-sm-6 col-xs-12 divStyle" >
                  <img id={post.id} className="picStyle" src={post.image} onClick={this.guesser} />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    );
  }
}

export default Game;

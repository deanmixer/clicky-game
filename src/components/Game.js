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

let clickedId = ""

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

  guesser = e => {
    const updatedBirds = this.state.birds.map(item => {
      const newBird = { ...item };
      if (newBird.id == e.target.id) {
        if (newBird.picked) {  //This part would work if I had been able to get the 'updatedBirds' values to correctly overwrite this.state.birds
          this.setState({ message: "Wrong!"})
          this.setState({ score: 0 });
          //There would be a line of code here to return all 'picked' values to false
          return;
        } 
        else {
            newItem.picked = true;
            this.setState({
              birds: this.newData,
              message: "Correct!",
            });
            this.setState({ message: "Correct!"})
            this.setState({ score: this.state.score + 1 });
            if (this.state.score >= this.state.topScore) {
              this.setState({ topScore: this.state.topScore + 1})
            }
            
        }
      }
      return newBird;
    });
    this.setState({  //This was the part I wasn't able to get to work. To take the "picked=true" value from newBird and write it to this.state.birds
      birds: this.updatedBirds,
      message: "Correct!",
      score: this.state.score + 1,
    });
    console.log(this.state.birds)
    shuffleArray(updatedBirds)
  }

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

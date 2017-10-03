
class Model {
  constructor(index,num) {
    this.players = [
      {
        name: "Jim Hoskins",
        score: 31,
        id: 1
      },
      {
        name: "Andree Hoskins",
        score: 35,
        id: 2
      },
      {
        name: "Alena Hoskins",
        score: 42,
        id: 3
      }
    ];
    this.array = [];
    console.log(this.array);
    this.callback = null;
    this.value = undefined;
    this.index = 0;
  }
  subscribe(render) {
    this.callback = render;
  }
  notify() {
    this.callback();
  }
  sumScore() {
    return this.players.map(a => a.score).reduce((a, b) => a + b);
    console.log(a);
    this.notify();
  }
  getPlayer(a, b) {
    const maper = this.players.map((a = a.score));
  }
}
const Header = props => {
  // let sum = props.players.map(a => a.score).reduce((a, b) => a + b);
  return (
    <div>
      <header className=" header">
        <div className="stats">
          <div>PLAYERS: {model.players.length}</div>
          <div>TOTALPOINTS: {model.sumScore()}</div>
        </div>
        <div className="stopwatch ">
          <h2>STOPWATCH</h2>
          <div className="stopwatch-time">0</div>
          <button>START</button>
          <button>RESET</button>
        </div>
      </header>
    </div>
  );
};
const decrement = (index, num) => {
  return model.players.map(function(n, m) {
    if (m == num) {
      // console.log(model.index);
      
       model.index=index.score--;
      console.log(model.index);
    }
  });
  
};
const increment = (index, num) => {

  return model.players.map(function(n, m) {
    if (m == num) {
      model.index=index.score++;
      console.log(model.index);
    }
  });
};
// console.log('es: ',  model.index )
// console.log(document.getElementById('counter').val('s'))
function moostra(players, score) {
  return players.map((index, num) => {
    // model.index = index.score;
    // console.log(model.index)
    return (
      <div>
        <div>
          <div key={num} className="player">
            <p className="player-name">{index.name}</p>
            <div className="player-score counter">
              <button
                onClick={() => decrement(index, num)}
                className="counter-action decrement btn"
              >
                -
              </button>
              <span id='counter' className="counter-score">{index.score}</span>
              <button
                onClick={() => increment(index, num)}
                className="counter-action increment btn"
              >
                +
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  });
}
const PlayerList = props => {
  return <div>{moostra(model.players, model.players.score)}</div>;
};

const PlayerForm = props => {
  return (
    <div className="add-player-form">
      <form
        onSubmit={e => {
          e.preventDefault();
        }}
      >
        <input
          onChange={e => model.array.push(e.target.value)}
          type="text"
          placeholder="ENTER A NAME"
        />
        <input type="submit" value="add player" />
      </form>
    </div>
  );
};

const Application = ({ title, players }) => {
  return (
    <div className="scoreboard">
      <Header players={players} />
      <PlayerList players={players} />
      <PlayerForm />
    </div>
  );
};
let model = new Model();

let render = () => {
  ReactDOM.render(
    <Application title="Scoreboard" model={Model} />,
    document.getElementById("container")
  );
};
model.subscribe(render);
render();

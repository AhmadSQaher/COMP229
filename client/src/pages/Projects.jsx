// Renders the projects page
const Projects = () => {
  return (
    <div style={{ padding: '20px', textAlign: 'center' }}>
      <h1>Projects</h1>
      <div className="project">
        <h2 style={{ textAlign: 'center' }}>Bike Recovery Probability</h2>
        <img src="/stolenbike.jpg" alt="Stolen Bike" style={{ display: 'block', margin: '0 auto', maxWidth: '300px' }} />
        <p>Used the public information from Toronto Police's bike theft databank to train an AI model to
          predict likely hood of recovering a stolen bike. The training data was based on the location,
          bike details and history of similar results to give a prediction percentage. This was a web
          based application that utilized, session based, information transfer from web page to web page
          to show entered information and result. The application was designed to be user-friendly,
          allowing users to easily input their bike details. The AI model was trained using a
          machine learning algorithm that analyzed the data through different modular approaches, which
          were then compared to find the most accurate prediction model, resulting in a final model that
          could predict the likelihood of recovering a stolen bike based on the input data. </p>
      </div>
      <div className="project">
        <h2 style={{ textAlign: 'center' }}>Enterprise Application</h2>
        <img src="/entapp.PNG" alt="Enterprise Application Icon" style={{ display: 'block', margin: '0 auto', maxWidth: '300px' }} />
        <p>Use a microservice approach to set up different, standalone, services that connected through
          a central controller. The services were built on a RESTful API architecture and used
          JSON for data transfer, to express its ability to handle data from different sources.
          The application was designed to be scalable and maintainable, allowing for easy updates and
          modifications in the future. The project also included a user interface that allowed users to
          interact with the services and view the data in a user-friendly manner. The application utilized
          both mongoDB and MySQL databases to store and manage data from different services,
          allowing for efficient data retrieval and manipulation. The project was a success, demonstrating
          the ability to build a complex enterprise application using modern web technologies and best practices.</p>
      </div>
      <div className="project">
        <h2 style={{ textAlign: 'center' }}>Battleship Game</h2>
        <img src="/battleship.png" alt="Battleship Game" style={{ display: 'block', margin: '0 auto', maxWidth: '300px' }} />
        <p>This project is a web-based implementation of the classic Battleship game, where players can play
          locally against each other. The game features a user-friendly interface that allows players to
          place their ships on a grid, take turns guessing the locations of their opponent's ships, and
          track hits and misses. The game logic is implemented using JavaScript, ensuring smooth gameplay and
          real-time updates. The project showcases the use of HTML, CSS, and JavaScript to create an interactive
          and engaging gaming experience. It also demonstrates the ability to implement game mechanics such as
          ship placement, turn-based gameplay, and hit/miss tracking. The Battleship game is a fun and
          challenging project that highlights the skills in web development and game design.</p>
      </div>
    </div>
  );
};

export default Projects;
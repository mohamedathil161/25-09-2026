import kira from "./assets/Kira.jpeg";
function Intro() {
  return (
    <div className="mark">
      <div className="images">
        <img src={kira}></img>
      </div>
      <h1>John Doe</h1>
      <h2>Frontend Developer</h2>
      <p>I am learning React and love building websites.</p>
      <div>
        <h2>Age: 22 </h2>
        <p>Location: Chennai</p>
      </div>
    </div>
  );
}
export default Intro;

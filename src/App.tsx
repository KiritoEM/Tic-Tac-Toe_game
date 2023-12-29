import BoardHeader from "./components/BoardHeader";

const App = (): JSX.Element => {
  return (
    <section id="board">
      <div id="board__container">
        {/* ============header du plateau============ */}
        <BoardHeader />
      </div>
    </section>
  );
};

export default App;

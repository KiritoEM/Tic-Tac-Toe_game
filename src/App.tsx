import BoardBody from "./components/BoardBody";
import BoardFooter from "./components/BoardFooter";
import BoardHeader from "./components/BoardHeader";

const App = (): JSX.Element => {
  return (
    <section id="board">
      <div id="board__container">
        {/* ============header du plateau============ */}
        <BoardHeader />
        <BoardBody />
        <BoardFooter />
      </div>
    </section>
  );
};

export default App;

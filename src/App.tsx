import BoardBody from "./components/BoardBody";
import BoardFooter from "./components/BoardFooter";
import BoardHeader from "./components/BoardHeader";
import { CurrentUserProvider } from "./hooks/useCurrentUser";

const App = (): JSX.Element => {
  return (
    <CurrentUserProvider>
      <section id="board">
        <div id="board__container">
          {/* ============header du plateau============ */}
          <BoardHeader />

          {/* ============body du plateau============ */}
          <BoardBody />

          {/* ============footer du plateau============ */}
          <BoardFooter />
        </div>
      </section>
    </CurrentUserProvider>
  );
};

export default App;

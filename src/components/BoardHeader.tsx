const BoardHeader = (): JSX.Element => {
  return (
    <section id="board__header">
      <div className="icons">
        <img src="/pion.png" alt="" />
      </div>
      <div className="turn">
        <div className="turn__content">
          <div className="img">
            <img src="/rond.png" alt="" />
          </div>
          <div className="label">
            <p>TOUR</p>
          </div>
        </div>
      </div>
      <div className="restart-game">
        <div className="restart-game__content">
          <div className="img">
            <img src="/restart.png" alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default BoardHeader;

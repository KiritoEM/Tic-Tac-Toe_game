const BoardFooter = (): JSX.Element => {
  return (
    <section id="board-footer">
      <div className="player-1 card">
        <div className="img">
          <img src="/croix-1.png" alt="" />
        </div>
        <div className="label">
          <p>Joueur 1</p>
        </div>
      </div>
      <div className="player-2 card">
        <div className="img">
          <img src="/rond-2.png" alt="" />
        </div>
        <div className="label">
          <p>Joueur 2</p>
        </div>
      </div>
    </section>
  );
};

export default BoardFooter;

export const JournalEntry = () => {
  return (
    <div className="journal__entry">
      <div className="journal__entry-image">
        <div
          className="image"
          style={{
            backgroundImage: "url('/images/universe.jpg')",
          }}
        ></div>
      </div>
      <div className="journal__entry-body">
        <span>Titulo</span>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus,
          laborum!
        </p>
      </div>
    </div>
  );
};

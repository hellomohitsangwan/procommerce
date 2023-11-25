import styles from "./cw.css";

const CompareWebsites = ({ cw, filterGenre, setFilterGenre }) => {
  const onChange = ({ currentTarget: input }) => {
    if (input.checked) {
      const state = [...filterGenre, input.value];
      setFilterGenre(state);
    } else {
      const state = filterGenre.filter((val) => val !== input.value);
      setFilterGenre(state);
    }
  };

  const containerStyle = {
    margin: "10px",
    alignItems: "flex-start",
    padding: "10px 20px",
    boxShadow: "var(--box-shadow)",
    backgroundColor: "white",
    borderRadius: "4px",
  };

  const headingStyle = {
    margin: "0",
    fontSize: "16px",
    margin: "10px",
    textAlign: "center",
  };

  const genreContainerStyle = {
    display: "flex",
    flexDirection: "column",
    flexWrap: "wrap",
  };

  const genreStyle = {
    minWidth: "90px",
    display: "flex",
    alignItems: "center",
    margin: "2px 0",
  };

  const genreLabelStyle = {
    margin: "0",
    marginLeft: "5px",
  };

  return (
    <div style={containerStyle}>
      <h1 style={headingStyle}>Filter By Websites</h1>
      <div style={genreContainerStyle}>
        {cw.map((genre) => (
          <div style={genreStyle} key={genre}>
            <input
              type="checkbox"
              value={genre}
              onChange={onChange}
              checked={filterGenre.includes(genre)}
            />
            <p style={genreLabelStyle}>{genre}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CompareWebsites;

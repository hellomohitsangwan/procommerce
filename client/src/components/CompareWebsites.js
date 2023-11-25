import styles from "./cw.css";

const CompareWebsites = ({cw, filterGenre, setFilterGenre }) => {
	const onChange = ({ currentTarget: input }) => {
		if (input.checked) {
			const state = [...filterGenre, input.value];
			setFilterGenre(state);
		} else {
			const state = filterGenre.filter((val) => val !== input.value);
			setFilterGenre(state);
		}
	};
    
    const websites = ["amazon", "flipkart", "shopclues", "snapdeal", "nykaa"]
	return (
		<div className={styles.container}>
			<h1 className={styles.heading}>Filter By Websites</h1>
			<div className={styles.genre_container}>
				{cw.map((genre) => (
					<div className={styles.genre} key={genre}>
						<input
							className={styles.genre_input}
							type="checkbox"
							value={genre}
							onChange={onChange}
                            checked={filterGenre.includes(genre)} 
						/>
						<p className={styles.genre_label}>{genre}</p>
					</div>
				))}
			</div>
		</div>
	);
};

export default CompareWebsites;

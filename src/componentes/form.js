const Formulario = ({ handleChange, nigthMode, handleSubmit }) => {
    return (
        <form onSubmit={handleSubmit}>
            <div id="search" className={`${nigthMode.length === 0 ? "boxShadow" : ""} ${nigthMode && nigthMode[1]}`}>
                <button type="submit">
                    <i className="fas fa-search"></i>
                </button>
                <input type="search" placeholder="Search for a country..." />
            </div>
            <select name="select-Conect" onChange={handleChange} className={`${nigthMode.length === 0 ? "boxShadow" : ""} ${nigthMode && nigthMode[1]}`}>
                <option hidden defaultValue="Filter by Region">Filter by Region</option>
                <option value="Africa">Afríca</option>
                <option value="Americas">America</option>
                <option value="Asia">Asia</option>
                <option value="Europe">Europe</option>
                <option value="Oceania">Oceania</option>
            </select>
        </form>
    )
}

export default Formulario;
const Paises = ({ datos, nigthMode, handleBackClick, handleCountry }) => {
    return (
        <div id={datos.length !== 1 ? "paises":""}>
            {datos.length !== 1 ?
                datos.map((pais, indice) => {
                    const { flag, name, population, region, capital } = pais;
                    return (
                        <div key={name} onClick={() => handleCountry(name)} className={`cuadros-paises ${nigthMode && nigthMode[1]} ${nigthMode.length === 0 ? "boxShadow" : ""}`}>
                            <div className="div-img">
                                <img src={flag} alt={name}/>
                            </div>
                            <div className="datos">
                                <h1>{name}</h1>
                                <p><strong>Population:</strong> {population}</p>
                                <p><strong>Region:</strong> {region}</p>
                                <p><strong>Capital:</strong> {capital}</p>
                            </div>
                        </div>
                    )
                }) :
                datos.map((pais, indice) => {
                    const {
                        flag,
                        name,
                        nativeName,
                        population,
                        region,
                        subregion,
                        capital,
                        topLevelDomain,//[]
                        languages//[{}]
                    } = pais;
                    const currencies=[
                        ...pais.currencies || []
                    ];
                    const borders=[
                        ...pais.borders||[]
                    ];
                    return (
                        <div>
                            <button onClick={handleBackClick} className={`${nigthMode.length === 0 ? "boxShadow" : ""} ${nigthMode && nigthMode[1]} back`}>
                                <i className="fas fa-arrow-left"></i>
                                Back
                            </button>
                            <div className="cuadro-pais">
                                <div className="div-img-alone">
                                    <img src={flag}  alt={name}/>
                                </div>
                                <div className= {`${nigthMode.length!==0 && "colorNigth"} datos-alone`}>
                                    <div>
                                        <h1>{name}</h1>
                                        <p><strong>Native Name:</strong> {nativeName}</p>
                                        <p><strong>Population:</strong> {population}</p>
                                        <p><strong>Region:</strong> {region}</p>
                                        <p><strong>Sub Region:</strong> {subregion}</p>
                                        <p><strong>Capital:</strong> {capital}</p>
                                    </div>
                                    <div>
                                        <p><strong>Top Level Domain:</strong> {topLevelDomain.map((e, i) => <span key={i}>{e} </span>)}</p>
                                        <p><strong>Currencies:</strong> {currencies.map((e, i) => <span key={i}>{e.code} </span>)}</p>
                                        <p><strong>Languages:</strong> {languages.map((e, i) => <span key={i}>{e.name} </span>)}</p>
                                    </div>
                                    <div className="span">
                                        {
                                            borders.length!==0 && <p><strong>Border Countries:</strong> {borders.map((e, i) => <span className={`${nigthMode.length === 0 ? "boxShadow" : ""} ${nigthMode && nigthMode[1]}`} key={i}>{e} </span>)}</p>
                                        }
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    )

}

export default Paises;
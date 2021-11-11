import React, {useEffect, useState} from 'react';
import axios from "axios";
import Card from "./Card";

const Countries = () => {
    const [data, setData] = useState([]);  //Les Hooks et le State
    const [sortedData, setSortedData] = useState([]); //Filtrage les donnees lors l'afficage
    const [playOnce, setPlayOnce] = useState(true);//Pour la gestion de chargement de data,
    // charger une fois seulement et faire les opérations sur les données dejà chargées
    const [rangeValue, setRangeValue] = useState(40); //Limite dynamise
    const [selectedRadio, setSelectedRadio] = useState('');
    const radios = ['Africa', 'America', 'Europe', 'Asia', 'Oceania'];

    useEffect(() => {
        if (playOnce) { //pour eviter des appels intempestifs à l'API
            axios
                .get(
                    "https://restcountries.com/v2/all?fields=name,population,region,capital,flag"
                )
                .then((res) => {
                    setData(res.data);
                    setPlayOnce(false);
                });
        }
        const sortedCountry = () => { //Donnees filtrees
            const countryObj = Object.keys(data).map((i) => data[i]); //Convertir les donnees du tableau en objets
            const sortedArray = countryObj.sort((a, b) => {
                return b.population - a.population //Du plus grand au plus petit
            });
            sortedArray.length = rangeValue; //Limit
            setSortedData(sortedArray);
        };
        sortedCountry();
    }, [data, rangeValue, playOnce]);
    return (
        <div className="countries">
            <div className="sort-container">
                <input type="range"
                       min="1"
                       max="250"
                       value={rangeValue}
                       onChange={(e) => setRangeValue(e.target.value)}/>

                <ul>
                    {radios.map((radio) => {
                        return (  //Mapping du tableau de continents
                            <li key={radio}>
                                <input type="radio"
                                       value={radio}
                                       id={radio}
                                       checked={radio === selectedRadio}
                                       onChange={(e) => setSelectedRadio(e.target.value)}/>
                                <label htmlFor={radio}>{radio}</label>
                            </li>
                        );
                    })}
                </ul>
            </div>
            <div className="cancel">
                {selectedRadio && <h5 onClick={()=> setSelectedRadio("")}>Annuler recherche</h5>}
            </div>
            <ul className="countries-list">
                {sortedData
                    .filter((country) => country.region.includes(selectedRadio)) //Filtrage par continent
                    .map((country) => (
                        <Card country={country} key={country.name}/>
                    ))}
            </ul>
        </div>
    );
};
export default Countries;

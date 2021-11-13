import React from 'react';
import { useEffect, useState } from "react"
import { getOnePokemon } from "../api/onePokemonData";
import { useParams} from "react-router-dom";
import CardStats from '../components/CardStats';
import {useHistory} from 'react-router-dom';




function CardInfo() {
    const params = useParams();
    const router = useHistory();
    const [pokemon, setPokemon] = useState({});
    let statistic = pokemon.stats
    let id = pokemon.id
    id = String(id).padStart(3, '0')
    let srcImg = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/" + pokemon.id + ".png"
    let prevPokemon = params.id - 1
    let nextPokemon = +params.id + 1

    useEffect(() => {
        const fetchPokemon = async () => {
            const data = await getOnePokemon(params.id)
            setPokemon(data)
        }
        fetchPokemon()
    }, []);
    let prevButton
    let nextButton
    if(prevPokemon > 0) {
        prevButton = <div className="switch" onClick={() => router.push(`/pokemon/${prevPokemon}`)}>{`< #${prevPokemon}`}</div>
    }
    else {
        prevButton = ""
    }
    if(nextPokemon < 899) {
        nextButton = <div className="switch left" onClick={() => router.push(`/pokemon/${nextPokemon}`)} >{`#${nextPokemon} >`}</div>
    }
    else {
        nextButton = ""
    }
    return ( <>
        <div>
            <div className="switch-wrap">
                {prevButton}
                {nextButton}
            </div>
            <div className="cards">
                <div className="cards__pokemon">
                        <div className="item-img">
                            <img src={srcImg} alt=""/>
                        </div>
                    </div>
                    <div className="cards__pokemon">
                        <div className="info-container">
                            <h3 className="name">{pokemon.name}</h3>
                            <span className="number">{id}</span>
                        </div>
                        <div className="ability">
                            <ul className="ability-item">
                                <li><span>Height: </span><span>{pokemon.height} m</span></li>
                                <li><span>Weight: </span><span>{pokemon.weight} kg</span></li>
                            </ul>
                        </div>
                        <div class="stats-wrap">
                            <ul class="stats-wrap-list">
                                {
                                statistic ? statistic.map((el) => ( 
                                        <CardStats
                                        statValue={el.base_stat}
                                        statName={el.stat.name}
                                        />
                                    )) : "Loading.."
                                }
                            </ul>
                        </div>
                    </div>
        
            </div>
        </div>
        </>
    );
  }

  export default CardInfo;
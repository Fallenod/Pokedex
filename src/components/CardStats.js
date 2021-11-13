function CardStats({statValue, statName}) {
    return ( 
        <li>
            <div class="stats-wrap-text">
              <span class = "stats-text">{statName + ":"} </span>
              <span class = "stats-text">{statValue}</span>
            </div>
            <meter max="150" value={statValue}></meter>
        </li>
     );
}

export default CardStats;
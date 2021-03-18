import React from "react";
import './SeasonDisplay.css';

const seasonConfig = {
    summer: {
        text: 'Lets hit the beach',
        iconName: 'sun outline'
    },
    winter: {
        text: 'Burr its cold',
        iconName: 'snowflake outline'
    }
}

const getSeason = (lat, month) => {
    if (month > 2 && month < 9) {
        return lat > 0 ? "summer" : "winter";
    } else {
        return lat > 0 ? "winter" : "summer";
    }
};

const SeasonDisplay = (props) => {
    const season = getSeason(props.lat, new Date().getMonth());
    const { text, iconName } = seasonConfig[season]
    //   const text=season === "winter" ? "Burr, its chilly" : "Lest hit the beach!"
    //   const icon=season==='winter' ? 'snowflake outline' : 'sun'

    return (
        <div className={`season-display ${season}`}>
            {/* <i className={`${icon} icon`}></i>
            { <h1>{season === "winter" ? "Burr, its chilly" : "Lest hit the beach!"}</h1> 
              <h1>{text}</h1>  }
              <i className={`${icon} icon`}></i> */}

            <i className={`icon-left massive ${iconName} icon`}></i>
            <h1>{text}</h1>
            <i className={`icon-right massive ${iconName} icon`}></i>
        </div>
    );
};

export default SeasonDisplay;

import React from 'react';
import info from '../icons/info.svg'
import twitter from '../icons/twitter.svg'
import {PageView, Event} from "./Tracking"

export function SecNav(props) {
    let {handleAboutClicked, desktopSize} = props
    return (
        <ul className="secNavContainer">
            <li><a
                href="https://hackergram.org"
                datacontent="MojoMaps Node Base"
                style={{backgroundImage: `url(${info})`}}
                onClick={()=> {
                    handleAboutClicked();
                    PageView('About');
            }}></a></li>
            {}
        </ul>
    )
}

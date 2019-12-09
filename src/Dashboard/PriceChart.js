import HighChartsConfig from "./HighChartsConfig";
import React from "react";
import { Tile } from "../Shared/Tile";
import { AppContext } from "../App/AppProvider";
import ReactHighcharts from "react-highcharts";
import { Theme } from "./HighchartsThemeDarkBlue";
ReactHighcharts.Highcharts.setOptions(Theme);

export default function(){
    return (
        <AppContext.Consumer>
            {({}) => <Tile>
                <ReactHighcharts config={HighChartsConfig()}/>
            </Tile>}
        </AppContext.Consumer>
    )
}

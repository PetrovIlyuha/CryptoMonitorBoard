import HighChartsConfig from "./HighChartsConfig";
import React from "react";
import { Tile } from "../Shared/Tile";
import { AppContext } from "../App/AppProvider";
import ReactHighcharts from "react-highcharts";
import { Theme } from "./HighchartsThemeDarkBlue";
import ChartSelect from "./ChartSelect";
ReactHighcharts.Highcharts.setOptions(Theme);


export default function(){
    return (
        <AppContext.Consumer>
            {({historical, changeChartSelect}) => <Tile>
                <ChartSelect defaultValue={"months"}
                    onChange={e => changeChartSelect(e.target.value)}
                >
                    <option value="days">Days</option>
                    <option value="weeks">Weeks</option>
                    <option value="months">Months</option>
                </ChartSelect>
                {historical ? <ReactHighcharts config={HighChartsConfig(historical)}/>
                    : <div>Loading historical data...</div>
                }
            </Tile>}
        </AppContext.Consumer>
    )
}

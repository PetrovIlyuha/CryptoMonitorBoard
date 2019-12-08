import React from "react";
const cc = require('cryptocompare');
export const AppContext = React.createContext();

export default class AppProvider extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            page: 'dashboard',
            ...AppProvider.savedSettings(),
            setPage: this.setPage,
            confirmFavorites: this.confirmFavorites
        }
    }

    componentDidMount() {
        this.fetchCoins();
    }

    fetchCoins = async () => {
        let coinList = (await cc.coinList()).Data;
        this.setState({coinList});
        console.log(coinList)
    };

    static savedSettings(){
        let cryptoDashData = JSON.parse(localStorage.getItem('cryptoDash'));
        if (!cryptoDashData){
            return {page: "settings", firstVisit: true}
        }
        return {}
    }
    setPage = page => this.setState({page});
    confirmFavorites = () => {
        this.setState({
            firstVisit: false,
            page: 'dashboard'
        });
        localStorage.setItem("cryptoDash", JSON.stringify({
            test: "BITCOIN IS EVERYTHING"
        }))
    }
    render(){
        return (
            <AppContext.Provider
                value={this.state}
                setPage={this.setPage}
                confirmFavorites={this.confirmFavorites}
            >
                {this.props.children}
            </AppContext.Provider>
        )
    }
}

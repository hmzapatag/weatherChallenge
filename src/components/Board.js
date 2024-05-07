import React from 'react';
import Loader from './Loader';

const Board = ({loadingData, showData, weather}) => {

    let today = new Date();
    let day = today.getDate();
    let month = today.getMonth() + 1;
    let year = today.getFullYear();
    let date = day + '/' + month + '/' + year;

    let url = "";
    let iconUrl = "";



    if(loadingData){
        return  <Loader />;
    }

    if(showData){
        url = "http://openweathermap.org/img/w/";
        iconUrl = url + weather.weather[0].icon + ".png";
    }

    return (
        <div className="mt-5">

            {
                showData === true ? (

                    <div className="mol-md-4">
                        <div className="card mb-3 mx-auto bg-dark text-light">
                            <div className="row g-0">
                                <div className="col-md-4">
                                    <h1 className="card-temp">{(weather.main.temp - 273.15).toFixed(1)}ºC</h1>
                                    <p className="card-desc"><img src={iconUrl} alt="icon"/>{weather.weather[0].description}</p>
                                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTUa0vcIsS_b9a8IX3qE8yvDs2UohV6iVwnDA&usqp=CAU?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" className="img-fluid rounded-start" alt="..."/>
                                </div>
                                <div className="col-md-8">
                                    <div className="card-body text-start mt-2">
                                        <h5 className="card-text">Temperatura superior: {(weather.main.temp_max - 273.15).toFixed(1)}ºC</h5>
                                        <h5 className="card-text">Temperatura inferior: {(weather.main.temp_min - 273.15).toFixed(1)}ºC</h5>
                                        <h5 className="card-text">Humedad: {weather.main.humidity}%</h5>
                                        <h5 className="card-text">Sensación térmica: {(weather.main.feels_like- 273.15).toFixed(1)}ºC</h5>
                                        <h5 className="card-text">Velocidad eólica: {weather.wind.speed}m/s</h5>
                                    </div>
                                    <hr/>

                                    <div className="row mt-4">
                                        <div className="col">
                                            <h3 className="card-title">{weather.name}</h3>
                                        </div>
                                        <div className="col">
                                            <p className="card-title">{date}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                ):(
                    <h2 className="text-light">No hay información</h2>
                )
            }



        </div>

    );
}

export default Board;
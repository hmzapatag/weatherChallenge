import React, {useState} from 'react';

const Form = ({newLocation}) => {
    const [city, setCity] = useState("");

    const onSubmit = (e) => {
        e.preventDefault();
        if(city === "" || !city) return;

        newLocation(city);
    }

    return(

        <div className="col-md-4 inline">
            <form onSubmit={onSubmit}>
                <div className="input-group mb-3 mx-auto">
                    <input type="text" className="form-control" placeholder="Ingrese la ciudad" onChange={(e) =>setCity(e.target.value)}/>
                    <button className="btn btn-success input-group-text" type="submit">Consultar</button>
                </div>
            </form>
        </div>

    );
}

export default Form;
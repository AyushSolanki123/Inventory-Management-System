import { useState } from "react";

function SearchBar(props) {
    const [name, setName] = useState("");
    const [price, setPrice] = useState(0);
    const [type, setType] = useState("");
    const [brand, setBrand] = useState("");

    const searchButtonPressed = () => {
        props.updateSearchParams({
            name: name,
            price: price,
            type: type,
            brand: brand
        })
    }

    return (
        <div className="container">
            <div className="row">
                <h2>Search for an Item</h2>
            </div>   
            <div className="row mt-3">
                <div className="col">
                    <label htmlFor="name-field">Name: </label>
                    <input
                        id="name-field"
                        type="text"
                        className="form-control"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                </div>
                <div className="col">
                    <label htmlFor="price-field">Max Price: </label>
                    <input
                        id="price-field"
                        type="text"
                        className="form-control"
                        value={price}
                        onChange={(e) => setPrice(e.target.value)}
                    />
                </div>
                <div className="col">
                    <label htmlFor="type-field">Type: </label>
                    <input
                        id="type-field"
                        type="text"
                        className="form-control"
                        value={type}
                        onChange={(e) => setType(e.target.value)}
                    />
                </div>
                <div className="col">
                    <label htmlFor="brand-field">Brand: </label>
                    <input
                        id="brand-field"
                        type="text"
                        value={brand}
                        className="form-control"
                        onChange={(e) => setBrand(e.target.value)}
                    />
                </div>
            </div>
            <div className="row mt-3">
                <div className="col-5" />
                    <button
                        className="btn btn-primary col-2"
                        type="button"
                        onClick={searchButtonPressed}
                    >
                        Search
                    </button>
            </div> 
        </div>        
    )
}

export default SearchBar;
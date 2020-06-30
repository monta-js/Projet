import React from 'react'

const CalReservation = () => {
    return (
        <div>
            <div class="container">
                <div class="row">
                    <div class="col-sm">
                        <select class="custom-select">
                            <option selected>Open this select menu</option>
                            <option value="1">One</option>
                            <option value="2">Two</option>
                            <option value="3">Three</option>
                        </select>
                    </div>
                    <div class="col-sm">
                        <input type='date'></input>
                    </div>
                    <div class="col-sm">
                        <input type='date'></input>
                    </div>
                    <div class="col-sm">
                        <button type="button" class="btn btn-danger">Réserver</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CalReservation;

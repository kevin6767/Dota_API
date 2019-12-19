import React from 'react'

const Heroes = ({heroes}) => {
    return (
        <div>
            <h1>Hero List</h1>
            <select name={heroes}>
            {heroes.map(hero =>
                <option>{hero.localized_name}
                </option>
              )};
            </select>
        </div>
    )
};

export default Heroes

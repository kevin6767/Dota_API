import React from 'react'

const Heroes = ({heroes}) => {
    return (
        <div>
            <h1>Hero List</h1>
            {heroes.map((hero) => (
                <div>
                    <div>
                        <h5>{hero.name}</h5>
                        <h6>{hero.id}</h6>

                    </div>
                </div>
            ))}
        </div>
    )
};

export default Heroes

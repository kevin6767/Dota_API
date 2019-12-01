import React from 'react'

const Heroes = ({heroes}) => {
    return (
        <div>
            <h1>Hero List</h1>
            {heroes.map((hero) => (
                <div>
                    <div>
                        <h5>{hero.localized_name}</h5>
                        <div><img src={ 'https://api.opendota.com' + hero.img }/>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    )
};

export default Heroes

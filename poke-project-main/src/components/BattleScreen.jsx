

import './battleScreen.css';

const BattleScreen = ({ myPokeSelection, computerRandomSelection,myHealth, enemyHealth}) => {
    console.log({myPokeSelection});
    console.log({computerRandomSelection});

    return (
        <div>
        <div className="battle-container">
            <div className="enemy-container">
                <h1>{enemyHealth}</h1>
                <img src={computerRandomSelection[0].sprites.front_default} alt='enemy-container'></img>
            </div>
            <div className="my-container">
                <img src={myPokeSelection[0].sprites.back_default}></img>
                <h1>{myHealth}</h1>
            </div>
        </div>
    </div>
);
};

export default BattleScreen;
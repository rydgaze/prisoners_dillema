import { Strategy, StrategyData, Action } from "../Strategy"

function     randomInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

export default class Punisher implements Strategy {
    name() {
        return "Punisher"
    }

    getAction(data: StrategyData): Action {
        if (data.iteration > 6) {
            // Check if the general inclination is opponent is
            // to cooperate and do DEFECT 
            let prob = 0;
            // Last 5 response are more towards COOP ?
            for (let i = data.opponentActions.length - 1;
                i > data.opponentActions.length - 6; i--) {
                prob += data.opponentActions[i] === Action.COOPERATE ? 1 : 0;
            }
            prob /= 5
            if (prob > 0.7) {
                return Action.DEFECT
            } else { // tit for tat
                return data.opponentActions[data.opponentActions.length - 1]
            }
        }
        else { // Random
            let r = randomInteger(0, 1);        
            if (r == 1) {
                return Action.COOPERATE
            }
            else {
                return Action.DEFECT
            }
        }
    }
}
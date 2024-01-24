import { it } from "node:test"
import { Action, StrategyData } from "./Strategy"

function calcScore(leftAction: Action, rightAction: Action) {

    let leftScore = 0
    let rightScore = 0
    // Rules
    // If Both are COOPERATE = Each gets 3
    // If One is COOPERATE and other is DEFECT = The DEFECT gets 5 and COOPERATE gets 0
    // If Both are DEFECT = Each gets 1

    if (leftAction == Action.COOPERATE && rightAction == Action.COOPERATE) {
        leftScore = 3
        rightScore = 3
    } else if (leftAction == Action.COOPERATE && rightAction == Action.DEFECT) {
        leftScore = 0
        rightScore = 5
    } else if (leftAction == Action.DEFECT && rightAction == Action.COOPERATE) {
        leftScore = 5
        rightScore = 0
    } else if (leftAction == Action.DEFECT && rightAction == Action.DEFECT) {
        leftScore = 1
        rightScore = 1
    }

    return { leftScore, rightScore }
}

export async function StrategySim(iterations: number,
    leftStrategyName: string,
    rightStrategyName: string) {

    //console.log('Simulating iterations:', iterations, ' [', leftStrategyName, ' VS ', rightStrategyName, ']')

    // Import both the strategies from files
    let l = null
    let r = null
    try {
        l = await import("./Strategies/" + leftStrategyName)
        r = await import("./Strategies/" + rightStrategyName)

    } catch (e) {
        console.log("FATAL:",e.message)
        process.exit()
    }

    let leftStrategy = new l.default()
    let rightStrategy = new r.default()

    let leftData = new StrategyData()
    let rightData = new StrategyData()

    let leftTotal = 0
    let rightTotal = 0

    leftData.myActions = []
    rightData.myActions = []
    leftData.opponentActions = []
    rightData.opponentActions = []

    for (let iteration = 0; iteration < iterations; iteration++) {
        leftData.iteration = iteration
        rightData.iteration = iteration
        let leftAction = leftStrategy.getAction(leftData)
        let rightAction = rightStrategy.getAction(rightData)

        leftData.myActions.push(leftAction)
        leftData.opponentActions.push(rightAction)

        rightData.myActions.push(rightAction)
        rightData.opponentActions.push(leftAction)

        let score = calcScore(leftAction, rightAction)
        //console.log('ACTION: ',leftStrategy.name(), ' : ', leftAction , ', ', rightStrategy.name(), ' : ', rightAction)

        leftTotal += score.leftScore
        rightTotal += score.rightScore

    }

    //console.log('AVERAGE: ',leftStrategy.name(), ' : ', leftTotal/iterations , ', ', rightStrategy.name(), ' : ', rightTotal/iterations)
    return leftTotal

}

import { StrategySim } from "./StrategySim"

const config = require('config')

const maxIterations = config.get('Execution.controls.iteration')
const strategies = config.get('Execution.strategies')

console.log('Testing Strategies', strategies)
console.log('Iterations', maxIterations)

let scores  = []

async function executeStrategies() {
    for (let left of strategies) {
        let score = 0
        for (let right of strategies) {
            score += await StrategySim(maxIterations, left, right)
        }
        scores.push({ strategy: left, score: score })
    }
    scores.sort((a, b) => b.score - a.score);
    console.log('Results',scores)

    
}

executeStrategies()


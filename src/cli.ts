import {tinypack} from './tinypack'

let input = process.argv[2]

try {
    console.log(tinypack(input))
} catch (error) {
    console.error(error)
    process.exit(1)
}

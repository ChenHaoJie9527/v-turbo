export function Accumulation(...args: any[]) {
    return args.reduce((pre, current) => pre + current, 0)
}

export function Multiplication(...args: any[]) {
    return args.reduce((pre, current) => pre * current, 1)
}
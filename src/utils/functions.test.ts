import { shuffleNumber, sortNumber } from './functions'

describe('shuffleNumber', () => {
    test('should return the same array length', () => {
        const array = [1, 2, 3, 4, 5]
        expect(shuffleNumber(array).length).toBe(array.length)
    })

    test('should return a different order array', () => {
        const array = [1, 2, 3, 4, 5]
        expect(shuffleNumber(array)).not.toEqual(array)
    })
})

describe('sortNumber', () => {
    test('should return the same array length', () => {
        const array = [5, 1, 4, 3, 2]
        expect(sortNumber(array).length).toBe(array.length)
    })

    test('should return a sorted array', () => {
        const array = [5, 1, 4, 3, 2]
        expect(sortNumber(array)).toEqual([1, 2, 3, 4, 5])
    })
})

import * as getColorFromXY from "../getColorFromXY"

describe("when calling the getColorFromXY function", () => {
    test("if both X and Y parameters are NaN, then the colour will be #ffffff", () => {
        let result: any = getColorFromXY.getColorFromXY(NaN, NaN)
        expect(result).toBe("fffffff")
    })

    test("if the X parameter is 499.5 and the Y is 570.0, then the colour will be #c55ceb", () => {
        let result: any = getColorFromXY.getColorFromXY(499.5, 570.0)
        expect(result).toBe("c55ceb")
    })

    test("if the X parameter is -Infinity and the Y is -Infinity, then the colour will be #ffb365", () => {
        let result: any = getColorFromXY.getColorFromXY(-Infinity, -Infinity)
        expect(result).toBe("ffb365")
    })

    test("if the X parameter is 570 and the Y is 430, then the colour will be #54d1d2", () => {
        let result: any = getColorFromXY.getColorFromXY(570, 430)
        expect(result).toBe("54d1d2")
    })
})

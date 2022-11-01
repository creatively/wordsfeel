import * as getUpdatedWordObjects from "../getUpdatedWordObjects"

describe("when calling the getUpdatedWordObjects function", () => {

    test("if the 'text' parameter is 'apprehensively', then resulting object will have an 'name' property value of 'apprehensively'", () => {
        let result: any = getUpdatedWordObjects.getUpdatedWordObjects('apprehensively')
        const result_name = result[0].name || null
        expect(result_name).toEqual('apprehensively')
    })

    test("if the 'text' parameter is 'amazed', then resulting object will have an 'circleX' property value of 723", () => {
        let result: any = getUpdatedWordObjects.getUpdatedWordObjects("amazed")
        const result_circleX = result[0].circleX || null
        expect(result_circleX).toEqual(703)
    })

    test("if the 'text' parameter is 'helped', then resulting object will have an 'circleY' property value of 328", () => {
        let result: any = getUpdatedWordObjects.getUpdatedWordObjects('helped')
        const result_circleY = result[0].circleY || null
        expect(result_circleY).toEqual(328)
    })

    test("if the 'text' parameter is 'dispairingly', then resulting object will have an 'colour' property value of #c55ceb", () => {
        let result: any = getUpdatedWordObjects.getUpdatedWordObjects('dispairingly')
        const result_colour = result[0].colour || null
        expect(result_colour).toEqual('c55ceb')
    })
})

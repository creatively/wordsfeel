import * as useRandomkey from "../useRandomkey"

describe("useRandomkey.randomkey", () => {
    test("0", () => {
        let result: any = useRandomkey.randomkey()
        expect(result.length).toBe(16)
    })
})

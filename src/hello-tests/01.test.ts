import {mult, sum} from "./01";
//data
let a: number
let b: number;
let c: number;
beforeEach(() => {
    a = 5;
    b = 5;
    c = 10;
})
test("sum should be correct", () => {

    //action
    const result1 = sum(a, b);
    c = 100;
    const result2 = sum(c, b);

    //expected result
    expect(result1).toBe(10);
    expect(result2).toBe(105);
})
test("mult should be correct", () => {

    //action
    const result1 = mult(a, b);
    const result2 = mult(c, b);

    //expected result
    expect(result1).toBe(25);
    expect(result2).toBe(50);
})
// test("splitting into words should be correct", () => {
//     let sent1 = "Hello my friend!";
//     let sent2 = "JS - is programming language";
//     const result1 = splitIntoWords(sent1);
//     const result2 = splitIntoWords(sent2);
//
//     expect(result1.length).toBe(16);
//     expect(result1[0]).toBe("hello");
//     expect(result1[1]).toBe("my");
//     expect(result1[2]).toBe("friend");
//
//     expect(result2.length).toBe(4);
//     expect(result2[0]).toBe("JS");
//     expect(result2[1]).toBe("is");
//     expect(result2[2]).toBe("programming");
//     expect(result2[2]).toBe("language");
// })
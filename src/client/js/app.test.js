import {checkDate } from "./app"
import {date_diff } from "./app"
import {handleReq} from "./app"

//function to adddays to current day
Date.prototype.addDays = function(days) {
    var date = new Date(this.valueOf());
    date.setDate(date.getDate() + days);
    return date;
}

describe("checking entered date ", ()=>{

    test("should return 0 if the date withing week", ()=>{
        const date= new Date()
        expect(checkDate(date.addDays(3))).toBe(0);
    })// test 1

    test("should return 1 if the date in the future", ()=>{
        const date= new Date()
        expect(checkDate(date.addDays(10))).toBe(1);

})

})//checkdate test

describe("difference btween  2 dates",()=>{
    test("should return the difference", ()=>{
        const date1= new Date()
        const date2= new Date().addDays(7)
        expect(date_diff(date1, date2)).toBe(7);

})

})

describe("test if the handel req exist ",()=>{
    test('test if the function handlreq  is defined',  () => {
        expect(handleReq).toBeDefined();
    });

})





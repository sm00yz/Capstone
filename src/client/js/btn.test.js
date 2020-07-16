import { removebtn, showtn, savebtn, } from './btn'

describe("test if the funcitons exist ",()=>{
    test('test if the function removebtn  is defined',  () => {
        expect(removebtn).toBeDefined();
    });

    test('test if the function showtn  is defined',  () => {
        expect(showtn).toBeDefined();
    });

    test('test if the function savebtn  is defined',  () => {
        expect(savebtn).toBeDefined();
    });

})
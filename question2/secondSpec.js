describe('Suite to test classes',()=>{
    let emp=null;
    beforeAll(()=>{
        console.log("This function is executed before any of the operations begin");
    })
 
    beforeEach(()=>{
        emp=new employee(123,"Aditi","Kolkata");
        console.log("This function is executed before every test case");
    })
    
    afterEach(()=>{
        emp=null;//destroy the emp object
        console.log("This function is executed after every test case");
    })
 
    afterAll(()=>{
        console.log("This function is the last function to execute of the test suite");
    })
 
    it('should set emailformat', () => {
        const cus=new customer
        expect(cus.id).toBe("smita@gmail.com")
    });
 
    it('should set name of 5 characters', () => {
        const cus=new customer("Aditi")
        expect(cus.name).toBe("Aditi")
    });
 
    it('should give the billdate', () => {
        const cus=new customer
        expect(cus.address).toBe("12/02/2020")
    });
});
 

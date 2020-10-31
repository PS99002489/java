class customer{
    constructor(billamount,name,billdate,email,phone){
       
        this.name=name;
        this.email=email;
        this.billdate=billdate;
        this.phone=phone;
        this.billamount=billamount;

    }
 
    display(){
    return `${billdate} with name as ${this.name} with ${this.billamount}`;
    }
}
 
class Manager{
    constructor(){
        this.customer=[];
    }
 
    addCustomer(cus){
        if(cus==null)
        throw "Employee not created"
        this.customer.push(cus);
    }
 
    removeCustomer(id){
        for(let index=0;index<this.customer.length;index++){
            const element=this.customer[index];
            if(element.id==id){
                this.customer.splice(index,1);
                //splice removes/replaces/adds  the elements into the array from the specified index followed by the no of elements
                return;
            }
        }
        throw "Employee not found to delete"
    }
    updateCustomer(emp){
        let selected=this.customer.find((e)=>e.id==emp.id);
        if(selected==undefined)
            throw "Employee not found to update";
            selected.name=emp.name;
            selected.address=emp.address;
    }
 
    getAllCustomer(){
        return this.customer;
    }
 
    getCustomer(id){
        return this.customer.find((e)=>e.id==id);
    }
}
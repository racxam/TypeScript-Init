import { Request, Service } from "@sap/cds";


export = (srv:Service) => {

    const { Books } = srv.entities;

    srv.on('READ',Books,(req:Request)=>{
        return "Hello Sumit"
    })


}


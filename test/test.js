// Setting up an Enviroment virable
process.env.NODE_ENV = "test";

//Requiring the development dependencies
const server = require("../index") // requiring the server
const request = require("request");
const { expect } = require("chai");



// describe( "/", () => {
    it("should get Hello World", (done) => {
        request("http://localhost:3000/", function(err, res, body){
            expect(body).to.equal("Hello World!")
            done()
           })
        })
    // }
// );



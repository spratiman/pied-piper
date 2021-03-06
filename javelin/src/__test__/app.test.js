import mockingoose from "mockingoose";
import note from "../models/note";
const mongoose = require('mongoose');
const ObjectId = mongoose.Types.ObjectId;
import {
    getTicketsBackend,
    updateTicketBackend,
    addNoteBackend,
    updateNoteBackend,
} from "../app";

describe("endpoints test", () => {
  beforeEach(() => {
    mockingoose.resetAll();
    jest.clearAllMocks();
  });

  describe("ticket endpoints", () => {
    // Get ticket by ticketId
    describe("getTicketsBackend", () => {
      it("returns TicketList grPC response with filter by ticketId", done => {
        let now = Math.round((new Date()).getTime()/1000);
        const getTicketRequest = {
          ticketId: "5aacca76da666f0038139694"
        }
        const mockData = [       
          {   
            _id: ObjectId("5aacca76da666f0038139694"),
            notes: [],
            state: "GRANTED",
            type: "DOMESTIC",
            facultyId: 2,
            applicantId: 5,
            created: now,
            lastModified: now
          },
        ];
        const expected = [
          {   
            ticketId: "5aacca76da666f0038139694",
            notes: [],
            state: "GRANTED",
            type: "DOMESTIC",
            facultyId: 2,
            applicantId: 5,
            created: now,
            lastModified: now
          },           
      ];
        mockingoose.Ticket.toReturn(mockData, "find");
        function callback(err, data) {
          expect(data).toEqual(expected);
          done();
        }
        getTicketsBackend(getTicketRequest, callback);
      });

      it("returns TicketList grPC response with filter by facultyId", done => {
        let now = Math.round((new Date()).getTime()/1000);
        const getTicketRequest = {
          facultytId: 2
        }
        const mockData = [          
          {   
            _id: ObjectId("5aacca76da666f0038139694"),
            notes: [],
            state: "GRANTED",
            type: "DOMESTIC",
            facultyId: 2,
            applicantId: 5,
            created: now,
            lastModified: now
          },
          {
            _id: ObjectId("5ab0bb8362ad170044122ca1"),
            notes: [],
            state: "GRANTED",
            type: "DOMESTIC",
            facultyId: 2,
            applicantId: -1,
            created: now,
            lastModified: now
          }
        ];
        const expected = [
          {   
            ticketId: "5aacca76da666f0038139694",
            notes: [],
            state: "GRANTED",
            type: "DOMESTIC",
            facultyId: 2,
            applicantId: 5,
            created: now,
            lastModified: now
          },
          {
            ticketId: "5ab0bb8362ad170044122ca1",
            notes: [],
            state: "GRANTED",
            type: "DOMESTIC",
            facultyId: 2,
            applicantId: -1,
            created: now,
            lastModified: now
          }       
      ];
        mockingoose.Ticket.toReturn(mockData, "find");
        function callback(err, data) {
          expect(data).toEqual(expected);
          done();
        }
        getTicketsBackend(getTicketRequest, callback);
      });

      it("returns TicketList grPC response with filter by state", done => {
        let now = Math.round((new Date()).getTime()/1000);
        const getTicketRequest = {
          state: "GRANTED"
        }
        const mockData = [        
          {   
            _id: ObjectId("5aacca76da666f0038139694"),
            notes: [],
            state: "GRANTED",
            type: "DOMESTIC",
            facultyId: 2,
            applicantId: 5,
            created: now,
            lastModified: now
          },
          {
            _id: ObjectId("5ab0bb8362ad170044122ca1"),
            notes: [],
            state: "GRANTED",
            type: "DOMESTIC",
            facultyId: 2,
            applicantId: -1,
            created: now,
            lastModified: now
          }
        ];
        const expected = [
          {   
            ticketId: "5aacca76da666f0038139694",
            notes: [],
            state: "GRANTED",
            type: "DOMESTIC",
            facultyId: 2,
            applicantId: 5,
            created: now,
            lastModified: now
          },
          {
            ticketId: "5ab0bb8362ad170044122ca1",
            notes: [],
            state: "GRANTED",
            type: "DOMESTIC",
            facultyId: 2,
            applicantId: -1,
            created: now,
            lastModified: now
          }   
      ];
        mockingoose.Ticket.toReturn(mockData, "find");
        function callback(err, data) {
          expect(data).toEqual(expected);
          done();
        }
        getTicketsBackend(getTicketRequest, callback);
      });

      it("returns TicketList grPC response with filter by type", done => {
        let now = Math.round((new Date()).getTime()/1000);
        const getTicketRequest = {
          type: "INTERNATIONAL"
        }
        const mockData = [
          {
            _id: ObjectId("5aacc08313fc8b00371ae110"),
            notes: [],
            state: "INITIAL",
            type: "INTERNATIONAL",
            facultyId: 1,
            applicantId: -1,
            created: now,
            lastModified: now
          },           
          {   
            _id: ObjectId("5aacca76da666f0038139694"),
            notes: [],
            state: "GRANTED",
            type: "INTERNATIONAL",
            facultyId: 2,
            applicantId: 5,
            created: now,
            lastModified: now
          },
        ];
        const expected = [
          {
            ticketId: "5aacc08313fc8b00371ae110",
            notes: [],
            state: "INITIAL",
            type: "INTERNATIONAL",
            facultyId: 1,
            applicantId: -1,
            created: now,
            lastModified: now
          },           
          {   
            ticketId: "5aacca76da666f0038139694",
            notes: [],
            state: "GRANTED",
            type: "INTERNATIONAL",
            facultyId: 2,
            applicantId: 5,
            created: now,
            lastModified: now
          },
      ];
        mockingoose.Ticket.toReturn(mockData, "find");
        function callback(err, data) {
          expect(data).toEqual(expected);
          done();
        }
        getTicketsBackend(getTicketRequest, callback);
      });

      it("returns TicketList grPC response with all tickets", done => {
        let now = Math.round((new Date()).getTime()/1000);
        const getTicketRequest = {
          facultytId: 2
        }
        const mockData = [
          {
            _id: ObjectId("5aacc08313fc8b00371ae110"),
            notes: [],
            state: "INITIAL",
            type: "DOMESTIC",
            facultyId: 1,
            applicantId: -1,
            created: now,
            lastModified: now
          },           
          {   
            _id: ObjectId("5aacca76da666f0038139694"),
            notes: [],
            state: "GRANTED",
            type: "DOMESTIC",
            facultyId: 2,
            applicantId: 5,
            created: now,
            lastModified: now
          },
          {
            _id: ObjectId("5ab0bb8362ad170044122ca1"),
            notes: [],
            state: "GRANTED",
            type: "DOMESTIC",
            facultyId: 2,
            applicantId: -1,
            created: now,
            lastModified: now
          }
        ];
        const expected = [
          {
            ticketId: "5aacc08313fc8b00371ae110",
            notes: [],
            state: "INITIAL",
            type: "DOMESTIC",
            facultyId: 1,
            applicantId: -1,
            created: now,
            lastModified: now
          },       
          {   
            ticketId: "5aacca76da666f0038139694",
            notes: [],
            state: "GRANTED",
            type: "DOMESTIC",
            facultyId: 2,
            applicantId: 5,
            created: now,
            lastModified: now
          },
          {
            ticketId: "5ab0bb8362ad170044122ca1",
            notes: [],
            state: "GRANTED",
            type: "DOMESTIC",
            facultyId: 2,
            applicantId: -1,
            created: now,
            lastModified: now
          }       
      ];
        mockingoose.Ticket.toReturn(mockData, "find");
        function callback(err, data) {
          expect(data).toEqual(expected);
          done();
        }
        getTicketsBackend(getTicketRequest, callback);
      });
    });

    // mockingoose does not support insertMany

    // describe("createTicketBackend", () => {
    //   it("returns Ticket grPC response given valid request", done => {
    //     let now = Math.round((new Date()).getTime()/1000);
    //     const createTicketRequest = {
    //         facultyId: "2",
    //         allottedTickets: 1
    //     };
    //     const mockData = {   
    //       _id: ObjectId("5aacca76da666f0038139694"),
    //       notes: [],
    //       state: "INITIAL",
    //       applicantId: "",
    //       created: now,
    //       lastModified: now,
    //       ...createTicketRequest
    //     };
    //     const expected = [{
    //       ticketId: "5aacca76da666f0038139694",
    //       notes: [],
    //       state: "INITIAL",
    //       applicantId: "",
    //       created: now,
    //       lastModified: now,
    //       ...createTicketRequest
    //     }]
    //     mockingoose.Ticket.toReturn(mockData, "insertMany");
    //     function callback(err, data) {
    //       expect(data).toEqual(expected);
    //       done();
    //     }
    //     createTicketBackend(createTicketRequest, callback);
    //   });

    //   // it("errors because of malformed request", () => {

    //   // });
    // });

    describe("updateTicketBackend", () => {
      it("returns Ticket grPC response given valid request", done => {
        let now = Math.round((new Date()).getTime()/1000);
        const updateTicketRequest = {
          ticketId: "5aacca76da666f0038139694",
          state: "GRANTED" 
        };
        const mockData = {   
          _id: ObjectId("5aacca76da666f0038139694"),
          notes: [],
          state: updateTicketRequest.state,
          facultyId: 2,
          applicantId: -1,
          created: now,
          lastModified: now
        };
        const expected = {   
          ticketId: "5aacca76da666f0038139694",
          notes: [],
          state: updateTicketRequest.state,
          facultyId: 2,
          applicantId: -1,
          created: now,
          lastModified: now
        };
        mockingoose.Ticket.toReturn(mockData, "findOneAndUpdate");
        function callback(err, data) {
          expect(data).toEqual(expected);
          done();
        }
        updateTicketBackend(updateTicketRequest, callback);
      });

      // it("errors because of malformed request", () => {

      // });
    });

    describe("addNoteBackend", () => {
      it("returns Ticket grPC response given valid request", done => {
        let now = Math.round((new Date()).getTime()/1000);
        let addNoteRequest = {
          ticketId: "5aacca76da666f0038139694",
          text: 'test note'
        };
        const noteMockData = {
            _id:  ObjectId("5ab0ae54f55a5d004117826c"),
            text: addNoteRequest.text,
            resolved: false,
            created: now,
            lastModified: now
        }
        const ticketMockData = {   
          _id: ObjectId("5aacca76da666f0038139694"),
          notes: [new note({
            _id:  ObjectId("5ab0ae54f55a5d004117826c"),
            text: addNoteRequest.text,
            resolved: false,
            created: now,
            lastModified: now
          })],
          state: addNoteRequest.state,
          type: "DOMESTIC",
          facultyId: 2,
          applicantId: -1,
          created: now,
          lastModified: now
        };
        const expected = {   
          ticketId: "5aacca76da666f0038139694",
          notes: [{
            noteId: "5ab0ae54f55a5d004117826c",
            text: "test note",
            resolved: false,
            created: now,
            lastModified: now
          }],
          state: addNoteRequest.state,
          type: "DOMESTIC",
          facultyId: 2,
          applicantId: -1,
          created: now,
          lastModified: now
        };
        mockingoose.Ticket.toReturn(ticketMockData, "findOneAndUpdate");
        mockingoose.Note.toReturn(noteMockData, "save");
        function callback(err, data) {
          expect(data).toEqual(expected);
          done();
        }
        addNoteBackend(addNoteRequest, callback);
      });

      // it("errors because of malformed request", () => {

      // });
    });

    describe("updateNoteBackend", () => {
      it("returns Note grPC response given valid request", done => {
        let now = Math.round((new Date()).getTime()/1000);
        const updateNoteRequest = {
          ticketId: "5aacca76da666f0038139694",
          noteId: "5ab0ae54f55a5d004117826c",
          resolved: true
        }
        const mockData = {
            _id:  ObjectId("5ab0ae54f55a5d004117826c"),
            text: "note test",
            resolved: true,
            created: now,
            lastModified: now
        }
        const expected = {
          noteId:  "5ab0ae54f55a5d004117826c",
          text: "note test",
          resolved: true,
          created: now,
          lastModified: now
        };
        mockingoose.Note.toReturn(mockData, "findOneAndUpdate");
        function callback(err, data) {
          expect(data).toEqual(expected);
          done();
        }
        updateNoteBackend(updateNoteRequest, callback);
      });

      // it("errors because of malformed request", () => {

      // });
    });

  });

  
});
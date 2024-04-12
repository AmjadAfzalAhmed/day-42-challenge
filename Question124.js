"use strict";
const newObj = {
    name: "Amjad",
    rollNo: 181989,
    course: "GIAIC",
    funcCall: function () {
        console.log(`\nI have been enrolled for I.T course at ${this.course}.`);
    }
};
newObj.funcCall();

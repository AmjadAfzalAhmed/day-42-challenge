"use strict";
const newObj1 = {
    name: "Amjad",
    rollNo: 181989,
    course: "GIAIC",
    funcCall: function () {
        console.log(`\nI have been enrolled for I.T course at ${this.course} and my roll no is: ${this.rollNo}.`);
    }
};
newObj1.funcCall();

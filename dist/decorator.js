"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.classDescriptor = classDescriptor;
exports.propDescription = propDescription;
exports.printObj = printObj;
exports.paramDescription = paramDescription;
function classDescriptor(description) {
    return (target) => {
        target.prototype.$classDescription = description;
    };
}
function propDescription(description) {
    return (target, propName) => {
        if (!target.$propDescriptions) {
            target.$propDescriptions = [];
        }
        target.$propDescriptions.push({
            propName,
            description,
        });
    };
}
function printObj(obj) {
    console.log(obj.$classDescription);
    console.log(obj.$propDescriptions);
}
function paramDescription(target, fnName, index) {
    console.log(target, fnName, index);
}
//# sourceMappingURL=decorator.js.map
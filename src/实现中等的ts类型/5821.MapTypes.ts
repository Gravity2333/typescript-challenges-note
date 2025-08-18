export {};
// Implement MapTypes<T, R> which will transform types in object T to different types defined by type R which has the following structure

// type StringToNumber = {
//   mapFrom: string; // value of key which value is string
//   mapTo: number; // will be transformed for number
// }
// Examples:
// type StringToNumber = { mapFrom: string; mapTo: number;}
// MapTypes<{iWillBeANumberOneDay: string}, StringToNumber> // gives { iWillBeANumberOneDay: number; }
// Be aware that user can provide a union of types:

// type StringToNumber = { mapFrom: string; mapTo: number;}
// type StringToDate = { mapFrom: string; mapTo: Date;}
// MapTypes<{iWillBeNumberOrDate: string}, StringToDate | StringToNumber> // gives { iWillBeNumberOrDate: number | Date; }
// If the type doesn't exist in our map, leave it as it was:

// type StringToNumber = { mapFrom: string; mapTo: number;}
// MapTypes<{iWillBeANumberOneDay: string, iWillStayTheSame: Function}, StringToNumber> // // gives { iWillBeANumberOneDay: number, iWillStayTheSame: Function }

type MapTypes<Origin extends object, T extends { mapFrom: any; mapTo: any }> = {
  [k in keyof Origin]: T["mapFrom"] extends Origin[k] ? T["mapTo"] : Origin[k];
};
// type StringToNumber = { mapFrom: string; mapTo: number };
// type t = MapTypes<{ iWillBeANumberOneDay: string }, StringToNumber>; // gives { iWillBeANumberOneDay: number; }

type StringToNumber = { mapFrom: string; mapTo: number };
type StringToDate = { mapFrom: string; mapTo: Date };
type t = MapTypes<
  { iWillBeNumberOrDate: string },
  StringToDate | StringToNumber
>; // gives { iWillBeNumberOrDate: number | Date; }


type StringToNumber2 = { mapFrom: string; mapTo: number };
type t2 = MapTypes<{ iWillBeANumberOneDay: string, iWillStayTheSame: Function }, StringToNumber2>; // gives { iWillBeANumberOneDay: number; }

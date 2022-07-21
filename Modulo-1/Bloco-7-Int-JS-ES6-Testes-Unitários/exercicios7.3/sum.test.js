const { sum, myRemove, myFizzBuzz } = require("./sum.js");

describe("Teste para validar função sum", () => {
  test("Verificar se sum(4, 5) retorna 9", () => {
    expect(sum(4, 5)).toEqual(9);
  });
  test("Verificar se sum(0, 0) retorna 0", () => {
    expect(sum(0, 0)).toEqual(0);
  });
  test("Verificar se sum(4,'5') retorna erro", () => {
    expect(() => sum(4, "5")).toThrow(); //Quando retornar erro, criar arrow function entre expect e função.
  });
});

describe("Teste para verificar se item está sendo removido do array", () => {
  test("Verificar se myRemove retorna ([1,2,4,5], 3)", () => {
    expect(myRemove([1, 2, 3, 4], 3)).toEqual([1, 2, 4]); //usar toEqual para array
  });
  test("Verificar se myRemove não retorna [1, 2, 3, 4]", () => {
    expect(myRemove([1, 2, 3, 4], 3)).not.toEqual([1, 2, 3, 4]);
  });
  test("Verifique se a chamada myRemove([1, 2, 3, 4], 5) retorna o array esperado", () => {
    expect(myRemove([1, 2, 3, 4], 5)).toEqual([1, 2, 3, 4]);
  });
});

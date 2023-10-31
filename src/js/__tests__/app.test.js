import displayTypesOfAttacks from "../app.js";

test("Testing the displayTypesOfAttacks function with different kind of attack", () => {
  const character = {
    name: "Лучник",
    type: "Bowman",
    health: 50,
    level: 3,
    attack: 40,
    defence: 10,
    special: [
      {
        id: 8,
        name: "Двойной выстрел",
        icon: "http://...",
        description: "Двойной выстрел наносит двойной урон",
      },
      {
        id: 9,
        name: "Нокаутирующий удар",
        icon: "http://...",
      },
    ],
  };

  const expectedResult = [
    {
      id: 8,
      name: "Двойной выстрел",
      description: "Двойной выстрел наносит двойной урон",
      icon: "http://...",
    },

    {
      id: 9,
      name: "Нокаутирующий удар",
      description: "Описание недоступно",
      icon: "http://...",
    },
  ];

  expect(displayTypesOfAttacks(character)).toEqual(expectedResult);
});

test("Testing the displayTypesOfAttacks function with invalid value of argument", () => {
  const character = {
    name: "Лучник",
    type: "Bowman",
  };

  expect(() => displayTypesOfAttacks(character)).toThrow("Данные не переданы");
});

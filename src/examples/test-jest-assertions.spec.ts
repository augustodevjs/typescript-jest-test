describe('Primitive values', () => {
  it('should test jest assertions', () => {
    const number = 10;

    expect(number).toBe(10);
    expect(number).toBeLessThan(11);
  });
});

describe('Objects', () => {
  it('should test jest assertions', () => {
    const person = {
      name: 'Luiz',
      age: 30,
    };

    const anotherPerson = {
      ...person,
    };

    expect(person).toEqual(anotherPerson);
    expect(person).toHaveProperty('age');
  });
});

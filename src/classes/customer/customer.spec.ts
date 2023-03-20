import { IndividualCustomer, EnterpriseCustomer } from './customer';

const createIndividualCustomer = (
  firstName: string,
  lastName: string,
  cpf: string,
): IndividualCustomer => {
  return new IndividualCustomer(firstName, lastName, cpf);
};

const createEnterpriseCustomerE = (
  name: string,
  cnpj: string,
): EnterpriseCustomer => {
  return new EnterpriseCustomer(name, cnpj);
};

afterEach(() => jest.clearAllMocks());

describe('createIndividualCustomer', () => {
  it('should have properties firstName, lastName and cpf', () => {
    const sut = createIndividualCustomer('Augusto', 'Firmino', '10923912');

    expect(sut).toHaveProperty('firstName', 'Augusto');
    expect(sut).toHaveProperty('lastName', 'Firmino');
    expect(sut).toHaveProperty('cpf', '10923912');
  });

  it('shoud have methods getName and getIDN', () => {
    const sut = createIndividualCustomer('Augusto', 'Firmino', '10923912');

    expect(sut.getName()).toBe('Augusto Firmino');
    expect(sut.getIDN()).toBe('10923912');
  });
});

describe('enterpriseCustomer', () => {
  it('should have properties name and cnpj', () => {
    const sut = createEnterpriseCustomerE('NEO', '9182391829');

    expect(sut).toHaveProperty('name', 'NEO');
    expect(sut).toHaveProperty('cnpj', '9182391829');
  });

  it('shoud have methods getName and getIDN', () => {
    const sut = createEnterpriseCustomerE('NEO', '9182391829');

    expect(sut.getName()).toBe('NEO');
    expect(sut.getIDN()).toBe('9182391829');
  });
});

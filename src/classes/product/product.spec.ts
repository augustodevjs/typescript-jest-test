import { Product } from './product';

const createSut = (name: string, price: number): Product => {
  return new Product(name, price);
};

describe('Product', () => {
  afterEach(() => jest.clearAllMocks());

  it('should have property name and price', () => {
    const sut = createSut('Camiseta', 50);

    expect(sut).toHaveProperty('name', 'Camiseta');
    expect(sut).toHaveProperty('price', 50);
  });
});

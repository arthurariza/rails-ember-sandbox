require 'rails_helper'

RSpec.describe Product, type: :model do
  context 'when creating' do
    let(:product) { Product.new(name: 'Product', price: 1, qty_in_stock: 2, description: 'Product') }

    it 'is valid with valid attributes' do
      expect(product).to be_valid
    end

    it 'is not valid without a name' do
      product.name = nil
      expect(product).to_not be_valid
    end

    it 'is not valid without a price' do
      product.price = nil
      expect(product).to_not be_valid
    end
  end
end

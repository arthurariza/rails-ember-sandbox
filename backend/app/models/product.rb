class Product < ApplicationRecord
  validates :name, :price, :qty_in_stock, presence: true
  validates :description, length: { maximum: 180 }
end

class CreateProducts < ActiveRecord::Migration[6.1]
  def change
    create_table :products do |t|
      t.string :name, null: false
      t.integer :price, null: false
      t.integer :qty_in_stock, default: 0
      t.text :description, limit: 180
      t.timestamps
    end
  end
end

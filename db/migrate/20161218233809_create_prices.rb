class CreatePrices < ActiveRecord::Migration
  def change
    create_table :prices do |t|

      t.text :month
      t.text :year
      t.integer :mean_b2
      t.integer :mean_b3
      t.integer :mean_b4
      t.integer :suburb_id # Foreign key
      t.timestamps null: false
    end
  end
end

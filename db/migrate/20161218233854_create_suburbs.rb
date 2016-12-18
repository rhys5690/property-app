class CreateSuburbs < ActiveRecord::Migration
  def change
    create_table :suburbs do |t|

      t.text :name
      t.integer :postcode
      t.float :latitude
      t.float :longitude
      t.timestamps null: false
    end
  end
end

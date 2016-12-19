class CreateUsers < ActiveRecord::Migration
  def change
    create_table :users do |t|

      t.text :email
      t.text :first_name
      t.text :last_name
      t.text :gender
      t.text :income
      t.text :mobile_number
      t.timestamps null: false
    end
  end
end

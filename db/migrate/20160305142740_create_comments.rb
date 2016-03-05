class CreateComments < ActiveRecord::Migration
  def change
    create_table :comments do |t|
      t.string :fname
      t.string :lname
      t.string :email
      t.text :message
      t.references :post, index: true, foreign_key: true

      t.timestamps null: false
    end
  end
end

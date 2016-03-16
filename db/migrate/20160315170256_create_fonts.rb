class CreateFonts < ActiveRecord::Migration
  def change
    create_table :fonts do |t|
      t.string :name
      t.string :font_class

      t.timestamps null: false
    end
  end
end

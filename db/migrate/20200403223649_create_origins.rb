class CreateOrigins < ActiveRecord::Migration[5.2]
  def change
    create_table :origins do |t|
      t.string :address
      t.belongs_to :job, index: true
      t.string :house_type_from
      t.string :apt_number_origin

      t.timestamps
    end
  end
end

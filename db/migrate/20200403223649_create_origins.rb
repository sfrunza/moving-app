class CreateOrigins < ActiveRecord::Migration[5.2]
  def change
    create_table :origins do |t|
      t.string :address
      t.string :add_address
      t.string :floor
      t.string :apt_number
      t.belongs_to :job, index: true

      t.timestamps
    end
  end
end

class CreateDestinations < ActiveRecord::Migration[5.2]
  def change
    create_table :destinations do |t|
      t.string :address
      t.belongs_to :job, index: true
      t.string :house_type_to
      t.string :apt_number_destination

      t.timestamps
    end
  end
end

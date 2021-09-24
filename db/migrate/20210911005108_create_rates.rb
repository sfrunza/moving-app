class CreateRates < ActiveRecord::Migration[5.2]
  def change
    create_table :rates do |t|
      t.string :date
      t.string :rates, array: true, default: []

      t.timestamps
    end
  end
end

class AddEmployeeToUser < ActiveRecord::Migration[5.2]
  def change
    add_column :users, :first_name, :string
    add_column :users, :last_name, :string
    add_column :users, :role, :string
    add_column :users, :phone, :string
    add_column :users, :add_phone, :string
    add_column :users, :customer, :boolean, null: false, default: false
    add_column :users, :active, :boolean, null: false, default: false
  end
end

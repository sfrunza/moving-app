class CreateJoinTableUsersCustomers < ActiveRecord::Migration[5.2]
  def change
    create_join_table :users, :customers do |t|
      t.index [:user_id, :customer_id]
      t.index [:customer_id, :user_id]
    end
  end
end

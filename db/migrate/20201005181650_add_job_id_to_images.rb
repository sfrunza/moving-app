class AddJobIdToImages < ActiveRecord::Migration[5.2]
  def change
    add_column :images, :job_id, :integer
  end
end

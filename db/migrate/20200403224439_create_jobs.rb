class CreateJobs < ActiveRecord::Migration[5.2]
  def change
    create_table :jobs do |t|
      t.string :pick_up_date
      t.string :delivery_date
      t.string :status
      t.integer :job_time


      t.timestamps
    end
  end
end

class CreateJobs < ActiveRecord::Migration[5.2]
  def change
    create_table :jobs do |t|
      t.string :pick_up_date
      t.string :delivery_date
      t.string :job_type
      t.string :start_time
      t.string :job_status
      t.string :job_size
      t.integer :crew_size
      t.integer :job_rate
      t.string :estimated_time
      t.string :travel_time
      t.string :estimated_quote
      t.text :additional_info
      t.float :job_duration
      t.float :total_amount
      t.belongs_to :user, index: true


      t.timestamps
    end
  end
end

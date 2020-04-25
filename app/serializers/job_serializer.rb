class JobSerializer < ActiveModel::Serializer
  attributes :id, :pick_up_date, :delivery_date, :job_time, :status, :customer, :origin, :destination, :move_size, :move_type
end

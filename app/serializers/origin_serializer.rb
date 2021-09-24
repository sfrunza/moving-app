class OriginSerializer < ActiveModel::Serializer
  attributes :id, :job_id, :address, :city, :state, :zip, :apt_number, :floor

end

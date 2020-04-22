class CustomerSerializer < ActiveModel::Serializer
  attributes :id, :job_id, :first_name, :last_name, :email, :phone
end

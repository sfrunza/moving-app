class CustomerSerializer < ActiveModel::Serializer
  attributes :id, :first_name, :last_name, :email, :phone, :add_phone
  has_many :jobs
end

class UserSerializer < ActiveModel::Serializer
  attributes :id, :first_name, :last_name, :email, :phone, :admin, :customer, :add_phone, :role
  has_many :jobs
end

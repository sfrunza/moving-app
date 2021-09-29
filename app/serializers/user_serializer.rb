class UserSerializer < ActiveModel::Serializer
  attributes :id, :first_name, :last_name, :email, :phone, :admin, :rate, :ssn, :role, :active, :address
  has_many :jobs
end

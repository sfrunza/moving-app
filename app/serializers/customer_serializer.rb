class CustomerSerializer < ActiveModel::Serializer
  attributes :id, :first_name, :last_name, :email, :phone, :add_phone
  has_many :jobs do
    object.jobs.order(created_at: :desc)
  end
end

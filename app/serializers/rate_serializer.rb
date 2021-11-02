class RateSerializer < ActiveModel::Serializer
  attributes :id, :date, :rates, :rate_type
end

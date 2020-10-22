require 'carrierwave/orm/activerecord'

class ImageSerializer < ActiveModel::Serializer
  attributes :id, :photo, :image, :job_id
end

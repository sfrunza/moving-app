require 'carrierwave/orm/activerecord'

class ImageSerializer < ActiveModel::Serializer
  attributes :id, :photo, :image
end

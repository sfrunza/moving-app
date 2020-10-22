require 'carrierwave/orm/activerecord'

class Image < ActiveRecord::Base
    mount_uploader :photo, PhotoUploader
    belongs_to :job, :optional => true
end

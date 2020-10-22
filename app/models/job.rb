class Job < ApplicationRecord
  belongs_to :user
  has_one :origin
  has_one :destination
  has_many :images
end

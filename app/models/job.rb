class Job < ApplicationRecord
  belongs_to :user
  has_one :origin, dependent: :destroy
  has_one :destination, dependent: :destroy
  has_many :images, dependent: :destroy
end

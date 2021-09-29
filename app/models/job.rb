class Job < ApplicationRecord
  belongs_to :customer
  has_and_belongs_to_many :users
  accepts_nested_attributes_for :users
  has_one :origin, dependent: :destroy
  has_one :destination, dependent: :destroy
  has_many :images, dependent: :destroy
end

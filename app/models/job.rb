class Job < ApplicationRecord
  belongs_to :user
  has_one :origin
  has_one :destination
end

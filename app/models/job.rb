class Job < ApplicationRecord
  has_many :employees
  has_one :customer
  has_one :origin
  has_one :destination
end

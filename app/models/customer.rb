class Customer < ApplicationRecord
  has_many :jobs, dependent: :destroy
  has_many :users, through: :jobs
  has_many :origins, through: :jobs
  has_many :destinations, through: :jobs
  has_many :images, through: :jobs
end

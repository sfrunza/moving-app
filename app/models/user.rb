class User < ApplicationRecord
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :validatable, :timeoutable
  has_and_belongs_to_many :jobs
  has_many :customers, through: :jobs
  has_one :origins, through: :jobs
  has_one :destinations, through: :jobs
  has_many :images, through: :jobs
  validates :email, uniqueness: true
end

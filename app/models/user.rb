class User < ApplicationRecord
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :validatable, :timeoutable
  has_many :jobs
  has_many :origins, through: :jobs
  has_many :destinations, through: :jobs
  validates :email, uniqueness: true
end

class Employee < ApplicationRecord
  belongs_to :job, :optional => true
end

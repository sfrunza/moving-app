class Customer < ApplicationRecord
  belongs_to :job, :optional => true
end

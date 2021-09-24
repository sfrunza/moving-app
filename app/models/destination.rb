class Destination < ApplicationRecord
  belongs_to :job, :optional => true
end

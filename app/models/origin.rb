class Origin < ApplicationRecord
  belongs_to :job, :optional => true
end

class Bug < ApplicationRecord
    has_many :treatments, dependent: :destroy
end

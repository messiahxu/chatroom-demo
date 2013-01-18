class Message < ActiveRecord::Base
  attr_accessible :body, :messager

  validates :body, :messager, presence: true
end

class Comment < ActiveRecord::Base
  belongs_to :post

  ## add paperclip
  has_attached_file :image, styles: {thumb: '150x150#' }, default_url: '/images/user1.jpg'

  ## for image validation
  validates_attachment_content_type :image, content_type: /\Aimage\/.*\Z/

  ## validation for comment form

  validates :fname,:lname,:email,:message,presence: true


end

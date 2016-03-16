class Post < ActiveRecord::Base
  belongs_to :user
  belongs_to :font
  belongs_to :category
  has_many :comments

  ## Using for post image

  has_attached_file :image, styles: { large:'953x536#',medium: '300x300>', thumb: '100x100#' }, default_url: '/images/:style/missing.png'

  ## For image validation
  validates_attachment_content_type :image, content_type: /\Aimage\/.*\Z/
end

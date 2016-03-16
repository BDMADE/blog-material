# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

Role.create(name: 'admin')
Role.create(name: 'editor')
User.create(name: 'administrator',email: 'x@y.com',password: 'zw8h4t9s',role_id: '1')
## Some font icon class integrated
Font.create(name:'picture',font_class:'fa fa-picture-o')
Font.create(name:'video',font_class:'fa fa-video-camera')
Font.create(name:'music',font_class:'fa fa-music')
Font.create(name:'thumb tack',font_class:'fa fa-thumb-tack')
Font.create(name:'bicycle',font_class:'fa fa-bicycle')
Font.create(name:'book',font_class:'fa fa-book')
Font.create(name:'audio',font_class:'fa fa-file-audio-o')
Font.create(name:'heart',font_class:'fa fa-heart')
Font.create(name:'fighter-jet',font_class:'fa fa-fighter-jet')
Font.create(name:'education',font_class:'fa-graduation-cap')

## Some category

Category.create(name:'Fashion')
Category.create(name:'Food')
Category.create(name:'Travel')
Category.create(name:'Music')
Category.create(name:'Video')
Category.create(name:'Audio')
Category.create(name:'Entertainment')
Category.create(name:'Education')
Category.create(name:'News')
Category.create(name:'Other')

# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)
#
#
ActiveRecord::Base.transaction do
	User.create({username: "Annie", email:"Annie@HelloFellow.com", password: "password"})
	User.create({username: "Bob", email:"Bob@HelloFellow.com", password: "password"})
	User.create({username: "Catherine", email:"Cat@HelloFellow.com", password: "password"})
	User.create({username: "Eugene", email:"Eugene@HelloFellow.com", password: "password"})
	User.create({username: "Fred", email:"Fred@HelloFellow.com", password: "password"})
	User.create({username: "George", email:"G@HelloFellow.com", password: "password"})
	User.create({username: "Hank", email:"H@HelloFellow.com", password: "password"})
	User.create({username: "Iris", email:"I@HelloFellow.com", password: "password"})
	User.create({username: "Jack", email:"J@HelloFellow.com", password: "password"})
	User.create({username: "Kobe", email:"K@HelloFellow.com", password: "password"})
	User.create({username: "Lee", email:"L@HelloFellow.com", password: "password"})
	User.create({username: "Mark", email:"M@HelloFellow.com", password: "password"})
	User.create({username: "Neal", email:"N@HelloFellow.com", password: "password"})
	User.create({username: "Omar", email:"O@HelloFellow.com", password: "password"})
	User.create({username: "Pablo", email:"P@HelloFellow.com", password: "password"})
	User.create({username: "Qatar", email:"Q@HelloFellow.com", password: "password"})
	User.create({username: "Rick", email:"R@HelloFellow.com", password: "password"})
	User.create({username: "Steph", email:"S@HelloFellow.com", password: "password"})
	User.create({username: "Tina", email:"T@HelloFellow.com", password: "password"})
	User.create({username: "Uganda", email:"U@HelloFellow.com", password: "password"})
	User.create({username: "Victor", email:"V@HelloFellow.com", password: "password"})
	User.create({username: "Wen", email:"W@HelloFellow.com", password: "password"})
	User.create({username: "Xiao", email:"X@HelloFellow.com", password: "password"})
	User.create({username: "YoYo", email:"Y@HelloFellow.com", password: "password"})
	User.create({username: "Zee", email:"Z@HelloFellow.com", password: "password"})
end
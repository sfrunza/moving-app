# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
  User.create!(email: 'frunza.sergiu3@gmail.com', password: '111111', password_confirmation: '111111', admin: true, first_name: 'Sergiu', last_name: 'Frunza', customer: false)
  User.create!(email: 'arturyanush@gmail.com', password: '000000', password_confirmation: '000000', admin: true, first_name: 'Artur', last_name: 'Yanush', customer: false,)
  User.create!(email: 'mover@mail.com', password: '111111', password_confirmation: '111111', first_name: 'Alex', last_name: 'Tunik', customer: false)

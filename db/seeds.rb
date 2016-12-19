# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

Suburb.destroy_all
Price.destroy_all

s1 = Suburb.create( {
  :name => "Balmain",
  :postcode => "2041",
  :latitude => "33.8589° S",
  :longitude => "151.1791° E"

} )

p1 = Price.create( {
  :month => "D250",
  :year => "Sydney",
  :mean_b2 => 1375000,
  :mean_b3 => 1770000
  :mean_b4 => 2350000
  :suburb_id => s1.id
} )

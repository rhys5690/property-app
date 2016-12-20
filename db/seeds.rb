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
  :month => "Dec",
  :year => "2016",
  :mean_b2 => 1375000,
  :mean_b3 => 1770000,
  :mean_b4 => 2350000,
  :suburb_id => s1.id
} )

p2 = Price.create( {
  :month => "Nov",
  :year => "2016",
  :mean_b2 => 1375000,
  :mean_b3 => 1764000,
  :mean_b4 => 2350000,
  :suburb_id => s1.id
} )

p3 = Price.create( {
  :month => "Oct",
  :year => "2016",
  :mean_b2 => 1375000,
  :mean_b3 => 1760000,
  :mean_b4 => 2350000,
  :suburb_id => s1.id
} )

p4 = Price.create( {
  :month => "Sep",
  :year => "2016",
  :mean_b2 => 1375000,
  :mean_b3 => 1755000,
  :mean_b4 => 2350000,
  :suburb_id => s1.id
} )


s2 = Suburb.create( {
  :name => "Leichhardt",
  :postcode => "2040",
  :latitude => "33.8589° S",
  :longitude => "151.1791° E"

} )

p5 = Price.create( {
  :month => "Dec",
  :year => "2016",
  :mean_b2 => 1190000,
  :mean_b3 => 1499980,
  :mean_b4 => 1625000,
  :suburb_id => s2.id
} )
p6 = Price.create( {
  :month => "Nov",
  :year => "2016",
  :mean_b2 => 1375000,
  :mean_b3 => 1326000,
  :mean_b4 => 2350000,
  :suburb_id => s2.id
} )
p7 = Price.create( {
  :month => "Sep",
  :year => "2016",
  :mean_b2 => 1375000,
  :mean_b3 => 1316500,
  :mean_b4 => 2350000,
  :suburb_id => s2.id
} )

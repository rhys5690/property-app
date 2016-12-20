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
  :latitude => -21.232234,
  :longitude => 151.224321

} )

p1_1 = Price.create( {
  :month => "Dec",
  :year => "2016",
  :mean_b2 => 1375000,
  :mean_b3 => 1770000,
  :mean_b4 => 2350000,
  :suburb_id => s1.id
} )

p1_2 = Price.create( {
  :month => "Nov",
  :year => "2016",
  :mean_b3 => 1764000,
  :suburb_id => s1.id
} )

p1_3 = Price.create( {
  :month => "Oct",
  :year => "2016",
  :mean_b3 => 1760000,
  :suburb_id => s1.id
} )

p1_4 = Price.create( {
  :month => "Sep",
  :year => "2016",
  :mean_b3 => 1755000,
  :suburb_id => s1.id
} )


s2 = Suburb.create( {
  :name => "Leichhardt",
  :postcode => "2040",
  :latitude => 12.32123,
  :longitude => 12.32123

} )

p2_1 = Price.create( {
  :month => "Dec",
  :year => "2016",
  :mean_b3 => 1499980,
  :suburb_id => s2.id
} )
p2_2 = Price.create( {
  :month => "Nov",
  :year => "2016",
  :mean_b3 => 1326000,
  :suburb_id => s2.id
} )
p2_3 = Price.create( {
  :month => "Sep",
  :year => "2016",
  :mean_b3 => 1316500,
  :suburb_id => s2.id
} )

s3 = Suburb.create( {
  :name => "something",
  :postcode => "2041",
  :latitude => -21.232234,
  :longitude => 151.224321

} )

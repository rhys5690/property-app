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
  :mean_b2 => 1375000,
  :mean_b3 => 1770000,
  :mean_b4 => 2350000,
  :suburb_id => s2.id
} )

p2_2 = Price.create( {
  :month => "Nov",
  :year => "2016",
  :mean_b3 => 1764000,
  :suburb_id => s2.id
} )

p2_3 = Price.create( {
  :month => "Oct",
  :year => "2016",
  :mean_b3 => 1760000,
  :suburb_id => s2.id
} )

p2_4 = Price.create( {
  :month => "Sep",
  :year => "2016",
  :mean_b3 => 1755000,
  :suburb_id => s2.id
} )

s3 = Suburb.create( {
  :name => "Oatley",
  :postcode => "2223",
  :latitude => -21.232234,
  :longitude => 151.224321
} )
p3_1 = Price.create( {
  :month => "Dec",
  :year => "2016",
  :mean_b3 => 1280000,
  :mean_b4 => 1692000,
  :suburb_id => s3.id
} )

p3_2 = Price.create( {
  :month => "Nov",
  :year => "2016",
  :mean_b3 => 1577500,
  :suburb_id => s3.id
} )

p3_3 = Price.create( {
  :month => "Oct",
  :year => "2016",
  :mean_b3 => 1535000,
  :suburb_id => s3.id
} )

p3_4 = Price.create( {
  :month => "Sep",
  :year => "2016",
  :mean_b3 => 1500000,
  :suburb_id => s3.id
} )


s4 = Suburb.create( {
  :name => "Cronulla",
  :postcode => "2230",
  :latitude => -21.232234,
  :longitude => 151.224321
} )
p4_1 = Price.create( {
  :month => "Dec",
  :year => "2016",
  :mean_b3 => 1540000,
  :mean_b4 => 2000000,
  :suburb_id => s4.id
} )

p4_2 = Price.create( {
  :month => "Nov",
  :year => "2016",
  :mean_b3 => 1925000,
  :suburb_id => s4.id
} )

p4_3 = Price.create( {
  :month => "Oct",
  :year => "2016",
  :mean_b3 => 1950000,
  :suburb_id => s1.id
} )

p4_4 = Price.create( {
  :month => "Sep",
  :year => "2016",
  :mean_b3 => 1955000,
  :suburb_id => s4.id
} )


s5 = Suburb.create( {
  :name => "Redfern",
  :postcode => "2016",
  :latitude => -21.232234,
  :longitude => 151.224321
} )
p5_1 = Price.create( {
  :month => "Dec",
  :year => "2016",
  :mean_b2 => 1170000,
  :mean_b3 => 1500000,
  :mean_b4 => 2360000,
  :suburb_id => s5.id
} )

p5_2 = Price.create( {
  :month => "Nov",
  :year => "2016",
  :mean_b3 => 1395000,
  :suburb_id => s5.id
} )

p5_3 = Price.create( {
  :month => "Oct",
  :year => "2016",
  :mean_b3 => 1357500,
  :suburb_id => s5.id
} )

p5_4 = Price.create( {
  :month => "Sep",
  :year => "2016",
  :mean_b3 => 1365000,
  :suburb_id => s5.id
} )


s6 = Suburb.create( {
  :name => "Rozelle",
  :postcode => "2039",
  :latitude => -21.232234,
  :longitude => 151.224321
} )
p6_1 = Price.create( {
  :month => "Dec",
  :year => "2016",
  :mean_b2 => 1292500,
  :mean_b3 => 1650000,
  :mean_b4 => 2070000,
  :suburb_id => s6.id
} )

p6_2 = Price.create( {
  :month => "Nov",
  :year => "2016",
  :mean_b3 => 1572500,
  :suburb_id => s6.id
} )

p6_3 = Price.create( {
  :month => "Oct",
  :year => "2016",
  :mean_b3 => 1550000,
  :suburb_id => s6.id
} )

p6_4 = Price.create( {
  :month => "Sep",
  :year => "2016",
  :mean_b3 => 1485000,
  :suburb_id => s6.id
} )


s7 = Suburb.create( {
  :name => "Bankstown",
  :postcode => "2200",
  :latitude => -21.232234,
  :longitude => 151.224321
} )
p7_1 = Price.create( {
  :month => "Dec",
  :year => "2016",
  :mean_b2 => 815000,
  :mean_b3 => 8850000,
  :mean_b4 => 9925000,
  :suburb_id => s7.id
} )

p7_2 = Price.create( {
  :month => "Nov",
  :year => "2016",
  :mean_b3 => 915000,
  :suburb_id => s7.id
} )

p7_3 = Price.create( {
  :month => "Oct",
  :year => "2016",
  :mean_b3 => 900000,
  :suburb_id => s7.id
} )

p7_4 = Price.create( {
  :month => "Sep",
  :year => "2016",
  :mean_b3 => 900000,
  :suburb_id => s7.id
} )


s8 = Suburb.create( {
  :name => "Castle Hill",
  :postcode => "2154",
  :latitude => -21.232234,
  :longitude => 151.224321
} )
p8_1 = Price.create( {
  :month => "Dec",
  :year => "2016",
  :mean_b3 => 1151000,
  :mean_b4 => 1365000,
  :suburb_id => s8.id
} )

p8_2 = Price.create( {
  :month => "Nov",
  :year => "2016",
  :mean_b3 => 1387000,
  :suburb_id => s8.id
} )

p8_3 = Price.create( {
  :month => "Oct",
  :year => "2016",
  :mean_b3 => 1372500,
  :suburb_id => s8.id
} )

p8_4 = Price.create( {
  :month => "Sep",
  :year => "2016",
  :mean_b3 => 1360000,
  :suburb_id => s8.id
} )


s9 = Suburb.create( {
  :name => "Chatswood",
  :postcode => "2067",
  :latitude => -21.232234,
  :longitude => 151.224321

} )
p9_1 = Price.create( {
  :month => "Dec",
  :year => "2016",
  :mean_b3 => 2225220,
  :mean_b4 => 2315000,
  :suburb_id => s9.id
} )

p9_2 = Price.create( {
  :month => "Nov",
  :year => "2016",
  :mean_b3 => 2225230,
  :suburb_id => s9.id
} )

p9_3 = Price.create( {
  :month => "Oct",
  :year => "2016",
  :mean_b3 => 2150000,
  :suburb_id => s9.id
} )

p9_4 = Price.create( {
  :month => "Sep",
  :year => "2016",
  :mean_b3 => 2162500,
  :suburb_id => s9.id
} )


s10 = Suburb.create( {
  :name => "Liverpool",
  :postcode => "2170",
  :latitude => -21.232234,
  :longitude => 151.224321
} )
p10_1 = Price.create( {
  :month => "Dec",
  :year => "2016",
  :mean_b2 => 1350000,
  :mean_b3 => 680000,
  :mean_b4 => 755000,
  :suburb_id => s10.id
} )

p10_2 = Price.create( {
  :month => "Nov",
  :year => "2016",
  :mean_b3 => 738000,
  :suburb_id => s10.id
} )

p10_3 = Price.create( {
  :month => "Oct",
  :year => "2016",
  :mean_b3 => 730000,
  :suburb_id => s10.id
} )

p10_4 = Price.create( {
  :month => "Sep",
  :year => "2016",
  :mean_b3 => 724750,
  :suburb_id => s10.id
} )

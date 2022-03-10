# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
Bug.destroy_all
 
b1 = Bug.create(name:'covid', bug_type:'Virus')
b2 = Bug.create(name:'ecoli', bug_type:'Bacteria')

b1.treatments.create(name:'Pfizer', success_rate:70)
b1.treatments.create(name:'J&J', success_rate:70)
b2.treatments.create(name:'Penicillin', success_rate:50)
b2.treatments.create(name:'Sleep', success_rate:80)

puts "BUGS: #{Bug.all.count}"
puts "TREAMENTS: #{Treatment.all.count}"

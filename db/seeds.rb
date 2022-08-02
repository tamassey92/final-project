Idea.destroy_all
Comment.destroy_all
User.destroy_all

puts "Seeding Ideas..."
skydiving = Idea.create!(title: "Skydiving", image: "https://www.skydivecsc.com/hubfs/IMG_8804.jpg")
sharks = Idea.create!(title: "Swim with Sharks", image: "https://media.cntraveler.com/photos/555e12a2d9889c6c03abc6a9/master/pass/tiger-beach-bahamas-tiger-shark-tout.jpg")
festival = Idea.create!(title: "Go to a Music Festival", image: "https://image.jimcdn.com/app/cms/image/transf/dimension=1190x10000:format=jpg/path/sa6549607c78f5c11/image/i82f8384a1348ab84/version/1554202007/tomorrowland-best-summer-music-festivals-europe.jpg")
celebrity = Idea.create!(title: "Meet a Celebrity", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5a/Hollywood_Sign_%28Zuschnitt%29.jpg/1200px-Hollywood_Sign_%28Zuschnitt%29.jpg")
springs = Idea.create!(title: "Relax in Hot Springs", image: "https://cdn.5280.com/2017/06/Hot-Springs_Larry-Pierce-Steamboat-Ski-Resort.jpg")
redwoods = Idea.create!(title: "See the Redwoods", image: "https://olemahouse.com/wp-content/uploads/2020/04/California-Redwoods.jpg")


puts "Seeding Users..."
taylor = User.create!(username: "tamassey", password: "capitals")

puts "Seeding Comments..."
Comment.create!(description: "Go to KAABOO in San Diego!", user_id: taylor.id, idea_id: festival.id)
Comment.create!(description: "I've always wanted to go!", user_id: taylor.id, idea_id: skydiving.id)
if (MyData.find().count() === 0) {
    _.each(_.range(25), function(){
        MyData.insert({
            name: faker.name.findName(),
            email: faker.internet.email(),
            avatar: faker.image.avatar()
        });
    });
}

if (Posts.find().count() === 0) {
    _.each(_.range(25), function(){
        Posts.insert({
            name: faker.name.findName(),
            author: faker.name.findName(),
            date: faker.date.past(),
            description: faker.lorem.paragraph(),
            avatar: faker.image.avatar(),
            image: faker.image.image()
        });
    });
}
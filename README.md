# AS A GROUP PRE SATURDAY

1. create rails app
2. create react app
3. add third party libs (axios, react-router-dom, faker, pry etc)
gemfile
```ruby
group :development do
  gem "pry"
  gem "better_errors"
  gem "binding_of_caller"
  gem 'faker', :git => 'https://github.com/faker-ruby/faker.git', :branch => 'master'
end
```
  > RAILS: anytime you add to your gem file you need to run `bundle`
  > REACT: **in your client folder**
  ```
  $ yarn add axios
  $ yarn add react-router-dom@6
  ```

  4. create db and TEST!!!! 
  5. add to github see github stuff (you could start to split up tasks here)

  now we can think about BE/FE

  # BACKEND
  1. create models, and setup associations
  2. migrate
  3. !!!!TEST!!!! -> in console, or seeds.rb
  4. create controllers and routes
  5. !!Test!!! -/ rails/info/routes
  **could maybe split up work here ( push/pull to github )**\
  **or could stop here and go to frontend setup**
  6. start filling out controllers
  7. !!!test!!! in postman
  8. push github have everyone pull from github

  # FRONTEND
  1. react/router: Pages and Routing/Nav
  2. create stub out react components
  3. setup proxy in package json
  4. (data provider not needed)
  > you don't have to use a provider if you don't want to
  **stop here**
  

  # SATURDAY
  


  
  
  # GITHUB STUFF
  - add team members to github
  - clone once (see cloning instructions)
  

  
  ### Cloning
  ```
  // in week-x dir
  $ git clone <ssh-link> 
  $ cd project-name
  // install packages
  $ bundle
  $ rails db:create db:migrate db:seed
  $ rails s -p 3001
  
  //in another pane in terminal (cntr-d)
  $ cd client
  $ yarn
  $ yarn start
  ```



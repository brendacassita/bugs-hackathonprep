# 1. create RAILS app
- RAILS 
```
$ rails new project-name -d postgresql --api
$ cd project-name
$ git add .
$ git commit -m 'init'
$ rails db:create (creates db)
$ rails s -p 3001 - open in browser
```

- CREATE MODELS/CONTROLLERS
```
$ rails g model food name:string price:float
$ rails g model <thing><keys>(<foreign key>:belongs_to)
$ rails db:migrate (runs migrations folder)
$ rails console
$ rails g controller api/foods
```

food.rb - add:
has_many :food_types, dependent: destroy


- ADD TO GEMFILE
```ruby
group :development do
  gem "pry"
  gem "better_errors"
  gem "binding_of_caller"
  gem 'faker', :git => 'https://github.com/faker-ruby/faker.git', :branch => 'master'
end
```

run bundle


# 2. create REACT app
- REACT 
```
$ yarn create react-app client
$ cd client
$ yarn add axios
$ yarn add react-router-dom@6
```

add to:
Package.Json "proxy": 'http://localhost:3001'

Github:
```
$ git add .
$ git commit -m 'init commit'
$ git remote add origin <ssh-link>
$ git push origin main

// start react server
$ yarn start
$ 'ctrl c' to stop your terminal
```

# BACKEND
 models: rails g model <thing><keys>(<foreign key>:belongs_to)
  
```ruby
has_many: in food.rb
has_many :food_types , dependent: :destroy
end
```
second model
```ruby
belongs_to :bug
end
seeds file
Food.destroy_all 
f1= Food.create(name:'Pizza',stars: 5)
f2= Food.create(name:'Pasta',stars: 4.5)

f1.Food_types.create(name:'Italian',country:'Italy')
f2.Food_types.create(name:'Italian',country:'Italy')

puts"Foods: #{Food.all.size}"
puts"Food_type: #{Food.all.size}"
```

```ruby
routes.rb
Rails.application.routes.draw do
namespace :api do
  resources :foods do 
    resources :food_types
end
end
end
```

foods.controller.rb:
```ruby
before_action :set_food, only:[:show, :update, :destroy]

def index
    render json: Food.all
end

def show
    render json: @food
end

def create
    food = Food.new(food_params)
    if(food.save)
        render json: food
    else
        render json: {errors: food.errors.full_messages}, status: 422
    end
end

def update
    if(@food.update(food_params))
        render json: @food
    else
        render json: {errors: food.errors.full_messages}, status: 422
    end
end

def destroy
    render json: @food.destroy
end


private

def set_food
    @food = Food.find(params[:id])
end

def food_params
    params.require(:food).permit(:name, :stars)
end

end
```

```ruby
food_types_controller.rb:
before_action :set_food
before_action :set_food_type, only:[:show, :update, :destroy]

def index
    render json: @food.food_types
end

def show
    render json: @food_type
end

def create
    food_type = @food.food_types.new(food_type_params)
    if(food_type.save)
        render json: food_type
    else
        render json: {errors: food_type.errors.full_messages}, status: 422
    end
end

def update
    if(@food_type.update(food_type_params))
        render json: @food_type
    else
        render json: {errors: food_type.errors.full_messages}, status: 422
    end
end

def destroy
    render json: @food_type.destroy
end


private

def set_food
    @food = Food.find(params[:food_id])
end

def set_food_type
    @food_type = @food.food_types.find(params[:id])
end

def food_type_params
    params.require(:food_type).permit(:name, :country)
end

end
```

 #  !!Test!!!  localhost:3001/rails/info/routes

 # FRONTEND

 - react/router: Pages and Routing/Nav

- PAGES FOLDER: Home/About/Things/ThingForm/ThingShow
- COMPONENTS - Thing

index.js
```javascript
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './pages/Home';
import About from './pages/About';

<BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route index element={<Home />} />
        <Route path='bugs' element={<Bugs />} />
        <Route path='about' element={<About />} />
        <Route path='bugs/:id' element={<BugShow />} />
        <Route path='bugs/new' element={<BugForm />} />
        <Route path='bugs/:id/edit' element={<BugForm />} />
       
      </Route>
    </Routes>
  </BrowserRouter>,
```


basic page setup:
```javascript
import React from 'react'
const About = () =>{
return(
<div>
<h1>About</h1>
</div>
)
}
export default About
``` 
  
Create Nav bar App.js
```javascript
import { Link, Outlet } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <nav>
        <Link to='/'>Home</Link>{'- '}
        <Link to='/bugs'>Bugs</Link>{'- '}
        <Link to='/about'>About</Link>{'- '}
        <Link to='/hospital'>Hospital</Link>
      </nav>
      <Outlet />
    </div>
  );
}

# outlet matches whatever path is showing, if theres no address its the index or whatever path it is on
```

  # GITHUB STUFF
  - have team members clone once (see cloning instructions)
  - add team members to github
    - repo settings > collabators > add
  - team members need to confirm add in email.
  - everyone should be able to push and pull to github(be careful!)
### Pushing
  ```
  
  $ git add .
  $ git commit -m 'what you did'
  $ git pull origin master
  // here you merge any conflicts...
  // communicate with team about which changes to keep
  // if you did have a conflict you need to commit again
  $ git add .
  $ git commit - m'merged conflict'
  $ git push origin master
  // tell everyone on your team you pushed to master
  ```
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

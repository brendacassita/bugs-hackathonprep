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


- ADD TO GEMFILE
```ruby
group :development do
  gem "pry"
  gem "better_errors"
  gem "binding_of_caller"
  gem 'faker', :git => 'https://github.com/faker-ruby/faker.git', :branch => 'master'
end
```

- run bundle


# 2. create REACT app
- REACT 
```
$ yarn create react-app client
$ cd client
$ yarn add axios
$ yarn add react-router-dom@6
```

add to package.json:
```javascript
 "proxy": 'http://localhost:3001'
```

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
  
has_many in Bug.rb
```ruby
    has_many :treatments, dependent: :destroy
end
```
belongs_to in second model
```ruby
belongs_to :bug
end
```

seeds file
```ruby
Bug.destroy_all
 
b1 = Bug.create(name:'covid', bug_type:'Virus')
b2 = Bug.create(name:'ecoli', bug_type:'Bacteria')

b1.treatments.create(name:'Pfizer', success_rate:70)
b1.treatments.create(name:'J&J', success_rate:70)
b2.treatments.create(name:'Penicillin', success_rate:50)
b2.treatments.create(name:'Sleep', success_rate:80)

puts "BUGS: #{Bug.all.count}"
puts "TREATMENTS: #{Treatment.all.count}"
```
  

# Useful lib for fake data
gem 'faker', :git => 'https://github.com/faker-ruby/faker.git', :branch => 'main'  
```ruby
require "faker"

10.times do
  Page.create(
    title: Faker::Hacker.abbreviation,
    body: Faker::Hacker.say_something_smart,
    author: Faker::Name.name,
  )
end  
  
```


routes.rb
```ruby
Rails.application.routes.draw do
namespace :api do
   resources :bugs do
      resources :treatments
    end
  end
end
```

bugs_controller.rb:
```ruby
before_action :set_bug, only: [:update, :show, :destroy, :bugs_all]
  
  def index
    render json: Bug.all
  end

  def bugs_all
      render json: {bug: @bug, treatments: @bug.treatments}
  end


  def show
      render json: @bug
  end

  def create
    bug = Bug.new(bug_params)
    if(bug.save)
      render json: bug
    else
      render json: {error:bug.errors.full_messages}, status: 422
    end
  end

  def update
      if(@bug.update(bug_params))
          render json: @bug
      else
          render json: {error:@bug.errors.full_messages}, status: 422
      end
  end

  def destroy
      render json: @bug.destroy
  end

  private

  def set_bug
      @bug = Bug.find(params[:id])
  end

  def bug_params
    params.require(:bug).permit(:name,:bug_type)
  end
end
```

treatments_controller.rb  
```ruby
before_action :set_bug
  before_action :set_treatment, only:[:show, :update, :destroy]
  # give me all treaments of specific bug
  # get 'api/bugs/:bug_id/treatments''
  # let res = await axios.get('/api/bugs/1/treatments')
  def index
      render json:  @bug.treatments
  end

  # get on treatment of specific bug
  # get 'api/bugs/:bug_id/treatments/:id''
  # let res = await axios.get('/api/bugs/2/treatments/1')
  def show
      render json: @treatment
  end

  def create
    treatment = @bug.treatments.new(treatment_params)
    if(treatment.save)
      render json: treatment
    else
      render json: {errors: treatment.errors.full_messages}, status: 422
    end
  end

 
  def update
      if(@treatment.update(treatment_params))
        render json: @treatment
      else
        render json: {errors: @treatment.errors.full_messages}, status: 422
      end
  end

  def destroy
      render json: @treatment.destroy
  end

  private 
  def set_bug
      @bug = Bug.find(params[:bug_id])
  end

  def set_treatment
      @treatment = @bug.treatments.find(params[:id])
  end

  def treatment_params
    params.require(:treatment).permit(:success_rate, :name)
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

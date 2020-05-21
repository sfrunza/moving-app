namespace :start do
  desc 'Start dev server'
  task :development do
    exec 'heroku local -f Procfile.dev'
  end
end

desc 'Start development server'
task :start => 'start:development'

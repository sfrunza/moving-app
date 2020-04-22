# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


JOBS = [
  {
    pick_up_date: "04/10/2020",
    delivery_date: "05/10/2020",
    status: "confirmed",
    job_time: "360"
  },
  {
    pick_up_date: "04/10/2020",
    delivery_date: "05/10/2020",
    status: "confirmed",
    job_time: "360"
  },
  {
    pick_up_date: "04/10/2020",
    delivery_date: "05/10/2020",
    status: "confirmed",
    job_time: "360"
  },
  {
    pick_up_date: "04/10/2020",
    delivery_date: "05/10/2020",
    status: "confirmed",
    job_time: "360"
  },
  {
    pick_up_date: "04/10/2020",
    delivery_date: "05/10/2020",
    status: "confirmed",
    job_time: "360"
  },
  {
    pick_up_date: "04/10/2020",
    delivery_date: "05/10/2020",
    status: "confirmed",
    job_time: "360"
  },
  {
    pick_up_date: "04/10/2020",
    delivery_date: "05/10/2020",
    status: "confirmed",
    job_time: "360"
  },
  {
    pick_up_date: "04/10/2020",
    delivery_date: "05/10/2020",
    status: "confirmed",
    job_time: "360"
  },
  {
    pick_up_date: "04/10/2020",
    delivery_date: "05/10/2020",
    status: "confirmed",
    job_time: "360"
  },
  {
    pick_up_date: "04/10/2020",
    delivery_date: "05/10/2020",
    status: "confirmed",
    job_time: "360"
  },
  {
    pick_up_date: "04/10/2020",
    delivery_date: "05/10/2020",
    status: "confirmed",
    job_time: "360"
  },
  {
    pick_up_date: "04/10/2020",
    delivery_date: "05/10/2020",
    status: "confirmed",
    job_time: "360"
  }
]


  EMPLOYEES = [
    {
      first_name: "Ion",
      last_name: "Guzun",
      role: "driver"
    },
    {
      first_name: "Ion",
      last_name: "Guzun",
      role: "driver"
    },
    {
      first_name: "Ion",
      last_name: "Guzun",
      role: "driver"
    },
    {
      first_name: "Ion",
      last_name: "Guzun",
      role: "driver"
    },
    {
      first_name: "Ion",
      last_name: "Guzun",
      role: "driver"
    },
    {
      first_name: "Ion",
      last_name: "Guzun",
      role: "driver"
    },
    {
      first_name: "Ion",
      last_name: "Guzun",
      role: "driver"
    },
    {
      first_name: "Ion",
      last_name: "Guzun",
      role: "driver"
    },
    {
      first_name: "Ion",
      last_name: "Guzun",
      role: "driver"
    },
    {
      first_name: "Ion",
      last_name: "Guzun",
      role: "driver"
    },
    {
      first_name: "Ion",
      last_name: "Guzun",
      role: "driver"
    },
    {
      first_name: "Ion",
      last_name: "Guzun",
      role: "driver"
    }
  ]


  JOBS.each do |job|
    Job.create!(pick_up_date: job[:pick_up_date], delivery_date: job[:delivery_date], status: job[:status], job_time: job[:job_time])
  end
  EMPLOYEES.each do |employee|
    Employee.create!(first_name: employee[:first_name], last_name: employee[:last_name], role: employee[:role], job_id: employee[:job_id])
  end


  30.times {
    job = Job.find(id = rand(JOBS.length)+1)
    body = Faker::Address.full_address
    Origin.create!(job_id: job.id,  address: "#{body}")
  }
  30.times {
    job = Job.find(id = rand(JOBS.length)+1)
    body = Faker::Address.full_address
    Destination.create!(job_id: job.id, address: "#{body}")
  }
  30.times {
    job = Job.find(id = rand(JOBS.length)+1)
    first_name = Faker::Name.first_name
    last_name = Faker::Name.last_name
    phone = Faker::PhoneNumber.cell_phone
    email = Faker::Internet.email
    Customer.create(job_id: job.id, first_name: "#{first_name}", last_name: "#{last_name}", email: "#{email}", phone: "#{phone}")
  }

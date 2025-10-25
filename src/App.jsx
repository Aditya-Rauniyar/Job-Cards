import React from 'react'
import Card from './components/card'


const App = () => {

const jobOpenings = [
  {
    brandLogo: "https://logo.clearbit.com/google.com",
    companyName: "Google",
    datePosted: "5 days ago",
    post: "Frontend Developer",
    tag1: "Full-time",
    tag2: "Junior Level",
    pay: "$45/hour",
    location: "Bangalore, India"
  },
  {
    brandLogo: "https://logo.clearbit.com/amazon.com",
    companyName: "Amazon",
    datePosted: "2 weeks ago",
    post: "Backend Engineer",
    tag1: "Full-time",
    tag2: "Senior Level",
    pay: "$70/hour",
    location: "Hyderabad, India"
  },
  {
    brandLogo: "https://logo.clearbit.com/meta.com",
    companyName: "Meta",
    datePosted: "3 days ago",
    post: "UI/UX Designer",
    tag1: "Part-time",
    tag2: "Mid Level",
    pay: "$40/hour",
    location: "Mumbai, India"
  },
  {
    brandLogo: "https://logo.clearbit.com/apple.com",
    companyName: "Apple",
    datePosted: "1 week ago",
    post: "iOS Developer",
    tag1: "Full-time",
    tag2: "Senior Level",
    pay: "$85/hour",
    location: "Pune, India"
  },
  {
    brandLogo: "https://logo.clearbit.com/netflix.com",
    companyName: "Netflix",
    datePosted: "10 days ago",
    post: "Data Engineer",
    tag1: "Full-time",
    tag2: "Mid Level",
    pay: "$60/hour",
    location: "Bangalore, India"
  },
  {
    brandLogo: "https://logo.clearbit.com/microsoft.com",
    companyName: "Microsoft",
    datePosted: "4 weeks ago",
    post: "Cloud Solutions Architect",
    tag1: "Full-time",
    tag2: "Senior Level",
    pay: "$95/hour",
    location: "Hyderabad, India"
  },
  {
    brandLogo: "https://logo.clearbit.com/tesla.com",
    companyName: "Tesla",
    datePosted: "2 days ago",
    post: "Software Engineer",
    tag1: "Full-time",
    tag2: "Junior Level",
    pay: "$55/hour",
    location: "Pune, India"
  },
  {
    brandLogo: "https://logo.clearbit.com/nvidia.com",
    companyName: "NVIDIA",
    datePosted: "3 weeks ago",
    post: "Machine Learning Engineer",
    tag1: "Full-time",
    tag2: "Senior Level",
    pay: "$100/hour",
    location: "Bangalore, India"
  },
  {
    brandLogo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3LbLfI5NAlOozywJ1EDsTiJ6gT5n40e7CxQ&s",
    companyName: "Adobe",
    datePosted: "6 days ago",
    post: "Product Designer",
    tag1: "Part-time",
    tag2: "Mid Level",
    pay: "$50/hour",
    location: "Noida, India"
  },
  {
    brandLogo: "https://logo.clearbit.com/openai.com",
    companyName: "OpenAI",
    datePosted: "5 weeks ago",
    post: "AI Research Intern",
    tag1: "Internship",
    tag2: "Entry Level",
    pay: "$35/hour",
    location: "Remote"
  }
];

  return (
   <div className='parent'>
    {jobOpenings.map(function (elems,idx) {
      
      return <div key={idx}>
          <Card company={elems.companyName} post={elems.post} date={elems.datePosted}
      img={elems.brandLogo} tag1={elems.tag1} tag2={elems.tag2} pay={elems.pay} location={elems.location} />
        </div>

    })}
   </div>
  )
}

export default App

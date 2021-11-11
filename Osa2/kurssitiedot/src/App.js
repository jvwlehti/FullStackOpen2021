import React from 'react'
const Header = (props) => {
  return (
    <div>
      <h1>{props.course}</h1>
    </div>
  )
}

const Part = (props) => {
  return (
    <p>
        {props.p} {props.ex}
    </p>
  )
} 

const Content = (props) => {
  return (
    <div>
      <Part p = {props.parts[0].name} ex = {props.parts[0].exercises}/>
      <Part p = {props.parts[1].name} ex = {props.parts[1].exercises}/>
      <Part p = {props.parts[2].name} ex = {props.parts[2].exercises}/>
    </div>
  )
}

const Total = (props) => {
  return (
    <p>Number of exercises {props.parts[0].exercises +  props.parts[1].exercises + props.parts[2].exercises}</p>
  )

}

const App = () => {
  const course = {
    name:  'Half Stack application development',
    id: 1,
    parts: [
    {
      name: 'Fundamentals of React',
      exercises: 10,
      id: 1
    },
    {
      name: 'Using props to pass data',
      exercises: 7,
      id: 2
    },
    {
     name: 'State of a component',
     exercises: 14,
     id:3
    }
  ]
} 
  

  return ( 
    <div>
      <Header course = {course.name}   />
      <Content parts = {course.parts}  />
      <Total   parts = {course.parts}  />
    </div>
  )
}

export default App
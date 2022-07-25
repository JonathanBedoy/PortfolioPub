import React from 'react'
import Container from '@mui/material/Container'
import Grid from '@mui/material/Grid'
import ProjectCardWrapper from '../../components/ProjectCard/ProjectCardWrapper'

const Portfolio = (props) => {
  let dataArr = [
    {
      name: 'Nia Lashes By Denise',
      teaser:
        "E-commerce website for eyelashe extensions, branded as 'Nia Lashes By Denise' using the PayPal API for transactions.",
      description:
        'This e-commerce website allows the user to add eyelash extensions to their cart and checkout using PayPal. Along with being able to take a profound look at the eyelash being sold. This single-page applictation was built using VueJs as the front end JavaScript framework and styled using Bootstrap components. The back end serves the web app using express hosted on an AWS Lightsail Instance. As well as using NeDB as a MongoDB-like database.',
      websiteLink: 'https://nialashesbydenise.com',
      githubRepoLink: 'https://github.com/JonathanBedoy/EcommerceWebApp',
      img: '/assets/nialashesexample.jpg',
      imagAlt: 'Nia Lashes By Denise website Static Render',
      chips: [
        { name: 'vuejs', description: 'Vue Js' },
        { name: 'bootstrap', description: 'Bootstrap Vue' },
        { name: 'nodejs', description: 'Node Js' },
        { name: 'mongodb', description: 'NeDB (Mongo DB)' },
        { name: 'npm', description: 'Node Package Manager' },
        { name: 'paypal', description: 'Paypal SDK' },
      ],
    },
    {
      name: 'Invoice Generator',
      teaser:
        'Invoice generator with the capability of keeping track of inventory, and company debts.',
      description:
        "This web app allows the user to keep tabs on their inventory, as well as intuitively generate invoices using inputed company and inventory data. Making an invoice generates a PDF file which can then be printed out. A single-page application built using React Js, and mostly styled with Bootstrap-React. Using NeDB, the user's inputted data is stored and only served once login is verified. \nTry it out!\nUsername: guest\nPassword: password ",
      websiteLink: 'https://inventory.jonathanbedoy.com',
      githubRepoLink: 'https://github.com/JonathanBedoy/InvoiceGenerator',
      img: '/assets/InventorySystemExample.png',
      imagAlt: 'Invoice Generator website Static Render',
      chips: [
        { name: 'reactjs', description: 'React Js' },
        { name: 'bootstrap', description: 'Bootstrap Vue' },
        { name: 'nodejs', description: 'Node Js' },
        { name: 'mongodb', description: 'NeDB (Mongo DB)' },
        { name: 'npm', description: 'Node Package Manager' },
        // { name: 'paypal', description: 'Paypal SDK' },
      ],
    },
    {
      name: 'Wordle With A Friend',
      teaser: 'Classic game of wordle, but with a multiplayer element to it. ',
      description:
        "This web app is a recreation of the famous web-based word game, with a twist. It also allows the user to play with their friend. Each player receives one guess per turn, until the word is guessed correctly. A faithful recreation to the original Wordle game, this web app was built using Vue Js, along with 'BootstrapVue'. Both users are connected to a lobby using Socket.IO.",
      websiteLink: 'https://wordle.jonathanbedoy.com',
      githubRepoLink: 'https://github.com/JonathanBedoy/WordleWithAFriend',
      img: '/assets/WordleWithAFreindExample.png',
      imagAlt: 'Inventory System website Static Render',
      chips: [
        { name: 'vuejs', description: 'Vue Js' },
        { name: 'bootstrap', description: 'Bootstrap Vue' },
        { name: 'nodejs', description: 'Node Js' },
        { name: 'socketio', description: 'Socket.IO' },
        { name: 'npm', description: 'Node Package Manager' },
        // { name: 'paypal', description: 'Paypal SDK' },
      ],
    },
  ]
  return (
    <Container sx={{ p: 0 }}>
      <Grid container spacing={2} direction='row' justifyContent='center' paddingTop={2}>
        {dataArr.map((data) => (
          <Grid item xs={10} sm={7} md={9} key={data.name}>
            <ProjectCardWrapper
              name={data.name}
              description={data.description}
              websiteLink={data.websiteLink}
              githubRepoLink={data.githubRepoLink}
              img={data.img}
              chips={data.chips}
              teaser={data.teaser}
            />
          </Grid>
        ))}
      </Grid>
    </Container>
  )
}

export default Portfolio

import React from 'react'
import styled from "styled-components"
import Section from './Section'

function Home() {
    return (
        <Container>
            
            <Section
                title="Model S"
                description="Order online for Touchless Delivery"
                backgroundImg="model-s.jpg"
                leftBtnText="Custom Order"
                rightBtnText="Existing inventory"
            
            />
            <Section
                  title="Model Y"
                description="Order online for Touchless Delivery"
                backgroundImg="model-Y.jpg"
                leftBtnText="Custom Order"
                rightBtnText="Existing inventory"
            
            />
            <Section
                  title="Model 3"
                description="Order online for Touchless Delivery"
                backgroundImg="model-3.jpg"
                leftBtnText="Custom Order"
                rightBtnText="Existing inventory"
            
            />
            <Section
                  title="Model X"
                description="Order online for Touchless Delivery"
                backgroundImg="model-X.jpg"
                leftBtnText="Custom Order"
                rightBtnText="Existing inventory"
            
            />
            <Section
                  title="Lowest cost solar panels in America"
                description="Money-back guarantee"
                backgroundImg="solar-panel.jpg"
                leftBtnText="Order Now"
                rightBtnText="Learn more"
            
                
            />
            <Section
                  title="solar for New Roofs"
                description="Solar Roof Costs less Than a New"
                backgroundImg="solar-roof.jpg"
                leftBtnText="Order Now"
                rightBtnText="Learn more"
            
            />
            <Section
                  title="Accessories"
                description=""
                backgroundImg="accessories.jpg"
                leftBtnText="Shop Now"
                
            
            />
            
            
        </Container>
    )
}

export default Home

const Container = styled.div`
    height : 1000vh;
    z-index:10;

`


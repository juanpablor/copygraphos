import * as React from "react"
import type { HeadFC, PageProps } from "gatsby"
import LayoutPage from "./layout"
import { Company } from "../interfaces"
import companyData  from "../data/data.json"

const ServiciosPage: React.FC<PageProps> = () => {
    const data: Company = companyData;
    return (
          <LayoutPage>
            <h1>Welcome to servicios of {data.companyName}</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam fugit ab quae laboriosam sunt, impedit nesciunt! Error laborum doloribus alias molestiae impedit esse non placeat distinctio, rem commodi. Est, sapiente.</p>
          </LayoutPage>
    )
  }
  
  export default ServiciosPage
  
  export const Head: HeadFC = () => <title>Servicios</title>
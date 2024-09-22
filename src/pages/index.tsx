import * as React from "react"
import type { HeadFC, PageProps } from "gatsby"
import images from "../images"
import LayoutPage from "./layout"
import { Company } from "../interfaces"
import companyData  from "../data/data.json"

const IndexPage: React.FC<PageProps> = () => {
  const data: Company = companyData;
  return (
    <LayoutPage>
      <h1>Welcome to {data.companyName}</h1>
    </LayoutPage>
  )
}

export default IndexPage

export const Head: HeadFC = () => <title>Home Page</title>
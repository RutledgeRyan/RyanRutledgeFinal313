

const Footer = ({year, company, twitterLink, instaLink}) =>{

    return(
        <footer >
        <p>&copy;{year} {company} Portfolio Page. All rights reserved.</p>
        <p>
          Follow {company} on{" "}
          <a 
          href= {twitterLink}
          
          >
            Twitter
          </a>{" "}
          and{" "}
          <a
            href= {instaLink}
            
          >
            Instagram
          </a>
        </p>
      </footer>
    )
}
export default Footer;
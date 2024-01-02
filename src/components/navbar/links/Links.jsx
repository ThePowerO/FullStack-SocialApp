import styles from './links.module.css'
import NavLink from './navLinks/navLink'

const Links = () => {

    const Links = [
        {
            title: "Home Page",
            path: "/",
        },
        {
            title: "About",
            path: "/about",
        },
        {
            title: "Contact",
            path: "/contact",
        },
        {
            title: "Blog",
            path: "/blog",
        },
    ]

  return (
    <div className={styles.links}>
      {Links.map((link => (
        <NavLink  item={link} key={link.title} />
      )))}
    </div>
  )
}

export default Links

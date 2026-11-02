import {useState, useEffect} from 'react'
import logo from '../../assets/image/logo.png'
import {Link} from 'react-router-dom'
import {Search, Bell, User, ChevronDown} from 'lucide-react'
import styles from './Header.module.css'

function Header() {
    const [isSearchOpen, setIsSearchOpen] = useState(false)
    const [isProfileOpen, setIsProfileOpen] = useState(false)
    const [isScrolled, setIsScrolled] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setIsScrolled(true)
            } else {
                setIsScrolled(false)
            }
        }

        window.addEventListener('scroll', handleScroll)

        return () => {
            window.removeEventListener('scroll', handleScroll)
        }
    }, [])

  return (
    <header className={`${styles.header} ${isScrolled ? styles.scrolled : ''}`}>
        <div className={styles.container}> 
            <img className={styles.logo} src={logo} alt="logo" />
            <nav className={styles.nav}>
                <Link className={styles.navLink} to="/">Home</Link>
                <Link className={styles.navLink} to="/tv-shows">TV Shows</Link>
                <Link className={styles.navLink} to="/movies">Movies</Link>
                <Link className={styles.navLink} to="/new-popular">New & Popular</Link>
                <Link className={styles.navLink} to="/my-list">My List</Link>
                <Link className={styles.navLink} to="/categories">Browse by Category</Link>
            </nav>
            <div className={styles.rightSection}>
                <div className={styles.searchContainer}>
                    <button onClick={() => setIsSearchOpen(!isSearchOpen)} className={styles.searchButton}>
                        <Search size={20} />
                    </button>
                    {isSearchOpen && (
                        <input type="text" className={styles.searchInput} placeholder="Search..." />
                    )}
                </div>
                <button className={styles.iconButton}>
                    <Bell size={20} />
                    <span className={styles.notificationBadge}>4</span>
                </button>
                <div className={styles.profileContainer}>
                    <button  className={styles.profileButton} onClick={() => setIsProfileOpen(!isProfileOpen)}>
                        <div className={styles.profileAvatar}>
                            <User size={20} />
                        </div>
                        <ChevronDown size={20} />
                    </button>
                    {isProfileOpen && (
                        <div className={styles.profileMenu}>
                            <Link className={styles.profileMenuItem} to="/account">Account</Link>
                            <Link className={styles.profileMenuItem} to="/settings">Settings</Link>
                            <hr className={styles.profileMenuDivider} />
                            <Link className={styles.profileMenuItem} to="/logout">Logout</Link>
                        </div>
                    )}
                </div>
            </div>
        </div>
    </header>
  )
}

export default Header
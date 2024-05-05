export default function Header() {
    return (
        <header id="sw-header">
            <a id="sw-headertitle" href="/myprojects/dashboard"><img alt="4URSpace" src="/media/images/header-logo-default.svg" /></a>
            <div id="sw-headermenu">
                <ul className="sw-menu">
                    <li><a href="/myprojects/dashboard"><img alt="Dashboard" src="/myprojects/static/media/org.463ee741.svg" /><span>Dashboard</span></a></li>
                    <li><a href="https://4urspace.com/contact"><img alt="Contact" src="/myprojects/static/media/checklist.caeaadec.svg" /><span>Contact</span></a></li>
                    <li><a href="https://4urspace.com/blog"><img alt="News" src="/myprojects/static/media/calendar.8bab8cff.svg" /><span>News</span></a>
                    </li><li className="sw-current"><a href="https://calendly.com/stefanosanchini/45min" target="_blank" rel="noreferrer"><img alt="Schedule a demo" src="/myprojects/static/media/home.a8207812.svg" /><span>Schedule a demo</span></a></li>
                </ul>
            </div>
            <ul id="sw-headeruser">
                <li id="sw-headernotify"><a href="/myprojects/notifications"><img alt="4URSpace Notifications" src="/media/images/bell.svg" /></a></li>
                <li id="sw-headeravatar"><a className="sw-avatar sw-open"><img src="/media/images/user_avatar.png" draggable="false" />Marian Dumitrascu</a>
                    <ul className="sw-menu">
                        <li><span className="sw-avatar"><img src="https://storage.4urspace.com/user-uploads/0ddfCZTUQf9jcOYpLvvg_d-0006.jpg.png" draggable="false" /><a className="sw-flag" href="https://4urspace.com/myprojects/edit-profile"><img src="/myprojects/static/media/flag-edit.564d4672.svg" /></a></span><p>Marian Dumitrascu</p></li>
                        <li><a className="sw-iconleft" href="https://4urspace.com/myprojects/edit-profile"><img alt="4URSpace My Info" src="/myprojects/static/media/info.abb5cf4c.svg" /><span>My Info</span></a></li>
                        <li className="sw-hr" id="sw-headerlogout"><a className="sw-iconleft" href="https://4urspace.com/logout"><img alt="4URSpace Logout" src="/myprojects/static/media/logout.b286e3b6.svg" /><span>Logout</span></a></li>
                    </ul>
                </li>
                <li id="sw-headerswitch"><a className="sw-open"><img alt="4URSpace" src="/myprojects/static/media/header-open.2d08b953.svg" /></a><a className="sw-close"><img alt="4URSpace" src="/myprojects/static/media/header-close.3baf2680.svg" /></a></li>
            </ul>
        </header>
    );
}
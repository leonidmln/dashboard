export default function Header() {
    return (
        <header id="sw-header">
            <a id="sw-headertitle" href="/myprojects/dashboard"><img alt="4URSpace" src="/media/images/header-logo-default.svg" /></a>
            <div id="sw-headermenu">
                <ul className="sw-menu">
                    <li><a href="/myprojects/dashboard"><span>Dashboard</span></a></li>
                    <li><a href="https://4urspace.com/contact"><span>Contact</span></a></li>
                    <li><a href="https://4urspace.com/blog"><span>News</span></a>
                    </li><li className="sw-current"><a href="https://calendly.com/stefanosanchini/45min" target="_blank" rel="noreferrer"><span>Schedule a demo</span></a></li>
                </ul>
            </div>
            <ul id="sw-headeruser">
                <li id="sw-headernotify"><a href="/myprojects/notifications"><img alt="4URSpace Notifications" src="/media/images/bell.svg" /></a></li>
                <li id="sw-headeravatar"><a className="sw-avatar sw-open"><img src="/media/images/user_avatar.png" draggable="false" />Marian Dumitrascu</a>
                    <ul className="sw-menu">
                        <li><span className="sw-avatar"><img src="https://storage.4urspace.com/user-uploads/0ddfCZTUQf9jcOYpLvvg_d-0006.jpg.png" draggable="false" /><a className="sw-flag" href="https://4urspace.com/myprojects/edit-profile"></a></span><p>Marian Dumitrascu</p></li>
                        <li><a className="sw-iconleft" href="https://4urspace.com/myprojects/edit-profile"><span>My Info</span></a></li>
                        <li className="sw-hr" id="sw-headerlogout"><a className="sw-iconleft" href="https://4urspace.com/logout"><span>Logout</span></a></li>
                    </ul>
                </li>
            </ul>
        </header>
    );
}
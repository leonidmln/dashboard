export default function NavigationMenu() {
    return (
        <nav id="sw-nav" className="sw-level1">
            <div id="sw-navlevel1">
                <ul className="sw-menu" id="sw-navmenu">
                    <li className=""><a className="sw-iconleft" href="/myprojects/dashboard"><img className="zz-iconwhite" src="/media/images/nav/20-dashboard.svg" alt="4URSpace DashBoard" /><span>DashBoard</span></a></li>
                    <li className=""><a className="sw-iconleft" href="/myprojects/projects"><img className="zz-iconwhite" src="/media/images/nav/20-projects.svg" alt="4URSpace My Projects" /><span>My Projects</span></a></li>
                    <li className=""><a className="sw-iconleft" href="/myprojects/todolist"><img className="zz-iconwhite" src="/media/images/nav/20-todo.svg" alt="4URSpace To Do List" /><span>To Do List</span></a></li>
                    <li className=""><a className="sw-iconleft" href="/myprojects/messages"><img className="zz-iconwhite" src="/media/images/nav/20-messages.svg" alt="4URSpace Messages" /><span>Messages</span></a></li>
                    <li className=""><a className="sw-iconleft" href="/myprojects/mytasks"><img className="zz-iconwhite" src="/media/images/nav/20-tasks.svg" alt="4URSpace My Tasks" /><span>My Tasks</span></a></li>
                    <li className=""><a className="sw-iconleft" href="/myprojects/mybids"><img className="zz-iconwhite" src="/media/images/nav/20-budget.svg" alt="4URSpace My Bids" /><span>My Bids</span></a></li>
                </ul>
                <ul className="sw-menu" id="sw-navsetup">
                    <li className="sw-hr"><a className="sw-iconleft" href="https://4urspace.com/retailprofile"><img className="zz-iconwhite" src="/media/images/nav/note.svg" alt="4URSpace Edit Profile" /><span>Edit Profile</span></a></li>
                    <li><a className="sw-iconleft" href="https://4urspace.com/retailer/Marian_Dumitrascu/0/0/0/0/12096"><img className="zz-iconwhite" src="/media/images/nav/20-info.svg" alt="4URSpace View Profile" /><span>View Profile</span></a></li>
                    <li><a className="sw-iconleft" href="https://4urspace.com/team_management"><img className="zz-iconwhite" src="/media/images/nav/user.svg" alt="4URSpace Team Management" /><span>Team Management</span></a></li>
                </ul>
            </div>
        </nav>

    );
}
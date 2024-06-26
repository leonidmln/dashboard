import EmptyStars from "../components/EmptyStars"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import SearchTerms from "../components/SearchTerms";

export default function Dashboard() {
    return (
        <div className="icontent-tint" id="icontent">
            <div className="idash-content">
                <div className="idash-colset idashcontainer">
                    <div className="idash-col2 iwidth-50">
                        <div className="idash-spot icenter">
                            <div className="ii-image iseparate">
                                <img src="https://4urspace.com/assets/images/illo-doc.jpg" /></div>
                            <div className="ii-text">
                                <h1>Currently you don't have any projects</h1>
                                <p>Improve the collaboration with members<br /> across the entire project</p>
                            </div>
                            <div className="ibuttonset">
                                <a className="ibutton istrong isize-l iwidth-l new_project" href="/myprojects/createproject">Start your first project</a>
                            </div>
                        </div>
                    </div>
                    <div className="idash-col2 iwidth-50">
                        <div className="idash-spot ileft">
                            <div className="ii-text"><h1>Marketplace</h1><p>Find and connect with Vendors and Suppliers for all of your build-outs</p></div>
                            <div className="ii-image"><img src="https://4urspace.com/assets/images/illo-build.jpg" />
                            </div>
                        </div>
                        <div className="ifieldsearch"><label>I'm looking for:</label>
                            <FontAwesomeIcon icon={faMagnifyingGlass} color="#00a7e2" className="search-icon" />
                            <SearchTerms />
                        </div>
                        <div className="idash-separate"></div>
                        <div className="idash-spot ileft">
                            <div className="idash-colnote"><p>SHOWCASE</p></div>
                            <div className="ii-text">
                                <h1>Showcase your work and experience</h1><p>Showcase your completed projects and increase your visibility and business opportunities.</p>
                                <a className="ibutton istrong isize-l iwidth-l" href="https://4urspace.com/project">Showcase your work</a></div>
                            <div className="ii-image"><img src="https://4urspace.com/assets/images/illo-showcase.jpg" alt="illo-showcase" /></div>
                        </div>
                    </div>
                </div>
                <h1 className="isize-s">Featured Vendors</h1>
                <ul className="ivendor">
                    <li>
                        <div>
                            <div className="ii-1 left">
                                <a href="https://4urspace.com/vendor/91"><img src="https://s3.amazonaws.com/4urspace-prod/company_profile/thumbnail/91_1537476653_PWI_Construction.jpg" /></a>
                            </div>
                            <div className="ii-2">
                                <h2 >PWI Construction, Inc.</h2>
                                <EmptyStars />
                            </div>
                        </div>
                        <div className="ii-3"><p><strong>191</strong> projects</p></div>
                    </li>
                    <li>
                        <div>
                            <div className="ii-1 left"><a href="https://4urspace.com/vendor/11706"><img src="https://s3.amazonaws.com/4urspace-prod/company_profile/thumbnail/11706_1713965352_SYNERGYINSTALLERS.png" /></a></div>
                            <div className="ii-2"><h2 >SYNERGY INSTALLERS</h2>
                                <EmptyStars />
                                <p>Equipment and Millwork installers</p>
                            </div>
                        </div>
                        <div className="ii-3"><p><strong>16</strong> projects</p></div>
                    </li>
                    <li>
                        <div>
                            <div className="ii-1 left">
                                <a href="https://4urspace.com/vendor/3838"><img src="https://s3.amazonaws.com/4urspace-prod/company_profile/thumbnail/3838_1537477079_Effebi_s.p.a..png" /></a>
                            </div>
                            <div className="ii-2">
                                <h2 >Effebi s.p.a.</h2>
                                <EmptyStars />
                                <p>Millwork Production &amp;amp; Installation</p>
                            </div>
                        </div>
                        <div className="ii-3"><p><strong>60</strong> projects</p></div>
                    </li>
                    <li>
                        <div>
                            <div className="ii-1 left">
                                <a href="https://4urspace.com/vendor/750"><img src="https://s3.amazonaws.com/4urspace-prod/company_profile/thumbnail/750_1523438255_Integra_Fragrances.jpg" /></a>
                            </div>
                            <div className="ii-2">
                                <h2>Integra Fragrances</h2>
                                <EmptyStars />
                                <p>Scent Branding Firm</p>
                            </div>
                        </div>
                        <div className="ii-3"><p><strong>254</strong> projects</p></div>
                    </li>
                    <li>
                        <div>
                            <div className="ii-1 left">
                                <a href="https://4urspace.com/vendor/11639"><img src="https://s3.amazonaws.com/4urspace-prod/company_profile/thumbnail/11639_1697659495_Bespoke7.png" /></a>
                            </div>
                            <div className="ii-2">
                                <h2>Bespoke7</h2>
                                <EmptyStars />
                                <p>Millwork and Fixtures</p>
                            </div>
                        </div>
                        <div className="ii-3">
                            <p><strong>10</strong> projects</p>
                        </div>
                    </li>
                    <li>
                        <div>
                            <div className="ii-1 left">
                                <a href="https://4urspace.com/vendor/3380"><img src="https://s3.amazonaws.com/4urspace-prod/company_profile/thumbnail/3380_1525261818_AXXYS_Construction_Group.png" /></a>
                            </div>
                            <div className="ii-2">
                                <h2>Axxys</h2>
                                <EmptyStars />
                                <p>General Contractor</p>
                            </div>
                        </div>
                        <div className="ii-3"><p><strong>33</strong> projects</p></div>
                    </li>
                </ul>
                <br />
            </div>
        </div>
    );
}
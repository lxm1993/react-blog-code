import React from 'react';
import ArtList from '../../components/ArtList';
import { config } from "../../config";

const Home = () => {
    return (
        <div className="page-wraper home-wraper">
            <ArtList githubRepo={config.githubTechnologyRepo} />
        </div>
    )
};


export default Home;
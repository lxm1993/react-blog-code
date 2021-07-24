import React from 'react';
import ArtList from '../../components/ArtList';
import { config } from "../../config";

const Gossip = () => {
    return (
        <div className="home-wraper">
            <ArtList githubRepo={config.githubGossipRepo} />
        </div>
    )
};


export default Gossip;
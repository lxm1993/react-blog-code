import React from 'react';
import ArtList from '../../components/ArtList';
import { config } from "../../config";

const Gossip = () => {
    return (
        <div className="page-wraper gossip-wraper">
            <ArtList githubRepo={config.githubGossipRepo} />
        </div>
    )
};


export default Gossip;
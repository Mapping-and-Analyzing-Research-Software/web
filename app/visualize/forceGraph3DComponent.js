'use client';
import dynamic from 'next/dynamic';

// Dynamically import react-force-graph-3d to ensure it's only rendered client-side
const ForceGraph3D = dynamic(() => import('react-force-graph-3d'), { ssr: false });

const ForceGraph3DComponent = () => {
  const N = 30;
    const gData = {
      nodes: [...Array(N).keys()].map(i => ({ id: i })),
      links: [...Array(N).keys()]
        .filter(id => id)
        .map(id => ({
          source: id,
          target: Math.round(Math.random() * (id-1))
        }))
    };

  return <ForceGraph3D width={500} height = {500} graphData={gData}/>;
};

export default ForceGraph3DComponent;

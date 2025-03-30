import React, { useState, useCallback } from 'react';
import ReactFlow, { MiniMap, Controls, Background, addEdge } from 'react-flow-renderer';
import './style.css';

const initialNodes = [
  { id: '1', data: { label: 'OLT' }, position: { x: 100, y: 100 } },
  { id: '2', data: { label: 'Splitter' }, position: { x: 300, y: 200 } },
  { id: '3', data: { label: 'ONU' }, position: { x: 500, y: 300 } }
];

function App() {
  const [nodes, setNodes] = useState(initialNodes);
  const [edges, setEdges] = useState([]);
  const onConnect = useCallback((params) => setEdges((eds) => addEdge(params, eds)), []);

  return (
    <div style={{ width: '100vw', height: '100vh' }}>
      <ReactFlow
        nodes={nodes}
        edges={edges}
        onConnect={onConnect}
        fitView
      >
        <MiniMap />
        <Controls />
        <Background gap={12} color="#aaa" />
      </ReactFlow>
    </div>
  );
}

export default App;

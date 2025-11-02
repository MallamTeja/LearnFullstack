import React, { useState, useCallback } from 'react';
import ReactFlow, {
  MiniMap,
  Controls,
  Background,
  useNodesState,
  useEdgesState,
  addEdge,
  Panel,
} from 'reactflow';
import { motion } from 'framer-motion';
import 'reactflow/dist/style.css';
import treeData from '../data/techtree.json';
import './TechTree.css';

const TechTree = () => {
  const [nodes, setNodes, onNodesChange] = useNodesState([]);
  const [edges, setEdges, onEdgesChange] = useEdgesState([]);
  const [selectedCategory, setSelectedCategory] = useState('All');

  // Initialize nodes and edges from data
  React.useEffect(() => {
    const initialNodes = treeData.nodes.map((node) => ({
      id: node.id,
      type: 'custom',
      position: node.position,
      data: {
        label: node.name,
        category: node.category,
        level: node.level,
        color: node.color,
      },
      style: {
        background: node.color,
        color: '#ffffff',
        border: '2px solid #00ffff',
        borderRadius: '12px',
        padding: '10px',
        fontSize: '14px',
        fontWeight: 'bold',
        minWidth: '120px',
        textAlign: 'center',
        boxShadow: `0 4px 20px ${node.color}40`,
      },
    }));

    const initialEdges = treeData.edges.map((edge) => ({
      id: edge.id,
      source: edge.source,
      target: edge.target,
      type: 'smoothstep',
      animated: true,
      style: {
        stroke: '#00ffff',
        strokeWidth: 2,
      },
      markerEnd: {
        type: 'arrowclosed',
        color: '#00ffff',
      },
    }));

    setNodes(initialNodes);
    setEdges(initialEdges);
  }, [setNodes, setEdges]);

  const onConnect = useCallback((params) => setEdges((eds) => addEdge(params, eds)), [setEdges]);

  const categories = ['All', 'Frontend', 'Backend', 'Database', 'DevOps', 'Cloud', 'Deployment'];

  const filterNodesByCategory = (category) => {
    if (category === 'All') {
      return treeData.nodes;
    }
    return treeData.nodes.filter(node => node.category === category);
  };

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
    const filteredNodes = filterNodesByCategory(category);
    
    const updatedNodes = treeData.nodes.map((node) => ({
      id: node.id,
      type: 'custom',
      position: node.position,
      data: {
        label: node.name,
        category: node.category,
        level: node.level,
        color: node.color,
      },
      style: {
        background: filteredNodes.includes(node) ? node.color : '#374151',
        color: '#ffffff',
        border: filteredNodes.includes(node) ? '2px solid #00ffff' : '2px solid #6b7280',
        borderRadius: '12px',
        padding: '10px',
        fontSize: '14px',
        fontWeight: 'bold',
        minWidth: '120px',
        textAlign: 'center',
        boxShadow: filteredNodes.includes(node) ? `0 4px 20px ${node.color}40` : '0 4px 20px rgba(0,0,0,0.3)',
        opacity: filteredNodes.includes(node) ? 1 : 0.3,
      },
    }));

    setNodes(updatedNodes);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -30 }}
      transition={{ duration: 0.5 }}
      style={{ paddingTop: '90px', minHeight: '100vh' }}
    >
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="page-header"
          style={{ textAlign: 'center', padding: '2rem 0' }}
        >
          <h1 style={{ fontSize: '3rem', marginBottom: '1rem', color: '#ffffff' }}>
            Technology Dependency Tree
          </h1>
          <p style={{ fontSize: '1.2rem', color: '#94a3b8', maxWidth: '600px', margin: '0 auto 2rem' }}>
            Visualize how technologies connect and build upon each other in modern development
          </p>
        </motion.div>

        {/* Category Filter */}
        <div className="tree-controls">
          <div className="category-buttons">
            {categories.map((category) => (
              <motion.button
                key={category}
                className={`tree-category-btn ${selectedCategory === category ? 'active' : ''}`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => handleCategoryChange(category)}
              >
                {category}
              </motion.button>
            ))}
          </div>
        </div>

        {/* React Flow Visualization */}
        <div className="tech-tree-container">
          <ReactFlow
            nodes={nodes}
            edges={edges}
            onNodesChange={onNodesChange}
            onEdgesChange={onEdgesChange}
            onConnect={onConnect}
            fitView
            attributionPosition="bottom-left"
          >
            <Controls />
            <MiniMap
              style={{
                background: '#1e293b',
                border: '1px solid #00ffff',
              }}
              nodeColor={(node) => node.style.background}
            />
            <Background 
              color="#64ffda" 
              gap={16} 
              size={1}
              style={{ backgroundColor: '#0f172a' }}
            />
            <Panel position="top-right">
              <div className="legend">
                <h4>Legend</h4>
                <div className="legend-item">
                  <div className="legend-line prerequisite"></div>
                  <span>Prerequisite</span>
                </div>
                <div className="legend-item">
                  <div className="legend-line integration"></div>
                  <span>Integration</span>
                </div>
                <div className="legend-item">
                  <div className="legend-line deployment"></div>
                  <span>Deployment</span>
                </div>
              </div>
            </Panel>
          </ReactFlow>
        </div>

        {/* Info Panel */}
        <motion.div
          className="tree-info"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <div className="info-cards">
            <div className="info-card">
              <i className="fas fa-route"></i>
              <h3>Learning Paths</h3>
              <p>Follow the arrows to understand the optimal learning sequence</p>
            </div>
            <div className="info-card">
              <i className="fas fa-filter"></i>
              <h3>Category Filtering</h3>
              <p>Filter by technology category to focus on specific learning areas</p>
            </div>
            <div className="info-card">
              <i className="fas fa-search-plus"></i>
              <h3>Interactive Exploration</h3>
              <p>Zoom, pan, and explore the relationships between technologies</p>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default TechTree;
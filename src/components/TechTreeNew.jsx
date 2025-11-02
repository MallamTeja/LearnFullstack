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

  const getEdgeColor = (type) => {
    const colors = {
      prerequisite: '#00ffff',
      integration: '#10b981',
      deployment: '#f59e0b',
      containerization: '#3b82f6',
      cache: '#ef4444',
      realtime: '#8b5cf6',
      implementation: '#06b6d4',
      signaling: '#ec4899',
      orchestration: '#6366f1',
      package: '#84cc16',
      'service-mesh': '#f97316',
      provision: '#14b8a6',
      'ci-cd': '#e11d48',
      monitoring: '#64748b',
      visualization: '#0ea5e9',
      service: '#22c55e',
      cdn: '#a855f7',
      complement: '#eab308',
      'managed-db': '#06b6d4',
      search: '#f59e0b',
      ingest: '#10b981',
      sdk: '#8b5cf6',
      tooling: '#f97316',
      layer2: '#6366f1',
      'model-serving': '#ec4899',
      'ai-apis': '#14b8a6',
    };
    return colors[type] || '#00ffff';
  };

  const getEdgeLabel = (type) => {
    const labels = {
      prerequisite: 'requires',
      integration: 'integrates',
      deployment: 'deploys to',
      containerization: 'containerized by',
      cache: 'cached by',
      realtime: 'enables',
      implementation: 'implements',
      signaling: 'signals via',
      orchestration: 'orchestrated by',
      package: 'managed by',
      'service-mesh': 'mesh via',
      provision: 'provisions',
      'ci-cd': 'deployed by',
      monitoring: 'monitored by',
      visualization: 'visualized by',
      service: 'uses service',
      cdn: 'distributed via',
      complement: 'complements',
      'managed-db': 'managed via',
      search: 'indexed by',
      ingest: 'ingests to',
      sdk: 'accessed via',
      tooling: 'built with',
      layer2: 'runs on',
      'model-serving': 'serves via',
      'ai-apis': 'powered by',
    };
    return labels[type] || '';
  };

  const getRelatedNodes = (category) => {
    if (category === 'All') {
      return treeData.nodes.map(node => node.id);
    }

    // Get nodes in the selected category
    const categoryNodes = treeData.nodes
      .filter(node => node.category === category)
      .map(node => node.id);

    // Find all nodes connected to category nodes (prerequisites and dependents)
    const connectedNodeIds = new Set(categoryNodes);
    
    treeData.edges.forEach(edge => {
      if (categoryNodes.includes(edge.source)) {
        connectedNodeIds.add(edge.target);
      }
      if (categoryNodes.includes(edge.target)) {
        connectedNodeIds.add(edge.source);
      }
    });

    return Array.from(connectedNodeIds);
  };

  const getFilteredEdges = (visibleNodeIds) => {
    return treeData.edges.filter(edge => 
      visibleNodeIds.includes(edge.source) && visibleNodeIds.includes(edge.target)
    );
  };

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
    const relatedNodeIds = getRelatedNodes(category);
    const filteredEdgeData = getFilteredEdges(relatedNodeIds);
    
    // Create nodes - only show related ones
    const updatedNodes = treeData.nodes
      .filter(node => relatedNodeIds.includes(node.id))
      .map((node) => ({
        id: node.id,
        type: 'default',
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
          border: `2px solid ${node.category === category ? '#00ffff' : 'rgba(255,255,255,0.3)'}`,
          borderRadius: '12px',
          padding: '12px 16px',
          fontSize: '13px',
          fontWeight: 'bold',
          minWidth: '100px',
          textAlign: 'center',
          boxShadow: `0 4px 20px ${node.color}40`,
        },
      }));

    // Create edges with proper arrows and relationship types
    const updatedEdges = filteredEdgeData.map((edge) => ({
      id: edge.id,
      source: edge.source,
      target: edge.target,
      type: 'smoothstep',
      animated: true,
      style: {
        stroke: getEdgeColor(edge.type),
        strokeWidth: 3,
      },
      markerEnd: {
        type: 'arrowclosed',
        color: getEdgeColor(edge.type),
        width: 20,
        height: 20,
      },
      label: getEdgeLabel(edge.type),
      labelStyle: {
        fontSize: '10px',
        fontWeight: 'bold',
        color: getEdgeColor(edge.type),
      },
      labelBgStyle: {
        fill: 'rgba(0,0,0,0.8)',
        fillOpacity: 0.8,
      },
    }));

    setNodes(updatedNodes);
    setEdges(updatedEdges);
  };

  // Initialize nodes and edges from data
  React.useEffect(() => {
    handleCategoryChange('All');
  }, []);

  const onConnect = useCallback((params) => setEdges((eds) => addEdge(params, eds)), [setEdges]);

  const categories = [
    'All', 
    'Frontend', 
    'Backend', 
    'Database', 
    'DevOps', 
    'AWS',
    'Messaging',
    'CI/CD',
    'Observability',
    'Realtime',
    'Blockchain',
    'AI / ML',
    'Deployment'
  ];

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
                <h4>Relationship Types</h4>
                <div className="legend-item">
                  <div className="legend-line" style={{backgroundColor: '#00ffff'}}></div>
                  <span>Prerequisite</span>
                </div>
                <div className="legend-item">
                  <div className="legend-line" style={{backgroundColor: '#10b981'}}></div>
                  <span>Integration</span>
                </div>
                <div className="legend-item">
                  <div className="legend-line" style={{backgroundColor: '#f59e0b'}}></div>
                  <span>Deployment</span>
                </div>
                <div className="legend-item">
                  <div className="legend-line" style={{backgroundColor: '#3b82f6'}}></div>
                  <span>Containerization</span>
                </div>
                <div className="legend-item">
                  <div className="legend-line" style={{backgroundColor: '#8b5cf6'}}></div>
                  <span>Realtime/SDK</span>
                </div>
                <div className="legend-item">
                  <div className="legend-line" style={{backgroundColor: '#6366f1'}}></div>
                  <span>Orchestration</span>
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
              <p>Follow the arrows to understand the optimal learning sequence and relationships</p>
            </div>
            <div className="info-card">
              <i className="fas fa-filter"></i>
              <h3>Category Filtering</h3>
              <p>Filter by technology category to focus on specific learning areas and their connections</p>
            </div>
            <div className="info-card">
              <i className="fas fa-search-plus"></i>
              <h3>Interactive Exploration</h3>
              <p>Zoom, pan, and explore the relationships between technologies with labeled connections</p>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default TechTree;
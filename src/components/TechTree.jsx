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

  // Organized layout algorithm
  const calculateOrganizedLayout = (nodes, category) => {
    if (category === 'All') {
      // Create organized grid layout by category
      const categoryOrder = ['Frontend', 'Backend', 'Database', 'DevOps', 'AWS', 'Messaging', 'CI/CD', 'Observability', 'Realtime', 'Blockchain', 'AI / ML', 'Deployment'];
      const categoryGroups = {};
      
      // Group nodes by category
      nodes.forEach(node => {
        if (!categoryGroups[node.category]) {
          categoryGroups[node.category] = [];
        }
        categoryGroups[node.category].push(node);
      });

      const positionedNodes = [];
      const categoriesPerRow = 3;
      const categorySpacing = 300;
      const nodeSpacing = 160;
      const rowSpacing = 350;

      categoryOrder.forEach((categoryName, categoryIndex) => {
        if (categoryGroups[categoryName]) {
          const categoryNodes = categoryGroups[categoryName].sort((a, b) => a.level - b.level);
          const categoryCol = categoryIndex % categoriesPerRow;
          const categoryRow = Math.floor(categoryIndex / categoriesPerRow);
          
          const categoryX = 150 + categoryCol * categorySpacing;
          const categoryY = 100 + categoryRow * rowSpacing;
          
          categoryNodes.forEach((node, nodeIndex) => {
            const nodesPerRow = 2;
            const nodeRow = Math.floor(nodeIndex / nodesPerRow);
            const nodeCol = nodeIndex % nodesPerRow;
            
            const nodeX = categoryX + nodeCol * nodeSpacing;
            const nodeY = categoryY + nodeRow * 100;
            
            positionedNodes.push({
              ...node,
              position: { x: nodeX, y: nodeY }
            });
          });
        }
      });
      
      return positionedNodes;
    } else {
      // For specific category, arrange by level hierarchy
      const levelGroups = {};
      nodes.forEach(node => {
        if (!levelGroups[node.level]) {
          levelGroups[node.level] = [];
        }
        levelGroups[node.level].push(node);
      });

      const positionedNodes = [];
      const levelSpacing = 180;
      const nodeSpacing = 200;

      Object.keys(levelGroups).sort((a, b) => a - b).forEach((level, levelIndex) => {
        const levelNodes = levelGroups[level];
        const levelY = 100 + levelIndex * levelSpacing;
        const startX = 150 + (400 - (levelNodes.length - 1) * nodeSpacing / 2);

        levelNodes.forEach((node, nodeIndex) => {
          const nodeX = startX + nodeIndex * nodeSpacing;
          positionedNodes.push({
            ...node,
            position: { x: nodeX, y: levelY }
          });
        });
      });

      return positionedNodes;
    }
  };

  // Initialize nodes and edges
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

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
    const relatedNodeIds = getRelatedNodes(category);
    const filteredEdgeData = getFilteredEdges(relatedNodeIds);
    const relevantNodes = treeData.nodes.filter(node => relatedNodeIds.includes(node.id));
    const positionedNodes = calculateOrganizedLayout(relevantNodes, category);
    
    // Create organized nodes
    // Create nodes with organized positions and enhanced styling
    const updatedNodes = positionedNodes.map((node) => ({
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
        background: `linear-gradient(135deg, ${node.color}dd, ${node.color}aa)`,
        color: '#ffffff',
        border: `2px solid ${node.category === category && category !== 'All' ? '#00ffff' : 'rgba(255,255,255,0.2)'}`,
        borderRadius: '16px',
        padding: '14px 18px',
        fontSize: '12px',
        fontWeight: '600',
        minWidth: '130px',
        maxWidth: '180px',
        textAlign: 'center',
        boxShadow: `
          0 8px 32px ${node.color}20,
          inset 0 1px 0 rgba(255, 255, 255, 0.2),
          0 4px 12px rgba(0, 0, 0, 0.3)
        `,
        backdropFilter: 'blur(8px)',
        textShadow: '0 1px 2px rgba(0, 0, 0, 0.5)',
        transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
      },
    }));

    // Create enhanced edges with better organization
    const updatedEdges = filteredEdgeData.map((edge) => ({
      id: edge.id,
      source: edge.source,
      target: edge.target,
      type: 'smoothstep',
      animated: category !== 'All' && filteredEdgeData.length < 15,
      style: {
        stroke: getEdgeColor(edge.type),
        strokeWidth: category === 'All' ? 2 : 2.5,
        strokeOpacity: category === 'All' ? 0.5 : 0.8,
        strokeDasharray: edge.type === 'integration' ? '5,5' : '0',
      },
      markerEnd: {
        type: 'arrowclosed',
        color: getEdgeColor(edge.type),
        width: category === 'All' ? 12 : 16,
        height: category === 'All' ? 12 : 16,
      },
      label: category !== 'All' && filteredEdgeData.length < 20 ? getEdgeLabel(edge.type) : '',
      labelStyle: {
        fontSize: '9px',
        fontWeight: '500',
        color: getEdgeColor(edge.type),
      },
      labelBgStyle: {
        fill: 'rgba(15, 23, 42, 0.95)',
        fillOpacity: 0.95,
        rx: 4,
        ry: 4,
      },
    }));

    setNodes(updatedNodes);
    setEdges(updatedEdges);
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
          <p style={{ fontSize: '1.2rem', color: '#94a3b8', maxWidth: '600px', margin: '0 auto 1rem' }}>
            Visualize how technologies connect and build upon each other in modern development
          </p>
          <div style={{ 
            background: 'rgba(0, 255, 255, 0.1)', 
            border: '1px solid rgba(0, 255, 255, 0.3)', 
            borderRadius: '8px', 
            padding: '0.8rem 1.5rem', 
            margin: '0 auto 2rem',
            maxWidth: '500px',
            fontSize: '0.9rem',
            color: '#64ffda'
          }}>
            💡 <strong>Organized View:</strong> Technologies are now grouped by category with improved spacing and visual hierarchy
          </div>
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
            fitViewOptions={{
              padding: 0.2,
              minZoom: 0.1,
              maxZoom: 1.5,
            }}
            attributionPosition="bottom-left"
          >
            <Controls 
              showZoom={true}
              showFitView={true}
              showInteractive={false}
            />
            <MiniMap
              style={{
                background: '#1e293b',
                border: '1px solid #00ffff',
              }}
              nodeColor={(node) => node.style.background}
            />
            <Background 
              color="#64ffda" 
              gap={20} 
              size={1}
              style={{ backgroundColor: '#0f172a' }}
            />
            <Panel position="top-right">
              <div className="legend">
                <h4>Organization Info</h4>
                <div className="legend-stats">
                  <div className="stat-item">
                    <span className="stat-label">Technologies:</span>
                    <span className="stat-value">{nodes.length}</span>
                  </div>
                  <div className="stat-item">
                    <span className="stat-label">Connections:</span>
                    <span className="stat-value">{edges.length}</span>
                  </div>
                  {selectedCategory !== 'All' && (
                    <div className="stat-item">
                      <span className="stat-label">Category:</span>
                      <span className="stat-value">{selectedCategory}</span>
                    </div>
                  )}
                </div>
                <h4 style={{ marginTop: '1rem' }}>Relationship Types</h4>
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
                  <span>Container</span>
                </div>
                <div className="legend-item">
                  <div className="legend-line" style={{backgroundColor: '#8b5cf6'}}></div>
                  <span>Realtime</span>
                </div>
                <div className="legend-item">
                  <div className="legend-line" style={{backgroundColor: '#6366f1'}}></div>
                  <span>Orchestration</span>
                </div>
              </div>
            </Panel>
          </ReactFlow>
        </div>

        {/* Enhanced Info Panel */}
        <motion.div
          className="tree-info"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <div className="info-cards">
            <div className="info-card">
              <i className="fas fa-sitemap"></i>
              <h3>Organized Layout</h3>
              <p>Technologies are grouped by category with clean, hierarchical positioning</p>
            </div>
            <div className="info-card">
              <i className="fas fa-filter"></i>
              <h3>Smart Filtering</h3>
              <p>Filter by category to focus on specific technology ecosystems and their connections</p>
            </div>
            <div className="info-card">
              <i className="fas fa-search-plus"></i>
              <h3>Interactive Exploration</h3>
              <p>Zoom, pan, and explore relationships with labeled connections and mini-map navigation</p>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default TechTree;
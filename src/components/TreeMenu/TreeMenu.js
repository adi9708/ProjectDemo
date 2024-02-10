import React, { useState } from 'react';
import styles from './TreeMenu.module.css';
import Modal from '../Modal/Modal';

const treeData = [
    {
      id: 'root',
      label: 'Platform',
      children: [
        {
          id: 'parentA',
          label: 'Products',
          children: [
            { id: 'childA1', label: 'Payouts' },
            {
              id: 'childParentA2',
              label: 'Payments',
              children: [
                { id: 'childA21', label: 'Card' },
                { id: 'childA22', label: 'Account' },
              ],
            },
          ],
        },
        {
          id: 'parentB',
          label: 'Features',
          children: [
            { id: 'childB1', label: 'Authentication' },
            { id: 'childB2', label: 'Channels' },
            { id: 'childParentB3', label: 'Compliance' },
          ],
        },
      ],
    },
  ];
  
const TreeNode = ({ node, onSelect, selectedNodeId }) => {
  const [expanded, setExpanded] = useState(false);
  const hasChildren = node.children?.length > 0;

  // Function to handle node click, toggling expansion and selection
  const handleNodeClick = (e) => {
    e.stopPropagation(); // Prevents the click from bubbling up to parent nodes
    if (!hasChildren) {
      onSelect(node); // Call onSelect callback with the selected node
    } else {
      setExpanded(!expanded); // Toggle expansion for nodes with children
    }
  };

  return (
    <div>
      <div className={`${styles.treeNode} ${node.id === selectedNodeId ? styles.selectedNode : ''}`} onClick={handleNodeClick}>
        {!hasChildren && (
          <input
            type="radio"
            name="treeNode"
            checked={node.id === selectedNodeId}
            readOnly // Since you're controlling the checked state programmatically
          />
        )}
        <span className={node.id === selectedNodeId ? styles.selectedText : ''}>
          {hasChildren ? (expanded ? '▼ ' : '► ') : ''}
          {node.label}
        </span>
      </div>
      {expanded && hasChildren && (
        <div className={styles.childNode}>
          {node.children.map((child) => (
            <TreeNode
              key={child.id}
              node={child}
              onSelect={onSelect}
              selectedNodeId={selectedNodeId}
            />
          ))}
        </div>
      )}
    </div>
  );
};

  
export default function TreeMenu() {
  const [selectedNode, setSelectedNode] = useState(null);
  const [isModalOpen, setModalOpen] = useState(false);

  const handleNodeSelect = (node) => {
    setSelectedNode(node);
    setModalOpen(true);
  };

  return (
    <div>
      {treeData.map((rootNode) => (
        <TreeNode
          key={rootNode.id}
          node={rootNode}
          onSelect={handleNodeSelect}
          selectedNodeId={selectedNode?.id}
        />
      ))}
      {isModalOpen && (
        <Modal onClose={() => setModalOpen(false)}>{selectedNode.label}</Modal>
      )}
    </div>
  );
}








// import React, { useState } from 'react';
// import styles from './TreeMenu.module.css';
// import Modal from '../Modal/Modal';

// const treeData = [
//     {
//       id: 'root',
//       label: 'Root',
//       children: [
//         {
//           id: 'parentA',
//           label: 'Parent A',
//           children: [
//             { id: 'childA1', label: 'Child A1' },
//             {
//               id: 'childParentA2',
//               label: 'Child Parent A2',
//               children: [
//                 { id: 'childA21', label: 'Child A21' },
//                 { id: 'childA22', label: 'Child A22' },
//               ],
//             },
//           ],
//         },
//         {
//           id: 'parentB',
//           label: 'Parent B',
//           children: [
//             { id: 'childB1', label: 'Child B1' },
//             { id: 'childB2', label: 'Child B2' },
//             { id: 'childParentB3', label: 'Child Parent B3' },
//           ],
//         },
//       ],
//     },
//   ];
  
// const TreeNode = ({ node, onNodeSelect }) => {
//   const [expanded, setExpanded] = useState(false);
//   const hasChildren = node.children?.length > 0;

//   const handleNodeClick = (node) => {
//     if (!hasChildren) {
//       onNodeSelect(node);
//     } else {
//       setExpanded(!expanded);
//     }
//   };

//   return (
//     <div>
//       <div className={`${styles.treeNode} ${expanded ? styles.expanded : styles.collapsed}`}
//            onClick={() => handleNodeClick(node)}>
//         {hasChildren ? (expanded ? '▼' : '►') : '◉'}
//         {node.label}
//         {!hasChildren && <input type="checkbox" />}
//       </div>
//       {expanded && hasChildren && (
//         <div className={styles.childNode}>
//           {node.children.map((child) => (
//             <TreeNode key={child.id} node={child} onNodeSelect={onNodeSelect} />
//           ))}
//         </div>
//       )}
//     </div>
//   );
// };


// export default function TreeMenu() {
//   const [selectedNode, setSelectedNode] = useState(null);
//   const [isModalOpen, setModalOpen] = useState(false);

//   const handleNodeSelect = (node) => {
//     setSelectedNode(node);
//     setModalOpen(true);
//   };

//   return (
//     <div>
//       {treeData.map((rootNode) => (
//         <TreeNode key={rootNode.id} node={rootNode} onNodeSelect={handleNodeSelect} />
//       ))}
//       {isModalOpen && <Modal onClose={() => setModalOpen(false)}>{selectedNode.label}</Modal>}
//     </div>
//   );
// }


// // Old Code
// // import React, { useState } from 'react';
// // import styles from './TreeMenu.module.css';

// // const treeData = [
// //   {
// //     id: 'root',
// //     label: 'Root',
// //     children: [
// //       {
// //         id: 'parentA',
// //         label: 'Parent A',
// //         children: [
// //           { id: 'childA1', label: 'Child A1' },
// //           {
// //             id: 'childParentA2',
// //             label: 'Child Parent A2',
// //             children: [
// //               { id: 'childA21', label: 'Child A21' },
// //               { id: 'childA22', label: 'Child A22' },
// //             ],
// //           },
// //         ],
// //       },
// //       {
// //         id: 'parentB',
// //         label: 'Parent B',
// //         children: [
// //           { id: 'childB1', label: 'Child B1' },
// //           { id: 'childB2', label: 'Child B2' },
// //           { id: 'childParentB3', label: 'Child Parent B3' },
// //         ],
// //       },
// //     ],
// //   },
// // ];

// // const TreeNode = ({ node }) => {
// //   const [expanded, setExpanded] = useState(false);

// //   const hasChildren = node.children?.length > 0;
// //   const handleNodeClick = (node) => {
// //     if (!hasChildren) {
// //       onNodeSelect(node);
// //     } else {
// //       setExpanded(!expanded);
// //     }
// //   };
  
// //   return (
// //     <div>
// //       <div
// //         className={`${styles.treeNode} ${expanded ? styles.expanded : styles.collapsed}`}
// //         onClick={() => setExpanded(!expanded)}
// //       >
// //         {hasChildren ? (expanded ? '▼' : '►') : '◉'} {node.label}
// //       </div>
// //       {expanded && hasChildren && (
// //         <div className={styles.childNode}>
// //           {node.children.map((child) => (
// //             <TreeNode key={child.id} node={child} />
// //           ))}
// //         </div>
// //       )}
// //     </div>
// //   );
// // };

// // export default function TreeMenu() {
// //   return (
// //     <div>
// //       {treeData.map((rootNode) => (
// //         <TreeNode key={rootNode.id} node={rootNode} />
// //       ))}
// //     </div>
// //   );
// // }

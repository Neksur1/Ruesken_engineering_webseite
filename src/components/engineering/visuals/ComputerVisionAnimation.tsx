import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import * as THREE from 'three';
import {
    Box,
    FileSpreadsheet,
    CheckCircle2,
    MoreHorizontal
} from 'lucide-react';

// --- THREE.JS KOMPONENTE (Echtes 3D) ---
const ThreeDModel = () => {
    const mountRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (!mountRef.current) return;

        // 1. Setup Scene
        const width = mountRef.current.clientWidth;
        const height = mountRef.current.clientHeight;
        const scene = new THREE.Scene();

        // Orthographische Kamera für den "CAD-Look"
        const camera = new THREE.OrthographicCamera(
            width / -2, width / 2, height / 2, height / -2, 1, 1000
        );
        camera.position.set(200, 200, 200); // Isometrische Perspektive
        camera.lookAt(0, 0, 0);

        const renderer = new THREE.WebGLRenderer({
            alpha: true, // Transparenter Hintergrund
            antialias: true
        });
        renderer.setSize(width, height);
        renderer.setPixelRatio(window.devicePixelRatio);
        mountRef.current.appendChild(renderer.domElement);

        // 2. Beleuchtung (Studio Setup)
        const ambientLight = new THREE.AmbientLight(0xffffff, 0.6);
        scene.add(ambientLight);

        const dirLight = new THREE.DirectionalLight(0xffffff, 0.8);
        dirLight.position.set(100, 200, 100);
        scene.add(dirLight);

        const backLight = new THREE.DirectionalLight(0x0b1120, 0.4); // Dark Blue Backlight
        backLight.position.set(-100, -100, -50);
        scene.add(backLight);

        // 3. Geometrie (Extrudierter Block mit Loch)
        const shape = new THREE.Shape();
        const s = 60; // Halbe Größe (120x120 Block)
        shape.moveTo(-s, -s);
        shape.lineTo(s, -s);
        shape.lineTo(s, s);
        shape.lineTo(-s, s);
        shape.lineTo(-s, -s);

        // Das Loch (Bohrung)
        const hole = new THREE.Path();
        hole.absarc(0, 0, 25, 0, Math.PI * 2, true);
        shape.holes.push(hole);

        const extrudeSettings = {
            depth: 30,
            bevelEnabled: true,
            bevelSegments: 2,
            steps: 1,
            bevelSize: 2,
            bevelThickness: 2
        };
        const geometry = new THREE.ExtrudeGeometry(shape, extrudeSettings);

        // Zentrieren der Geometrie
        geometry.center();

        // Material (Metallisch / Clean)
        const material = new THREE.MeshStandardMaterial({
            color: 0xf8fafc, // Fast Weiß
            metalness: 0.3,
            roughness: 0.2,
            emissive: 0xcbd5e1,
            emissiveIntensity: 0.1
        });

        const mesh = new THREE.Mesh(geometry, material);
        scene.add(mesh);

        // Kanten-Highlight (Wireframe Overlay für Tech-Look)
        const edges = new THREE.EdgesGeometry(geometry);
        const lineMaterial = new THREE.LineBasicMaterial({ color: 0x94a3b8, transparent: true, opacity: 0.3 });
        const wireframe = new THREE.LineSegments(edges, lineMaterial);
        mesh.add(wireframe);

        // 4. Animation Loop
        let animationId: number;
        const animate = () => {
            animationId = requestAnimationFrame(animate);

            // Sanfte Rotation
            mesh.rotation.y += 0.005;
            mesh.rotation.x = Math.sin(Date.now() * 0.001) * 0.1; // Leichtes Kippen

            renderer.render(scene, camera);
        };
        animate();

        // 5. Cleanup
        return () => {
            cancelAnimationFrame(animationId);
            if (mountRef.current) {
                mountRef.current.removeChild(renderer.domElement);
            }
            geometry.dispose();
            material.dispose();
            renderer.dispose();
        };
    }, []);

    return <div ref={mountRef} className="w-full h-full" />;
};


// --- UI KOMPONENTEN ---

const StatusBadge = ({ status }: { status: string }) => {
    const config: Record<string, { color: string; text: string }> = {
        idle: { color: 'bg-slate-100 text-slate-500', text: 'Standby' },
        scanning: { color: 'bg-blue-50 text-blue-600 border-blue-200', text: 'Scanning...' },
        processing: { color: 'bg-slate-50 text-[#0B1120] border-slate-200', text: 'Processing...' },
        complete: { color: 'bg-emerald-50 text-emerald-600 border-emerald-200', text: '3D Ready' },
    };

    const current = config[status];

    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            key={status}
            className={`px-2 py-0.5 md:px-3 md:py-1 rounded-full text-[9px] md:text-[10px] font-medium border ${current.color} flex items-center gap-1.5 shadow-sm transition-colors duration-300`}
        >
            <div className={`w-1.5 h-1.5 md:w-2 md:h-2 rounded-full ${status === 'complete' ? 'bg-emerald-500' : 'bg-current animate-pulse'}`} />
            {current.text}
        </motion.div>
    );
};

// --- HAUPT APP ---

export default function ComputerVisionAnimation() {
    const [phase, setPhase] = useState('idle');

    // Ablaufsteuerung
    useEffect(() => {
        const sequence = async () => {
            while (true) {
                setPhase('idle');
                await new Promise(r => setTimeout(r, 1500));
                setPhase('scanning');
                await new Promise(r => setTimeout(r, 3000));
                setPhase('processing');
                await new Promise(r => setTimeout(r, 2000));
                setPhase('complete');
                await new Promise(r => setTimeout(r, 6000));
            }
        };
        sequence();
    }, []);

    return (
        <div className="w-full h-full flex items-center justify-center font-sans text-slate-900">
            {/* Die Haupt-Karte - Matching Agentic Layout */}
            <div className="relative z-10 w-full h-full flex flex-col">
                <div className="relative bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden flex flex-col h-full w-full">

                    {/* Header - Same Style as Agentic */}
                    <div className="px-4 py-3 md:px-6 md:py-4 border-b border-slate-100 flex justify-between items-center bg-slate-50/50">
                        <div className="flex items-center gap-3">
                            {/* Graue Punkte wie bei Agentic */}
                            <div className="flex gap-1.5">
                                <div className="w-2.5 h-2.5 rounded-full bg-slate-200"></div>
                                <div className="w-2.5 h-2.5 rounded-full bg-slate-200"></div>
                                <div className="w-2.5 h-2.5 rounded-full bg-slate-200"></div>
                            </div>
                            <div className="h-4 w-px bg-slate-200 mx-2"></div>
                            <span className="text-xs md:text-sm font-semibold text-slate-600 flex items-center gap-2">
                                <div className="w-1.5 h-1.5 md:w-2 md:h-2 rounded-full bg-[#0B1120]"></div>
                                Vector-to-Mesh Engine
                            </span>
                        </div>
                        <div className="flex items-center gap-2 text-slate-400">
                            <StatusBadge status={phase} />
                            <MoreHorizontal className="w-4 h-4" />
                        </div>
                    </div>

                    {/* Main Content Area */}
                    <div className="relative px-2 md:px-8 py-6 md:py-8 bg-white flex-1 flex flex-col justify-center">

                        {/* Grid Pattern im Hintergrund */}
                        <div className="absolute inset-0 pointer-events-none opacity-[0.03]"
                            style={{
                                backgroundImage: 'linear-gradient(#475569 1px, transparent 1px), linear-gradient(90deg, #475569 1px, transparent 1px)',
                                backgroundSize: '30px 30px'
                            }}
                        />

                        {/* Stage Container */}
                        <div className="relative w-full h-full flex items-center justify-center min-h-[160px]">

                            {/* PHASE 1: BLUEPRINT (2D) */}
                            <AnimatePresence>
                                {(phase === 'idle' || phase === 'scanning') && (
                                    <motion.div
                                        key="blueprint"
                                        initial={{ opacity: 0, scale: 0.95 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        exit={{ opacity: 0, scale: 0.9, filter: "blur(10px)" }}
                                        transition={{ duration: 0.5 }}
                                        className="absolute bg-white shadow-lg rounded-sm border border-slate-200 p-4 w-32 h-32 md:w-40 md:h-40"
                                    >
                                        <svg viewBox="0 0 200 200" className="w-full h-full">
                                            <path
                                                d="M 40 40 H 160 V 160 H 40 Z"
                                                fill="none"
                                                stroke="#334155"
                                                strokeWidth="2"
                                            />
                                            <circle cx="100" cy="100" r="25" fill="none" stroke="#334155" strokeWidth="2" />

                                            {/* Bemaßungen */}
                                            <path d="M 40 175 H 160" stroke="#94a3b8" strokeWidth="1" />
                                            <text x="100" y="190" textAnchor="middle" fontSize="10" fill="#64748b" fontFamily="monospace">120mm</text>

                                            {/* Scan Effekt */}
                                            {phase === 'scanning' && (
                                                <motion.g>
                                                    <motion.rect
                                                        x="35" y="35" width="130" height="130"
                                                        fill="none" stroke="#0B1120" strokeWidth="2" strokeDasharray="5,5"
                                                        initial={{ opacity: 0 }} animate={{ opacity: [0, 1, 0] }} transition={{ repeat: Infinity, duration: 1 }}
                                                    />
                                                    <motion.line
                                                        x1="0" y1="0" x2="200" y2="0"
                                                        stroke="#0B1120" strokeWidth="2"
                                                        initial={{ y1: 0, y2: 0, opacity: 0 }}
                                                        animate={{ y1: [0, 200], y2: [0, 200], opacity: [0, 1, 1, 0] }}
                                                        transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                                                    />
                                                </motion.g>
                                            )}
                                        </svg>
                                    </motion.div>
                                )}
                            </AnimatePresence>

                            {/* PHASE 2: WIREFRAME TRANSITION */}
                            <AnimatePresence>
                                {phase === 'processing' && (
                                    <motion.div
                                        key="wireframe"
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        exit={{ opacity: 0 }}
                                        className="absolute w-32 h-32 md:w-40 md:h-40 flex items-center justify-center"
                                    >
                                        <svg viewBox="0 0 200 200" className="w-full h-full drop-shadow-xl">
                                            {/* Isometric Wireframe construction */}
                                            <motion.path
                                                d="M 50 80 L 150 80 L 150 120 L 50 120 Z"
                                                fill="none" stroke="#0B1120" strokeWidth="1"
                                                initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 0.8 }}
                                            />
                                            <motion.path
                                                d="M 50 120 L 50 150 L 150 150 L 150 120"
                                                fill="none" stroke="#0B1120" strokeWidth="1"
                                                initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 0.8, delay: 0.2 }}
                                            />
                                            {/* Connecting Nodes */}
                                            {[...Array(4)].map((_, i) => (
                                                <motion.circle
                                                    key={i} cx={50 + (i % 2) * 100} cy={80 + Math.floor(i / 2) * 40} r="2" fill="#0B1120"
                                                    initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ delay: 0.5 + i * 0.1 }}
                                                />
                                            ))}
                                        </svg>
                                        <div className="absolute bottom-2 bg-[#0B1120] text-white text-[8px] md:text-[9px] px-2 py-0.5 rounded font-mono">
                                            Generating...
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>

                            {/* PHASE 3: REAL 3D MODEL (Three.js) */}
                            <AnimatePresence>
                                {phase === 'complete' && (
                                    <motion.div
                                        key="model"
                                        initial={{ opacity: 0, scale: 0.8 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        exit={{ opacity: 0 }}
                                        transition={{ type: "spring", stiffness: 100, damping: 20 }}
                                        className="absolute inset-0 z-10"
                                    >
                                        <ThreeDModel />

                                        {/* Floating Label - Kompakt */}
                                        <motion.div
                                            initial={{ opacity: 0, y: 10 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            transition={{ delay: 0.5 }}
                                            className="absolute bottom-3 right-3 bg-white/90 backdrop-blur border border-slate-200 px-2 py-1.5 rounded shadow-md flex items-center gap-2"
                                        >
                                            <div className="bg-emerald-100 p-1 rounded text-emerald-600">
                                                <CheckCircle2 size={12} />
                                            </div>
                                            <div className="text-[9px] font-bold text-slate-700">99.8% Match</div>
                                        </motion.div>
                                    </motion.div>
                                )}
                            </AnimatePresence>

                        </div>

                        {/* Viewport Overlay Info */}
                        <div className="absolute top-2 left-2 text-[8px] text-slate-400 font-mono">
                            <div>CAM: ISO_ORTHO</div>
                        </div>
                    </div>

                    {/* Footer - Toolbar Style like Agentic */}
                    <div className="grid grid-cols-2 divide-x divide-slate-100 border-t border-slate-100 bg-slate-50/50">
                        <div className="p-3 md:p-4 flex items-center justify-center gap-2 md:gap-3">
                            <div className="p-1.5 md:p-2 bg-white rounded-lg border border-slate-200 shadow-sm">
                                <Box className="w-3 h-3 md:w-4 md:h-4 text-[#0B1120]" />
                            </div>
                            <div>
                                <div className="text-[8px] md:text-[10px] font-semibold text-slate-400 uppercase tracking-wider">View</div>
                                <div className="text-xs md:text-sm font-bold text-slate-700">3D Viewport</div>
                            </div>
                        </div>
                        <div className="p-3 md:p-4 flex items-center justify-center gap-2 md:gap-3">
                            <div className="p-1.5 md:p-2 bg-white rounded-lg border border-slate-200 shadow-sm">
                                <FileSpreadsheet className="w-3 h-3 md:w-4 md:h-4 text-blue-600" />
                            </div>
                            <div>
                                <div className="text-[8px] md:text-[10px] font-semibold text-slate-400 uppercase tracking-wider">Source</div>
                                <div className="text-xs md:text-sm font-bold text-slate-700">Technical Drawing</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

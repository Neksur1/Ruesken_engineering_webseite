import React, { useEffect, useRef } from "react";
import { motion, useInView, useAnimation, Variant } from "framer-motion";

interface Props {
    children: React.ReactNode;
    width?: "fit-content" | "100%";
    delay?: number;
    duration?: number;
    yOffset?: number;
    className?: string; // Allow passing classes for layout flexibility
}

export const Reveal = ({
    children,
    width = "fit-content",
    delay = 0,
    duration = 0.5,
    yOffset = 30,
    className = ""
}: Props) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-10% 0px -10% 0px" }); // Trigger a bit earlier/later relative to viewport
    const mainControls = useAnimation();

    useEffect(() => {
        if (isInView) {
            mainControls.start("visible");
        }
    }, [isInView, mainControls]);

    const variants = {
        hidden: { opacity: 0, y: yOffset },
        visible: { opacity: 1, y: 0 },
    };

    return (
        <div ref={ref} style={{ position: "relative", width }} className={className}>
            <motion.div
                variants={variants}
                initial="hidden"
                animate={mainControls}
                transition={{ duration: duration, delay: delay, ease: "easeOut" }}
            >
                {children}
            </motion.div>
        </div>
    );
};

export default Reveal;

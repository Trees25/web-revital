"use client";
import { motion } from "framer-motion";
import { CtaButton } from "./CtaButton";

export function StickyCta() {
    return (
        <motion.div
            initial={{ y: 100 }}
            animate={{ y: 0 }}
            transition={{ delay: 1, type: "spring" }}
            className="fixed inset-x-0 bottom-0 z-50 bg-ink/90 p-3 backdrop-blur md:bottom-6 md:inset-x-auto md:right-6 md:rounded-full md:p-0 md:bg-transparent"
        >
            <CtaButton className="w-full md:w-auto md:shadow-2xl" />
        </motion.div>
    );
}
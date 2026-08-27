import React from "react";
import { Check } from "lucide-react";
import "./RegisterSteps.css";

export default function RegisterSteps({ step }) {
    return (
        <div className="register-steps">

            <div
                className={`register-step ${
                    step === 1
                        ? "active"
                        : step > 1
                        ? "completed"
                        : ""
                }`}
            >
                <div className="step-circle">
                    {step > 1 ? <Check size={14} /> : "1"}
                </div>

                <span className="step-label">
                    Dados pessoais
                </span>
            </div>

            <div
                className={`step-line ${
                    step >= 2 ? "completed" : ""
                }`}
            />

            <div
                className={`register-step ${
                    step === 2 ? "active" : ""
                }`}
            >
                <div className="step-circle">
                    2
                </div>

                <span className="step-label">
                    Endereço
                </span>
            </div>

        </div>
    );
}
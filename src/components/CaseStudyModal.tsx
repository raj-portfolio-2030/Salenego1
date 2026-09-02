import React, { useEffect } from 'react';
import { X, CheckCircle2, Shield, ArrowRight } from 'lucide-react';
import { CaseStudy } from '../data/content';

interface CaseStudyModalProps {
  caseStudy: CaseStudy | null;
  onClose: () => void;
}

export const CaseStudyModal: React.FC<CaseStudyModalProps> = ({ caseStudy, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (caseStudy) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [caseStudy, onClose]);

  if (!caseStudy) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-case-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/40 backdrop-blur-sm animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        className="relative bg-white rounded-2xl w-full max-w-2xl max-h-[90vh] overflow-y-auto border border-[#E3E9EC] shadow-2xl p-6 sm:p-8 animate-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          type="button"
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-lg text-[#7A8190] hover:text-[#22252B] hover:bg-[#F7F7F4] transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#3B5BDB]"
          aria-label="Close case study dialog"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Header */}
        <div className="pr-8 mb-6 pb-6 border-b border-[#E8EAEE]">
          {caseStudy.logoUrl && (
            <div className="mb-4">
              <img
                src={caseStudy.logoUrl}
                alt={caseStudy.title}
                className="h-9 w-auto max-w-[140px] object-contain"
              />
            </div>
          )}
          <span className="text-xs font-bold text-[#3B5BDB] uppercase tracking-wider block mb-1">
            {caseStudy.industry}
          </span>
          <h3 id="modal-case-title" className="text-xl sm:text-2xl font-bold text-[#22252B] mb-2">
            {caseStudy.title}
          </h3>
          <span className="inline-block text-xs font-medium text-[#5F6673] bg-[#F7F7F4] px-2.5 py-1 rounded-md border border-[#E8EAEE]">
            {caseStudy.type}
          </span>
        </div>

        {/* Structured Sections */}
        <div className="space-y-5 text-sm">
          
          <div>
            <h4 className="text-xs font-bold text-[#7A8190] uppercase tracking-wider mb-1">
              Requirement
            </h4>
            <p className="text-[#22252B] font-medium leading-relaxed">
              {caseStudy.requirement}
            </p>
          </div>

          {caseStudy.businessProblem && (
            <div>
              <h4 className="text-xs font-bold text-[#7A8190] uppercase tracking-wider mb-1">
                Business Problem
              </h4>
              <p className="text-[#5F6673] leading-relaxed">
                {caseStudy.businessProblem}
              </p>
            </div>
          )}

          <div>
            <h4 className="text-xs font-bold text-[#7A8190] uppercase tracking-wider mb-1">
              Commercial Challenge
            </h4>
            <p className="text-[#5F6673] leading-relaxed">
              {caseStudy.commercialChallenge}
            </p>
          </div>

          <div>
            <h4 className="text-xs font-bold text-[#7A8190] uppercase tracking-wider mb-1">
              Sales Approach
            </h4>
            <p className="text-[#5F6673] leading-relaxed">
              {caseStudy.salesApproach}
            </p>
          </div>

          <div>
            <h4 className="text-xs font-bold text-[#7A8190] uppercase tracking-wider mb-1">
              Solution
            </h4>
            <p className="text-[#5F6673] leading-relaxed">
              {caseStudy.solution}
            </p>
          </div>

          <div className="bg-[#EDF2FE] border border-[#BAC8FF] rounded-xl p-4">
            <h4 className="text-xs font-bold text-[#3B5BDB] uppercase tracking-wider mb-1">
              Sales Outcome
            </h4>
            <p className="text-xs sm:text-sm font-semibold text-[#22252B] leading-relaxed">
              {caseStudy.salesOutcome}
            </p>
          </div>

          {caseStudy.commercialOwnership && (
            <div className="pt-2">
              <h4 className="text-xs font-bold text-[#7A8190] uppercase tracking-wider mb-1">
                Commercial Ownership
              </h4>
              <p className="text-xs font-medium text-[#5F6673]">
                {caseStudy.commercialOwnership}
              </p>
            </div>
          )}
        </div>

        {/* Modal Timing Footer */}
        {caseStudy.timingFooter && (
          <div className="mt-6 pt-4 border-t border-[#E8EAEE] text-center">
            <span className="text-[11px] font-medium text-[#7A8190]">
              {caseStudy.timingFooter}
            </span>
          </div>
        )}
      </div>
    </div>
  );
};

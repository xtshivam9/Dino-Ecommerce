"use client";

import { Document } from "@react-pdf/renderer";

// Preliminary sections (Roman numerals)
import TitlePage from "./sections/TitlePage";
import Declaration from "./sections/Declaration";
import Abstract from "./sections/Abstract";
import TableOfContents from "./sections/TableOfContents";
import ListOfFigures from "./sections/ListOfFigures";

// Content sections (Arabic numerals)
import Introduction from "./sections/Introduction";
import ProblemStatement from "./sections/ProblemStatement";
import Objectives from "./sections/Objectives";
import SDLCOverview from "./sections/SDLCOverview";
import SRS from "./sections/SRS";
import FeasibilityStudy from "./sections/FeasibilityStudy";
import DesignDiagrams from "./sections/DesignDiagrams";
import COCOMOEstimation from "./sections/COCOMOEstimation";
import Implementation from "./sections/Implementation";
import Conclusions from "./sections/Conclusions";
import InnerCover from "./sections/InnerCover";

/**
 * Main Project Report PDF Document
 * Composes all sections into a single printable document
 *
 * Page Numbering (Optimized for 80-85 pages):
 * - Preliminary pages: Roman numerals (i-viii) - ~8 pages
 * - Content pages: Arabic numerals (1-77) - ~77 pages
 *
 * Page Distribution:
 * - Chapter 1 (Introduction): 6 pages
 * - Chapter 2 (Problem Statement): 6 pages
 * - Chapter 3 (Objectives): 4 pages
 * - Chapter 4 (Feasibility): 6 pages
 * - Chapter 5 (Estimation/COCOMO): 5 pages
 * - Chapter 6 (SDLC + Requirements): 15 pages
 * - Chapter 7 (Design): 8 pages
 * - Chapter 8 (Implementation): 8 pages
 * - Chapter 9 (Conclusions & Future Scope): 8 pages
 * Total: ~80-85 pages
 */
export default function ProjectReportDocument() {
  return (
    <Document
      title="dj-ecommerce - Project Report"
      author="dj-ecommerce Team"
      subject="BCA Final Year Project Report"
      keywords="e-commerce, django, stripe, project report, BCA"
    >
      {/* ========== Preliminary Pages (Roman Numerals) ========== */}
      <TitlePage />
      <InnerCover />
      <Declaration  />
      <Abstract  />
      <TableOfContents  />
      <ListOfFigures  />

      {/* ========== Content Pages (Arabic Numerals) ========== */}

      {/* Chapter 1: Introduction */}
      <Introduction />

      {/* Chapter 2: Problem Statement */}
      <ProblemStatement />

      {/* Chapter 3: Objectives */}
      <Objectives />

      {/* Chapter 4: Feasibility Study */}
      <FeasibilityStudy />

      {/* Chapter 5: Estimation & Planning (COCOMO) */}
      <COCOMOEstimation />

      {/* Chapter 6: SDLC & Requirements */}
      <SDLCOverview />
      <SRS />

      {/* Chapter 7: System Design */}
      <DesignDiagrams />

      {/* Chapter 7: Implementation */}
      <Implementation />

      {/* Chapter 9: Conclusions & Future Scope */}
      <Conclusions />
    </Document>
  );
}

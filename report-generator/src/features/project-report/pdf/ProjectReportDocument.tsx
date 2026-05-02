"use client";

import { Document } from "@react-pdf/renderer";

// Preliminary sections (Roman numerals)
import TitlePage from "./sections/TitlePage";
import Declaration from "./sections/Declaration";
import Certificate from "./sections/Certificate";
import Acknowledgement from "./sections/Acknowledgement";
import Preface from "./sections/Preface";
import Abstract from "./sections/Abstract";
import TableOfContents from "./sections/TableOfContents";
import ListOfFigures from "./sections/ListOfFigures";
import ListOfTables from "./sections/ListOfTables";
import Acronyms from "./sections/Acronyms";

// Content sections (Arabic numerals)
import Introduction from "./sections/Introduction";
import ProblemStatement from "./sections/ProblemStatement";
import Objectives from "./sections/Objectives";
import SDLCOverview from "./sections/SDLCOverview";
import ProcessModel from "./sections/ProcessModel";
import RequirementGathering from "./sections/RequirementGathering";
import SRS from "./sections/SRS";
import FeasibilityStudy from "./sections/FeasibilityStudy";
import DesignDiagrams from "./sections/DesignDiagrams";
import COCOMOEstimation from "./sections/COCOMOEstimation";
import Implementation from "./sections/Implementation";
import Testing from "./sections/Testing";
import UserManual from "./sections/UserManual";
import OutputScreens from "./sections/OutputScreens";
import Conclusions from "./sections/Conclusions";
import References from "./sections/References";
import Annexures from "./sections/Annexures";

/**
 * Main Project Report PDF Document
 * Composes all sections into a single printable document
 */
export default function ProjectReportDocument() {
  return (
    <Document
      title="AROWAI 1.0 - Project Report"
      author="Rutashman Sharma & Lovejinder Singh"
      subject="BCA Final Year Project Report"
      keywords="ecommerce, django, project report, BCA"
    >
      {/* ========== Preliminary Pages (Roman Numerals) ========== */}
      <TitlePage />
      <Declaration pageNumber={1} />
      <Certificate pageNumber={2} />
      <Acknowledgement pageNumber={3} />
      <Preface pageNumber={4} />
      <Abstract pageNumber={5} />
      <TableOfContents startPage={6} />
      <ListOfFigures startPage={7} />
      <ListOfTables startPage={8} />
      <Acronyms startPage={10} />

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

      {/* Chapter 6: SDLC */}
      <SDLCOverview />
      <ProcessModel />
      <RequirementGathering />
      <SRS />

      {/* Chapter 7: System Design */}
      <DesignDiagrams />

      {/* Chapter 8: Implementation */}
      <Implementation />

      {/* Chapter 9: Testing */}
      <Testing />

      {/* Chapter 10: User Manual */}
      <UserManual />

      {/* Chapter 11: Output & Screenshots */}
      <OutputScreens />

      {/* Chapter 12: Conclusions & Future Scope */}
      <Conclusions />

      {/* References */}
      <References />

      {/* Annexures */}
      <Annexures />
    </Document>
  );
}

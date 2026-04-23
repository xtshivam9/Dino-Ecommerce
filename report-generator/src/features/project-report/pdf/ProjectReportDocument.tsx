"use client";

import { Document } from "@react-pdf/renderer";

// Preliminary sections (Roman numerals)
import TitlePage from "./sections/TitlePage";
import InnerCover from "./sections/InnerCover";
import Certificate from "./sections/Certificate";
import Declaration from "./sections/Declaration";
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
import FeasibilityStudy from "./sections/FeasibilityStudy";
import COCOMOEstimation from "./sections/COCOMOEstimation";
import SDLCOverview from "./sections/SDLCOverview";
import RequirementGathering from "./sections/RequirementGathering";
import SRS from "./sections/SRS";
import DesignDiagrams from "./sections/DesignDiagrams";
import Implementation from "./sections/Implementation";
import Testing from "./sections/Testing";
import UserManual from "./sections/UserManual";
import OutputScreens from "./sections/OutputScreens";
import Conclusions from "./sections/Conclusions";

// Back Matter
import References from "./sections/References";
import Annexures from "./sections/Annexures";

/**
 * Main Project Report PDF Document
 * Composed version including all chapters and preliminary pages.
 */
export default function ProjectReportDocument() {
  return (
    <Document
      title="AROWAI - Project Report"
      author="AROWAI Team"
      subject="BCA Final Year Project Report"
      keywords="e-commerce, AROWAI, automation, project report, BCA"
    >
      {/* ========== Preliminary Pages (Roman Numerals) ========== */}
      <TitlePage />
      <InnerCover />
      <Certificate />
      <Declaration />
      <Acknowledgement />
      <Preface />
      <Abstract />
      <TableOfContents />
      <ListOfFigures />
      <ListOfTables />
      <Acronyms />

      {/* ========== Content Chapters (Arabic Numerals) ========== */}
      <Introduction />
      <ProblemStatement />
      <Objectives />
      <FeasibilityStudy />
      <COCOMOEstimation />
      <SDLCOverview />
      <RequirementGathering />
      <SRS />
      <DesignDiagrams />
      <Implementation />
      <Testing />
      <UserManual />
      <OutputScreens />
      <Conclusions />

      {/* ========== Back Matter ========== */}
      <References />
      <Annexures />
    </Document>
  );
}

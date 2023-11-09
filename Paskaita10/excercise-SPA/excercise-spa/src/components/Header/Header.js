import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import Pagrindinis from "../Pagrindinis/Pagrindinis";
import ApieMus from "../ApieMus/ApieMus";
import Naujienos from "../Naujienos/Naujienos";
import Paslaugos from "../Paslaugos/Paslaugos";
import Darbai from "../Darbai/Darbai";
import Kontaktai from "../Kontaktai/Kontaktai";

export default function Header() {
  return (
    <div>
      <img
        src="https://www.humanrightslogo.net/sites/default/files/HRLogoCMYKsmall.jpg"
        alt="logo"
      ></img>
      <div>
        <Link to={"/"}>Pagrindinis</Link>
        <Link to={"/Apie"}>Apie Mus</Link>
        <Link to={"/Naujienos"}>Naujienos</Link>
        <Link to={"/Paslaugos"}>Paslaugos</Link>
        <Link to={"/Darbai"}>Darbai</Link>
        <Link to={"/Kontaktai"}>Kontaktai</Link>
      </div>
      <Routes>
        <Route path="/" element={<Pagrindinis />} />
        <Route path="/Apie" element={<ApieMus />} />
        <Route path="/Naujienos" element={<Naujienos />} />
        <Route path="/Paslaugos" element={<Paslaugos />} />
        <Route path="/Darbai" element={<Darbai />} />
        <Route path="/Kontaktai" element={<Kontaktai />} />
      </Routes>
    </div>
  );
}

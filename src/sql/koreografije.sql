-- phpMyAdmin SQL Dump
-- version 4.5.1
-- http://www.phpmyadmin.net
--
-- Host: 127.0.0.1
-- Generation Time: Jun 01, 2017 at 05:58 PM
-- Server version: 10.1.13-MariaDB
-- PHP Version: 5.6.23

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `koreografije`
--

-- --------------------------------------------------------

--
-- Table structure for table `koreografije`
--

CREATE TABLE `koreografije` (
  `ID` int(11) NOT NULL,
  `Ime` varchar(100) NOT NULL,
  `Koreograf` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `koreografije`
--

INSERT INTO `koreografije` (`ID`, `Ime`, `Koreograf`) VALUES
(1, 'Crna Gora', 'Branko Markovic'),
(2, 'Velika Cocecka igra', 'Branko Markovic'),
(3, 'Ruske gre', 'Mitke'),
(4, 'Igre iz Gnjilana', 'Goca Vukicevic'),
(5, 'Igre sa Kosova', 'Andrija Karaklajic'),
(6, 'Vojvodina', 'Olga Skovran'),
(7, 'Lindjo', 'Jelena NIkolic'),
(8, 'Srbija', 'Bata Njegova');

-- --------------------------------------------------------

--
-- Table structure for table `korisnik`
--

CREATE TABLE `korisnik` (
  `ID` int(11) NOT NULL,
  `Username` varchar(50) NOT NULL,
  `Password` varchar(100) NOT NULL,
  `Token` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `korisnik`
--

INSERT INTO `korisnik` (`ID`, `Username`, `Password`, `Token`) VALUES
(2, 'jekana', 'a0829f46b9882cfcf09c9a0227fcd8d3', '65163c48af3c6ec367a2690b219cd713134459c1');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `koreografije`
--
ALTER TABLE `koreografije`
  ADD PRIMARY KEY (`ID`);

--
-- Indexes for table `korisnik`
--
ALTER TABLE `korisnik`
  ADD PRIMARY KEY (`ID`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `koreografije`
--
ALTER TABLE `koreografije`
  MODIFY `ID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;
--
-- AUTO_INCREMENT for table `korisnik`
--
ALTER TABLE `korisnik`
  MODIFY `ID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;

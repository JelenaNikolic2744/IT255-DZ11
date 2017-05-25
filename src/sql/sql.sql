-- phpMyAdmin SQL Dump
-- version 4.5.1
-- http://www.phpmyadmin.net
--
-- Host: 127.0.0.1
-- Generation Time: May 25, 2017 at 12:48 PM
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
(5, 'Igre sa Kosova', 'Andrija Karaklajic');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `koreografije`
--
ALTER TABLE `koreografije`
  ADD PRIMARY KEY (`ID`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `koreografije`
--
ALTER TABLE `koreografije`
  MODIFY `ID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
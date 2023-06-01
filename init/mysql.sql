-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: mysql
-- Generation Time: May 30, 2023 at 04:55 PM
-- Server version: 8.0.32
-- PHP Version: 8.1.17

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `chowchow-rental`
--
CREATE DATABASE IF NOT EXISTS `chowchow-rental` DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci;
USE `chowchow-rental`;

-- --------------------------------------------------------

--
-- Table structure for table `Billing`
--

CREATE TABLE `Billing` (
  `billingId` varchar(191) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `billTimestamp` timestamp NOT NULL,
  `invoiceId` varchar(191) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `paymentMethodId` varchar(191) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `paidAmount` double NOT NULL,
  `firstName` varchar(30) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `lastName` varchar(30) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `tel` varchar(10) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `paymentSlipUrl` text CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `Billing`
--

INSERT INTO `Billing` (`billingId`, `billTimestamp`, `invoiceId`, `paymentMethodId`, `paidAmount`, `firstName`, `lastName`, `tel`, `paymentSlipUrl`) VALUES
('033fb740-748b-462c-860c-00458a27a9de', '2023-05-25 00:00:00', '6af0bb68-ac6c-4052-81a9-2c8a56386d85', 'DC', 480, 'Sam', 'Smith', '0803818786', 'dive.com'),
('07b084f6-0576-4916-a47d-882facee59da', '2023-05-25 00:00:00', '9e6c104c-4cd3-4cd7-b0b9-3d8d15d88f5b', 'TR', 550, 'Xue', 'Tai', '0495545292', 'dive.com'),
('0d367783-0771-4d24-b688-90bb29b2445b', '2023-05-25 00:00:00', '8e9d9fe5-71ca-41d1-b517-81ca13b964b4', 'B7', 45.5, 'David', 'Solace', '0502070789', 'dive.com'),
('1a80c293-d1fc-4b11-b96f-1d3309066a9a', '2023-05-25 00:00:00', '890848ea-6cd8-42f7-b8e9-11f1e4a712b0', 'BC', 61, 'Comann', 'Can', '0453475789', 'dive.com'),
('1c99bfb2-fdba-4352-a48a-2a1ff7be241f', '2023-05-25 00:00:00', 'dfa43f67-7373-4a23-a2ad-928b0d64bb2c', 'BC', 73, 'John', 'Solace', '0779835841', 'dive.com'),
('20ee3e01-9c17-485e-84b5-743b51f532be', '2020-07-12 13:46:33', 'db26cefe-2341-4e6f-aabd-44fdb554f371', 'EB', 740, 'Ubumtu', 'Tunbuk', '0879548454', 'dive.com'),
('320ffb33-386f-453e-b83c-60ccc6ca2ac7', '2023-05-25 00:00:00', '83831059-1ffb-4fa6-a712-dd994c59b1e1', 'B7', 863, 'David', 'Solace', '0502070789', 'dive.com'),
('388885ab-c367-4753-aed3-86746e6a675b', '2023-06-02 14:47:00', '0747d7fc-058a-4cf8-baa4-b5dffadbe243', 'B7', 123, 'dddd', 'fffff', 'fffff', 'fffff'),
('48a508b6-e468-4f99-b054-9a08870af567', '2023-06-02 14:47:00', '0747d7fc-058a-4cf8-baa4-b5dffadbe243', 'B7', 123, 'dddd', 'fffff', 'fffff', 'fffff'),
('68b2a528-91f4-4f2d-800d-5a0998d9f4aa', '2023-05-25 00:00:00', 'bbe90777-06dc-4af3-964b-735f56d6db69', 'TR', 77, 'Nguen', 'Pai', '0014017654', 'dive.com'),
('6fc42153-cdce-4fea-99fb-be976b609b32', '2021-07-15 11:14:21', 'e9983238-01ca-4c8d-b25f-d1e97e07e062', 'CC', 10, 'Utah', 'Santa', '0819354792', 'dive.com'),
('8a3d6e2f-060a-4dc9-b092-51c7f46cdd62', '2020-07-12 13:46:33', '40415a58-d5d4-4da4-a7cd-22e976b88481', 'CC', 796, 'Asman', 'Coper', '0972409937', 'dive.com'),
('8db6b96f-628f-47f5-b825-bbf020386395', '2023-05-25 00:00:00', 'ec76ac1d-572f-4aae-9440-43aaac6b00be', 'TR', 730, 'Prapai', 'Benja', '0619244980', 'dive.com'),
('8e48b17c-75c3-408a-8907-189d9f6a657e', '2023-05-25 00:00:00', '8b760fdf-5ed5-4574-a11d-2a9274addb49', 'EB', 78.7, 'Somsri', 'Sakulwong', '0530542682', 'dive.com'),
('a1523369-8ed0-4894-9810-4981808b4235', '2023-06-02 14:47:00', '0747d7fc-058a-4cf8-baa4-b5dffadbe243', 'B7', 123, 'dddj', 'fffff', 'fffff', 'fffff'),
('bef3cc3d-6bd6-4ea9-b43e-d6a456ce8667', '2023-05-25 00:00:00', '5a6e9772-1334-4f48-96cc-a8ba278e6c8b', 'B7', 74.1, 'Wager', 'Josephson', '0112338943', 'dive.com'),
('c0d33cac-2aa9-4492-aa44-cc4ad914ebd3', '2023-05-24 09:15:02', '59ec442d-6cce-4127-bfd2-c4bdf0b44ddd', 'CC', 97.6, 'Raheem', 'Kirsley', '0840649093', 'dive.com'),
('c21c3702-65c9-4d7f-a567-76668535c575', '2023-05-25 00:00:00', 'e96a2809-b3e4-414a-a6b7-258d24d84d02', 'PP', 162.5, 'Venisa', 'Vico', '0777781669', 'dive.com'),
('c460a51c-3b53-4f39-b69b-226f3e96ca14', '2023-05-25 00:00:00', 'eacbd584-a4ad-41a6-8c47-2d2523ddac94', 'TR', 616, 'Ty', 'Tong', '0474037743', 'dive.com'),
('d32454f3-c677-43f3-9121-abd720245267', '2023-05-25 00:00:00', 'fec823be-c0b8-4e26-9228-920e79601be2', 'EB', 421.5, 'Hitman', 'Huffton', '0576861489', 'dive.com'),
('da1f532d-9bd1-4632-9c80-23ea161a0c96', '2023-05-25 00:00:00', 'ad73ff3b-82fd-4cba-b97c-f6d9b7d09f76', 'PP', 576.5, 'Ko', 'Pho', '0352826682', 'dive.com'),
('deef95d6-3150-42f9-84fa-f4171a2cf97d', '2023-05-25 00:00:00', 'a13307d5-cd04-4696-86a0-a06797bcd0c9', 'PP', 54.25, 'Coun', 'Piere', '0021609352', 'dive.com'),
('f79975d5-b669-4050-b2e6-d523ef43993e', '2023-05-25 00:00:00', '763622aa-4cf9-4855-8ee8-88f4ef0c8d4d', 'DC', 6.5, 'Sam', 'Smith', '0002435901', 'https://dive.com');

-- --------------------------------------------------------

--
-- Table structure for table `Cart`
--

CREATE TABLE `Cart` (
  `cartNo` varchar(191) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `customerId` varchar(191) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `productId` varchar(191) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `quantity` int NOT NULL,
  `status` int NOT NULL,
  `timestamp` timestamp NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `Cart`
--

INSERT INTO `Cart` (`cartNo`, `customerId`, `productId`, `quantity`, `status`, `timestamp`) VALUES
('03ff892c-fade-11ed-9373-0242ac140002', '038eb19c-787b-47ab-a137-7daf587d9a7c', '199846', 1, 1, '2023-05-25 09:24:57'),
('0b7e738e-fade-11ed-9373-0242ac140002', '288df130-111b-42cf-9d98-7ec941d013a6', '409884', 2, 1, '2023-05-25 09:25:10'),
('11aef89f-cfac-4656-9019-10e382f94ef0', '67290a8d-a1ee-4b2e-8bc2-b39beb3c9ec1', '199846', 1, 1, '2023-05-30 06:46:03'),
('13adfe5d-fade-11ed-9373-0242ac140002', '98dc25dd-8c27-4007-bfc4-61f67579d0b7', '584490', 2, 1, '2023-05-25 09:25:23'),
('18d1dd3b-fade-11ed-9373-0242ac140002', 'c0a94f1d-7b14-4806-916d-b89b6a3b18a4', '990949', 5, 1, '2023-05-25 09:25:32'),
('1f8fc1f2-fade-11ed-9373-0242ac140002', 'd4423a1d-54cb-4878-80e0-d09a0dad1e7a', '199846', 1, 0, '2023-05-25 09:25:43'),
('244da810-2bd7-4c33-b57b-8f5863c68642', 'd0c8ab6f-8b20-44b7-909a-681dab4c487c', '409884', 1, 1, '2023-05-28 16:52:49'),
('24cb25fa-fade-11ed-9373-0242ac140002', 'fa1cab3c-0db0-4a8c-ba4d-674a074c519b', '984952', 1, 1, '2023-05-25 09:25:52'),
('2dd1d8ed-15dc-475f-b516-7f75f98493d2', '67290a8d-a1ee-4b2e-8bc2-b39beb3c9ec1', '844931', 1, 1, '2023-05-30 06:46:55'),
('2e97251c-fade-11ed-9373-0242ac140002', 'fa1cab3c-0db0-4a8c-ba4d-674a074c519b', '501919', 1, 2, '2023-05-25 09:26:08'),
('37b8621c-03c0-4cf0-86ae-98773ba0449f', '67290a8d-a1ee-4b2e-8bc2-b39beb3c9ec1', '159409', 1, 1, '2023-05-29 09:27:29'),
('382b11c0-fade-11ed-9373-0242ac140002', 'ba92064c-0622-4577-a961-3f4f5f915d11', '665190', 2, 0, '2023-05-25 09:26:25'),
('44eb8098-080b-40fd-91a7-132f8e5fdb0b', '67290a8d-a1ee-4b2e-8bc2-b39beb3c9ec1', '409884', 1, 1, '2023-05-30 14:10:50'),
('49d7f8f2-9894-4b74-beba-2bd85701ccd2', 'd0c8ab6f-8b20-44b7-909a-681dab4c487c', '159409', 1, 1, '2023-05-29 17:43:45'),
('67930706-56d1-42ee-9c42-b5bdddf863e3', '98dc25dd-8c27-4007-bfc4-61f67579d0b7', '621480', 1, 1, '2023-05-25 09:24:57'),
('75054ce9-b7a3-4244-b0de-7e9a145d38bd', 'bd8c956b-eedc-40a0-8f7e-f4f73e7280f5', '621480', 5, 1, '2023-01-01 00:00:00'),
('8fb55982-1ca0-4b6a-8f18-41b7993a462d', 'd0c8ab6f-8b20-44b7-909a-681dab4c487c', '159409', 1, 1, '2023-05-29 02:16:42'),
('98a13acc-3a1e-4b64-a22e-000ed62d3c21', 'd0c8ab6f-8b20-44b7-909a-681dab4c487c', '159409', 1, 1, '2023-05-29 19:38:40'),
('af4eb17d-cc98-486e-9cfd-d7c96a117f46', '038eb19c-787b-47ab-a137-7daf587d9a7c', '18624', 2, 1, '2023-05-25 09:24:57'),
('afd7aa0c-0556-4970-bab7-a1f5d90c9c78', 'd0c8ab6f-8b20-44b7-909a-681dab4c487c', '159409', 2, 1, '2023-05-29 02:19:29'),
('bc4dc1ae-b437-4241-a698-7bc85ee45e26', '67290a8d-a1ee-4b2e-8bc2-b39beb3c9ec1', '584490', 1, 1, '2023-05-30 06:47:41'),
('cf58f4f3-4c22-47e4-9de1-a56e3545a4d8', 'd0c8ab6f-8b20-44b7-909a-681dab4c487c', '199846', 1, 1, '2023-05-28 16:58:55'),
('cfc71514-39f2-4c18-8ad0-60ce86e8738e', '67290a8d-a1ee-4b2e-8bc2-b39beb3c9ec1', '501919', 1, 1, '2023-05-30 06:46:29'),
('d888197e-be63-4819-b15b-8a8f2a4b346e', '67290a8d-a1ee-4b2e-8bc2-b39beb3c9ec1', '159409', 1, 1, '2023-05-30 06:46:06'),
('d96031d0-1ee0-485f-b474-0e7ff78e117c', 'd0c8ab6f-8b20-44b7-909a-681dab4c487c', '199846', 2, 0, '2022-01-01 00:00:00'),
('ddbac3ff-ee62-4604-9533-8823fbc4397c', '67290a8d-a1ee-4b2e-8bc2-b39beb3c9ec1', '199846', 1, 1, '2023-05-30 06:45:52'),
('e8f1ad75-dab7-4ffc-aaea-8e30783c9292', 'd0c8ab6f-8b20-44b7-909a-681dab4c487c', '159409', 1, 1, '2023-05-28 16:57:35'),
('efd51806-fadd-11ed-9373-0242ac140002', '6c4696ae-8cd8-4c85-80dd-fcb9148bd16b', '844931', 1, 1, '2023-05-25 09:24:23'),
('f95612eb-4204-427f-a4d4-7d50203fcf57', '288df130-111b-42cf-9d98-7ec941d013a6', '810847', 1, 1, '2023-01-01 00:00:00'),
('fe5ddf9b-fadd-11ed-9373-0242ac140002', '9c51e05b-160b-44a8-909e-cb04a69e60ce', '409884', 1, 0, '2023-05-25 09:24:48');

-- --------------------------------------------------------

--
-- Table structure for table `Category`
--

CREATE TABLE `Category` (
  `categoryId` varchar(4) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `categoryName` varchar(30) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `Category`
--

INSERT INTO `Category` (`categoryId`, `categoryName`) VALUES
('1100', 'chair'),
('1200', 'desk'),
('1201', 'table'),
('2013', 'house'),
('2100', 'tree'),
('3100', 'balloon'),
('3101', 'ball'),
('3447', 'light'),
('4100', 'lamp'),
('6212', 'light'),
('6794', 'firework');

-- --------------------------------------------------------

--
-- Table structure for table `CategoryProblem`
--

CREATE TABLE `CategoryProblem` (
  `categoryProblemId` varchar(2) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `categoryProblemN` text CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `positionId` varchar(191) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `CategoryProblem`
--

INSERT INTO `CategoryProblem` (`categoryProblemId`, `categoryProblemN`, `positionId`) VALUES
('AE', 'Application Error', 'MA'),
('FB', 'Feedback', 'SA'),
('IS', 'Improper Service', 'MA'),
('LD', 'Late Delivery', 'DL'),
('PP', 'Payment Problem', 'SA'),
('QA', 'Question  Answer', 'MA'),
('UA', 'Unauthorized access', 'MA');

-- --------------------------------------------------------

--
-- Table structure for table `Customer`
--

CREATE TABLE `Customer` (
  `customerId` varchar(191) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `firstName` varchar(30) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `lastName` varchar(30) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `dob` date NOT NULL,
  `tel` varchar(10) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `email` varchar(30) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `password` varchar(60) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `Customer`
--

INSERT INTO `Customer` (`customerId`, `firstName`, `lastName`, `dob`, `tel`, `email`, `password`) VALUES
('038eb19c-787b-47ab-a137-7daf587d9a7c', 'John', 'White', '2002-01-02', '0123456789', 'johnWhite@gmail.com', '$2a$10$6fZMKfq3br33VXY1RkmHVukV6IAEt2SsjAhFp/FMHM/ETeiYivLMm'),
('288df130-111b-42cf-9d98-7ec941d013a6', 'Kulyanuch', 'Chim', '1967-08-02', '0463218597', 'Kulpare@zzz.com', '$2a$10$6fZMKfq3br33VXY1RkmHVukV6IAEt2SsjAhFp/FMHM/ETeiYivLMm'),
('67290a8d-a1ee-4b2e-8bc2-b39beb3c9ec1', 'admin2', 'test', '2023-05-05', '1111111111', 'a@a.a', '$2a$10$6fZMKfq3br33VXY1RkmHVukV6IAEt2SsjAhFp/FMHM/ETeiYivLMm'),
('6c4696ae-8cd8-4c85-80dd-fcb9148bd16b', 'Warissa', 'Patissuer', '2003-04-23', '0241563877', 'warisPat@kmutt.ac.th', '$2a$10$6fZMKfq3br33VXY1RkmHVukV6IAEt2SsjAhFp/FMHM/ETeiYivLMm'),
('98dc25dd-8c27-4007-bfc4-61f67579d0b7', 'Chanida', 'Chana', '2004-05-29', '0349857610', 'kiminoto@hotmail.com', '$2a$10$6fZMKfq3br33VXY1RkmHVukV6IAEt2SsjAhFp/FMHM/ETeiYivLMm'),
('9c51e05b-160b-44a8-909e-cb04a69e60ce', 'Ajan', 'Daeng', '1999-12-11', '0159326478', 'deang007@yahoo.uk', '$2a$10$6fZMKfq3br33VXY1RkmHVukV6IAEt2SsjAhFp/FMHM/ETeiYivLMm'),
('ba92064c-0622-4577-a961-3f4f5f915d11', 'Nontanon', 'Kulya-vitthi', '1990-09-11', '0995648713', 'non2non@gmail.com', '$2a$10$6fZMKfq3br33VXY1RkmHVukV6IAEt2SsjAhFp/FMHM/ETeiYivLMm'),
('bd8c956b-eedc-40a0-8f7e-f4f73e7280f5', 'm', 'm', '2023-05-12', '0000000000', 'm@m.m', '$2a$10$L53ASg5RLJgVcarF2/Mlru.X6hqoSK6lvwZNewIC25be2gK1q00Me'),
('c0a94f1d-7b14-4806-916d-b89b6a3b18a4', 'Moh', 'Pla', '2000-12-01', '0346521978', 'Plazaaa@su.ac.th', '$2a$10$6fZMKfq3br33VXY1RkmHVukV6IAEt2SsjAhFp/FMHM/ETeiYivLMm'),
('d0c8ab6f-8b20-44b7-909a-681dab4c487c', 'admin', 'lastname', '2003-01-01', '0945456321', 'a@b.c', '$2a$10$dhcr9Xvrm2GDtt34o2X59eMJbTCm.bCOCzwsMZAU5J3CJIe5f9YN2'),
('d4423a1d-54cb-4878-80e0-d09a0dad1e7a', 'Boonyat', 'Samsen', '2020-05-02', '0754896313', 'qu4rt@yahoo.jp', '$2a$10$6fZMKfq3br33VXY1RkmHVukV6IAEt2SsjAhFp/FMHM/ETeiYivLMm'),
('fa1cab3c-0db0-4a8c-ba4d-674a074c519b', 'Jacky', 'Chan', '2004-04-08', '0147258369', 'jackyChan@hotmail.co.th', '');

-- --------------------------------------------------------

--
-- Table structure for table `Invoice`
--

CREATE TABLE `Invoice` (
  `invoiceId` varchar(191) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `paymentTypeId` varchar(191) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `orderId` varchar(191) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `costAmount` double NOT NULL,
  `deadlineDate` timestamp NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `Invoice`
--

INSERT INTO `Invoice` (`invoiceId`, `paymentTypeId`, `orderId`, `costAmount`, `deadlineDate`) VALUES
('04940fe2-95e9-474b-b316-07b4aed03296', '3001', 'cdd71edd-ff6b-44a3-8e50-5d05423a4ef9', 1246.2, '2023-11-30 16:45:52'),
('06221313-fc37-4faa-969b-0fd433380a85', '2002', 'b9465fba-aca3-4c36-bded-851a0adc5ce4', 1013.04, '2023-07-30 15:21:49'),
('0747d7fc-058a-4cf8-baa4-b5dffadbe243', '3001', '52c7a4f2-c075-4ee4-8dfa-46a046ed3aac', 1246.2, '2023-11-30 14:34:00'),
('0d5338fa-3bf2-41f8-ab5d-0ea1bf90dd3e', '2002', '7fc296ce-8bbc-4a57-8eff-8ffd7182e3e2', 1045.2, '2023-07-30 16:33:37'),
('0e7023ed-4ad7-4e50-82fa-4fa36ea8fc48', '2002', '5b9b2358-9ceb-49de-933f-bca59365db83', 1045.2, '2023-07-30 16:32:41'),
('11b83790-8b60-4703-8484-70100caf2588', '3001', 'cdd71edd-ff6b-44a3-8e50-5d05423a4ef9', 1246.2, '2023-11-30 16:45:52'),
('14da7758-1a28-4ecc-b9b6-7823043593d9', '2002', '6248caa9-e87c-48f5-b7dd-497e8cb8d327', 1013.04, '2023-07-30 15:19:45'),
('172d276c-c59a-40ef-b377-dff0ea7abd29', '3001', 'f6293bf4-74e5-4238-91f1-dc5fb7810c6e', 1246.2, '2023-11-30 16:49:02'),
('177f101d-5119-41cf-b313-9de8fc48a879', '2002', '7fc296ce-8bbc-4a57-8eff-8ffd7182e3e2', 1045.2, '2023-07-30 16:33:39'),
('22935912-9f03-4e6c-a4b7-29d98dd31dc4', '2001', 'c60e9bff-e3c3-4a1d-89a1-a05c02d6d823', 1246.2, '2023-07-30 16:42:59'),
('24453d52-295f-426b-aec0-e4965f494007', '3001', '52c7a4f2-c075-4ee4-8dfa-46a046ed3aac', 1246.2, '2023-11-30 14:34:00'),
('2461b0ce-a4dd-416f-9b8e-d4d47034c6bc', '3001', 'cdd71edd-ff6b-44a3-8e50-5d05423a4ef9', 1246.2, '2023-11-30 16:45:52'),
('300b4bc7-fe2e-4dfb-87a8-c6bb762ba07d', '3001', '52c7a4f2-c075-4ee4-8dfa-46a046ed3aac', 1246.2, '2023-11-30 14:34:00'),
('311ae5ad-3a65-4276-b846-9353c6a0cafd', '2002', '11444b83-dc01-450b-a4cb-f206c3ea37f9', 1246.2, '2023-07-30 16:39:41'),
('33db1826-4dc4-4e5d-bd38-515f93f84c17', '3001', 'f6293bf4-74e5-4238-91f1-dc5fb7810c6e', 1246.2, '2023-11-30 16:49:02'),
('388c1edc-2b7a-42ba-9098-15aa870046f3', '2002', '6248caa9-e87c-48f5-b7dd-497e8cb8d327', 1013.04, '2023-07-30 15:19:45'),
('40415a58-d5d4-4da4-a7cd-22e976b88481', '3001', '17331d14-0b99-4d6f-84e4-73e293a58bc1', 42, '2023-05-31 00:00:00'),
('48bd0a6a-dea6-472f-a59d-5e3283b027cc', '3001', 'cdd71edd-ff6b-44a3-8e50-5d05423a4ef9', 1246.2, '2023-11-30 16:45:52'),
('57d6de82-6683-447a-8c3d-c21b9b088cdf', '2002', '5b9b2358-9ceb-49de-933f-bca59365db83', 1045.2, '2023-07-30 16:32:41'),
('59ec442d-6cce-4127-bfd2-c4bdf0b44ddd', '2001', '13de5908-bb20-4570-9b10-85d59bdd9a99', 737, '2023-05-31 00:00:00'),
('5a6e9772-1334-4f48-96cc-a8ba278e6c8b', '3001', '17331d14-0b99-4d6f-84e4-73e293a58bc1', 707, '2023-05-31 00:00:00'),
('697d58dc-1f0c-464e-ad09-648203e40f7d', '3001', 'f6293bf4-74e5-4238-91f1-dc5fb7810c6e', 1246.2, '2023-11-30 16:49:02'),
('6af0bb68-ac6c-4052-81a9-2c8a56386d85', '1000', '8f9c4c3a-759f-47fc-bc26-b644e7aca227', 73.25, '2023-05-31 00:00:00'),
('763622aa-4cf9-4855-8ee8-88f4ef0c8d4d', '1000', 'faa42a47-e8d2-4388-9b78-f9520c1c7d06', 338, '2023-05-31 00:00:00'),
('7806a644-1dce-4842-9d09-c6f5883db5f8', '3001', 'f6293bf4-74e5-4238-91f1-dc5fb7810c6e', 1246.2, '2023-11-30 16:49:02'),
('7a9522a2-b237-4c01-9292-434ff6052dbc', '3001', 'cdd71edd-ff6b-44a3-8e50-5d05423a4ef9', 1246.2, '2023-11-30 16:45:52'),
('83831059-1ffb-4fa6-a712-dd994c59b1e1', '3001', '17331d14-0b99-4d6f-84e4-73e293a58bc1', 70, '2023-05-31 00:00:00'),
('890848ea-6cd8-42f7-b8e9-11f1e4a712b0', '1000', '82b5147b-3572-4750-acac-722d1295b73f', 400, '2023-05-31 00:00:00'),
('8b760fdf-5ed5-4574-a11d-2a9274addb49', '2001', '13de5908-bb20-4570-9b10-85d59bdd9a99', 863, '2023-05-31 00:00:00'),
('8c0fff02-ad4d-4ea5-987c-b3ed520d5517', '1000', '2b28ecbf-7e96-41a8-a31c-b336a538023b', 153.75, '2023-05-31 00:00:00'),
('8e9d9fe5-71ca-41d1-b517-81ca13b964b4', '3001', '17331d14-0b99-4d6f-84e4-73e293a58bc1', 463, '2023-05-31 00:00:00'),
('9243a7b9-ddfd-49ed-af40-b84e3c693834', '2002', 'b9465fba-aca3-4c36-bded-851a0adc5ce4', 1013.04, '2023-07-30 15:21:49'),
('9541135f-1504-43c3-9647-084ff6e951cc', '2002', 'b9465fba-aca3-4c36-bded-851a0adc5ce4', 1013.04, '2023-07-30 15:21:47'),
('9af1e20b-3b79-4618-88cb-2e1b30b2d7be', '3001', '52c7a4f2-c075-4ee4-8dfa-46a046ed3aac', 1246.2, '2023-11-30 14:34:00'),
('9e6c104c-4cd3-4cd7-b0b9-3d8d15d88f5b', '1000', 'eba847f0-50ae-480d-9c8b-7ac63a320060', 764, '2023-05-31 00:00:00'),
('a0a7b58b-d14e-45d6-9d15-9117a46e9de6', '2002', '7fc296ce-8bbc-4a57-8eff-8ffd7182e3e2', 1045.2, '2023-07-30 16:33:39'),
('a13307d5-cd04-4696-86a0-a06797bcd0c9', '1000', 'eba847f0-50ae-480d-9c8b-7ac63a320060', 363.5, '2023-05-31 00:00:00'),
('a3ed20ad-4005-4a89-baa5-fd8b3e6800cf', '3001', 'cdd71edd-ff6b-44a3-8e50-5d05423a4ef9', 1246.2, '2023-11-30 16:45:52'),
('acae3dc8-0283-4cc4-948a-e74b830274d8', '3001', '52c7a4f2-c075-4ee4-8dfa-46a046ed3aac', 1246.2, '2023-11-30 14:34:00'),
('ad73ff3b-82fd-4cba-b97c-f6d9b7d09f76', '3001', '17331d14-0b99-4d6f-84e4-73e293a58bc1', 563, '2023-05-31 00:00:00'),
('bbe90777-06dc-4af3-964b-735f56d6db69', '1000', 'd19e9e66-dbe1-4343-9d46-8062d76a0705', 420.25, '2023-05-31 00:00:00'),
('ccc5b6c3-ecbd-4e96-b95b-ac2bfabfc241', '2002', '7fc296ce-8bbc-4a57-8eff-8ffd7182e3e2', 1045.2, '2023-07-30 16:33:37'),
('d890922b-c6ca-4b9d-870a-d9b3a70c521b', '3001', 'f6293bf4-74e5-4238-91f1-dc5fb7810c6e', 1246.2, '2023-11-30 16:49:02'),
('d9bf36f7-3ae5-4413-995a-971aacee71b5', '2001', 'c60e9bff-e3c3-4a1d-89a1-a05c02d6d823', 1246.2, '2023-07-30 16:42:59'),
('db26cefe-2341-4e6f-aabd-44fdb554f371', '1000', 'c9e07520-99c1-4dd2-a7a9-78b0bffb3972', 740, '2023-05-31 00:00:00'),
('dfa43f67-7373-4a23-a2ad-928b0d64bb2c', '1000', '47e96261-1497-446b-92e1-eb279241f4c8', 453, '2023-05-31 00:00:00'),
('e01c34c0-5386-4f03-8c21-6d106fdb6e5f', '3001', 'f6293bf4-74e5-4238-91f1-dc5fb7810c6e', 1246.2, '2023-11-30 16:49:02'),
('e320dba8-6e96-41bc-ae78-d4849c6f7a0a', '2002', '11444b83-dc01-450b-a4cb-f206c3ea37f9', 1246.2, '2023-07-30 16:39:41'),
('e94c51e0-9696-4ac9-bc86-ae967164097c', '3001', '52c7a4f2-c075-4ee4-8dfa-46a046ed3aac', 1246.2, '2023-11-30 14:34:00'),
('e96a2809-b3e4-414a-a6b7-258d24d84d02', '2002', '94606cec-d94a-45fd-ad2b-15858b15d6f1', 734, '2023-05-31 00:00:00'),
('e9983238-01ca-4c8d-b25f-d1e97e07e062', '1000', '94606cec-d94a-45fd-ad2b-15858b15d6f1', 834, '2023-05-31 00:00:00'),
('eacbd584-a4ad-41a6-8c47-2d2523ddac94', '3001', '17331d14-0b99-4d6f-84e4-73e293a58bc1', 79, '2023-05-31 00:00:00'),
('eb69fd69-e108-4eb2-b097-9b877271de47', '2002', 'b9465fba-aca3-4c36-bded-851a0adc5ce4', 1013.04, '2023-07-30 15:21:47'),
('ec76ac1d-572f-4aae-9440-43aaac6b00be', '2002', '94606cec-d94a-45fd-ad2b-15858b15d6f1', 86.75, '2023-05-31 00:00:00'),
('f15b6710-bb81-44ea-aca0-6d5f2aa44946', '2002', '1fc95493-22da-4e01-b4c6-d498d2c3d97e', 1013.04, '2023-07-30 15:21:17'),
('fa7907dd-c2f1-44de-b621-9e06b974b615', '2002', '1fc95493-22da-4e01-b4c6-d498d2c3d97e', 1013.04, '2023-07-30 15:21:17'),
('fec823be-c0b8-4e26-9228-920e79601be2', '1000', '0d02a456-b5c7-4377-84c7-41848c84e5c3', 453, '2023-05-31 00:00:00');

-- --------------------------------------------------------

--
-- Table structure for table `Issue`
--

CREATE TABLE `Issue` (
  `issueId` varchar(191) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `customerId` varchar(191) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `orderId` varchar(191) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `description` text CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `staffId` varchar(191) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `timestamp` timestamp NOT NULL,
  `status` tinyint NOT NULL,
  `categoryProblemId` varchar(191) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `Issue`
--

INSERT INTO `Issue` (`issueId`, `customerId`, `orderId`, `description`, `staffId`, `timestamp`, `status`, `categoryProblemId`) VALUES
('1abdb585-2c32-4776-8965-a507358723d2', '98dc25dd-8c27-4007-bfc4-61f67579d0b7', '0d02a456-b5c7-4377-84c7-41848c84e5c3', 'baddy', '133e0aea-bf4f-4daf-9ca4-2fef0aa32471', '2022-01-01 00:00:00', 0, 'PP'),
('1b3ebe29-b0d3-4874-8844-9fbefce7241f', 'c0a94f1d-7b14-4806-916d-b89b6a3b18a4', '17331d14-0b99-4d6f-84e4-73e293a58bc1', 'unfininsh paid', '8ab07ce0-9ad4-4063-b8d2-b5654cd7fb60', '2023-05-26 00:00:00', 1, 'PP'),
('45f765c5-d77c-4b48-bdb5-9b8cc3c2e76b', 'd0c8ab6f-8b20-44b7-909a-681dab4c487c', NULL, 'Application Not working', '5fe43fa1-a720-4db0-97c7-2d04ea52a6af', '2023-05-29 19:25:36', 0, 'FB'),
('6b8e4c8b-0c7d-4338-96ab-0b83f02563b8', '98dc25dd-8c27-4007-bfc4-61f67579d0b7', '17331d14-0b99-4d6f-84e4-73e293a58bc1', 'badboy', '8ab07ce0-9ad4-4063-b8d2-b5654cd7fb60', '2023-01-01 00:00:00', 1, 'PP'),
('880fd842-92ef-424b-82de-d8868ffd1ea8', '9c51e05b-160b-44a8-909e-cb04a69e60ce', '0d02a456-b5c7-4377-84c7-41848c84e5c3', 'pack unfinish status', '5fe43fa1-a720-4db0-97c7-2d04ea52a6af', '2023-05-26 00:00:00', 1, 'LD'),
('8dced197-185a-4cf1-9adb-c830a8d0a1b8', 'd4423a1d-54cb-4878-80e0-d09a0dad1e7a', NULL, '', '4e202f12-e53d-436c-a458-39461477cb3d', '2023-05-26 00:00:00', 1, 'QA'),
('903bdef6-74fd-4dc1-85c0-87fa3ece6b07', '98dc25dd-8c27-4007-bfc4-61f67579d0b7', NULL, 'bad3', '8ab07ce0-9ad4-4063-b8d2-b5654cd7fb60', '2023-01-01 00:00:00', 1, 'PP'),
('ab84bf73-0f4f-487c-b4f2-839bf6254644', '98dc25dd-8c27-4007-bfc4-61f67579d0b7', NULL, 'badboy', '8ab07ce0-9ad4-4063-b8d2-b5654cd7fb60', '2023-01-01 00:00:00', 1, 'PP'),
('e96d8efa-cdd7-4c43-ab98-436571568463', '98dc25dd-8c27-4007-bfc4-61f67579d0b7', NULL, 'baddy', '133e0aea-bf4f-4daf-9ca4-2fef0aa32471', '2022-01-01 00:00:00', 1, 'PP'),
('fdb77e68-41f2-404f-b424-59bc45fe8cd0', '98dc25dd-8c27-4007-bfc4-61f67579d0b7', NULL, '', '133e0aea-bf4f-4daf-9ca4-2fef0aa32471', '2023-05-26 00:00:00', 1, 'FB');

-- --------------------------------------------------------

--
-- Table structure for table `Item`
--

CREATE TABLE `Item` (
  `itemId` varchar(8) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `productId` varchar(191) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `itemRegisterDate` timestamp NOT NULL,
  `stockAddress` varchar(10) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `itemStatusId` varchar(191) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `Item`
--

INSERT INTO `Item` (`itemId`, `productId`, `itemRegisterDate`, `stockAddress`, `itemStatusId`) VALUES
('22463208', '199846', '2023-05-30 07:29:56', 'B1-023-231', 'A'),
('23000415', '159409', '2022-05-05 00:00:00', 'A1-023-122', 'A'),
('23000416', '159409', '2022-05-05 00:00:00', 'A1-023-123', 'A'),
('23000417', '199846', '2022-05-05 00:00:00', 'A1-023-124', 'A'),
('23000418', '409884', '2022-05-05 00:00:00', 'A1-023-125', 'A'),
('23000419', '501919', '2022-05-05 00:00:00', 'A1-023-126', 'U'),
('23000420', '584490', '2022-05-05 00:00:00', 'A1-023-127', 'O'),
('23000421', '584490', '2022-05-05 00:00:00', 'A1-023-128', 'A'),
('23000422', '810847', '2022-05-05 00:00:00', 'A1-023-129', 'U'),
('23000423', '844931', '2022-05-05 00:00:00', 'A1-023-130', 'A'),
('23000424', '844931', '2022-05-05 00:00:00', 'A1-023-131', 'A'),
('23000425', '844931', '2022-05-05 00:00:00', 'A1-023-132', 'A'),
('23000765', '810847', '2002-03-31 17:00:00', 'A1-042-456', 'A'),
('37535529', '810847', '2023-05-28 16:01:57', 'A1-023-129', 'A'),
('40311017', '409884', '2023-05-28 16:06:33', 'A1-023-127', 'N'),
('98413129', '409884', '2023-05-30 07:35:37', 'B2-123-034', 'A');

-- --------------------------------------------------------

--
-- Table structure for table `ItemStatus`
--

CREATE TABLE `ItemStatus` (
  `itemStatusId` varchar(1) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `itemStatusName` varchar(15) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `ItemStatus`
--

INSERT INTO `ItemStatus` (`itemStatusId`, `itemStatusName`) VALUES
('A', 'Available'),
('N', 'Not Available'),
('O', 'Out of order'),
('U', 'Unavailable');

-- --------------------------------------------------------

--
-- Table structure for table `Order`
--

CREATE TABLE `Order` (
  `orderId` varchar(191) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `customerId` varchar(191) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `addressDetail` text CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `street` text CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `subdistrict` text CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `zipcode` varchar(5) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `latitude` decimal(8,6) NOT NULL,
  `longitude` decimal(9,6) NOT NULL,
  `receiverTel` varchar(10) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `totalPrice` double NOT NULL,
  `orderDate` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `sendingDate` timestamp NULL DEFAULT NULL,
  `returnDate` timestamp NULL DEFAULT NULL,
  `receiver` varchar(30) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `statusCode` int NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `Order`
--

INSERT INTO `Order` (`orderId`, `customerId`, `addressDetail`, `street`, `subdistrict`, `zipcode`, `latitude`, `longitude`, `receiverTel`, `totalPrice`, `orderDate`, `sendingDate`, `returnDate`, `receiver`, `statusCode`) VALUES
('0d02a456-b5c7-4377-84c7-41848c84e5c3', '9c51e05b-160b-44a8-909e-cb04a69e60ce', '77', 'ThaChinThani', 'Thachin', '74000', 13.531990, 100.248920, '0959944833', 700, '2023-05-25 04:25:23', '2023-06-01 12:00:00', '2023-07-04 17:00:00', 'Mix', 331),
('11444b83-dc01-450b-a4cb-f206c3ea37f9', 'd0c8ab6f-8b20-44b7-909a-681dab4c487c', '1044/70', 'Phetkasem', 'Nongkangplu', '10160', 13.736988, 100.524366, '0951165489', 1240, '2023-05-30 16:39:40', '2023-05-12 16:39:00', '2023-06-08 16:39:00', NULL, 110),
('13de5908-bb20-4570-9b10-85d59bdd9a99', '288df130-111b-42cf-9d98-7ec941d013a6', '423/88', '3407', 'Thungbenja', '22170', 12.777570, 101.970600, '0946587261', 3450, '2023-05-25 04:25:23', '2023-04-12 12:00:00', '2023-06-01 12:00:00', 'Pon', 231),
('17331d14-0b99-4d6f-84e4-73e293a58bc1', 'c0a94f1d-7b14-4806-916d-b89b6a3b18a4', '664/1', 'O Bo To Khon Kaen Yaek Hwy 208-Ban Lup Ya Kha ', 'Dhammarong', '62160', 16.309400, 102.866190, '0948491916', 7337, '2023-05-25 04:25:23', '2023-05-10 12:00:00', '2023-06-01 12:00:00', 'Kim', 231),
('1fc95493-22da-4e01-b4c6-d498d2c3d97e', '67290a8d-a1ee-4b2e-8bc2-b39beb3c9ec1', '1044/70', 'Phetkasem', 'Nongkangplu', '10160', 13.736988, 100.524366, '0951165489', 1008, '2023-05-30 15:21:19', '2023-05-30 05:21:00', '2023-05-30 16:21:00', NULL, 110),
('2b28ecbf-7e96-41a8-a31c-b336a538023b', 'd0c8ab6f-8b20-44b7-909a-681dab4c487c', '456/58', '-', 'Nongkangplu', '10160', 13.448300, 100.454500, '0951195582', 235, '2023-01-01 00:00:00', '2023-06-01 12:00:00', '2023-06-10 12:00:00', 'Poy', 110),
('47e96261-1497-446b-92e1-eb279241f4c8', '6c4696ae-8cd8-4c85-80dd-fcb9148bd16b', '42/4', '4014', 'Kaokeaw', '22170', 12.842800, 101.934480, '0949219621', 250.5, '2023-05-25 04:25:23', '2023-06-01 12:00:00', '2023-06-10 12:00:00', 'Preawa', 131),
('52c7a4f2-c075-4ee4-8dfa-46a046ed3aac', 'd0c8ab6f-8b20-44b7-909a-681dab4c487c', '221b', 'Baker Street', 'Marylebone', '1412', 13.736988, 100.524366, '0584689945', 1240, '2023-05-30 14:33:58', '2023-05-26 14:33:00', '2023-06-09 14:33:00', NULL, 110),
('5b9b2358-9ceb-49de-933f-bca59365db83', '67290a8d-a1ee-4b2e-8bc2-b39beb3c9ec1', '1044/70', 'Phetkasem', 'Nongkangplu', '10160', 13.736988, 100.524366, '0951165489', 1040, '2023-05-30 16:32:43', '2023-05-30 16:35:00', '2023-05-30 16:34:00', NULL, 110),
('6248caa9-e87c-48f5-b7dd-497e8cb8d327', '67290a8d-a1ee-4b2e-8bc2-b39beb3c9ec1', '1044/70', 'Phetkasem', 'Nongkangplu', '10160', 13.736988, 100.524366, '0951165489', 1008, '2023-05-30 15:19:47', '2023-05-05 15:17:00', '2023-05-30 16:17:00', NULL, 110),
('7fc296ce-8bbc-4a57-8eff-8ffd7182e3e2', '67290a8d-a1ee-4b2e-8bc2-b39beb3c9ec1', '1044/70', 'Phetkasem', 'Nongkangplu', '10160', 13.736988, 100.524366, '0951165489', 1040, '2023-05-30 16:33:39', '2023-05-30 16:35:00', '2023-05-30 16:34:00', NULL, 110),
('82b5147b-3572-4750-acac-722d1295b73f', 'fa1cab3c-0db0-4a8c-ba4d-674a074c519b', '727/9', 'Ro Pho Cho Khon Kaen', 'Donhun', '40260', 16.337730, 102.874440, '0784895919', 476.3, '2023-05-25 04:25:23', '2023-06-01 12:00:00', '2023-06-12 12:00:00', 'Peeraya', 310),
('8f9c4c3a-759f-47fc-bc26-b644e7aca227', 'd4423a1d-54cb-4878-80e0-d09a0dad1e7a', '43/9', 'Ro Pho Cho Khon Kaen', 'Donhun', '40260', 16.337730, 102.874440, '0489519919', 889.67, '2023-05-25 04:25:23', '2023-06-01 12:00:00', '2023-06-15 12:00:00', 'Baokao', 132),
('94606cec-d94a-45fd-ad2b-15858b15d6f1', '288df130-111b-42cf-9d98-7ec941d013a6', '45/63', '-', 'Bangtalad', '24110', 13.731370, 101.198790, '0618192245', 2200, '2023-05-25 04:25:23', '2023-06-01 12:00:00', '2023-06-14 12:00:00', 'Pla', 232),
('b9465fba-aca3-4c36-bded-851a0adc5ce4', '67290a8d-a1ee-4b2e-8bc2-b39beb3c9ec1', '1044/70', 'Phetkasem', 'Nongkangplu', '10160', 13.736988, 100.524366, '0951165489', 1008, '2023-05-30 15:21:49', '2023-05-30 05:21:00', '2023-05-30 16:21:00', NULL, 110),
('c60e9bff-e3c3-4a1d-89a1-a05c02d6d823', 'd0c8ab6f-8b20-44b7-909a-681dab4c487c', '1044/70', 'Phetkasem', 'Nongkangplu', '10160', 13.736988, 100.524366, '0951165489', 1240, '2023-05-30 16:42:58', '2023-05-26 16:42:00', '2023-06-08 16:42:00', NULL, 110),
('c9e07520-99c1-4dd2-a7a9-78b0bffb3972', '288df130-111b-42cf-9d98-7ec941d013a6', '644/6', '-', 'NongKangPlu', '10160', 26.123500, 100.125400, '0862189484', 240, '2023-05-24 00:00:00', '2023-06-01 12:00:00', '2023-06-30 12:00:00', 'Fisho', 132),
('cdd71edd-ff6b-44a3-8e50-5d05423a4ef9', 'd0c8ab6f-8b20-44b7-909a-681dab4c487c', '1044/70', 'Phetkasem', 'Nongkangplu', '10160', 13.736988, 100.524366, '0951165489', 1240, '2023-05-30 16:45:50', '2023-06-03 16:45:00', '2023-05-26 16:45:00', NULL, 110),
('d19e9e66-dbe1-4343-9d46-8062d76a0705', '98dc25dd-8c27-4007-bfc4-61f67579d0b7', '424/99', '3184-1', 'Ranghwai', '71170', 14.227890, 99.756440, '0549587854', 490, '2023-05-25 04:25:23', '2023-06-01 12:00:00', '2023-07-10 12:00:00', 'Kangaroo', 400),
('eba847f0-50ae-480d-9c8b-7ac63a320060', '038eb19c-787b-47ab-a137-7daf587d9a7c', '212/45', '3184-1', 'Ranghwai', '71170', 14.227890, 99.756440, '0795209789', 150, '2023-05-25 04:25:23', '2023-06-01 12:00:00', '2023-08-26 12:00:00', 'Camala', 131),
('f6293bf4-74e5-4238-91f1-dc5fb7810c6e', 'd0c8ab6f-8b20-44b7-909a-681dab4c487c', '1044/70', 'Phetkasem', 'Nongkangplu', '10160', 13.736988, 100.524366, '0951165489', 1240, '2023-05-30 16:49:01', '2023-05-26 16:48:00', '2023-06-10 16:48:00', NULL, 110),
('faa42a47-e8d2-4388-9b78-f9520c1c7d06', '288df130-111b-42cf-9d98-7ec941d013a6', '101/20', 'Wang Tanot', 'Rumpun', '22170', 12.669120, 101.949500, '0218119117', 842.3, '2023-05-25 04:25:23', '2023-06-01 12:00:00', '2023-06-03 12:00:00', 'Sota', 110);

-- --------------------------------------------------------

--
-- Table structure for table `OrderCart`
--

CREATE TABLE `OrderCart` (
  `orderId` varchar(191) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `cartNo` varchar(191) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `OrderCart`
--

INSERT INTO `OrderCart` (`orderId`, `cartNo`) VALUES
('0d02a456-b5c7-4377-84c7-41848c84e5c3', '03ff892c-fade-11ed-9373-0242ac140002'),
('13de5908-bb20-4570-9b10-85d59bdd9a99', '0b7e738e-fade-11ed-9373-0242ac140002'),
('17331d14-0b99-4d6f-84e4-73e293a58bc1', '13adfe5d-fade-11ed-9373-0242ac140002'),
('47e96261-1497-446b-92e1-eb279241f4c8', '18d1dd3b-fade-11ed-9373-0242ac140002'),
('82b5147b-3572-4750-acac-722d1295b73f', '1f8fc1f2-fade-11ed-9373-0242ac140002'),
('8f9c4c3a-759f-47fc-bc26-b644e7aca227', '24cb25fa-fade-11ed-9373-0242ac140002'),
('94606cec-d94a-45fd-ad2b-15858b15d6f1', '2e97251c-fade-11ed-9373-0242ac140002'),
('d19e9e66-dbe1-4343-9d46-8062d76a0705', '382b11c0-fade-11ed-9373-0242ac140002'),
('c9e07520-99c1-4dd2-a7a9-78b0bffb3972', '67930706-56d1-42ee-9c42-b5bdddf863e3'),
('faa42a47-e8d2-4388-9b78-f9520c1c7d06', '75054ce9-b7a3-4244-b0de-7e9a145d38bd'),
('2b28ecbf-7e96-41a8-a31c-b336a538023b', 'af4eb17d-cc98-486e-9cfd-d7c96a117f46'),
('eba847f0-50ae-480d-9c8b-7ac63a320060', 'efd51806-fadd-11ed-9373-0242ac140002'),
('c9e07520-99c1-4dd2-a7a9-78b0bffb3972', 'f95612eb-4204-427f-a4d4-7d50203fcf57');

-- --------------------------------------------------------

--
-- Table structure for table `OrderPromotion`
--

CREATE TABLE `OrderPromotion` (
  `promotionCode` varchar(191) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `orderId` varchar(191) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `OrderPromotion`
--

INSERT INTO `OrderPromotion` (`promotionCode`, `orderId`) VALUES
('860b1f08-b9b6-417b-95ce-d10fb1fdd4ad', '17331d14-0b99-4d6f-84e4-73e293a58bc1'),
('1eadc3f5-81d3-421a-a9d6-c3b8050a8eb5', '1fc95493-22da-4e01-b4c6-d498d2c3d97e'),
('1eadc3f5-81d3-421a-a9d6-c3b8050a8eb5', '94606cec-d94a-45fd-ad2b-15858b15d6f1'),
('32c075e1-355e-473f-8687-a1aeddfd7979', '94606cec-d94a-45fd-ad2b-15858b15d6f1'),
('1eadc3f5-81d3-421a-a9d6-c3b8050a8eb5', 'b9465fba-aca3-4c36-bded-851a0adc5ce4'),
('1eadc3f5-81d3-421a-a9d6-c3b8050a8eb5', 'eba847f0-50ae-480d-9c8b-7ac63a320060');

-- --------------------------------------------------------

--
-- Table structure for table `OrderStatus`
--

CREATE TABLE `OrderStatus` (
  `statusCode` int NOT NULL,
  `statusDef` varchar(30) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `OrderStatus`
--

INSERT INTO `OrderStatus` (`statusCode`, `statusDef`) VALUES
(110, 'payment waiting'),
(111, 'waiting for payment checking'),
(120, 'pack waiting'),
(121, 'unpack waiting'),
(131, 'send waiting'),
(132, 'receive waiting'),
(210, 'payment in progress'),
(220, 'pack in progress'),
(221, 'unpack in progress'),
(231, 'send in progress'),
(232, 'receive in progress'),
(310, 'payment problem'),
(320, 'pack problem'),
(330, 'logistic problem'),
(331, 'send problem'),
(332, 'receive problem'),
(400, 'finish overall'),
(431, 'finish sending');

-- --------------------------------------------------------

--
-- Table structure for table `OrderTransport`
--

CREATE TABLE `OrderTransport` (
  `orderId` varchar(191) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `timeAssign` timestamp NOT NULL,
  `vehicleLicense` varchar(191) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `staffId` varchar(191) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `isReturn` tinyint(1) NOT NULL,
  `timeGo` timestamp NULL DEFAULT NULL,
  `timeBack` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `OrderTransport`
--

INSERT INTO `OrderTransport` (`orderId`, `timeAssign`, `vehicleLicense`, `staffId`, `isReturn`, `timeGo`, `timeBack`) VALUES
('0d02a456-b5c7-4377-84c7-41848c84e5c3', '2023-05-25 00:00:00', '5กย1990', '72f96f78-2abb-43a0-b850-82589a4d1e8a', 0, '2023-05-30 15:30:45', '2022-02-03 20:00:00'),
('13de5908-bb20-4570-9b10-85d59bdd9a99', '2023-05-26 00:00:00', 'กข7360', '72f96f78-2abb-43a0-b850-82589a4d1e8a', 0, '2023-05-30 15:36:50', '2021-09-08 16:00:00'),
('17331d14-0b99-4d6f-84e4-73e293a58bc1', '2023-05-26 00:00:00', '5กย1990', '72f96f78-2abb-43a0-b850-82589a4d1e8a', 1, '2023-05-30 15:43:15', '2023-05-30 15:43:53'),
('1fc95493-22da-4e01-b4c6-d498d2c3d97e', '2023-05-30 16:30:48', '6หก8666', '72f96f78-2abb-43a0-b850-82589a4d1e8a', 1, NULL, NULL),
('47e96261-1497-446b-92e1-eb279241f4c8', '2023-04-30 17:00:00', '1AA1111', '72f96f78-2abb-43a0-b850-82589a4d1e8a', 1, NULL, NULL),
('47e96261-1497-446b-92e1-eb279241f4c8', '2023-05-27 00:00:00', '1กฎ1224', 'b4b29629-f03f-4f9d-b3f2-fa494ab94e47', 0, '2023-01-01 10:30:00', '2023-01-01 18:30:00'),
('52c7a4f2-c075-4ee4-8dfa-46a046ed3aac', '2023-05-30 16:36:16', '7ษบ7552', '72f96f78-2abb-43a0-b850-82589a4d1e8a', 0, NULL, NULL),
('52c7a4f2-c075-4ee4-8dfa-46a046ed3aac', '2023-05-30 16:36:44', '7ษบ7552', '72f96f78-2abb-43a0-b850-82589a4d1e8a', 0, NULL, NULL),
('52c7a4f2-c075-4ee4-8dfa-46a046ed3aac', '2023-05-30 16:37:18', '7ษบ7552', '72f96f78-2abb-43a0-b850-82589a4d1e8a', 0, NULL, NULL),
('52c7a4f2-c075-4ee4-8dfa-46a046ed3aac', '2023-05-30 16:37:57', '7ษบ7552', '72f96f78-2abb-43a0-b850-82589a4d1e8a', 0, NULL, NULL),
('8f9c4c3a-759f-47fc-bc26-b644e7aca227', '2023-05-27 00:00:00', '6หก8666', 'b4b29629-f03f-4f9d-b3f2-fa494ab94e47', 1, '2023-06-14 09:00:00', '2023-06-14 12:00:00'),
('c9e07520-99c1-4dd2-a7a9-78b0bffb3972', '2021-12-31 17:00:00', '6หก8666', '72f96f78-2abb-43a0-b850-82589a4d1e8a', 1, NULL, NULL),
('c9e07520-99c1-4dd2-a7a9-78b0bffb3972', '2022-01-01 00:00:00', '6หก8666', '72f96f78-2abb-43a0-b850-82589a4d1e8a', 1, NULL, NULL),
('c9e07520-99c1-4dd2-a7a9-78b0bffb3972', '2023-04-30 17:00:00', '6หก8666', '72f96f78-2abb-43a0-b850-82589a4d1e8a', 1, NULL, NULL),
('faa42a47-e8d2-4388-9b78-f9520c1c7d06', '2023-06-25 00:00:00', 'ษบ7623', 'b4b29629-f03f-4f9d-b3f2-fa494ab94e47', 0, '2021-11-12 13:00:00', '2021-11-12 17:00:00');

-- --------------------------------------------------------

--
-- Table structure for table `PaymentMethod`
--

CREATE TABLE `PaymentMethod` (
  `paymentMethodId` varchar(6) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `paymentMethodName` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `PaymentMethod`
--

INSERT INTO `PaymentMethod` (`paymentMethodId`, `paymentMethodName`) VALUES
('B7', '7-BARCODE'),
('BC', 'Bitcoin (Querian Coin)'),
('CC', 'Credit Card'),
('DC', 'Debit Card'),
('EB', 'E-BANKING'),
('PP', 'Paypol'),
('TR', 'Transfer');

-- --------------------------------------------------------

--
-- Table structure for table `PaymentType`
--

CREATE TABLE `PaymentType` (
  `paymentTypeId` varchar(4) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `paymentTypeName` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `interest` double NOT NULL,
  `times` int NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `PaymentType`
--

INSERT INTO `PaymentType` (`paymentTypeId`, `paymentTypeName`, `interest`, `times`) VALUES
('0004', 'superdeal 2023 halfyear offer', 0.0025, 6),
('1000', 'One-time purchased', 0, 1),
('2001', '2 times / m.', 0.005, 2),
('2002', '2 times / 2 m.', 0.005, 2),
('3001', '6 times / 6 m.', 0.005, 6),
('4001', '1 year monthy', 0.0075, 12);

-- --------------------------------------------------------

--
-- Table structure for table `Position`
--

CREATE TABLE `Position` (
  `positionId` varchar(3) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `positionN` varchar(30) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `Position`
--

INSERT INTO `Position` (`positionId`, `positionN`) VALUES
('ABC', 'DELETE ME'),
('DEV', 'Developer'),
('DL', 'Deliverer'),
('INV', 'Inventory Management'),
('MA', 'Manager'),
('SA', 'Sale');

-- --------------------------------------------------------

--
-- Table structure for table `Product`
--

CREATE TABLE `Product` (
  `productId` varchar(6) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `productName` varchar(40) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `categoryId` varchar(191) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `pictureUrl` text CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `pricePerDay` double NOT NULL,
  `weight` double NOT NULL,
  `height` double NOT NULL,
  `width` double NOT NULL,
  `depth` double NOT NULL,
  `color` varchar(20) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `material` varchar(30) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `description` text CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `Product`
--

INSERT INTO `Product` (`productId`, `productName`, `categoryId`, `pictureUrl`, `pricePerDay`, `weight`, `height`, `width`, `depth`, `color`, `material`, `description`) VALUES
('123212', 'Basic Chair', '1100', '/ikea_black_chair.png', 20, 1, 500, 200, 100, 'Black', 'Wood', 'เก้าอี้ทรงธรรมดาที่บ้านไหนก็(น่าจะ)มี ไม่ค่อยแน่ใจว่าจะมาเช่าทำไม แต่โอเคมันได้ตังเราพร้อมให้คุณเช่าเสมอ เวลานั่งแล้วรู้สึกเหมือนอยู่ในบ้าน ภายในโลกที่มีเพียงแค่สีขาว ดำ เทา ช่างเหมาะกับคนคูลอย่างเธอจริง ๆ สุดสวยห์/สุดหล่อห์'),
('159409', 'Gold balloon', '3100', 'https://img.freepik.com/free-vector/celebration-party-realistic-background-with-bunch-gold-air-balloons-decorated-by-gold-ribbons-vector-illustration_1284-81529.jpg?w=826&t=st=1685265899~exp=1685266499~hmac=6d69815d4718770e6b8166fda2b0968afd0e8dbec90743953a52e3d2d4a17fab', 100, 1, 5, 2, 1, 'Gold', 'Plastic', 'fg'),
('18624', 'Super House', '2013', 'https://www.mydomaine.com/thmb/gHHgcn8yOk-ze7dL0FNVdLKrONI=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/binary-4--583f06853df78c6f6a9e0b7a.jpeg', 90, 646540, 0, 9870, 65400, 'brown', 'brick', NULL),
('199846', 'ADiDos chair', '1100', 'https://img.freepik.com/free-photo/empty-deck-chair-isolated-white-background_185193-110396.jpg?w=1380&t=st=1685265935~exp=1685266535~hmac=04a9b4fe255fae4bdfc8e4b8a5a5842762f9393fe4900113eed50f724c2bce13', 100, 10, 50, 40, 100, 'Pink', 'Wood', 'f'),
('209511', 'IKEE chair', '1100', 'https://img.freepik.com/free-photo/luxury-modern-leather-office-chair-comfortable-elegant-generated-by-ai_188544-29646.jpg?w=1380&t=st=1685265960~exp=1685266560~hmac=4adfff55cddb4e0d508fa06b305a65451b9a4a6d27c206af410bae4e59d4ed83', 100, 10, 50, 40, 100, 'Pink', 'Wood', 'f'),
('355357', 'Rainbow ballon', '3100', 'https://m.media-amazon.com/images/I/518WvBwXJjL.jpg', 54, 0.04, 0, 45, 45, 'rainbow', 'elastic', 'colorful balloon'),
('409884', 'Foot Ball', '3101', 'https://img.freepik.com/free-photo/colombian-national-soccer-team-concept_23-2150257139.jpg?w=740&t=st=1685266289~exp=1685266889~hmac=5b252ab10e5debc77c78b82f76d914ae5170c1bcc5372121ca809a2906a935fe', 100, 1, 30, 30, 30, 'Pink', 'Wood', 'fg'),
('501919', 'Rush lamp', '4100', 'https://img.freepik.com/free-photo/bright-stage-lit-by-spotlights-floodlights-generated-by-ai_188544-43362.jpg?w=1380&t=st=1685266310~exp=1685266910~hmac=2c3d4bace7d7d1ac2152931cfb589b6b3844a8a5e8de25b68c35c1f084f70a24', 100, 2, 30, 30, 30, 'Pink', 'Plastic', 'f'),
('584490', 'Chirstmaas tree', '2100', 'https://img.freepik.com/free-photo/winter-celebration-christmas-tree-adorned-with-gifts-generated-by-ai_188544-36222.jpg?w=1380&t=st=1685266335~exp=1685266935~hmac=67d9934e51c2dd174f0cdbf9898bea8c71ada76163d85ac02a454d3281bdd06a', 100, 20, 500, 100, 200, 'Pink', 'Wood', 'fg'),
('621480', 'raindbow', '3100', 'https://m.media-amazon.com/images/I/518WvBwXJjL.jpg', 23, 0.04, 0, 45, 45, 'White', 'elastic', 'rainbow'),
('665190', 'Pink balloon', '3100', 'https://img.freepik.com/free-photo/bunch-pink-black-balloons-with-one-being-held-by-bunch-pink-balloons_1340-43384.jpg?w=740&t=st=1685266405~exp=1685267005~hmac=77aa38680dbbbb4f89693a68b7e462591d28f8ca6cba958d9b28721d6efa6866', 100, 1, 30, 2, 1, 'Pink', 'Wood', 'fg'),
('680963', 'Supreme  balloon', '3100', 'https://media.karousell.com/media/photos/products/2023/2/8/supreme_inflatable_blimp_white_1675846283_b795d943_progressive', 30, 0.1, 0, 10, 10, 'red', 'plastic', 'amazing'),
('810847', 'Nuke desk', '1200', 'https://img.freepik.com/free-photo/high-angle-classroom-interior-design_23-2150401375.jpg?w=1380&t=st=1685266445~exp=1685267045~hmac=b0d6ed19fd3b258b6651ee9ce7a2355f89aacfe3bf92ee6e7f9af107962414bd', 100, 10, 100, 200, 100, 'Pink', 'Wood', 'f'),
('844931', 'Soccer ball', '3101', 'https://img.freepik.com/free-vector/american-footbal-field-rugby-ball_1308-131945.jpg?w=996&t=st=1685266505~exp=1685267105~hmac=80328f4541773c106a64cc67799e413475139b7fbe43e2f01e080cb3b75773b7', 100, 1, 30, 30, 30, 'Pink', 'Wood', 'fg'),
('984952', 'Rush lamp', '4100', 'https://img.freepik.com/free-photo/bright-stage-lit-by-spotlights-floodlights-generated-by-ai_188544-43362.jpg?w=1380&t=st=1685266310~exp=1685266910~hmac=2c3d4bace7d7d1ac2152931cfb589b6b3844a8a5e8de25b68c35c1f084f70a24', 100, 2, 30, 30, 30, 'Pink', 'Plastic', 'fg'),
('990949', 'Table table tenis', '1201', 'https://img.freepik.com/free-vector/realistic-table-tennis-background-with-paddles-net_23-2148668669.jpg?w=996&t=st=1685266595~exp=1685267195~hmac=90bd269680476b161e7112d376944aa08cc8d70d33c0065933a25e0c0a6cf439', 1000, 10, 200, 100, 100, 'Pink', 'Metal', 'fg');

-- --------------------------------------------------------

--
-- Table structure for table `Promotion`
--

CREATE TABLE `Promotion` (
  `promotionCode` varchar(191) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `discountPercent` float NOT NULL,
  `maximumDiscount` float NOT NULL,
  `minimumPrice` float NOT NULL,
  `startDate` timestamp NOT NULL,
  `endDate` timestamp NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `Promotion`
--

INSERT INTO `Promotion` (`promotionCode`, `discountPercent`, `maximumDiscount`, `minimumPrice`, `startDate`, `endDate`) VALUES
('1eadc3f5-81d3-421a-a9d6-c3b8050a8eb5', 0.04, 250, 0, '2023-05-07 00:00:00', '2023-05-31 00:00:00'),
('2bee4641-2270-42cf-968b-554093a8b5e0', 0.1, 500, 200, '2023-06-01 00:00:00', '2023-07-07 00:00:00'),
('32c075e1-355e-473f-8687-a1aeddfd7979', 0.05, 100, 100, '2023-05-07 00:00:00', '2023-05-31 00:00:00'),
('4382df32-43e2-4810-9568-11877b2301ae', 0.1, 500, 0, '2023-05-07 00:00:00', '2023-05-19 00:00:00'),
('713b3232-fc02-418c-bc4b-31a0206e356b', 0.025, 1000, 500, '2023-05-28 00:00:00', '2023-05-30 00:00:00'),
('8377dfb1-91df-471c-9c17-cc8d8c221c7b', 0.04, 50, 100, '2020-01-01 00:00:00', '2023-01-01 00:00:00'),
('860b1f08-b9b6-417b-95ce-d10fb1fdd4ad', 0.2, 1000, 2000, '2023-05-07 00:00:00', '2023-05-31 00:00:00'),
('9396b3fa-2ac1-448b-87b1-591a47d07147', 0.02, 50, 100, '2020-01-01 00:00:00', '2023-01-01 00:00:00'),
('c949381e-da35-45a0-b09e-869108700cc1', 2, 40, 0, '2023-05-31 00:00:00', '2023-06-01 00:00:00');

-- --------------------------------------------------------

--
-- Table structure for table `StaffInfo`
--

CREATE TABLE `StaffInfo` (
  `staffId` varchar(191) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `prefix` varchar(4) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `staffFirstName` varchar(30) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `staffLastName` varchar(30) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `positionId` varchar(191) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `tel` varchar(10) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `startDate` date NOT NULL,
  `dob` date NOT NULL,
  `salary` double NOT NULL,
  `password` varchar(60) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `StaffInfo`
--

INSERT INTO `StaffInfo` (`staffId`, `prefix`, `staffFirstName`, `staffLastName`, `positionId`, `tel`, `startDate`, `dob`, `salary`, `password`) VALUES
('133e0aea-bf4f-4daf-9ca4-2fef0aa32471', 'Ms', 'John', 'Wisley', 'DEV', '0132589456', '2020-01-01', '2002-01-01', 30450, '123'),
('4e202f12-e53d-436c-a458-39461477cb3d', 'Mrs', 'Contra', 'Votor', 'SA', '0594873159', '2020-01-01', '2002-01-01', 60980, '456'),
('5fe43fa1-a720-4db0-97c7-2d04ea52a6af', 'Miss', 'Sam', 'Sewer', 'DEV', '0559475316', '2020-01-01', '2002-01-01', 70850, 'otp'),
('72f96f78-2abb-43a0-b850-82589a4d1e8a', 'Miss', 'Pao', 'Xiao', 'DL', '0849142648', '2020-01-01', '2002-01-01', 20000, '15Qq'),
('8ab07ce0-9ad4-4063-b8d2-b5654cd7fb60', 'Mrs', 'Tianzhao', 'Tiaguo', 'SA', '0814948319', '2020-01-01', '2002-01-01', 84080, 'c407'),
('aa9534a2-7283-4bda-a7d1-e4198435e988', 'Mr', 'Liam', 'Suddee', 'INV', '0844967832', '2020-01-01', '2002-01-01', 40600, 'thailand'),
('b4b29629-f03f-4f9d-b3f2-fa494ab94e47', 'Mr', 'Yee', 'So', 'DL', '0949495193', '2020-01-01', '2002-01-01', 15000, '0123456798'),
('b4baba04-82d7-496a-b606-e6bffc77185b', 'Ms', 'Kung', 'yu', 'DEV', '0954098498', '2020-01-01', '2002-01-01', 51060, 'brazil998'),
('d933be4c-3279-4919-8c6e-0df8eda3c2aa', 'Mr', 'Admin', 'Admin', 'DEV', '0163254061', '1970-01-01', '1970-01-01', 9999999, 'Password');

-- --------------------------------------------------------

--
-- Table structure for table `SubOrder`
--

CREATE TABLE `SubOrder` (
  `orderId` varchar(191) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `itemId` varchar(191) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `SubOrder`
--

INSERT INTO `SubOrder` (`orderId`, `itemId`) VALUES
('0d02a456-b5c7-4377-84c7-41848c84e5c3', '22463208'),
('0d02a456-b5c7-4377-84c7-41848c84e5c3', '23000415'),
('13de5908-bb20-4570-9b10-85d59bdd9a99', '23000416'),
('17331d14-0b99-4d6f-84e4-73e293a58bc1', '23000417'),
('faa42a47-e8d2-4388-9b78-f9520c1c7d06', '23000417'),
('13de5908-bb20-4570-9b10-85d59bdd9a99', '23000418'),
('82b5147b-3572-4750-acac-722d1295b73f', '23000418'),
('94606cec-d94a-45fd-ad2b-15858b15d6f1', '23000419'),
('0d02a456-b5c7-4377-84c7-41848c84e5c3', '23000420'),
('8f9c4c3a-759f-47fc-bc26-b644e7aca227', '23000420'),
('8f9c4c3a-759f-47fc-bc26-b644e7aca227', '23000421'),
('eba847f0-50ae-480d-9c8b-7ac63a320060', '23000423'),
('47e96261-1497-446b-92e1-eb279241f4c8', '23000424'),
('d19e9e66-dbe1-4343-9d46-8062d76a0705', '23000424'),
('13de5908-bb20-4570-9b10-85d59bdd9a99', '23000425'),
('13de5908-bb20-4570-9b10-85d59bdd9a99', '40311017');

-- --------------------------------------------------------

--
-- Table structure for table `VehicleInfo`
--

CREATE TABLE `VehicleInfo` (
  `vehicleLicence` varchar(10) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `vehicleTypeId` varchar(191) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `brand` varchar(20) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `model` varchar(40) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `registerDate` date NOT NULL,
  `status` tinyint(1) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `VehicleInfo`
--

INSERT INTO `VehicleInfo` (`vehicleLicence`, `vehicleTypeId`, `brand`, `model`, `registerDate`, `status`) VALUES
('1AA1111', '101', 'MA6', 'f', '2022-01-01', 0),
('1กฎ1224', '102', 'ISUZI', 'FFR 210', '2022-01-01', 0),
('1ยน2556', '101', 'mofd', 'y', '2023-05-28', 1),
('4ฟห4452', '101', 'ISUZI', 'SLR 300', '2022-01-01', 1),
('5กย1990', '301', 'ISUZI', 'SPS 270', '2022-01-01', 0),
('6หก8666', '101', 'ISUZI', 'SLR 300', '2022-01-01', 0),
('7ษบ7552', '103', 'HINAO', 'GXYZ 77N', '2022-01-01', 0),
('กข7360', '102', 'ISUZY', 'FFR 190', '2022-01-01', 0),
('กษ320', '201', 'HONDE', 'VALVE 100', '2022-01-01', 1),
('จน804', '202', 'YAMA5', 'RTX 100', '2022-01-01', 0),
('ษบ7623', '103', 'HINAO', 'GXYZ 76N', '2022-01-01', 0);

-- --------------------------------------------------------

--
-- Table structure for table `VehicleType`
--

CREATE TABLE `VehicleType` (
  `vehicleTypeId` varchar(3) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `vehicleTypeN` varchar(40) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `VehicleType`
--

INSERT INTO `VehicleType` (`vehicleTypeId`, `vehicleTypeN`) VALUES
('101', '4 wheel truck'),
('102', '6 wheel truck'),
('103', '10 wheel truck'),
('201', '2 wheel motorcycle'),
('202', 'adjusted motorcycle'),
('301', 'boat'),
('401', 'Helicopter');

-- --------------------------------------------------------

--
-- Table structure for table `_prisma_migrations`
--

CREATE TABLE `_prisma_migrations` (
  `id` varchar(36) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `checksum` varchar(64) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `finished_at` datetime(3) DEFAULT NULL,
  `migration_name` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `logs` text CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci,
  `rolled_back_at` datetime(3) DEFAULT NULL,
  `started_at` datetime(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
  `applied_steps_count` int UNSIGNED NOT NULL DEFAULT '0'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `_prisma_migrations`
--

INSERT INTO `_prisma_migrations` (`id`, `checksum`, `finished_at`, `migration_name`, `logs`, `rolled_back_at`, `started_at`, `applied_steps_count`) VALUES
('3cc5b9d6-6bc8-4be3-9e40-fe6c33aa9f7a', 'd76ea184bd89a23bac40862e577be57f2e27f3a407dde29443a913c70aa800c9', '2023-05-25 07:06:33.671', '20230525070633_init', NULL, NULL, '2023-05-25 07:06:33.606', 1),
('f6943564-3373-4f38-82b5-9d69ce5b126c', '62557e4249497c8326bf945ddd48f4e180d2c26515a566909cce1f0318b8eeb2', '2023-05-25 03:30:09.835', '20230525033008_init', NULL, NULL, '2023-05-25 03:30:08.249', 1);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `Billing`
--
ALTER TABLE `Billing`
  ADD PRIMARY KEY (`billingId`,`billTimestamp`),
  ADD KEY `Billing_invoiceId_fkey` (`invoiceId`),
  ADD KEY `Billing_paymentMethodId_fkey` (`paymentMethodId`);

--
-- Indexes for table `Cart`
--
ALTER TABLE `Cart`
  ADD PRIMARY KEY (`cartNo`,`customerId`,`productId`),
  ADD UNIQUE KEY `Cart_cartNo_key` (`cartNo`),
  ADD KEY `Cart_customerId_fkey` (`customerId`),
  ADD KEY `Cart_productId_fkey` (`productId`);

--
-- Indexes for table `Category`
--
ALTER TABLE `Category`
  ADD PRIMARY KEY (`categoryId`);

--
-- Indexes for table `CategoryProblem`
--
ALTER TABLE `CategoryProblem`
  ADD PRIMARY KEY (`categoryProblemId`),
  ADD KEY `CategoryProblem_positionId_fkey` (`positionId`);

--
-- Indexes for table `Customer`
--
ALTER TABLE `Customer`
  ADD PRIMARY KEY (`customerId`),
  ADD UNIQUE KEY `Customer_tel_key` (`tel`),
  ADD UNIQUE KEY `Customer_email_key` (`email`);

--
-- Indexes for table `Invoice`
--
ALTER TABLE `Invoice`
  ADD PRIMARY KEY (`invoiceId`),
  ADD KEY `Invoice_paymentTypeId_fkey` (`paymentTypeId`),
  ADD KEY `Invoice_orderId_fkey` (`orderId`);

--
-- Indexes for table `Issue`
--
ALTER TABLE `Issue`
  ADD PRIMARY KEY (`issueId`),
  ADD KEY `Issue_customerId_fkey` (`customerId`),
  ADD KEY `Issue_orderId_fkey` (`orderId`),
  ADD KEY `Issue_staffId_fkey` (`staffId`),
  ADD KEY `Issue_categoryProblemId_fkey` (`categoryProblemId`);

--
-- Indexes for table `Item`
--
ALTER TABLE `Item`
  ADD PRIMARY KEY (`itemId`),
  ADD KEY `Item_productId_fkey` (`productId`),
  ADD KEY `Item_itemStatusId_fkey` (`itemStatusId`);

--
-- Indexes for table `ItemStatus`
--
ALTER TABLE `ItemStatus`
  ADD PRIMARY KEY (`itemStatusId`);

--
-- Indexes for table `Order`
--
ALTER TABLE `Order`
  ADD PRIMARY KEY (`orderId`),
  ADD KEY `Order_customerId_fkey` (`customerId`),
  ADD KEY `Order_statusCode_fkey` (`statusCode`);

--
-- Indexes for table `OrderCart`
--
ALTER TABLE `OrderCart`
  ADD PRIMARY KEY (`orderId`,`cartNo`),
  ADD UNIQUE KEY `OrderCart_cartNo_key` (`cartNo`);

--
-- Indexes for table `OrderPromotion`
--
ALTER TABLE `OrderPromotion`
  ADD PRIMARY KEY (`promotionCode`,`orderId`),
  ADD KEY `OrderPromotion_orderId_fkey` (`orderId`);

--
-- Indexes for table `OrderStatus`
--
ALTER TABLE `OrderStatus`
  ADD PRIMARY KEY (`statusCode`);

--
-- Indexes for table `OrderTransport`
--
ALTER TABLE `OrderTransport`
  ADD PRIMARY KEY (`orderId`,`timeAssign`),
  ADD KEY `OrderTransport_vehicleLicense_fkey` (`vehicleLicense`),
  ADD KEY `OrderTransport_staffId_fkey` (`staffId`);

--
-- Indexes for table `PaymentMethod`
--
ALTER TABLE `PaymentMethod`
  ADD PRIMARY KEY (`paymentMethodId`);

--
-- Indexes for table `PaymentType`
--
ALTER TABLE `PaymentType`
  ADD PRIMARY KEY (`paymentTypeId`);

--
-- Indexes for table `Position`
--
ALTER TABLE `Position`
  ADD PRIMARY KEY (`positionId`);

--
-- Indexes for table `Product`
--
ALTER TABLE `Product`
  ADD PRIMARY KEY (`productId`),
  ADD KEY `Product_categoryId_fkey` (`categoryId`);

--
-- Indexes for table `Promotion`
--
ALTER TABLE `Promotion`
  ADD PRIMARY KEY (`promotionCode`);

--
-- Indexes for table `StaffInfo`
--
ALTER TABLE `StaffInfo`
  ADD PRIMARY KEY (`staffId`),
  ADD KEY `StaffInfo_positionId_fkey` (`positionId`);

--
-- Indexes for table `SubOrder`
--
ALTER TABLE `SubOrder`
  ADD PRIMARY KEY (`orderId`,`itemId`),
  ADD KEY `SubOrder_itemId_fkey` (`itemId`);

--
-- Indexes for table `VehicleInfo`
--
ALTER TABLE `VehicleInfo`
  ADD PRIMARY KEY (`vehicleLicence`),
  ADD KEY `VehicleInfo_vehicleTypeId_fkey` (`vehicleTypeId`);

--
-- Indexes for table `VehicleType`
--
ALTER TABLE `VehicleType`
  ADD PRIMARY KEY (`vehicleTypeId`);

--
-- Indexes for table `_prisma_migrations`
--
ALTER TABLE `_prisma_migrations`
  ADD PRIMARY KEY (`id`);

--
-- Constraints for dumped tables
--

--
-- Constraints for table `Billing`
--
ALTER TABLE `Billing`
  ADD CONSTRAINT `Billing_invoiceId_fkey` FOREIGN KEY (`invoiceId`) REFERENCES `Invoice` (`invoiceId`) ON DELETE RESTRICT ON UPDATE CASCADE,
  ADD CONSTRAINT `Billing_paymentMethodId_fkey` FOREIGN KEY (`paymentMethodId`) REFERENCES `PaymentMethod` (`paymentMethodId`) ON DELETE RESTRICT ON UPDATE CASCADE;

--
-- Constraints for table `Cart`
--
ALTER TABLE `Cart`
  ADD CONSTRAINT `Cart_customerId_fkey` FOREIGN KEY (`customerId`) REFERENCES `Customer` (`customerId`) ON DELETE RESTRICT ON UPDATE CASCADE,
  ADD CONSTRAINT `Cart_productId_fkey` FOREIGN KEY (`productId`) REFERENCES `Product` (`productId`) ON DELETE RESTRICT ON UPDATE CASCADE;

--
-- Constraints for table `CategoryProblem`
--
ALTER TABLE `CategoryProblem`
  ADD CONSTRAINT `CategoryProblem_positionId_fkey` FOREIGN KEY (`positionId`) REFERENCES `Position` (`positionId`) ON DELETE RESTRICT ON UPDATE CASCADE;

--
-- Constraints for table `Invoice`
--
ALTER TABLE `Invoice`
  ADD CONSTRAINT `Invoice_orderId_fkey` FOREIGN KEY (`orderId`) REFERENCES `Order` (`orderId`) ON DELETE RESTRICT ON UPDATE CASCADE,
  ADD CONSTRAINT `Invoice_paymentTypeId_fkey` FOREIGN KEY (`paymentTypeId`) REFERENCES `PaymentType` (`paymentTypeId`) ON DELETE RESTRICT ON UPDATE CASCADE;

--
-- Constraints for table `Issue`
--
ALTER TABLE `Issue`
  ADD CONSTRAINT `Issue_categoryProblemId_fkey` FOREIGN KEY (`categoryProblemId`) REFERENCES `CategoryProblem` (`categoryProblemId`) ON DELETE RESTRICT ON UPDATE CASCADE,
  ADD CONSTRAINT `Issue_customerId_fkey` FOREIGN KEY (`customerId`) REFERENCES `Customer` (`customerId`) ON DELETE RESTRICT ON UPDATE CASCADE,
  ADD CONSTRAINT `Issue_orderId_fkey` FOREIGN KEY (`orderId`) REFERENCES `Order` (`orderId`) ON DELETE SET NULL ON UPDATE CASCADE,
  ADD CONSTRAINT `Issue_staffId_fkey` FOREIGN KEY (`staffId`) REFERENCES `StaffInfo` (`staffId`) ON DELETE RESTRICT ON UPDATE CASCADE;

--
-- Constraints for table `Item`
--
ALTER TABLE `Item`
  ADD CONSTRAINT `Item_itemStatusId_fkey` FOREIGN KEY (`itemStatusId`) REFERENCES `ItemStatus` (`itemStatusId`) ON DELETE RESTRICT ON UPDATE CASCADE,
  ADD CONSTRAINT `Item_productId_fkey` FOREIGN KEY (`productId`) REFERENCES `Product` (`productId`) ON DELETE RESTRICT ON UPDATE CASCADE;

--
-- Constraints for table `Order`
--
ALTER TABLE `Order`
  ADD CONSTRAINT `Order_customerId_fkey` FOREIGN KEY (`customerId`) REFERENCES `Customer` (`customerId`) ON DELETE RESTRICT ON UPDATE CASCADE,
  ADD CONSTRAINT `Order_statusCode_fkey` FOREIGN KEY (`statusCode`) REFERENCES `OrderStatus` (`statusCode`) ON DELETE RESTRICT ON UPDATE CASCADE;

--
-- Constraints for table `OrderCart`
--
ALTER TABLE `OrderCart`
  ADD CONSTRAINT `OrderCart_cartNo_fkey` FOREIGN KEY (`cartNo`) REFERENCES `Cart` (`cartNo`) ON DELETE RESTRICT ON UPDATE CASCADE,
  ADD CONSTRAINT `OrderCart_orderId_fkey` FOREIGN KEY (`orderId`) REFERENCES `Order` (`orderId`) ON DELETE RESTRICT ON UPDATE CASCADE;

--
-- Constraints for table `OrderPromotion`
--
ALTER TABLE `OrderPromotion`
  ADD CONSTRAINT `OrderPromotion_orderId_fkey` FOREIGN KEY (`orderId`) REFERENCES `Order` (`orderId`) ON DELETE RESTRICT ON UPDATE CASCADE,
  ADD CONSTRAINT `OrderPromotion_promotionCode_fkey` FOREIGN KEY (`promotionCode`) REFERENCES `Promotion` (`promotionCode`) ON DELETE RESTRICT ON UPDATE CASCADE;

--
-- Constraints for table `OrderTransport`
--
ALTER TABLE `OrderTransport`
  ADD CONSTRAINT `OrderTransport_orderId_fkey` FOREIGN KEY (`orderId`) REFERENCES `Order` (`orderId`) ON DELETE RESTRICT ON UPDATE CASCADE,
  ADD CONSTRAINT `OrderTransport_staffId_fkey` FOREIGN KEY (`staffId`) REFERENCES `StaffInfo` (`staffId`) ON DELETE RESTRICT ON UPDATE CASCADE,
  ADD CONSTRAINT `OrderTransport_vehicleLicense_fkey` FOREIGN KEY (`vehicleLicense`) REFERENCES `VehicleInfo` (`vehicleLicence`) ON DELETE RESTRICT ON UPDATE CASCADE;

--
-- Constraints for table `Product`
--
ALTER TABLE `Product`
  ADD CONSTRAINT `Product_categoryId_fkey` FOREIGN KEY (`categoryId`) REFERENCES `Category` (`categoryId`) ON DELETE RESTRICT ON UPDATE CASCADE;

--
-- Constraints for table `StaffInfo`
--
ALTER TABLE `StaffInfo`
  ADD CONSTRAINT `StaffInfo_positionId_fkey` FOREIGN KEY (`positionId`) REFERENCES `Position` (`positionId`) ON DELETE RESTRICT ON UPDATE CASCADE;

--
-- Constraints for table `SubOrder`
--
ALTER TABLE `SubOrder`
  ADD CONSTRAINT `SubOrder_itemId_fkey` FOREIGN KEY (`itemId`) REFERENCES `Item` (`itemId`) ON DELETE RESTRICT ON UPDATE CASCADE,
  ADD CONSTRAINT `SubOrder_orderId_fkey` FOREIGN KEY (`orderId`) REFERENCES `Order` (`orderId`) ON DELETE RESTRICT ON UPDATE CASCADE;

--
-- Constraints for table `VehicleInfo`
--
ALTER TABLE `VehicleInfo`
  ADD CONSTRAINT `VehicleInfo_vehicleTypeId_fkey` FOREIGN KEY (`vehicleTypeId`) REFERENCES `VehicleType` (`vehicleTypeId`) ON DELETE RESTRICT ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;

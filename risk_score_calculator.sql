/*
 Navicat Premium Data Transfer

 Source Server         : localmysql8
 Source Server Type    : MySQL
 Source Server Version : 80036 (8.0.36)
 Source Host           : localhost:13306
 Source Schema         : risk_score_calculator

 Target Server Type    : MySQL
 Target Server Version : 80036 (8.0.36)
 File Encoding         : 65001

 Date: 17/08/2024 00:09:58
*/

SET NAMES utf8mb4;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
-- Table structure for consequence
-- ----------------------------
DROP TABLE IF EXISTS `consequence`;
CREATE TABLE `consequence`  (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NULL DEFAULT NULL,
  `alias` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NULL DEFAULT NULL,
  `weight` double NULL DEFAULT 1,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 7 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_unicode_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of consequence
-- ----------------------------
INSERT INTO `consequence` VALUES (1, 'First Aid Treatment', 'Noticeable', 7);
INSERT INTO `consequence` VALUES (2, 'Casuality Treatment', 'Important', 15);
INSERT INTO `consequence` VALUES (3, 'Serious Injury', 'Serious', 30);
INSERT INTO `consequence` VALUES (4, 'Fatality', 'Very Serious', 50);
INSERT INTO `consequence` VALUES (5, 'Multiple Fatalities', 'Disaster', 75);
INSERT INTO `consequence` VALUES (6, 'Numerous Fatalities', 'Catastrophe', 100);

-- ----------------------------
-- Table structure for consequences
-- ----------------------------
DROP TABLE IF EXISTS `consequences`;
CREATE TABLE `consequences`  (
  `name` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NULL DEFAULT NULL,
  `alias` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NULL DEFAULT NULL,
  `weight` double NOT NULL,
  `id` int NOT NULL AUTO_INCREMENT,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB CHARACTER SET = utf8mb4 COLLATE = utf8mb4_bin ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of consequences
-- ----------------------------

-- ----------------------------
-- Table structure for exposure
-- ----------------------------
DROP TABLE IF EXISTS `exposure`;
CREATE TABLE `exposure`  (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NULL DEFAULT NULL,
  `weight` double NULL DEFAULT 1,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 7 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_unicode_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of exposure
-- ----------------------------
INSERT INTO `exposure` VALUES (1, 'Continuos', 1);
INSERT INTO `exposure` VALUES (2, 'Frequent', 0.8);
INSERT INTO `exposure` VALUES (3, 'Occasional', 0.6);
INSERT INTO `exposure` VALUES (4, 'Infrequent', 0.4);
INSERT INTO `exposure` VALUES (5, 'Rare', 0.2);
INSERT INTO `exposure` VALUES (6, 'Very Rare', 0.1);

-- ----------------------------
-- Table structure for exposures
-- ----------------------------
DROP TABLE IF EXISTS `exposures`;
CREATE TABLE `exposures`  (
  `name` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NULL DEFAULT NULL,
  `weight` double NOT NULL,
  `id` int NOT NULL AUTO_INCREMENT,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB CHARACTER SET = utf8mb4 COLLATE = utf8mb4_bin ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of exposures
-- ----------------------------

-- ----------------------------
-- Table structure for probabilities
-- ----------------------------
DROP TABLE IF EXISTS `probabilities`;
CREATE TABLE `probabilities`  (
  `name` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NULL DEFAULT NULL,
  `weight` double NOT NULL,
  `id` int NOT NULL AUTO_INCREMENT,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB CHARACTER SET = utf8mb4 COLLATE = utf8mb4_bin ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of probabilities
-- ----------------------------

-- ----------------------------
-- Table structure for probability
-- ----------------------------
DROP TABLE IF EXISTS `probability`;
CREATE TABLE `probability`  (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NULL DEFAULT NULL,
  `weight` double NULL DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 7 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_unicode_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of probability
-- ----------------------------
INSERT INTO `probability` VALUES (1, 'Practically Impossible', 0.1);
INSERT INTO `probability` VALUES (2, 'Conceivable(but very unlikely)', 1.5);
INSERT INTO `probability` VALUES (3, 'Remotely possible', 4);
INSERT INTO `probability` VALUES (4, 'Unusual but possible', 6);
INSERT INTO `probability` VALUES (5, 'Quite possible', 9.4);
INSERT INTO `probability` VALUES (6, 'Almost certain', 20);

SET FOREIGN_KEY_CHECKS = 1;

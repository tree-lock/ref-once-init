import Mock from "mockjs";

Mock.mock("/example", "get", Mock.Random.int(0, 10000));

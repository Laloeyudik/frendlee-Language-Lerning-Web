import Kosakata from "../models/kosaKata.js";
import { Op } from "sequelize";

export const getkosaKata = async (req, res) => {
  const page = parseInt(req.query.page) || 0;
  const limit = parseInt(req.query.limit) || 10;
  const search = req.query.search_query || "";
  const offset = limit * page;
  const totalRows = await Kosakata.count({
    where: {
      [Op.or]: [
        {
          arti: {
            [Op.like]: "%" + search + "%",
          },
        },
        {
          kategori: {
            [Op.like]: "%" + search + "%",
          },
        },
      ],
    },
  });
  const totalPage = Math.ceil(totalRows / limit);
  const result = await Kosakata.findAll({
    where: {
      [Op.or]: [
        {
          arti: {
            [Op.like]: "%" + search + "%",
          },
        },
        {
          kategori: {
            [Op.like]: "%" + search + "%",
          },
        },
        {
          kata: {
            [Op.like]: "%" + search + "%",
          },
        },
      ],
    },
    offset: offset,
    limit: limit,
    order: [["id", "ASC"]],
  });
  res.json({
    result: result,
    page: page,
    limit: limit,
    totalRows: totalRows,
    totalPage: totalPage,
  });
};

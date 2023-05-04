import dataSource from "../utils";
import {Request, Response} from "express";

import { Wilder } from "../entity/Wilder";
import { Skill } from "../entity/Skill";
import { Grade } from "../entity/Grade";

const gradeController = {
  read: async (eq: Request, res: Response) => {
    try {
      const gradesFromDB = await dataSource.getRepository(Grade).find();
      res.send(gradesFromDB);
    } catch (error) {
      console.log(error);
      res.send("Error while reading grades");
    }
  },
  create: async (req: Request, res: Response) => {
    try {
      const wilderFromDB = await dataSource
        .getRepository(Wilder)
        .findOneBy({ name: req.body.wilder });
      console.log("Wilder from DB", wilderFromDB);
      const skillFromDB = await dataSource
        .getRepository(Skill)
        .findOneBy({ name: req.body.skill });
      console.log("Skill from DB", skillFromDB);
      const reqBodyGradeType: number = req.body.grade
      if(wilderFromDB !=null && skillFromDB != null)
      await dataSource.getRepository(Grade).save({
        grade: reqBodyGradeType,
        skill: skillFromDB,
        wilder: wilderFromDB,
      });
      res.send("Created Grade");
    } catch (error) {
      console.log(error);
      res.send("Error while creating grade");
    }
  },
};

export default gradeController;
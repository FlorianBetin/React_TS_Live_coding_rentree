import dataSource from "../utils";
import {Request, Response} from "express";

import { Wilder } from "../entity/Wilder";
import { Skill } from "../entity/Skill";
import { Grade } from "../entity/Grade";

const wilderController = {
  create: async (req: Request, res: Response) => {
    try {
      await dataSource.getRepository(Wilder).save(req.body);
      res.send("Created wilder");
    } catch (error) {
      console.log(error);
      res.send("Error while creating wilder");
    }
  },
  read: async (req: Request, res: Response) => {
    try {
      
      //récupère tous les grades
      const grades = await dataSource.getRepository(Grade).find({relations: {skill: true, wilder: true}});
      console.log(grades);

      //On récupère tous les wilders
      const wilders = await dataSource.getRepository(Wilder).find();
      console.log("wilders", wilders);

      //ci-dessous, on récupère un tableau wilder, 
      //et on boucle sur chaque element avec map, on va crée une variable, 
      //puis un filtre pour trier suelement les gardes qui nous inetresse, 
      //puis avec filter on verifie que la garde wilder.id 
      //correspond à l'id du wilder. Il ne restera donc plus que les 
      //grades correspondant à l'id du wilder.
      const data = wilders.map((wilder) => {
        const wilderGrades = grades.filter(
          (grade) => grade.wilder.id === wilder.id
        );
        const wilderGradesLean = wilderGrades.map((el) => {
          return { title: el.skill.name, votes: el.grade };
        });
        const result = {
          ...wilder, //permet d'ajouter toute les informations du wilder non recherchés + les skills en dessous
          skills: wilderGradesLean,
        };
        console.log(result);
        return result;
      });
      res.send(data);
    } catch (error) {
      console.log(error);
      res.send("error while querying wilders");
    }
  },
  delete: async (req: Request, res: Response) => {
    try {
      await dataSource.getRepository(Grade).delete(req.params.id)
      await dataSource.getRepository(Wilder).delete(req.params.id);
      res.send("deleted");
    } catch (error) {
      console.log(error);
      res.send("error while deleting wilder");
    }
  },
  update: async (req: Request, res: Response) => {
    try {
      await dataSource
        .getRepository(Wilder)
        .update(req.body.id, req.body.newData);
      res.send("Updated");
    } catch (error) {
      console.log(error);
      res.send("error while updating wilder");
    }
  },
  // addSkill: async (req: Request, res: Response) => {
  //   try {
  //     const wilderToUpdate = await dataSource
  //       .getRepository(Wilder)
  //       .findOneBy({ name: req.body.wilderName });
  //     console.log(wilderToUpdate);
  //     const skillToAdd = await dataSource
  //       .getRepository(Skill)
  //       .findOneBy({ name: req.body.skillName });
  //     wilderToUpdate.skills = [...wilderToUpdate.skills, skillToAdd];
  //     await dataSource.getRepository(Wilder).save(wilderToUpdate);
  //     res.send("Skill added to wilder");
  //   } catch (err) {
  //     console.log(err);
  //     res.send("error while adding skill to wilder");
  //   }
  // },
};

export default wilderController;
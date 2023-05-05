export interface ISkills {
    title: string
    votes: number
  }


export interface IWildersArrayObjects {
    id: number
    name: string
    city: string
    skills: ISkills[]
    wilderId: number
   }


   export interface IWilderProps {
    name: string;
    city: string;
    wilderId: number;
    skills: ISkills[];
}


export class CreateVacancyDto {
  titile: string;
  position: string;
  type: string;
  location: string;
  remote: boolean;
  department: string;
  numVacancies: number;
  onlyWomenHiring: boolean;
  workhours: {
    startTime: number;
    startTimeMeridiem: string;
    endTime: number;
    endTimeMeridiem: string;
  };
  salaryRange: {
    type: string;
    start: number;
    end: number;
    negotiable: boolean;
  };
  negotiable: boolean;
  equity: { start: number; end: number };
  immediateJoining: boolean;
  skills: [{ skillId: string; skill: string }];
  textHTML: string;
  questions: [{ text: string }];
  public: boolean;
  createdBy: string;
  orgId: string;
}

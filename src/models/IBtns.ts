type Btn = {
   name: string;
   label: string;
   className?: string;
};

type SubSectionType = {
   markColor: Btn[];
   status?: Btn[];
};

export interface IBtns {
   addTask: SubSectionType;
   filtersTask: SubSectionType;
   selectionTask: SubSectionType;
}

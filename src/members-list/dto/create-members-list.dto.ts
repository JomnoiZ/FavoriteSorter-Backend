interface Member {
  name: string;
  image: string;
}

interface RankedMember {
  data: Member;
  rank: number;
}

interface List {
  list: number[];
}

export class CreateMembersListDto {
  title: string;
  list: Member[];
  rankedList: RankedMember[];
  uncomparedMembers: List[];
  winningTable: List[];
  userId: string;
}

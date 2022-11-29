import { ModelInit, MutableModel, __modelMeta__, ManagedIdentifier } from "@aws-amplify/datastore";

export enum RankEum {
  AB = "AB",
  AMN = "AMN",
  A1_C = "A1C",
  SRA = "SRA",
  SSGT = "SSGT",
  TSGT = "TSGT",
  MSGT = "MSGT",
  SMSGT = "SMSGT",
  CMSGT = "CMSGT",
  CCM = "CCM",
  CMSAF = "CMSAF",
  SNDLT = "SNDLT",
  FSTLT = "FSTLT",
  MAJ = "MAJ",
  LTCO = "LTCO",
  COL = "COL",
  BRIG = "BRIG",
  MAJG = "MAJG",
  LTGE = "LTGE",
  GEN = "GEN",
  GAF = "GAF"
}



type EagerServiceman = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Serviceman, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly rank: RankEum | keyof typeof RankEum;
  readonly last: string;
  readonly first: string;
  readonly position: string;
  readonly afsc: string;
  readonly status: number;
  readonly email: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyServiceman = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Serviceman, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly rank: RankEum | keyof typeof RankEum;
  readonly last: string;
  readonly first: string;
  readonly position: string;
  readonly afsc: string;
  readonly status: number;
  readonly email: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Serviceman = LazyLoading extends LazyLoadingDisabled ? EagerServiceman : LazyServiceman

export declare const Serviceman: (new (init: ModelInit<Serviceman>) => Serviceman) & {
  copyOf(source: Serviceman, mutator: (draft: MutableModel<Serviceman>) => MutableModel<Serviceman> | void): Serviceman;
}
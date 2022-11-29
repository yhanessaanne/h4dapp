import { ModelInit, MutableModel, __modelMeta__, ManagedIdentifier } from "@aws-amplify/datastore";
// @ts-ignore
import { LazyLoading, LazyLoadingDisabled, AsyncItem } from "@aws-amplify/datastore";

export enum TrainingStatusEnum {
  DONE = "DONE",
  MISSING = "MISSING"
}

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



type EagerTrainingCompletionStatus = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<TrainingCompletionStatus, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly DateCompleted?: string | null;
  readonly DateDue?: string | null;
  readonly Status?: TrainingStatusEnum | keyof typeof TrainingStatusEnum | null;
  readonly Ancillary?: Ancillary | null;
  readonly Serviceman?: Serviceman | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly trainingCompletionStatusAncillaryId?: string | null;
  readonly trainingCompletionStatusServicemanId?: string | null;
}

type LazyTrainingCompletionStatus = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<TrainingCompletionStatus, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly DateCompleted?: string | null;
  readonly DateDue?: string | null;
  readonly Status?: TrainingStatusEnum | keyof typeof TrainingStatusEnum | null;
  readonly Ancillary: AsyncItem<Ancillary | undefined>;
  readonly Serviceman: AsyncItem<Serviceman | undefined>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly trainingCompletionStatusAncillaryId?: string | null;
  readonly trainingCompletionStatusServicemanId?: string | null;
}

export declare type TrainingCompletionStatus = LazyLoading extends LazyLoadingDisabled ? EagerTrainingCompletionStatus : LazyTrainingCompletionStatus

export declare const TrainingCompletionStatus: (new (init: ModelInit<TrainingCompletionStatus>) => TrainingCompletionStatus) & {
  copyOf(source: TrainingCompletionStatus, mutator: (draft: MutableModel<TrainingCompletionStatus>) => MutableModel<TrainingCompletionStatus> | void): TrainingCompletionStatus;
}

type EagerAncillary = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Ancillary, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly AncillaryTrainingName: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyAncillary = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Ancillary, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly AncillaryTrainingName: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Ancillary = LazyLoading extends LazyLoadingDisabled ? EagerAncillary : LazyAncillary

export declare const Ancillary: (new (init: ModelInit<Ancillary>) => Ancillary) & {
  copyOf(source: Ancillary, mutator: (draft: MutableModel<Ancillary>) => MutableModel<Ancillary> | void): Ancillary;
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
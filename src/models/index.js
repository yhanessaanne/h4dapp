// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';

const RankEum = {
  "AB": "AB",
  "AMN": "AMN",
  "A1_C": "A1C",
  "SRA": "SRA",
  "SSGT": "SSGT",
  "TSGT": "TSGT",
  "MSGT": "MSGT",
  "SMSGT": "SMSGT",
  "CMSGT": "CMSGT",
  "CCM": "CCM",
  "CMSAF": "CMSAF",
  "SNDLT": "SNDLT",
  "FSTLT": "FSTLT",
  "MAJ": "MAJ",
  "LTCO": "LTCO",
  "COL": "COL",
  "BRIG": "BRIG",
  "MAJG": "MAJG",
  "LTGE": "LTGE",
  "GEN": "GEN",
  "GAF": "GAF"
};

const { Serviceman } = initSchema(schema);

export {
  Serviceman,
  RankEum
};